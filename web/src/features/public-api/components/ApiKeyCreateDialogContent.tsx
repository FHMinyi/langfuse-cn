import React from "react";
import { useTranslation } from "react-i18next";
import { Button } from "@/src/components/ui/button";
import {
  DialogBody,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/src/components/ui/dialog";
import { Input } from "@/src/components/ui/input";
import { Label } from "@/src/components/ui/label";
import { ApiKeyDetailContent } from "@/src/features/public-api/components/ApiKeyDetailContent";

type ApiKeyScope = "project" | "organization";

export type ApiKeyCreateDialogContentProps =
  | {
      scope: ApiKeyScope;
      type: "form";
      note: string;
      onNoteChange: (value: string) => void;
      onSubmit: () => void;
      isPending?: boolean;
    }
  | (Omit<
      React.ComponentProps<typeof ApiKeyDetailContent>,
      "showMcpSection"
    > & {
      type: "detail";
    });

export function ApiKeyCreateDialogContent(
  props: ApiKeyCreateDialogContentProps,
) {
  const { scope } = props;

  if (props.type === "detail") {
  const { t } = useTranslation("api");

    const { secretKey, publicKey, baseUrl } = props;

    return (
      <DialogContent onPointerDownOutside={(e) => e.preventDefault()}>
        <DialogHeader>
          <DialogTitle>{t("apiKey.apiKeysTitle")}</DialogTitle>
        </DialogHeader>
        <DialogBody>
          <ApiKeyDetailContent
            scope={scope}
            secretKey={secretKey}
            publicKey={publicKey}
            baseUrl={baseUrl}
            showMcpSection={true}
          />
        </DialogBody>
      </DialogContent>
    );
  }

  const { note, onNoteChange, onSubmit, isPending } = props;

  return (
    <DialogContent onPointerDownOutside={(e) => e.preventDefault()}>
      <DialogHeader>
        <DialogTitle>{t("apiKey.createTitle")}</DialogTitle>
      </DialogHeader>
      <DialogBody>
        <div className="space-y-4">
          <div>
            <Label htmlFor="note">{t("apiKey.noteOptional")}</Label>
            <Input
              id="note"
              placeholder={t("apiKey.notePlaceholder")}
              value={note}
              onChange={(e) => onNoteChange(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  onSubmit();
                }
              }}
              className="mt-1.5"
            />
          </div>
        </div>
      </DialogBody>
      <DialogFooter>
        <Button onClick={onSubmit} loading={isPending}>
          Create API keys
        </Button>
      </DialogFooter>
    </DialogContent>
  );
}
