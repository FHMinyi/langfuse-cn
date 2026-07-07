import { useTranslation } from "react-i18next";
import { Button } from "@/src/components/ui/button";
import { useHasProjectAccess } from "@/src/features/rbac/utils/checkProjectAccess";
import { UpsertModelFormDialog } from "@/src/features/models/components/UpsertModelFormDialog";
import { type GetModelResult } from "@/src/features/models/validation";

export const CloneModelButton = ({
  modelData,
  projectId,
}: {
  modelData: GetModelResult;
  projectId: string;
}) => {
  const { t } = useTranslation("model");

  const hasAccess = useHasProjectAccess({
    projectId,
    scope: "models:CUD",
  });

  return (
    <UpsertModelFormDialog {...{ modelData, projectId, action: "clone" }}>
      <Button
        variant="outline"
        disabled={!hasAccess}
        title={t("common.cloneModel")}
        className="flex items-center"
      >
        <span>Clone</span>
      </Button>
    </UpsertModelFormDialog>
  );
};
