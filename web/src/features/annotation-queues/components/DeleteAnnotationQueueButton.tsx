import { useTranslation } from "react-i18next";
import { DeleteButton } from "@/src/components/deleteButton";
import { api } from "@/src/utils/api";

type DeleteAnnotationQueueButtonProps = {
  projectId: string;
  queueId: string;
};

export const DeleteAnnotationQueueButton = ({
  projectId,
  queueId,
}: DeleteAnnotationQueueButtonProps) => {
  const { t } = useTranslation("workflow");

  const utils = api.useUtils();
  const deleteMutation = api.annotationQueues.delete.useMutation();

  return (
    <DeleteButton
      itemId={queueId}
      projectId={projectId}
      scope="annotationQueues:CUD"
      invalidateFunc={() => utils.annotationQueues.invalidate()}
      isTableAction
      icon
      variant="ghost"
      size="icon-xs"
      title={t("common.delete")}
      aria-label="delete"
      captureDeleteOpen={() => undefined}
      captureDeleteSuccess={() => undefined}
      customDeletePrompt="This action cannot be undone and removes queue items attached to this queue. Scores added while annotating in this queue will not be deleted."
      entityToDeleteName="annotation queue"
      executeDeleteMutation={async (onSuccess) => {
        await deleteMutation.mutateAsync({
          projectId,
          queueId,
        });
        onSuccess();
      }}
      isDeleteMutationLoading={deleteMutation.isPending}
    />
  );
};
