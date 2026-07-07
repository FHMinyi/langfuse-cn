import { useTranslation } from "react-i18next";
import Header from "@/src/components/layouts/header";
import { Alert, AlertDescription, AlertTitle } from "@/src/components/ui/alert";
import { AuditLogsTable } from "@/src/ee/features/audit-log-viewer/AuditLogsTable";
import { useHasEntitlement } from "@/src/features/entitlements/hooks";
import { useHasOrganizationAccess } from "@/src/features/rbac/utils/checkOrganizationAccess";

export function OrgAuditLogsSettingsPage(props: { orgId: string }) {
  const { t } = useTranslation("ee");

  const hasAccess = useHasOrganizationAccess({
    organizationId: props.orgId,
    scope: "auditLogs:read",
  });
  const hasEntitlement = useHasEntitlement("audit-logs");

  const body = !hasEntitlement ? (
    <p className="text-muted-foreground text-sm">
      Audit logs are an Enterprise feature. Upgrade your plan to track all
      changes made to your organization.
    </p>
  ) : !hasAccess ? (
    <Alert>
      <AlertTitle>{t("common.accessDenied")}</AlertTitle>
      <AlertDescription>
        Contact your organization administrator to request access.
      </AlertDescription>
    </Alert>
  ) : (
    <AuditLogsTable scope="organization" orgId={props.orgId} />
  );

  return (
    <>
      <Header title={t("audit.title")} />
      <p className="text-muted-foreground mb-2 text-sm">
        Track who changed what in your organization and when. Monitor
        organization settings, project creation/deletion, and membership changes
        over time.
      </p>
      {body}
    </>
  );
}
