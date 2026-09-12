import { QNumberPath, QStringPath, QBooleanPath, QDateTimeOffsetPath, QEntityPath, QEntityCollectionPath, QueryObject, QId, QCollectionPath, QNumberCollection, QEnumPath } from "@odata2ts/odata-query-objects";
import type { DTO_BudgetAlokasiId, DTO_BudgetAlokasiListId, DTO_BudgetLedgerId, DTO_BudgetAlokasiRemainingId, DTO_BudgetId, DTO_MasterBudgetsId, DTO_BudgetDetailId, DTO_BudgetsId, DTO_PPLHId, DTO_PPLDId, DTO_RETURId, DTO_RETURDId, DTO_RETURPId, DTO_UserTypeId, MasterRoleId, MasterOrganizationId, MasterJobPositionId, MasterJobLevelId, PermissionRefId, MasterPermissionId, AuthorId, BookId, DTO_FeatureId, DTO_ApprovalConfigId, DTO_ApprovalId, DTO_ApprovalConfigConditionId, DTO_StepApprovalId, DTO_AreaId, DTO_BookWithAuthorsId, DTO_BrandId, DTO_BudgetAlokasiDetailId, DTO_BudgetTopUpId, DTO_BudgetTopUpDetailId, DTO_BudgetTransferId, DTO_BudgetTransferDetailId, DTO_CoaId, DTO_DepartmenId, DTO_DistributorId, DTO_EmailTemplateId, DTO_EstimasiHargaBrandingId, DTO_EstimasiHargaBrandingListId, DTO_HeaderPplId, DTO_HeaderPplListId, DTO_HeaderProjekId, DTO_HeaderProjekListId, DTO_HeaderProjekBrandId, DTO_HeaderProjekDepartemenId, DTO_JenisPplId, DTO_KodeKlaimsId, DTO_JenisPplListId, DTO_JenisProgramId, DTO_JurnalLedgerId, DTO_KategoriPplId, DTO_MasterAccountId, DTO_MasterJabatanId, DTO_MasterKaryawanId, DTO_MasterKlaimId, DTO_MasterKlaimSyaratId, DTO_MasterOrgId, DTO_MasterJobPosId, DTO_MasterJobLvlId, DTO_MasterPermId, DTO_MasterRoleId, DTO_PermissionRefId, DTO_MasterUserId, DTO_UsersAttachmentId, DTO_MasterProvinsiId, DTO_MasterKotaId, DTO_MasterKecamatanId, DTO_MasterKelurahanId, DTO_OITMId, DTO_OutletId, DTO_OutletGroupId, DTO_PengajuanFormId, DTO_PengajuanFormOutletId, DTO_PengajuanFormAttachmentId, DTO_PengajuanFormProdukId, DTO_PengajuanFormDetailId, DTO_PostBudgetId, DTO_ChannelId, DTO_BudgetSapId, DTO_MasterBudgetId, DTO_PplAreaId, DTO_PplAttachmentId, DTO_PplBudgetAlokasiId, DTO_PplDetailProdukId, DTO_PplDetailsId, DTO_PplOutletId, DTO_ProdukId, DTO_ProdukCategoriId, DTO_ProvinsiId, DTO_KotaId, DTO_KecamatanId, DTO_KelurahanId, DTO_RegionId, DTO_ResiId, DTO_ResiOutletId, DTO_SalesId, DTO_SalesmanId, DTO_SettingsId, DTO_SkenarioBudgetId, DTO_SkenarioBudgetListId, DTO_MasterKeyVisualId, DTO_MasterOrgSlimId, DTO_UserAreaId, DTO_UserDistributorId, DTO_ResiDetailProdukId, DTO_ResiPicId, DTO_ResiAttachmentId, DtoHistoryTransaksiEstimasiId, DtoHistoryTransaksiRealiasasiId } from "./DefaultModel";
import { RoleTypeEnum, CompanyStatusType } from "./DefaultModel";
export declare class QDTO_BudgetAlokasi extends QueryObject {
    readonly Id: QNumberPath<number>;
    readonly IdHeaderProjek: QNumberPath<number>;
    readonly IdPostBudget: QNumberPath<number>;
    readonly MetodePembagian: QStringPath<string>;
    readonly KodeDept: QStringPath<string>;
    readonly NamaActivity: QStringPath<string>;
    readonly NamaActivity1: QStringPath<string>;
    readonly NamaActivity2: QStringPath<string>;
    readonly NilaiBudget: QNumberPath<number>;
    readonly SisaNilaiBudget: QNumberPath<number>;
    readonly IdSkenario: QNumberPath<number>;
    readonly Aktif: QBooleanPath<boolean>;
    readonly Tahun: QNumberPath<number>;
    readonly DibuatTanggal: QDateTimeOffsetPath<string>;
    readonly PostBudget: QEntityPath<QDTO_PostBudget>;
    readonly SkenarioBudget: QEntityPath<QDTO_SkenarioBudget>;
    readonly BudgetAlokasiDetail: QEntityCollectionPath<QDTO_BudgetAlokasiDetail>;
}
export declare const qDTO_BudgetAlokasi: QDTO_BudgetAlokasi;
export declare class QDTO_BudgetAlokasiId extends QId<DTO_BudgetAlokasiId> {
    private readonly params;
    getParams(): {};
}
export declare class QDTO_BudgetAlokasiList extends QueryObject {
    readonly Id: QNumberPath<number>;
    readonly IdHeaderProjek: QNumberPath<number>;
    readonly NomorDokumenProjek: QStringPath<string>;
    readonly IdPostBudget: QNumberPath<number>;
    readonly MetodePembagian: QStringPath<string>;
    readonly NilaiBudget: QNumberPath<number>;
    readonly SisaNilaiBudget: QNumberPath<number>;
    readonly IdSkenario: QNumberPath<number>;
    readonly Aktif: QBooleanPath<boolean>;
    readonly Tahun: QNumberPath<number>;
    readonly DibuatTanggal: QDateTimeOffsetPath<string>;
    readonly PostBudget: QEntityPath<QDTO_PostBudget>;
    readonly BudgetAlokasiDetail: QEntityCollectionPath<QDTO_BudgetAlokasiDetail>;
}
export declare const qDTO_BudgetAlokasiList: QDTO_BudgetAlokasiList;
export declare class QDTO_BudgetAlokasiListId extends QId<DTO_BudgetAlokasiListId> {
    private readonly params;
    getParams(): {};
}
export declare class QDTO_BudgetLedger extends QueryObject {
    readonly Id: QNumberPath<number>;
    readonly IdSkenario: QNumberPath<number>;
    readonly IdHeaderProject: QNumberPath<number>;
    readonly HeaderProjectNoDokumen: QStringPath<string>;
    readonly IdBudgetAlokasi: QNumberPath<number>;
    readonly IdBudgetAlokasiDetail: QNumberPath<number>;
    readonly IdHeadePpl: QNumberPath<number>;
    readonly HeaderPplNoDokumen: QStringPath<string>;
    readonly Bulan: QNumberPath<number>;
    readonly BudgetAlokasiNilaiBudget: QNumberPath<number>;
    readonly BudgetAlokasiSisaNilaiBudget: QNumberPath<number>;
    readonly Kredit: QNumberPath<number>;
    readonly Jenis: QStringPath<string>;
    readonly Debit: QNumberPath<number>;
    readonly DibuatTanggal: QDateTimeOffsetPath<string>;
    readonly UserId: QNumberPath<number>;
    readonly DibuatOleh: QStringPath<string>;
    readonly Keterangan: QStringPath<string>;
    readonly SkenarioBudget: QEntityPath<QDTO_SkenarioBudget>;
    readonly HeaderProjek: QEntityPath<QDTO_HeaderProjek>;
    readonly BudgetAlokasi: QEntityPath<QDTO_BudgetAlokasi>;
    readonly HeaderPpl: QEntityPath<QDTO_HeaderPpl>;
}
export declare const qDTO_BudgetLedger: QDTO_BudgetLedger;
export declare class QDTO_BudgetLedgerId extends QId<DTO_BudgetLedgerId> {
    private readonly params;
    getParams(): {};
}
export declare class QDTO_BudgetAlokasiRemaining extends QueryObject {
    readonly sid: QNumberPath<number>;
    readonly CoaId: QNumberPath<number>;
    readonly CoaNama: QStringPath<string>;
    readonly Tahun: QNumberPath<number>;
    readonly Bulan: QNumberPath<number>;
    readonly IdPostBudget: QNumberPath<number>;
    readonly NamaPostBudget: QStringPath<string>;
    readonly IdBudgetAlokasi: QNumberPath<number>;
    readonly Budget: QNumberPath<number>;
    readonly Actual: QNumberPath<number>;
    readonly Remaining: QNumberPath<number>;
}
export declare const qDTO_BudgetAlokasiRemaining: QDTO_BudgetAlokasiRemaining;
export declare class QDTO_BudgetAlokasiRemainingId extends QId<DTO_BudgetAlokasiRemainingId> {
    private readonly params;
    getParams(): {};
}
export declare class QDTO_Budget extends QueryObject {
    readonly Id: QNumberPath<number>;
    readonly YEAR: QNumberPath<number>;
    readonly CoaKode: QStringPath<string>;
    readonly CoaName: QStringPath<string>;
    readonly CoaId: QNumberPath<number>;
    readonly DeptKode: QStringPath<string>;
    readonly NamaBrand: QStringPath<string>;
    readonly NamaBudget: QStringPath<string>;
    readonly DeptNama: QStringPath<string>;
    readonly Jan: QNumberPath<number>;
    readonly Feb: QNumberPath<number>;
    readonly Mar: QNumberPath<number>;
    readonly Apr: QNumberPath<number>;
    readonly Mei: QNumberPath<number>;
    readonly Jun: QNumberPath<number>;
    readonly Jul: QNumberPath<number>;
    readonly Agt: QNumberPath<number>;
    readonly Sep: QNumberPath<number>;
    readonly Okt: QNumberPath<number>;
    readonly Nov: QNumberPath<number>;
    readonly Des: QNumberPath<number>;
    readonly Total: QNumberPath<number>;
    readonly Details: QEntityCollectionPath<QDTO_BudgetDetail>;
}
export declare const qDTO_Budget: QDTO_Budget;
export declare class QDTO_BudgetId extends QId<DTO_BudgetId> {
    private readonly params;
    getParams(): {};
}
export declare class QDTO_MasterBudgets extends QueryObject {
    readonly Id: QNumberPath<number>;
    readonly IdPostBudget: QNumberPath<number>;
    readonly Year: QNumberPath<number>;
    readonly Nama: QStringPath<string>;
    readonly Kode: QStringPath<string>;
    readonly DeptKode: QStringPath<string>;
    readonly IdBrand: QNumberPath<number>;
    readonly CoaId: QNumberPath<number>;
    readonly Bulan_1: QNumberPath<number>;
    readonly Bulan_2: QNumberPath<number>;
    readonly Bulan_3: QNumberPath<number>;
    readonly Bulan_4: QNumberPath<number>;
    readonly Bulan_5: QNumberPath<number>;
    readonly Bulan_6: QNumberPath<number>;
    readonly Bulan_7: QNumberPath<number>;
    readonly Bulan_8: QNumberPath<number>;
    readonly Bulan_9: QNumberPath<number>;
    readonly Bulan_10: QNumberPath<number>;
    readonly Bulan_11: QNumberPath<number>;
    readonly Bulan_12: QNumberPath<number>;
    readonly TotalBudget: QNumberPath<number>;
    readonly TotalBudgetSisa: QNumberPath<number>;
    readonly IsLocked: QBooleanPath<boolean>;
    readonly UserId: QNumberPath<number>;
    readonly DibuatTanggal: QDateTimeOffsetPath<string>;
    readonly DibuatOleh: QStringPath<string>;
    readonly MasterBudgetIds: QStringPath<string>;
    readonly MasterBudgetIdList: QCollectionPath<QNumberCollection<any>>;
}
export declare const qDTO_MasterBudgets: QDTO_MasterBudgets;
export declare class QDTO_MasterBudgetsId extends QId<DTO_MasterBudgetsId> {
    private readonly params;
    getParams(): {};
}
export declare class QDTO_BudgetDetail extends QueryObject {
    readonly IdBudgetSap: QNumberPath<number>;
    readonly IdBrand: QNumberPath<number>;
    readonly YEAR: QNumberPath<number>;
    readonly Bulan: QNumberPath<number>;
    readonly Kode: QStringPath<string>;
    readonly CoaNama: QStringPath<string>;
    readonly NamaPostBudget: QStringPath<string>;
    readonly BrandNama: QStringPath<string>;
    readonly NamaBudget: QStringPath<string>;
    readonly IdPostBudget: QNumberPath<number>;
    readonly IsLocked: QBooleanPath<boolean>;
    readonly DeptKode: QStringPath<string>;
    readonly Kategori: QStringPath<string>;
    readonly Channel: QStringPath<string>;
    readonly Deskripsi: QStringPath<string>;
    readonly IdMasterBudget: QNumberPath<number>;
    readonly BulanMasterBudget: QNumberPath<number>;
    readonly DeptCodeMasterBudget: QStringPath<string>;
    readonly YearMasterBudget: QNumberPath<number>;
    readonly BudgetMasterBudget: QNumberPath<number>;
}
export declare const qDTO_BudgetDetail: QDTO_BudgetDetail;
export declare class QDTO_BudgetDetailId extends QId<DTO_BudgetDetailId> {
    private readonly params;
    getParams(): {};
}
export declare class QDTO_Budgets extends QueryObject {
    readonly Id: QNumberPath<number>;
    readonly YEAR: QNumberPath<number>;
    readonly CoaKode: QStringPath<string>;
    readonly CoaName: QStringPath<string>;
    readonly CoaId: QNumberPath<number>;
    readonly DeptKode: QStringPath<string>;
    readonly NamaBrand: QStringPath<string>;
    readonly NamaBudget: QStringPath<string>;
    readonly DeptNama: QStringPath<string>;
    readonly Jan: QNumberPath<number>;
    readonly Feb: QNumberPath<number>;
    readonly Mar: QNumberPath<number>;
    readonly Apr: QNumberPath<number>;
    readonly Mei: QNumberPath<number>;
    readonly Jun: QNumberPath<number>;
    readonly Jul: QNumberPath<number>;
    readonly Agt: QNumberPath<number>;
    readonly Sep: QNumberPath<number>;
    readonly Okt: QNumberPath<number>;
    readonly Nov: QNumberPath<number>;
    readonly Des: QNumberPath<number>;
    readonly Total: QNumberPath<number>;
    readonly Details: QStringPath<string>;
}
export declare const qDTO_Budgets: QDTO_Budgets;
export declare class QDTO_BudgetsId extends QId<DTO_BudgetsId> {
    private readonly params;
    getParams(): {};
}
export declare class QDTO_PPLH extends QueryObject {
    readonly Id: QNumberPath<number>;
    readonly Name: QStringPath<string>;
    readonly PplDetails: QEntityCollectionPath<QDTO_PPLD>;
}
export declare const qDTO_PPLH: QDTO_PPLH;
export declare class QDTO_PPLHId extends QId<DTO_PPLHId> {
    private readonly params;
    getParams(): {};
}
export declare class QDTO_PPLD extends QueryObject {
    readonly Id: QNumberPath<number>;
    readonly IdHeader: QNumberPath<number>;
    readonly Name: QStringPath<string>;
}
export declare const qDTO_PPLD: QDTO_PPLD;
export declare class QDTO_PPLDId extends QId<DTO_PPLDId> {
    private readonly params;
    getParams(): {};
}
export declare class QDTO_RETUR extends QueryObject {
    readonly Id: QNumberPath<number>;
    readonly Name: QStringPath<string>;
    readonly ReturDetail: QEntityCollectionPath<QDTO_RETURD>;
    readonly ReturProduct: QEntityCollectionPath<QDTO_RETURP>;
}
export declare const qDTO_RETUR: QDTO_RETUR;
export declare class QDTO_RETURId extends QId<DTO_RETURId> {
    private readonly params;
    getParams(): {};
}
export declare class QDTO_RETURD extends QueryObject {
    readonly Id: QNumberPath<number>;
    readonly IdHeader: QNumberPath<number>;
    readonly Name: QStringPath<string>;
}
export declare const qDTO_RETURD: QDTO_RETURD;
export declare class QDTO_RETURDId extends QId<DTO_RETURDId> {
    private readonly params;
    getParams(): {};
}
export declare class QDTO_RETURP extends QueryObject {
    readonly Id: QNumberPath<number>;
    readonly IdHeader: QNumberPath<number>;
    readonly Name: QStringPath<string>;
}
export declare const qDTO_RETURP: QDTO_RETURP;
export declare class QDTO_RETURPId extends QId<DTO_RETURPId> {
    private readonly params;
    getParams(): {};
}
export declare class QDTO_UserType extends QueryObject {
    readonly Id: QNumberPath<number>;
    readonly Nama: QStringPath<string>;
    readonly Kode: QStringPath<string>;
}
export declare const qDTO_UserType: QDTO_UserType;
export declare class QDTO_UserTypeId extends QId<DTO_UserTypeId> {
    private readonly params;
    getParams(): {};
}
export declare class QMasterRole extends QueryObject {
    readonly Id: QNumberPath<number>;
    readonly RoleName: QStringPath<string>;
    readonly RoleType: QEnumPath<typeof RoleTypeEnum>;
    readonly OrgId: QNumberPath<number>;
    readonly JobPosId: QNumberPath<number>;
    readonly JobLvlId: QNumberPath<number>;
    readonly Organization: QEntityPath<QMasterOrganization>;
    readonly JobPosition: QEntityPath<QMasterJobPosition>;
    readonly JobLevel: QEntityPath<QMasterJobLevel>;
    readonly Permissions: QEntityCollectionPath<QPermissionRef>;
}
export declare const qMasterRole: QMasterRole;
export declare class QMasterRoleId extends QId<MasterRoleId> {
    private readonly params;
    getParams(): {};
}
export declare class QMasterOrganization extends QueryObject {
    readonly Id: QNumberPath<number>;
    readonly CompanyCode: QStringPath<string>;
    readonly CompanyName: QStringPath<string>;
    readonly CompanyAddres: QStringPath<string>;
    readonly CompanyDescription: QStringPath<string>;
    readonly CompanyStatus: QEnumPath<typeof CompanyStatusType>;
}
export declare const qMasterOrganization: QMasterOrganization;
export declare class QMasterOrganizationId extends QId<MasterOrganizationId> {
    private readonly params;
    getParams(): {};
}
export declare class QMasterJobPosition extends QueryObject {
    readonly Id: QNumberPath<number>;
    readonly PositionName: QStringPath<string>;
}
export declare const qMasterJobPosition: QMasterJobPosition;
export declare class QMasterJobPositionId extends QId<MasterJobPositionId> {
    private readonly params;
    getParams(): {};
}
export declare class QMasterJobLevel extends QueryObject {
    readonly Id: QNumberPath<number>;
    readonly LevelName: QStringPath<string>;
    readonly KodeJabatan: QStringPath<string>;
}
export declare const qMasterJobLevel: QMasterJobLevel;
export declare class QMasterJobLevelId extends QId<MasterJobLevelId> {
    private readonly params;
    getParams(): {};
}
export declare class QPermissionRef extends QueryObject {
    readonly Id: QNumberPath<number>;
    readonly RoleId: QNumberPath<number>;
    readonly PermId: QNumberPath<number>;
    readonly CanView: QBooleanPath<boolean>;
    readonly CanEdit: QBooleanPath<boolean>;
    readonly CanDelete: QBooleanPath<boolean>;
    readonly CanCreate: QBooleanPath<boolean>;
    readonly CanApprove: QBooleanPath<boolean>;
    readonly CanReport: QBooleanPath<boolean>;
    readonly Role: QEntityPath<QMasterRole>;
    readonly Permission: QEntityPath<QMasterPermission>;
}
export declare const qPermissionRef: QPermissionRef;
export declare class QPermissionRefId extends QId<PermissionRefId> {
    private readonly params;
    getParams(): {};
}
export declare class QMasterPermission extends QueryObject {
    readonly Id: QNumberPath<number>;
    readonly ModuleName: QStringPath<string>;
}
export declare const qMasterPermission: QMasterPermission;
export declare class QMasterPermissionId extends QId<MasterPermissionId> {
    private readonly params;
    getParams(): {};
}
export declare class QAuthor extends QueryObject {
    readonly Id: QNumberPath<number>;
    readonly Name: QStringPath<string>;
    readonly Biography: QStringPath<string>;
    readonly DateOfBirth: QDateTimeOffsetPath<string>;
    readonly Nationality: QStringPath<string>;
    readonly BookAuthors: QEntityCollectionPath<QBookAuthor>;
}
export declare const qAuthor: QAuthor;
export declare class QAuthorId extends QId<AuthorId> {
    private readonly params;
    getParams(): {};
}
export declare class QBook extends QueryObject {
    readonly Id: QNumberPath<number>;
    readonly Title: QStringPath<string>;
    readonly Genre: QStringPath<string>;
    readonly Price: QNumberPath<number>;
    readonly PublicationYear: QNumberPath<number>;
    readonly BookAuthors: QEntityCollectionPath<QBookAuthor>;
}
export declare const qBook: QBook;
export declare class QBookId extends QId<BookId> {
    private readonly params;
    getParams(): {};
}
export declare class QDTO_Feature extends QueryObject {
    readonly Id: QNumberPath<number>;
    readonly Nama: QStringPath<string>;
    readonly Kode: QStringPath<string>;
    readonly Aktif: QBooleanPath<boolean>;
    readonly DibuatTanggal: QDateTimeOffsetPath<string>;
}
export declare const qDTO_Feature: QDTO_Feature;
export declare class QDTO_FeatureId extends QId<DTO_FeatureId> {
    private readonly params;
    getParams(): {};
}
export declare class QDTO_ApprovalConfig extends QueryObject {
    readonly Id: QNumberPath<number>;
    readonly IdFeature: QNumberPath<number>;
    readonly IdJenisProgram: QNumberPath<number>;
    readonly JenisKode: QStringPath<string>;
    readonly Aktif: QBooleanPath<boolean>;
    readonly Nama: QStringPath<string>;
    readonly DibuatTanggal: QDateTimeOffsetPath<string>;
    readonly Feature: QEntityPath<QDTO_Feature>;
}
export declare const qDTO_ApprovalConfig: QDTO_ApprovalConfig;
export declare class QDTO_ApprovalConfigId extends QId<DTO_ApprovalConfigId> {
    private readonly params;
    getParams(): {};
}
export declare class QDTO_Approval extends QueryObject {
    readonly Id: QNumberPath<number>;
    readonly IdFeature: QNumberPath<number>;
    readonly IdDokumen: QNumberPath<number>;
    readonly IdDokumenPengajuanForm: QNumberPath<number>;
    readonly IdDokumenTransferBudget: QNumberPath<number>;
    readonly NoDokumen: QStringPath<string>;
    readonly StepId: QNumberPath<number>;
    readonly IdRole: QNumberPath<number>;
    readonly UserId: QEntityPath<QUserDto>;
    readonly SubUserId: QEntityPath<QUserDto>;
    readonly Progress: QNumberPath<number>;
    readonly ActionType: QStringPath<string>;
    readonly Step: QNumberPath<number>;
    readonly ApprovalBy: QNumberPath<number>;
    readonly Aktif: QBooleanPath<boolean>;
    readonly Status: QStringPath<string>;
    readonly Deskripsi: QStringPath<string>;
    readonly DibuatTanggal: QDateTimeOffsetPath<string>;
    readonly Feature: QEntityPath<QDTO_Feature>;
    readonly StepApproval: QEntityPath<QDTO_StepApproval>;
    readonly MasterRole: QEntityPath<QMasterRole>;
    readonly MasterUser: QEntityPath<QDTO_MasterUser>;
}
export declare const qDTO_Approval: QDTO_Approval;
export declare class QDTO_ApprovalId extends QId<DTO_ApprovalId> {
    private readonly params;
    getParams(): {};
}
export declare class QDTO_ApprovalConfigCondition extends QueryObject {
    readonly Id: QNumberPath<number>;
    readonly Idconfig: QNumberPath<number>;
    readonly IdRole: QNumberPath<number>;
    readonly FieldName: QStringPath<string>;
    readonly Brand: QStringPath<string>;
    readonly Channel: QStringPath<string>;
    readonly Departemen: QStringPath<string>;
    readonly Area: QStringPath<string>;
    readonly Region: QStringPath<string>;
    readonly Sumber: QStringPath<string>;
    readonly Distributor: QStringPath<string>;
    readonly Operator: QStringPath<string>;
    readonly Value: QStringPath<string>;
    readonly Aktif: QBooleanPath<boolean>;
    readonly DibuatTanggal: QDateTimeOffsetPath<string>;
    readonly UserId: QEntityPath<QUserDto>;
    readonly ApprovalConfig: QEntityPath<QDTO_ApprovalConfig>;
    readonly MasterRole: QEntityPath<QDTO_MasterRole>;
    readonly StepApproval: QEntityCollectionPath<QDTO_StepApproval>;
}
export declare const qDTO_ApprovalConfigCondition: QDTO_ApprovalConfigCondition;
export declare class QDTO_ApprovalConfigConditionId extends QId<DTO_ApprovalConfigConditionId> {
    private readonly params;
    getParams(): {};
}
export declare class QDTO_StepApproval extends QueryObject {
    readonly Id: QNumberPath<number>;
    readonly IdCondition: QNumberPath<number>;
    readonly IdRole: QNumberPath<number>;
    readonly UserId: QEntityPath<QUserDto>;
    readonly SubUserId: QEntityPath<QUserDto>;
    readonly Step: QNumberPath<number>;
    readonly Aktif: QBooleanPath<boolean>;
    readonly ActionType: QStringPath<string>;
    readonly Progress: QNumberPath<number>;
    readonly DibuatTanggal: QDateTimeOffsetPath<string>;
    readonly MasterRole: QEntityPath<QDTO_MasterRole>;
}
export declare const qDTO_StepApproval: QDTO_StepApproval;
export declare class QDTO_StepApprovalId extends QId<DTO_StepApprovalId> {
    private readonly params;
    getParams(): {};
}
export declare class QDTO_Area extends QueryObject {
    readonly Id: QNumberPath<number>;
    readonly Nama: QStringPath<string>;
    readonly IdRegion: QNumberPath<number>;
    readonly KodeArea: QStringPath<string>;
    readonly RegionName: QStringPath<string>;
    readonly Aktif: QBooleanPath<boolean>;
    readonly DibuatTanggal: QDateTimeOffsetPath<string>;
}
export declare const qDTO_Area: QDTO_Area;
export declare class QDTO_AreaId extends QId<DTO_AreaId> {
    private readonly params;
    getParams(): {};
}
export declare class QDTO_BookWithAuthors extends QueryObject {
    readonly Id: QNumberPath<number>;
    readonly Title: QStringPath<string>;
    readonly Genre: QStringPath<string>;
    readonly PublicationYear: QNumberPath<number>;
    readonly Authors: QEntityCollectionPath<QAuthor>;
}
export declare const qDTO_BookWithAuthors: QDTO_BookWithAuthors;
export declare class QDTO_BookWithAuthorsId extends QId<DTO_BookWithAuthorsId> {
    private readonly params;
    getParams(): {};
}
export declare class QDTO_Brand extends QueryObject {
    readonly Id: QNumberPath<number>;
    readonly Nama: QStringPath<string>;
    readonly NamaBudget: QStringPath<string>;
    readonly Aktif: QBooleanPath<boolean>;
    readonly DibuatTanggal: QDateTimeOffsetPath<string>;
}
export declare const qDTO_Brand: QDTO_Brand;
export declare class QDTO_BrandId extends QId<DTO_BrandId> {
    private readonly params;
    getParams(): {};
}
export declare class QDTO_BudgetAlokasiDetail extends QueryObject {
    readonly Id: QNumberPath<number>;
    readonly IdBudgetAlokasi: QNumberPath<number>;
    readonly IdMasterBudget: QNumberPath<number>;
    readonly Bulan: QNumberPath<number>;
    readonly NilaiBudget: QNumberPath<number>;
    readonly SisaNilaiBudget: QNumberPath<number>;
    readonly DibuatTanggal: QDateTimeOffsetPath<string>;
    readonly MasterBudget: QEntityPath<QDTO_MasterBudget>;
}
export declare const qDTO_BudgetAlokasiDetail: QDTO_BudgetAlokasiDetail;
export declare class QDTO_BudgetAlokasiDetailId extends QId<DTO_BudgetAlokasiDetailId> {
    private readonly params;
    getParams(): {};
}
export declare class QDTO_BudgetTopUp extends QueryObject {
    readonly Id: QNumberPath<number>;
    readonly NoDokumen: QStringPath<string>;
    readonly IdProjectSumber: QNumberPath<number>;
    readonly NoDokumenProjectSumber: QStringPath<string>;
    readonly IdProjectTujuan: QNumberPath<number>;
    readonly NoDokumenProjectTujuan: QStringPath<string>;
    readonly TotalTransfer: QNumberPath<number>;
    readonly Save_Transfer: QBooleanPath<boolean>;
    readonly Jenis: QStringPath<string>;
    readonly Status: QStringPath<string>;
    readonly DibuatOleh: QStringPath<string>;
    readonly UserId: QNumberPath<number>;
    readonly UserApproval: QNumberPath<number>;
    readonly Aktif: QBooleanPath<boolean>;
    readonly IdFeature: QNumberPath<number>;
    readonly DibuatTanggal: QDateTimeOffsetPath<string>;
    readonly BudgetTransferDetail: QEntityCollectionPath<QDTO_BudgetTopUpDetail>;
    readonly Approval: QEntityCollectionPath<QDTO_Approval>;
    readonly Feature: QEntityPath<QDTO_Feature>;
    readonly HeaderProjekSumber: QEntityPath<QDTO_HeaderProjek>;
    readonly HeaderProjekTujuan: QEntityPath<QDTO_HeaderProjek>;
}
export declare const qDTO_BudgetTopUp: QDTO_BudgetTopUp;
export declare class QDTO_BudgetTopUpId extends QId<DTO_BudgetTopUpId> {
    private readonly params;
    getParams(): {};
}
export declare class QDTO_BudgetTopUpDetail extends QueryObject {
    readonly Id: QNumberPath<number>;
    readonly IdTransfer: QNumberPath<number>;
    readonly IdAlokasiBudgetSumber: QNumberPath<number>;
    readonly IdAlokasiBudgetTujuan: QNumberPath<number>;
    readonly IdPostBugdetSumber: QNumberPath<number>;
    readonly NamaPostBugdetSumber: QStringPath<string>;
    readonly IdPostBugdetTujuan: QNumberPath<number>;
    readonly NamaPostBugdetTujuan: QStringPath<string>;
    readonly IdAlokasiDetailSumber: QNumberPath<number>;
    readonly IdAlokasiDetailTujuan: QNumberPath<number>;
    readonly BulanBudgetSumber: QNumberPath<number>;
    readonly BulanBudgetTujuan: QNumberPath<number>;
    readonly IdSkenarioSumber: QNumberPath<number>;
    readonly NamaSkenarioSumber: QStringPath<string>;
    readonly IdSkenarioTujuan: QNumberPath<number>;
    readonly NamaSkenarioTujuan: QStringPath<string>;
    readonly Nilai: QNumberPath<number>;
    readonly BudgetAlokasiSumber: QEntityPath<QDTO_BudgetAlokasi>;
    readonly BudgetAlokasiTujuan: QEntityPath<QDTO_BudgetAlokasi>;
    readonly PostBudgetSumber: QEntityPath<QDTO_PostBudget>;
    readonly PostBudgetTujuan: QEntityPath<QDTO_PostBudget>;
    readonly BudgetAlokasiDetailSumber: QEntityPath<QDTO_BudgetAlokasiDetail>;
    readonly BudgetAlokasiDetailTujuan: QEntityPath<QDTO_BudgetAlokasiDetail>;
    readonly SkenarioBudgetSumber: QEntityPath<QDTO_SkenarioBudget>;
    readonly SkenarioBudgetTujuan: QEntityPath<QDTO_SkenarioBudget>;
}
export declare const qDTO_BudgetTopUpDetail: QDTO_BudgetTopUpDetail;
export declare class QDTO_BudgetTopUpDetailId extends QId<DTO_BudgetTopUpDetailId> {
    private readonly params;
    getParams(): {};
}
export declare class QDTO_BudgetTransfer extends QueryObject {
    readonly Id: QNumberPath<number>;
    readonly NoDokumen: QStringPath<string>;
    readonly IdProjectSumber: QNumberPath<number>;
    readonly NoDokumenProjectSumber: QStringPath<string>;
    readonly IdProjectTujuan: QNumberPath<number>;
    readonly NoDokumenProjectTujuan: QStringPath<string>;
    readonly TotalTransfer: QNumberPath<number>;
    readonly Save_Transfer: QBooleanPath<boolean>;
    readonly Jenis: QStringPath<string>;
    readonly Status: QStringPath<string>;
    readonly DibuatOleh: QStringPath<string>;
    readonly UserId: QNumberPath<number>;
    readonly UserApproval: QNumberPath<number>;
    readonly Aktif: QBooleanPath<boolean>;
    readonly IdFeature: QNumberPath<number>;
    readonly DibuatTanggal: QDateTimeOffsetPath<string>;
    readonly BudgetTransferDetail: QEntityCollectionPath<QDTO_BudgetTransferDetail>;
    readonly Approval: QEntityCollectionPath<QDTO_Approval>;
    readonly Feature: QEntityPath<QDTO_Feature>;
    readonly HeaderProjekSumber: QEntityPath<QDTO_HeaderProjek>;
    readonly HeaderProjekTujuan: QEntityPath<QDTO_HeaderProjek>;
}
export declare const qDTO_BudgetTransfer: QDTO_BudgetTransfer;
export declare class QDTO_BudgetTransferId extends QId<DTO_BudgetTransferId> {
    private readonly params;
    getParams(): {};
}
export declare class QDTO_BudgetTransferDetail extends QueryObject {
    readonly Id: QNumberPath<number>;
    readonly IdTransfer: QNumberPath<number>;
    readonly IdAlokasiBudgetSumber: QNumberPath<number>;
    readonly IdAlokasiBudgetTujuan: QNumberPath<number>;
    readonly IdPostBugdetSumber: QNumberPath<number>;
    readonly NamaPostBugdetSumber: QStringPath<string>;
    readonly IdPostBugdetTujuan: QNumberPath<number>;
    readonly NamaPostBugdetTujuan: QStringPath<string>;
    readonly IdAlokasiDetailSumber: QNumberPath<number>;
    readonly IdAlokasiDetailTujuan: QNumberPath<number>;
    readonly BulanBudgetSumber: QNumberPath<number>;
    readonly BulanBudgetTujuan: QNumberPath<number>;
    readonly IdSkenarioSumber: QNumberPath<number>;
    readonly NamaSkenarioSumber: QStringPath<string>;
    readonly IdSkenarioTujuan: QNumberPath<number>;
    readonly NamaSkenarioTujuan: QStringPath<string>;
    readonly Nilai: QNumberPath<number>;
    readonly BudgetAlokasiSumber: QEntityPath<QDTO_BudgetAlokasi>;
    readonly BudgetAlokasiTujuan: QEntityPath<QDTO_BudgetAlokasi>;
    readonly PostBudgetSumber: QEntityPath<QDTO_PostBudget>;
    readonly PostBudgetTujuan: QEntityPath<QDTO_PostBudget>;
    readonly BudgetAlokasiDetailSumber: QEntityPath<QDTO_BudgetAlokasiDetail>;
    readonly BudgetAlokasiDetailTujuan: QEntityPath<QDTO_BudgetAlokasiDetail>;
    readonly SkenarioBudgetSumber: QEntityPath<QDTO_SkenarioBudget>;
    readonly SkenarioBudgetTujuan: QEntityPath<QDTO_SkenarioBudget>;
}
export declare const qDTO_BudgetTransferDetail: QDTO_BudgetTransferDetail;
export declare class QDTO_BudgetTransferDetailId extends QId<DTO_BudgetTransferDetailId> {
    private readonly params;
    getParams(): {};
}
export declare class QDTO_Coa extends QueryObject {
    readonly Id: QNumberPath<number>;
    readonly Kode: QStringPath<string>;
    readonly Nama: QStringPath<string>;
    readonly Aktif: QBooleanPath<boolean>;
    readonly Deskripsi: QStringPath<string>;
    readonly DibuatTanggal: QDateTimeOffsetPath<string>;
    readonly PostBudget: QEntityCollectionPath<QDTO_PostBudget>;
}
export declare const qDTO_Coa: QDTO_Coa;
export declare class QDTO_CoaId extends QId<DTO_CoaId> {
    private readonly params;
    getParams(): {};
}
export declare class QDTO_Departmen extends QueryObject {
    readonly Id: QNumberPath<number>;
    readonly Code: QStringPath<string>;
    readonly Nama: QStringPath<string>;
    readonly DibuatTanggal: QDateTimeOffsetPath<string>;
    readonly Aktif: QBooleanPath<boolean>;
}
export declare const qDTO_Departmen: QDTO_Departmen;
export declare class QDTO_DepartmenId extends QId<DTO_DepartmenId> {
    private readonly params;
    getParams(): {};
}
export declare class QDTO_Distributor extends QueryObject {
    readonly Id: QNumberPath<number>;
    readonly CardCode: QStringPath<string>;
    readonly Nama: QStringPath<string>;
    readonly NamaAlias: QStringPath<string>;
    readonly AreaId: QNumberPath<number>;
    readonly AreaName: QStringPath<string>;
    readonly Aktif: QBooleanPath<boolean>;
    readonly Area: QEntityPath<QDTO_Area>;
}
export declare const qDTO_Distributor: QDTO_Distributor;
export declare class QDTO_DistributorId extends QId<DTO_DistributorId> {
    private readonly params;
    getParams(): {};
}
export declare class QDTO_EmailTemplate extends QueryObject {
    readonly Id: QNumberPath<number>;
    readonly IdFeature: QNumberPath<number>;
    readonly SubFeature: QStringPath<string>;
    readonly Subject: QStringPath<string>;
    readonly Body: QStringPath<string>;
    readonly CreatedAt: QDateTimeOffsetPath<string>;
    readonly UpdatedAt: QDateTimeOffsetPath<string>;
    readonly Feature: QEntityPath<QDTO_Feature>;
}
export declare const qDTO_EmailTemplate: QDTO_EmailTemplate;
export declare class QDTO_EmailTemplateId extends QId<DTO_EmailTemplateId> {
    private readonly params;
    getParams(): {};
}
export declare class QDTO_EstimasiHargaBranding extends QueryObject {
    readonly Id: QNumberPath<number>;
    readonly IdArea: QNumberPath<number>;
    readonly IdJenisPpl: QNumberPath<number>;
    readonly HargaAwal: QNumberPath<number>;
    readonly HargaAkhir: QNumberPath<number>;
    readonly Aktif: QBooleanPath<boolean>;
    readonly DibuatTanggal: QDateTimeOffsetPath<string>;
    readonly Area: QEntityPath<QDTO_Area>;
    readonly JenisPpl: QEntityPath<QDTO_JenisPpl>;
}
export declare const qDTO_EstimasiHargaBranding: QDTO_EstimasiHargaBranding;
export declare class QDTO_EstimasiHargaBrandingId extends QId<DTO_EstimasiHargaBrandingId> {
    private readonly params;
    getParams(): {};
}
export declare class QDTO_EstimasiHargaBrandingList extends QueryObject {
    readonly Id: QNumberPath<number>;
    readonly IdArea: QNumberPath<number>;
    readonly AreaName: QStringPath<string>;
    readonly IdJenisPpl: QNumberPath<number>;
    readonly JenisPplName: QStringPath<string>;
    readonly HargaAwal: QNumberPath<number>;
    readonly HargaAkhir: QNumberPath<number>;
    readonly Aktif: QBooleanPath<boolean>;
    readonly DibuatTanggal: QDateTimeOffsetPath<string>;
}
export declare const qDTO_EstimasiHargaBrandingList: QDTO_EstimasiHargaBrandingList;
export declare class QDTO_EstimasiHargaBrandingListId extends QId<DTO_EstimasiHargaBrandingListId> {
    private readonly params;
    getParams(): {};
}
export declare class QDTO_HeaderPpl extends QueryObject {
    readonly Id: QNumberPath<number>;
    readonly NoDokumen: QStringPath<string>;
    readonly IdHeaderProjek: QNumberPath<number>;
    readonly SumberDokumen: QStringPath<string>;
    readonly IdArea: QNumberPath<number>;
    readonly IdDistributor: QNumberPath<number>;
    readonly IdBudgetAlokasi: QNumberPath<number>;
    readonly IdKategoriPpl: QNumberPath<number>;
    readonly IdJenisPpl: QNumberPath<number>;
    readonly SubCategory: QNumberPath<number>;
    readonly CostCenter: QStringPath<string>;
    readonly Remarks: QStringPath<string>;
    readonly Klaim: QStringPath<string>;
    readonly Pic: QStringPath<string>;
    readonly KontakPic: QStringPath<string>;
    readonly Audiens: QStringPath<string>;
    readonly TargetPenjualan: QNumberPath<number>;
    readonly EstimasiBudget: QNumberPath<number>;
    readonly AvgSalesBln: QNumberPath<number>;
    readonly CostRatio: QNumberPath<number>;
    readonly EstimasiPoPertama: QNumberPath<number>;
    readonly DressUp: QBooleanPath<boolean>;
    readonly Growth: QNumberPath<number>;
    readonly NilaiProgram: QNumberPath<number>;
    readonly MaxAchive: QNumberPath<number>;
    readonly NikKaryawan: QStringPath<string>;
    readonly NamaKaryawan: QStringPath<string>;
    readonly JabatanKaryawan: QStringPath<string>;
    readonly Jabatan: QStringPath<string>;
    readonly KotaTujuan: QStringPath<string>;
    readonly JumlahHari: QNumberPath<number>;
    readonly FlightDate: QDateTimeOffsetPath<string>;
    readonly FlightName: QStringPath<string>;
    readonly FlightFrom: QStringPath<string>;
    readonly FlightTo: QStringPath<string>;
    readonly FlightDeparture: QDateTimeOffsetPath<string>;
    readonly FlightArrival: QDateTimeOffsetPath<string>;
    readonly TransportPp: QNumberPath<number>;
    readonly InsentifAktifOutlet: QNumberPath<number>;
    readonly InsentifSalesValue: QNumberPath<number>;
    readonly Penginapan: QNumberPath<number>;
    readonly Laundry: QNumberPath<number>;
    readonly AkomodasiUm: QNumberPath<number>;
    readonly TransportDk: QNumberPath<number>;
    readonly PPN: QNumberPath<number>;
    readonly PPNNilai: QNumberPath<number>;
    readonly PPH: QNumberPath<number>;
    readonly PPHNilai: QNumberPath<number>;
    readonly Budget: QNumberPath<number>;
    readonly Alamat: QStringPath<string>;
    readonly TipePerpanjangan: QStringPath<string>;
    readonly UserId: QNumberPath<number>;
    readonly IdFeature: QNumberPath<number>;
    readonly TotalEstimasi: QNumberPath<number>;
    readonly AtasNama: QStringPath<string>;
    readonly Rekening: QStringPath<string>;
    readonly Bank: QStringPath<string>;
    readonly ChannelPpl: QStringPath<string>;
    readonly BiayaLainnya: QNumberPath<number>;
    readonly PeriodeAwal: QDateTimeOffsetPath<string>;
    readonly PeriodeAkhir: QDateTimeOffsetPath<string>;
    readonly OutletLainnya: QStringPath<string>;
    readonly DibuatOleh: QStringPath<string>;
    readonly Aktif: QBooleanPath<boolean>;
    readonly AllOutlet: QNumberPath<number>;
    readonly AllArea: QBooleanPath<boolean>;
    readonly AllDistributor: QBooleanPath<boolean>;
    readonly DibuatTanggal: QDateTimeOffsetPath<string>;
    readonly Status: QStringPath<string>;
    readonly PplOutlet: QEntityCollectionPath<QDTO_PplOutlet>;
    readonly PplArea: QEntityCollectionPath<QDTO_PplArea>;
    readonly PplDetailProduk: QEntityCollectionPath<QDTO_PplDetailProduk>;
    readonly PplDetails: QEntityCollectionPath<QDTO_PplDetails>;
    readonly PplBudgetAlokasi: QEntityCollectionPath<QDTO_PplBudgetAlokasi>;
    readonly PplAttachment: QEntityCollectionPath<QDTO_PplAttachment>;
}
export declare const qDTO_HeaderPpl: QDTO_HeaderPpl;
export declare class QDTO_HeaderPplId extends QId<DTO_HeaderPplId> {
    private readonly params;
    getParams(): {};
}
export declare class QDTO_HeaderPplList extends QueryObject {
    readonly Id: QNumberPath<number>;
    readonly NoDokumen: QStringPath<string>;
    readonly IdHeaderProjek: QNumberPath<number>;
    readonly SumberDokumen: QStringPath<string>;
    readonly ProjectName: QStringPath<string>;
    readonly KategoriPplComponent: QStringPath<string>;
    readonly BrandId: QNumberPath<number>;
    readonly BrandName: QStringPath<string>;
    readonly IdRegion: QNumberPath<number>;
    readonly Scope: QStringPath<string>;
    readonly KodeKlaim: QStringPath<string>;
    readonly IdArea: QNumberPath<number>;
    readonly AreaName: QStringPath<string>;
    readonly IdDistributor: QNumberPath<number>;
    readonly DistributorName: QStringPath<string>;
    readonly IdBudgetAlokasi: QNumberPath<number>;
    readonly Pic: QStringPath<string>;
    readonly KontakPic: QStringPath<string>;
    readonly Audiens: QStringPath<string>;
    readonly TargetPenjualan: QNumberPath<number>;
    readonly BudgetAlokasi: QStringPath<string>;
    readonly DressUp: QBooleanPath<boolean>;
    readonly Growth: QNumberPath<number>;
    readonly NilaiProgram: QNumberPath<number>;
    readonly MaxAchive: QNumberPath<number>;
    readonly NikKaryawan: QStringPath<string>;
    readonly NamaKaryawan: QStringPath<string>;
    readonly JabatanKaryawan: QStringPath<string>;
    readonly Jabatan: QStringPath<string>;
    readonly KotaTujuan: QStringPath<string>;
    readonly JumlahHari: QNumberPath<number>;
    readonly FlightDate: QDateTimeOffsetPath<string>;
    readonly FlightName: QStringPath<string>;
    readonly FlightFrom: QStringPath<string>;
    readonly FlightTo: QStringPath<string>;
    readonly FlightDeparture: QDateTimeOffsetPath<string>;
    readonly FlightArrival: QDateTimeOffsetPath<string>;
    readonly TransportPp: QNumberPath<number>;
    readonly Penginapan: QNumberPath<number>;
    readonly Laundry: QNumberPath<number>;
    readonly AkomodasiUm: QNumberPath<number>;
    readonly TransportDk: QNumberPath<number>;
    readonly PPN: QNumberPath<number>;
    readonly PPNNilai: QNumberPath<number>;
    readonly PPH: QNumberPath<number>;
    readonly PPHNilai: QNumberPath<number>;
    readonly Budget: QNumberPath<number>;
    readonly Alamat: QStringPath<string>;
    readonly TipePerpanjangan: QStringPath<string>;
    readonly UserId: QNumberPath<number>;
    readonly IdFeature: QNumberPath<number>;
    readonly TotalEstimasi: QNumberPath<number>;
    readonly AtasNama: QStringPath<string>;
    readonly Rekening: QStringPath<string>;
    readonly Bank: QStringPath<string>;
    readonly ChannelPpl: QStringPath<string>;
    readonly BiayaLainnya: QNumberPath<number>;
    readonly PeriodeAwal: QDateTimeOffsetPath<string>;
    readonly PeriodeAkhir: QDateTimeOffsetPath<string>;
    readonly IdKategoriPpl: QNumberPath<number>;
    readonly KategoriPplName: QStringPath<string>;
    readonly IdJenisPpl: QNumberPath<number>;
    readonly SubCategory: QNumberPath<number>;
    readonly CostCenter: QStringPath<string>;
    readonly Remarks: QStringPath<string>;
    readonly Klaim: QStringPath<string>;
    readonly EstimasiBudget: QNumberPath<number>;
    readonly AvgSalesBln: QNumberPath<number>;
    readonly CostRatio: QNumberPath<number>;
    readonly EstimasiPoPertama: QNumberPath<number>;
    readonly DibuatOleh: QStringPath<string>;
    readonly OutletLainnya: QStringPath<string>;
    readonly Aktif: QBooleanPath<boolean>;
    readonly AllOutlet: QNumberPath<number>;
    readonly AllArea: QBooleanPath<boolean>;
    readonly AllDistributor: QBooleanPath<boolean>;
    readonly DibuatTanggal: QDateTimeOffsetPath<string>;
    readonly Status: QStringPath<string>;
    readonly KategoriPpl: QEntityPath<QDTO_KategoriPpl>;
    readonly JenisPpl: QEntityPath<QDTO_JenisPpl>;
    readonly PplOutlet: QEntityCollectionPath<QDTO_PplOutlet>;
    readonly PplArea: QEntityCollectionPath<QDTO_PplArea>;
    readonly PplDetailProduk: QEntityCollectionPath<QDTO_PplDetailProduk>;
    readonly PplDetails: QEntityCollectionPath<QDTO_PplDetails>;
    readonly PplBudgetAlokasi: QEntityCollectionPath<QDTO_PplBudgetAlokasi>;
    readonly PplAttachment: QEntityCollectionPath<QDTO_PplAttachment>;
}
export declare const qDTO_HeaderPplList: QDTO_HeaderPplList;
export declare class QDTO_HeaderPplListId extends QId<DTO_HeaderPplListId> {
    private readonly params;
    getParams(): {};
}
export declare class QDTO_HeaderProjek extends QueryObject {
    readonly Id: QNumberPath<number>;
    readonly NoDokumen: QStringPath<string>;
    readonly IdJenisProgram: QNumberPath<number>;
    readonly ParentId: QNumberPath<number>;
    readonly ActivityDetail: QStringPath<string>;
    readonly Channel: QStringPath<string>;
    readonly ProgramBa: QBooleanPath<boolean>;
    readonly IdDepartmen: QNumberPath<number>;
    readonly KodeDept: QStringPath<string>;
    readonly IdBrand: QNumberPath<number>;
    readonly Scope: QStringPath<string>;
    readonly Status: QStringPath<string>;
    readonly IdRegion: QNumberPath<number>;
    readonly Aktif: QBooleanPath<boolean>;
    readonly IsBottomToTop: QBooleanPath<boolean>;
    readonly DanaCadangan: QBooleanPath<boolean>;
    readonly NilaiBudget: QNumberPath<number>;
    readonly SisaNilaiBudget: QNumberPath<number>;
    readonly IdHeaderProject: QNumberPath<number>;
    readonly NilaiBudgetTransaksi: QNumberPath<number>;
    readonly PeriodeAwal: QDateTimeOffsetPath<string>;
    readonly PeriodeAkhir: QDateTimeOffsetPath<string>;
    readonly DibuatOleh: QStringPath<string>;
    readonly UserId: QNumberPath<number>;
    readonly IdFeature: QNumberPath<number>;
    readonly DibuatTanggal: QDateTimeOffsetPath<string>;
    readonly JenisAlokasi: QStringPath<string>;
    readonly MultiBudget: QBooleanPath<boolean>;
    readonly Brand: QEntityPath<QDTO_Brand>;
    readonly JenisProgram: QEntityPath<QDTO_JenisProgram>;
    readonly Departmen: QEntityPath<QDTO_Departmen>;
    readonly Region: QEntityPath<QDTO_Region>;
    readonly BudgetAlokasi: QEntityCollectionPath<QDTO_BudgetAlokasi>;
    readonly Approval: QEntityCollectionPath<QDTO_Approval>;
    readonly HeaderProjekBrand: QEntityCollectionPath<QDTO_HeaderProjekBrand>;
    readonly HeaderProjekDepartemen: QEntityCollectionPath<QDTO_HeaderProjekDepartemen>;
}
export declare const qDTO_HeaderProjek: QDTO_HeaderProjek;
export declare class QDTO_HeaderProjekId extends QId<DTO_HeaderProjekId> {
    private readonly params;
    getParams(): {};
}
export declare class QDTO_HeaderProjekList extends QueryObject {
    readonly Id: QNumberPath<number>;
    readonly NoDokumen: QStringPath<string>;
    readonly IdJenisProgram: QNumberPath<number>;
    readonly ParentId: QNumberPath<number>;
    readonly ActivityDetail: QStringPath<string>;
    readonly Channel: QStringPath<string>;
    readonly ProgramBa: QBooleanPath<boolean>;
    readonly IdDepartmen: QNumberPath<number>;
    readonly IdBrand: QNumberPath<number>;
    readonly Scope: QStringPath<string>;
    readonly Status: QStringPath<string>;
    readonly IdRegion: QNumberPath<number>;
    readonly Aktif: QBooleanPath<boolean>;
    readonly IsBottomToTop: QBooleanPath<boolean>;
    readonly DanaCadangan: QBooleanPath<boolean>;
    readonly NilaiBudget: QNumberPath<number>;
    readonly SisaNilaiBudget: QNumberPath<number>;
    readonly IdHeaderProject: QNumberPath<number>;
    readonly NilaiBudgetTransaksi: QNumberPath<number>;
    readonly PeriodeAwal: QDateTimeOffsetPath<string>;
    readonly PeriodeAkhir: QDateTimeOffsetPath<string>;
    readonly DibuatOleh: QStringPath<string>;
    readonly UserId: QNumberPath<number>;
    readonly DibuatTanggal: QDateTimeOffsetPath<string>;
    readonly JenisAlokasi: QStringPath<string>;
    readonly MultiBudget: QBooleanPath<boolean>;
    readonly Brand: QEntityPath<QDTO_Brand>;
    readonly JenisProgram: QEntityPath<QDTO_JenisProgram>;
    readonly Departmen: QEntityPath<QDTO_Departmen>;
    readonly Region: QEntityPath<QDTO_Region>;
    readonly BudgetAlokasi: QEntityCollectionPath<QDTO_BudgetAlokasi>;
    readonly HeaderProjekBrand: QEntityCollectionPath<QDTO_HeaderProjekBrand>;
    readonly HeaderProjekDepartemen: QEntityCollectionPath<QDTO_HeaderProjekDepartemen>;
}
export declare const qDTO_HeaderProjekList: QDTO_HeaderProjekList;
export declare class QDTO_HeaderProjekListId extends QId<DTO_HeaderProjekListId> {
    private readonly params;
    getParams(): {};
}
export declare class QDTO_HeaderProjekBrand extends QueryObject {
    readonly Id: QNumberPath<number>;
    readonly IdHeaderProjek: QNumberPath<number>;
    readonly IdBrand: QNumberPath<number>;
    readonly DibuatTanggal: QDateTimeOffsetPath<string>;
    readonly Brand: QEntityPath<QDTO_Brand>;
}
export declare const qDTO_HeaderProjekBrand: QDTO_HeaderProjekBrand;
export declare class QDTO_HeaderProjekBrandId extends QId<DTO_HeaderProjekBrandId> {
    private readonly params;
    getParams(): {};
}
export declare class QDTO_HeaderProjekDepartemen extends QueryObject {
    readonly Id: QNumberPath<number>;
    readonly IdHeaderProjek: QNumberPath<number>;
    readonly IdDepartmen: QNumberPath<number>;
    readonly KodeDepartmen: QStringPath<string>;
    readonly DibuatTanggal: QDateTimeOffsetPath<string>;
    readonly Departmen: QEntityPath<QDTO_Departmen>;
}
export declare const qDTO_HeaderProjekDepartemen: QDTO_HeaderProjekDepartemen;
export declare class QDTO_HeaderProjekDepartemenId extends QId<DTO_HeaderProjekDepartemenId> {
    private readonly params;
    getParams(): {};
}
export declare class QDTO_JenisPpl extends QueryObject {
    readonly Id: QNumberPath<number>;
    readonly KategoriPplId: QNumberPath<number>;
    readonly Nama: QStringPath<string>;
    readonly SubJenis: QStringPath<string>;
    readonly Leadtime: QNumberPath<number>;
    readonly DibuatTanggal: QDateTimeOffsetPath<string>;
    readonly Aktif: QBooleanPath<boolean>;
    readonly KodeKlaim: QStringPath<string>;
    readonly SubKlaim: QStringPath<string>;
    readonly IdKodeKlaim: QNumberPath<number>;
    readonly KategoriPpl: QEntityPath<QDTO_KategoriPpl>;
    readonly KodeKlaims: QEntityPath<QDTO_KodeKlaims>;
}
export declare const qDTO_JenisPpl: QDTO_JenisPpl;
export declare class QDTO_JenisPplId extends QId<DTO_JenisPplId> {
    private readonly params;
    getParams(): {};
}
export declare class QDTO_KodeKlaims extends QueryObject {
    readonly Id: QNumberPath<number>;
    readonly Kode: QStringPath<string>;
    readonly Nama: QStringPath<string>;
    readonly Keterangan: QStringPath<string>;
    readonly Aktif: QBooleanPath<boolean>;
    readonly DibuatTanggal: QDateTimeOffsetPath<string>;
}
export declare const qDTO_KodeKlaims: QDTO_KodeKlaims;
export declare class QDTO_KodeKlaimsId extends QId<DTO_KodeKlaimsId> {
    private readonly params;
    getParams(): {};
}
export declare class QDTO_JenisPplList extends QueryObject {
    readonly Id: QNumberPath<number>;
    readonly KategoriPplId: QNumberPath<number>;
    readonly KategoriPplName: QStringPath<string>;
    readonly Nama: QStringPath<string>;
    readonly KodeJenisPpl: QStringPath<string>;
    readonly SubJenis: QStringPath<string>;
    readonly Leadtime: QNumberPath<number>;
    readonly DibuatTanggal: QDateTimeOffsetPath<string>;
    readonly Aktif: QBooleanPath<boolean>;
    readonly KodeKlaim: QStringPath<string>;
    readonly SubKlaim: QStringPath<string>;
    readonly IdKodeKlaim: QNumberPath<number>;
    readonly KategoriPpl: QEntityPath<QDTO_KategoriPpl>;
    readonly KodeKlaims: QEntityPath<QDTO_KodeKlaims>;
}
export declare const qDTO_JenisPplList: QDTO_JenisPplList;
export declare class QDTO_JenisPplListId extends QId<DTO_JenisPplListId> {
    private readonly params;
    getParams(): {};
}
export declare class QDTO_JenisProgram extends QueryObject {
    readonly Id: QNumberPath<number>;
    readonly Nama: QStringPath<string>;
    readonly Aktif: QBooleanPath<boolean>;
    readonly Kode: QStringPath<string>;
    readonly DibuatTanggal: QDateTimeOffsetPath<string>;
    readonly KategoriPpl: QEntityCollectionPath<QDTO_KategoriPpl>;
}
export declare const qDTO_JenisProgram: QDTO_JenisProgram;
export declare class QDTO_JenisProgramId extends QId<DTO_JenisProgramId> {
    private readonly params;
    getParams(): {};
}
export declare class QDTO_JurnalLedger extends QueryObject {
    readonly Id: QNumberPath<number>;
    readonly IdBudgetSap: QNumberPath<number>;
    readonly IdMasterBudget: QNumberPath<number>;
    readonly Tanggal: QDateTimeOffsetPath<string>;
    readonly Account: QStringPath<string>;
    readonly Deskripsi: QStringPath<string>;
    readonly Dept: QStringPath<string>;
    readonly SubDept: QStringPath<string>;
    readonly Periode: QNumberPath<number>;
    readonly Debit: QNumberPath<number>;
    readonly Kredit: QNumberPath<number>;
    readonly ContraRef: QStringPath<string>;
    readonly DibuatTanggal: QDateTimeOffsetPath<string>;
    readonly MasterBudget: QEntityPath<QDTO_MasterBudget>;
    readonly BudgetSap: QEntityPath<QDTO_BudgetSap>;
}
export declare const qDTO_JurnalLedger: QDTO_JurnalLedger;
export declare class QDTO_JurnalLedgerId extends QId<DTO_JurnalLedgerId> {
    private readonly params;
    getParams(): {};
}
export declare class QDTO_KategoriPpl extends QueryObject {
    readonly Id: QNumberPath<number>;
    readonly IdJenisProgram: QNumberPath<number>;
    readonly Nama: QStringPath<string>;
    readonly Component: QStringPath<string>;
    readonly DibuatTanggal: QDateTimeOffsetPath<string>;
    readonly Kode: QStringPath<string>;
    readonly Aktif: QBooleanPath<boolean>;
    readonly JenisProgram: QEntityPath<QDTO_JenisProgram>;
    readonly JenisPpl: QEntityCollectionPath<QDTO_JenisPpl>;
}
export declare const qDTO_KategoriPpl: QDTO_KategoriPpl;
export declare class QDTO_KategoriPplId extends QId<DTO_KategoriPplId> {
    private readonly params;
    getParams(): {};
}
export declare class QDTO_MasterAccount extends QueryObject {
    readonly Id: QNumberPath<number>;
    readonly Nama: QStringPath<string>;
    readonly Type: QStringPath<string>;
    readonly Aktif: QBooleanPath<boolean>;
    readonly DibuatTanggal: QDateTimeOffsetPath<string>;
}
export declare const qDTO_MasterAccount: QDTO_MasterAccount;
export declare class QDTO_MasterAccountId extends QId<DTO_MasterAccountId> {
    private readonly params;
    getParams(): {};
}
export declare class QDTO_MasterJabatan extends QueryObject {
    readonly Id: QNumberPath<number>;
    readonly KodeJabatan: QStringPath<string>;
    readonly NamaJabatan: QStringPath<string>;
    readonly LevelJabat: QNumberPath<number>;
}
export declare const qDTO_MasterJabatan: QDTO_MasterJabatan;
export declare class QDTO_MasterJabatanId extends QId<DTO_MasterJabatanId> {
    private readonly params;
    getParams(): {};
}
export declare class QDTO_MasterKaryawan extends QueryObject {
    readonly Id: QNumberPath<number>;
    readonly NamaKaryawan: QStringPath<string>;
    readonly NikKaryawan: QStringPath<string>;
    readonly Jabatan: QStringPath<string>;
    readonly KodeDept: QStringPath<string>;
    readonly IdLevel: QNumberPath<number>;
    readonly IdDep: QNumberPath<number>;
    readonly LevelJabatan: QStringPath<string>;
    readonly KodeJabatan: QStringPath<string>;
}
export declare const qDTO_MasterKaryawan: QDTO_MasterKaryawan;
export declare class QDTO_MasterKaryawanId extends QId<DTO_MasterKaryawanId> {
    private readonly params;
    getParams(): {};
}
export declare class QDTO_MasterKlaim extends QueryObject {
    readonly Id: QNumberPath<number>;
    readonly KodeKlaim: QStringPath<string>;
    readonly Nama: QStringPath<string>;
    readonly Keterangan: QStringPath<string>;
    readonly Sumber: QStringPath<string>;
    readonly Aktif: QBooleanPath<boolean>;
    readonly IdKodeKlaim: QNumberPath<number>;
    readonly KodeKlaims: QEntityPath<QDTO_KodeKlaims>;
    readonly MasterKlaimSyarat: QEntityCollectionPath<QDTO_MasterKlaimSyarat>;
}
export declare const qDTO_MasterKlaim: QDTO_MasterKlaim;
export declare class QDTO_MasterKlaimId extends QId<DTO_MasterKlaimId> {
    private readonly params;
    getParams(): {};
}
export declare class QDTO_MasterKlaimSyarat extends QueryObject {
    readonly Id: QNumberPath<number>;
    readonly IdMasterKlaim: QNumberPath<number>;
    readonly Sub: QStringPath<string>;
    readonly Syarat: QStringPath<string>;
    readonly Keterangan: QStringPath<string>;
    readonly Aktif: QBooleanPath<boolean>;
}
export declare const qDTO_MasterKlaimSyarat: QDTO_MasterKlaimSyarat;
export declare class QDTO_MasterKlaimSyaratId extends QId<DTO_MasterKlaimSyaratId> {
    private readonly params;
    getParams(): {};
}
export declare class QDTO_MasterOrg extends QueryObject {
    readonly Id: QNumberPath<number>;
    readonly CompanyName: QStringPath<string>;
    readonly CompanyCode: QStringPath<string>;
    readonly CompanyAddres: QStringPath<string>;
    readonly CompanyDescription: QStringPath<string>;
    readonly CompanyStatus: QEnumPath<typeof CompanyStatusType>;
}
export declare const qDTO_MasterOrg: QDTO_MasterOrg;
export declare class QDTO_MasterOrgId extends QId<DTO_MasterOrgId> {
    private readonly params;
    getParams(): {};
}
export declare class QDTO_MasterJobPos extends QueryObject {
    readonly Id: QNumberPath<number>;
    readonly PositionName: QStringPath<string>;
}
export declare const qDTO_MasterJobPos: QDTO_MasterJobPos;
export declare class QDTO_MasterJobPosId extends QId<DTO_MasterJobPosId> {
    private readonly params;
    getParams(): {};
}
export declare class QDTO_MasterJobLvl extends QueryObject {
    readonly Id: QNumberPath<number>;
    readonly LevelName: QStringPath<string>;
    readonly KodeJabatan: QStringPath<string>;
}
export declare const qDTO_MasterJobLvl: QDTO_MasterJobLvl;
export declare class QDTO_MasterJobLvlId extends QId<DTO_MasterJobLvlId> {
    private readonly params;
    getParams(): {};
}
export declare class QDTO_MasterPerm extends QueryObject {
    readonly Id: QNumberPath<number>;
    readonly ModuleName: QStringPath<string>;
}
export declare const qDTO_MasterPerm: QDTO_MasterPerm;
export declare class QDTO_MasterPermId extends QId<DTO_MasterPermId> {
    private readonly params;
    getParams(): {};
}
export declare class QDTO_MasterRole extends QueryObject {
    readonly Id: QNumberPath<number>;
    readonly RoleName: QStringPath<string>;
    readonly RoleType: QEnumPath<typeof RoleTypeEnum>;
    readonly Organization: QEntityPath<QDTO_MasterOrgSlim>;
    readonly JobPosition: QEntityPath<QDTO_MasterJobPos>;
    readonly JobLevel: QEntityPath<QDTO_MasterJobLvl>;
    readonly Permissions: QEntityCollectionPath<QDTO_PermissionRef>;
}
export declare const qDTO_MasterRole: QDTO_MasterRole;
export declare class QDTO_MasterRoleId extends QId<DTO_MasterRoleId> {
    private readonly params;
    getParams(): {};
}
export declare class QDTO_PermissionRef extends QueryObject {
    readonly Id: QNumberPath<number>;
    readonly CanView: QBooleanPath<boolean>;
    readonly CanEdit: QBooleanPath<boolean>;
    readonly CanDelete: QBooleanPath<boolean>;
    readonly CanCreate: QBooleanPath<boolean>;
    readonly CanApprove: QBooleanPath<boolean>;
    readonly CanReport: QBooleanPath<boolean>;
    readonly Permission: QEntityPath<QDTO_MasterPerm>;
}
export declare const qDTO_PermissionRef: QDTO_PermissionRef;
export declare class QDTO_PermissionRefId extends QId<DTO_PermissionRefId> {
    private readonly params;
    getParams(): {};
}
export declare class QDTO_MasterUser extends QueryObject {
    readonly Id: QNumberPath<number>;
    readonly Username: QStringPath<string>;
    readonly Password: QStringPath<string>;
    readonly IsActive: QBooleanPath<boolean>;
    readonly IsDeptHead: QBooleanPath<boolean>;
    readonly IsSuperAdmin: QBooleanPath<boolean>;
    readonly Channel: QStringPath<string>;
    readonly RoleId: QNumberPath<number>;
    readonly KodeDepartemen: QStringPath<string>;
    readonly KodeUserType: QStringPath<string>;
    readonly TandaTangan: QStringPath<string>;
    readonly Base64Data: QStringPath<string>;
    readonly Nik: QStringPath<string>;
    readonly NamaLengkap: QStringPath<string>;
    readonly AllDistributor: QBooleanPath<boolean>;
    readonly AllArea: QBooleanPath<boolean>;
    readonly Role: QEntityPath<QDTO_MasterRole>;
    readonly UserArea: QEntityCollectionPath<QDTO_UserArea>;
    readonly UserDistributor: QEntityCollectionPath<QDTO_UserDistributor>;
    readonly UsersAttachment: QEntityCollectionPath<QDTO_UsersAttachment>;
}
export declare const qDTO_MasterUser: QDTO_MasterUser;
export declare class QDTO_MasterUserId extends QId<DTO_MasterUserId> {
    private readonly params;
    getParams(): {};
}
export declare class QDTO_UsersAttachment extends QueryObject {
    readonly Id: QNumberPath<number>;
    readonly IdMasterUser: QNumberPath<number>;
    readonly Label: QStringPath<string>;
    readonly File: QStringPath<string>;
    readonly DibuatTanggal: QDateTimeOffsetPath<string>;
    readonly Base64Data: QStringPath<string>;
}
export declare const qDTO_UsersAttachment: QDTO_UsersAttachment;
export declare class QDTO_UsersAttachmentId extends QId<DTO_UsersAttachmentId> {
    private readonly params;
    getParams(): {};
}
export declare class QDTO_MasterProvinsi extends QueryObject {
    readonly Id: QNumberPath<number>;
    readonly NamaProvinsi: QStringPath<string>;
    readonly MasterKota: QEntityCollectionPath<QDTO_MasterKota>;
}
export declare const qDTO_MasterProvinsi: QDTO_MasterProvinsi;
export declare class QDTO_MasterProvinsiId extends QId<DTO_MasterProvinsiId> {
    private readonly params;
    getParams(): {};
}
export declare class QDTO_MasterKota extends QueryObject {
    readonly Id: QNumberPath<number>;
    readonly IdProvinsi: QNumberPath<number>;
    readonly NamaKota: QStringPath<string>;
    readonly MasterProvinsi: QEntityPath<QDTO_MasterProvinsi>;
    readonly MasterKecamatan: QEntityCollectionPath<QDTO_MasterKecamatan>;
}
export declare const qDTO_MasterKota: QDTO_MasterKota;
export declare class QDTO_MasterKotaId extends QId<DTO_MasterKotaId> {
    private readonly params;
    getParams(): {};
}
export declare class QDTO_MasterKecamatan extends QueryObject {
    readonly Id: QNumberPath<number>;
    readonly IdProvinsi: QNumberPath<number>;
    readonly IdKota: QNumberPath<number>;
    readonly NamaKecamatan: QStringPath<string>;
    readonly MasterProvinsi: QEntityPath<QDTO_MasterProvinsi>;
    readonly MasterKota: QEntityPath<QDTO_MasterKota>;
    readonly MasterKelurahan: QEntityCollectionPath<QDTO_MasterKelurahan>;
}
export declare const qDTO_MasterKecamatan: QDTO_MasterKecamatan;
export declare class QDTO_MasterKecamatanId extends QId<DTO_MasterKecamatanId> {
    private readonly params;
    getParams(): {};
}
export declare class QDTO_MasterKelurahan extends QueryObject {
    readonly Id: QNumberPath<number>;
    readonly IdProvinsi: QNumberPath<number>;
    readonly IdKota: QNumberPath<number>;
    readonly IdKecamatan: QNumberPath<number>;
    readonly NamaKelurahan: QStringPath<string>;
    readonly MasterProvinsi: QEntityPath<QDTO_MasterProvinsi>;
    readonly MasterKota: QEntityPath<QDTO_MasterKota>;
    readonly MasterKecamatan: QEntityPath<QDTO_MasterKecamatan>;
}
export declare const qDTO_MasterKelurahan: QDTO_MasterKelurahan;
export declare class QDTO_MasterKelurahanId extends QId<DTO_MasterKelurahanId> {
    private readonly params;
    getParams(): {};
}
export declare class QDTO_OITM extends QueryObject {
    readonly ItemCode: QStringPath<string>;
    readonly ItemName: QStringPath<string>;
    readonly CodeBars: QStringPath<string>;
    readonly Price: QNumberPath<number>;
}
export declare const qDTO_OITM: QDTO_OITM;
export declare class QDTO_OITMId extends QId<DTO_OITMId> {
    private readonly params;
    getParams(): {};
}
export declare class QDTO_Outlet extends QueryObject {
    readonly Id: QNumberPath<number>;
    readonly IdArea: QNumberPath<number>;
    readonly IdKota: QNumberPath<number>;
    readonly NamaKota: QStringPath<string>;
    readonly IdGroup: QNumberPath<number>;
    readonly IdKecamatan: QNumberPath<number>;
    readonly NamaKecamatan: QStringPath<string>;
    readonly IdKelurahan: QNumberPath<number>;
    readonly NamaKelurahan: QStringPath<string>;
    readonly JumlahStore: QNumberPath<number>;
    readonly KodeOutlet: QStringPath<string>;
    readonly KodeCustomer: QStringPath<string>;
    readonly NamaStore: QStringPath<string>;
    readonly NamaCustomer: QStringPath<string>;
    readonly KodeDistributor: QStringPath<string>;
    readonly Distributor: QStringPath<string>;
    readonly AlamatStore: QStringPath<string>;
    readonly JenisStore: QStringPath<string>;
    readonly SubMt: QStringPath<string>;
    readonly GroupOutlet: QStringPath<string>;
    readonly TipeStore: QStringPath<string>;
    readonly NamaPic: QStringPath<string>;
    readonly TeleponPic: QStringPath<string>;
    readonly EmailPic: QStringPath<string>;
    readonly Latitude: QStringPath<string>;
    readonly Longitude: QStringPath<string>;
    readonly AtasNama: QStringPath<string>;
    readonly Bank: QStringPath<string>;
    readonly NoRek: QStringPath<string>;
    readonly StatusOutlet: QStringPath<string>;
    readonly Attacement: QStringPath<string>;
    readonly Aktif: QBooleanPath<boolean>;
    readonly StatusBa: QBooleanPath<boolean>;
    readonly DibuatTanggal: QDateTimeOffsetPath<string>;
    readonly Area: QEntityPath<QDTO_Area>;
    readonly OutletGroup: QEntityPath<QDTO_OutletGroup>;
}
export declare const qDTO_Outlet: QDTO_Outlet;
export declare class QDTO_OutletId extends QId<DTO_OutletId> {
    private readonly params;
    getParams(): {};
}
export declare class QDTO_OutletGroup extends QueryObject {
    readonly Id: QNumberPath<number>;
    readonly Nama: QStringPath<string>;
    readonly Aktif: QBooleanPath<boolean>;
    readonly DibuatTanggal: QDateTimeOffsetPath<string>;
    readonly Outlet: QEntityCollectionPath<QDTO_Outlet>;
}
export declare const qDTO_OutletGroup: QDTO_OutletGroup;
export declare class QDTO_OutletGroupId extends QId<DTO_OutletGroupId> {
    private readonly params;
    getParams(): {};
}
export declare class QDTO_PengajuanForm extends QueryObject {
    readonly Id: QNumberPath<number>;
    readonly NoDokumen: QStringPath<string>;
    readonly IdFeature: QNumberPath<number>;
    readonly DibuatOleh: QStringPath<string>;
    readonly UserId: QNumberPath<number>;
    readonly ApprovalTypeAction: QStringPath<string>;
    readonly StatusApproval: QBooleanPath<boolean>;
    readonly ApprovalId: QNumberPath<number>;
    readonly Status: QStringPath<string>;
    readonly Kategori: QStringPath<string>;
    readonly AllArea: QBooleanPath<boolean>;
    readonly KodeArea: QStringPath<string>;
    readonly NamaArea: QStringPath<string>;
    readonly AllOutlet: QNumberPath<number>;
    readonly OutletLainnya: QStringPath<string>;
    readonly KodeOutlet: QStringPath<string>;
    readonly NamaOutlet: QStringPath<string>;
    readonly JenisOutlet: QStringPath<string>;
    readonly KodeDistributor: QStringPath<string>;
    readonly NamaDistributor: QStringPath<string>;
    readonly Alamat: QStringPath<string>;
    readonly NamaKegiatan: QStringPath<string>;
    readonly JenisEvent: QStringPath<string>;
    readonly PeriodeAwal: QDateTimeOffsetPath<string>;
    readonly PeriodeAkhir: QDateTimeOffsetPath<string>;
    readonly WaktuAwal: QDateTimeOffsetPath<string>;
    readonly WaktuAkhir: QDateTimeOffsetPath<string>;
    readonly Pic: QStringPath<string>;
    readonly Kontak: QStringPath<string>;
    readonly TujuanPengajuan: QStringPath<string>;
    readonly DetailPengajuan: QStringPath<string>;
    readonly JangkauanArea: QStringPath<string>;
    readonly Audiens: QStringPath<string>;
    readonly StrategiPromosi: QStringPath<string>;
    readonly BenefitSponsor: QStringPath<string>;
    readonly EstimasiTarget: QNumberPath<number>;
    readonly Remarks: QStringPath<string>;
    readonly Aktif: QBooleanPath<boolean>;
    readonly DibuatTanggal: QDateTimeOffsetPath<string>;
    readonly PengajuanFormOutlet: QEntityCollectionPath<QDTO_PengajuanFormOutlet>;
    readonly PengajuanFormAttachment: QEntityCollectionPath<QDTO_PengajuanFormAttachment>;
    readonly PengajuanFormDetail: QEntityCollectionPath<QDTO_PengajuanFormDetail>;
    readonly PengajuanFormProduk: QEntityCollectionPath<QDTO_PengajuanFormProduk>;
    readonly Approval: QEntityCollectionPath<QDTO_Approval>;
}
export declare const qDTO_PengajuanForm: QDTO_PengajuanForm;
export declare class QDTO_PengajuanFormId extends QId<DTO_PengajuanFormId> {
    private readonly params;
    getParams(): {};
}
export declare class QDTO_PengajuanFormOutlet extends QueryObject {
    readonly Id: QNumberPath<number>;
    readonly IdPengajuanForm: QNumberPath<number>;
    readonly IdOutlet: QNumberPath<number>;
    readonly KodeOutlet: QStringPath<string>;
    readonly NamaOutlet: QStringPath<string>;
    readonly DibuatTanggal: QDateTimeOffsetPath<string>;
}
export declare const qDTO_PengajuanFormOutlet: QDTO_PengajuanFormOutlet;
export declare class QDTO_PengajuanFormOutletId extends QId<DTO_PengajuanFormOutletId> {
    private readonly params;
    getParams(): {};
}
export declare class QDTO_PengajuanFormAttachment extends QueryObject {
    readonly Id: QNumberPath<number>;
    readonly IdPengajuanForm: QNumberPath<number>;
    readonly Label: QStringPath<string>;
    readonly File: QStringPath<string>;
    readonly DibuatTanggal: QDateTimeOffsetPath<string>;
    readonly Base64Data: QStringPath<string>;
}
export declare const qDTO_PengajuanFormAttachment: QDTO_PengajuanFormAttachment;
export declare class QDTO_PengajuanFormAttachmentId extends QId<DTO_PengajuanFormAttachmentId> {
    private readonly params;
    getParams(): {};
}
export declare class QDTO_PengajuanFormProduk extends QueryObject {
    readonly Id: QNumberPath<number>;
    readonly IdPengajuanForm: QNumberPath<number>;
    readonly KodeProduk: QStringPath<string>;
    readonly NamaProduk: QStringPath<string>;
    readonly Qty: QNumberPath<number>;
    readonly Biaya: QNumberPath<number>;
    readonly PPN: QNumberPath<number>;
    readonly TotalBiaya: QNumberPath<number>;
    readonly DibuatTanggal: QDateTimeOffsetPath<string>;
    readonly UsedResi: QBooleanPath<boolean>;
}
export declare const qDTO_PengajuanFormProduk: QDTO_PengajuanFormProduk;
export declare class QDTO_PengajuanFormProdukId extends QId<DTO_PengajuanFormProdukId> {
    private readonly params;
    getParams(): {};
}
export declare class QDTO_PengajuanFormDetail extends QueryObject {
    readonly Id: QNumberPath<number>;
    readonly IdPengajuanForm: QNumberPath<number>;
    readonly Deskripsi: QStringPath<string>;
    readonly Keterangan: QStringPath<string>;
    readonly Klaim: QStringPath<string>;
    readonly NamaPostBudget: QStringPath<string>;
    readonly Biaya: QNumberPath<number>;
    readonly IdPostBudget: QNumberPath<number>;
}
export declare const qDTO_PengajuanFormDetail: QDTO_PengajuanFormDetail;
export declare class QDTO_PengajuanFormDetailId extends QId<DTO_PengajuanFormDetailId> {
    private readonly params;
    getParams(): {};
}
export declare class QDTO_PostBudget extends QueryObject {
    readonly Id: QNumberPath<number>;
    readonly CoaId: QNumberPath<number>;
    readonly ParentId: QNumberPath<number>;
    readonly IdDepartemen: QNumberPath<number>;
    readonly BrandId: QNumberPath<number>;
    readonly Nama: QStringPath<string>;
    readonly Kategori: QStringPath<string>;
    readonly Channel: QStringPath<string>;
    readonly Deskripsi: QStringPath<string>;
    readonly Departemen: QStringPath<string>;
    readonly DibuatTanggal: QDateTimeOffsetPath<string>;
    readonly Aktif: QBooleanPath<boolean>;
    readonly ParentName: QStringPath<string>;
    readonly Departmen: QEntityPath<QDTO_Departmen>;
    readonly Coa: QEntityPath<QDTO_Coa>;
    readonly Brand: QEntityPath<QDTO_Brand>;
}
export declare const qDTO_PostBudget: QDTO_PostBudget;
export declare class QDTO_PostBudgetId extends QId<DTO_PostBudgetId> {
    private readonly params;
    getParams(): {};
}
export declare class QDTO_Channel extends QueryObject {
    readonly Id: QNumberPath<number>;
    readonly Nama: QStringPath<string>;
    readonly SubNama: QStringPath<string>;
    readonly Kode: QStringPath<string>;
    readonly DibuatTanggal: QDateTimeOffsetPath<string>;
    readonly Aktif: QBooleanPath<boolean>;
}
export declare const qDTO_Channel: QDTO_Channel;
export declare class QDTO_ChannelId extends QId<DTO_ChannelId> {
    private readonly params;
    getParams(): {};
}
export declare class QDTO_BudgetSap extends QueryObject {
    readonly Id: QNumberPath<number>;
    readonly AcctCode: QStringPath<string>;
    readonly OcrCode: QStringPath<string>;
    readonly OcrCode1: QStringPath<string>;
    readonly OcrCode5: QStringPath<string>;
    readonly DimCode: QStringPath<string>;
    readonly Instance: QNumberPath<number>;
    readonly Line_ID: QNumberPath<number>;
    readonly DebLTotal: QNumberPath<number>;
    readonly DebSTotalSisa: QNumberPath<number>;
    readonly CredLTotal: QNumberPath<number>;
    readonly DebSTotal: QNumberPath<number>;
    readonly CredSTotal: QNumberPath<number>;
    readonly TransAmnt: QStringPath<string>;
    readonly UserSign: QNumberPath<number>;
    readonly AcctName: QStringPath<string>;
    readonly Year: QNumberPath<number>;
    readonly DibuatTanggal: QDateTimeOffsetPath<string>;
    readonly MasterBudget: QEntityCollectionPath<QDTO_MasterBudget>;
}
export declare const qDTO_BudgetSap: QDTO_BudgetSap;
export declare class QDTO_BudgetSapId extends QId<DTO_BudgetSapId> {
    private readonly params;
    getParams(): {};
}
export declare class QDTO_MasterBudget extends QueryObject {
    readonly Id: QNumberPath<number>;
    readonly IdBudgetSap: QNumberPath<number>;
    readonly IdBrand: QNumberPath<number>;
    readonly IdPostBudget: QNumberPath<number>;
    readonly CoaId: QNumberPath<number>;
    readonly DeptKode: QStringPath<string>;
    readonly Year: QNumberPath<number>;
    readonly Month: QNumberPath<number>;
    readonly Budget: QNumberPath<number>;
    readonly BudgetSisa: QNumberPath<number>;
    readonly DibuatTanggal: QDateTimeOffsetPath<string>;
    readonly DibuatOleh: QStringPath<string>;
    readonly UserId: QNumberPath<number>;
    readonly IsLocked: QBooleanPath<boolean>;
    readonly PostBudget: QEntityPath<QDTO_PostBudget>;
    readonly Coa: QEntityPath<QDTO_Coa>;
    readonly Brand: QEntityPath<QDTO_Brand>;
}
export declare const qDTO_MasterBudget: QDTO_MasterBudget;
export declare class QDTO_MasterBudgetId extends QId<DTO_MasterBudgetId> {
    private readonly params;
    getParams(): {};
}
export declare class QDTO_PplArea extends QueryObject {
    readonly Id: QNumberPath<number>;
    readonly IdHeaderPpl: QNumberPath<number>;
    readonly IdArea: QNumberPath<number>;
    readonly DibuatTanggal: QDateTimeOffsetPath<string>;
    readonly Area: QEntityPath<QDTO_Area>;
}
export declare const qDTO_PplArea: QDTO_PplArea;
export declare class QDTO_PplAreaId extends QId<DTO_PplAreaId> {
    private readonly params;
    getParams(): {};
}
export declare class QDTO_PplAttachment extends QueryObject {
    readonly Id: QNumberPath<number>;
    readonly IdHeaderPpl: QNumberPath<number>;
    readonly Label: QStringPath<string>;
    readonly File: QStringPath<string>;
    readonly DibuatTanggal: QDateTimeOffsetPath<string>;
    readonly Base64Data: QStringPath<string>;
}
export declare const qDTO_PplAttachment: QDTO_PplAttachment;
export declare class QDTO_PplAttachmentId extends QId<DTO_PplAttachmentId> {
    private readonly params;
    getParams(): {};
}
export declare class QDTO_PplBudgetAlokasi extends QueryObject {
    readonly Id: QNumberPath<number>;
    readonly IdHeaderPpl: QNumberPath<number>;
    readonly IdHeaderProject: QNumberPath<number>;
    readonly IdAlokasi: QNumberPath<number>;
    readonly IdAlokasiDetail: QNumberPath<number>;
    readonly Status: QStringPath<string>;
    readonly NoDokumenResi: QStringPath<string>;
    readonly StatusRealisasi: QBooleanPath<boolean>;
    readonly Bulan: QNumberPath<number>;
    readonly NilaiBudget: QNumberPath<number>;
    readonly DibuatTanggal: QDateTimeOffsetPath<string>;
}
export declare const qDTO_PplBudgetAlokasi: QDTO_PplBudgetAlokasi;
export declare class QDTO_PplBudgetAlokasiId extends QId<DTO_PplBudgetAlokasiId> {
    private readonly params;
    getParams(): {};
}
export declare class QDTO_PplDetailProduk extends QueryObject {
    readonly Id: QNumberPath<number>;
    readonly IdHeaderPpl: QNumberPath<number>;
    readonly KodeProduk: QStringPath<string>;
    readonly NamaProduk: QStringPath<string>;
    readonly Qty: QNumberPath<number>;
    readonly Biaya: QNumberPath<number>;
    readonly PPN: QNumberPath<number>;
    readonly TotalBiaya: QNumberPath<number>;
    readonly DibuatTanggal: QDateTimeOffsetPath<string>;
}
export declare const qDTO_PplDetailProduk: QDTO_PplDetailProduk;
export declare class QDTO_PplDetailProdukId extends QId<DTO_PplDetailProdukId> {
    private readonly params;
    getParams(): {};
}
export declare class QDTO_PplDetails extends QueryObject {
    readonly Id: QNumberPath<number>;
    readonly IdHeaderPpl: QNumberPath<number>;
    readonly NamaBiaya: QStringPath<string>;
    readonly Keterangan: QStringPath<string>;
    readonly Biaya: QNumberPath<number>;
    readonly IdSales: QNumberPath<number>;
    readonly NamaSales: QStringPath<string>;
    readonly Qty: QNumberPath<number>;
    readonly TotalBiaya: QNumberPath<number>;
    readonly Target: QNumberPath<number>;
    readonly Insentif: QNumberPath<number>;
    readonly TargetGt: QNumberPath<number>;
    readonly InsentifGt: QNumberPath<number>;
    readonly BobotGt: QNumberPath<number>;
    readonly TargetMt: QNumberPath<number>;
    readonly InsentifMt: QNumberPath<number>;
    readonly BobotMt: QNumberPath<number>;
    readonly Ratio: QNumberPath<number>;
    readonly TargetSe: QEntityPath<QTargetSeDto>;
    readonly Sosmed: QEntityPath<QSosmedDto>;
    readonly TipeSe: QStringPath<string>;
    readonly Bulan: QStringPath<string>;
    readonly Periode: QDateTimeOffsetPath<string>;
    readonly PeriodeAwal: QDateTimeOffsetPath<string>;
    readonly PeriodeAkhir: QDateTimeOffsetPath<string>;
    readonly Value: QNumberPath<number>;
    readonly Tanggal: QDateTimeOffsetPath<string>;
    readonly JamMulai: QDateTimeOffsetPath<string>;
    readonly JamSelesai: QDateTimeOffsetPath<string>;
    readonly DibuatTanggal: QDateTimeOffsetPath<string>;
}
export declare const qDTO_PplDetails: QDTO_PplDetails;
export declare class QDTO_PplDetailsId extends QId<DTO_PplDetailsId> {
    private readonly params;
    getParams(): {};
}
export declare class QDTO_PplOutlet extends QueryObject {
    readonly Id: QNumberPath<number>;
    readonly IdHeaderPpl: QNumberPath<number>;
    readonly IdOutlet: QNumberPath<number>;
    readonly DibuatTanggal: QDateTimeOffsetPath<string>;
    readonly Outlet: QEntityPath<QDTO_Outlet>;
}
export declare const qDTO_PplOutlet: QDTO_PplOutlet;
export declare class QDTO_PplOutletId extends QId<DTO_PplOutletId> {
    private readonly params;
    getParams(): {};
}
export declare class QDTO_Produk extends QueryObject {
    readonly Id: QNumberPath<number>;
    readonly ItemCode: QStringPath<string>;
    readonly ItemName: QStringPath<string>;
    readonly ItmsGrpCod: QStringPath<string>;
    readonly CodeBars: QStringPath<string>;
    readonly CostCenter: QStringPath<string>;
    readonly SubCategori: QStringPath<string>;
}
export declare const qDTO_Produk: QDTO_Produk;
export declare class QDTO_ProdukId extends QId<DTO_ProdukId> {
    private readonly params;
    getParams(): {};
}
export declare class QDTO_ProdukCategori extends QueryObject {
    readonly Id: QNumberPath<number>;
    readonly Code: QStringPath<string>;
    readonly Name: QStringPath<string>;
    readonly DibuatTanggal: QDateTimeOffsetPath<string>;
}
export declare const qDTO_ProdukCategori: QDTO_ProdukCategori;
export declare class QDTO_ProdukCategoriId extends QId<DTO_ProdukCategoriId> {
    private readonly params;
    getParams(): {};
}
export declare class QDTO_Provinsi extends QueryObject {
    readonly Id: QNumberPath<number>;
    readonly Nama: QStringPath<string>;
    readonly Aktif: QBooleanPath<boolean>;
    readonly DibuatTanggal: QDateTimeOffsetPath<string>;
    readonly Kotas: QEntityCollectionPath<QDTO_Kota>;
}
export declare const qDTO_Provinsi: QDTO_Provinsi;
export declare class QDTO_ProvinsiId extends QId<DTO_ProvinsiId> {
    private readonly params;
    getParams(): {};
}
export declare class QDTO_Kota extends QueryObject {
    readonly Id: QNumberPath<number>;
    readonly IdProvinsi: QNumberPath<number>;
    readonly Nama: QStringPath<string>;
    readonly Aktif: QBooleanPath<boolean>;
    readonly DibuatTanggal: QDateTimeOffsetPath<string>;
    readonly Provinsi: QEntityPath<QDTO_Provinsi>;
    readonly Kecamatans: QEntityCollectionPath<QDTO_Kecamatan>;
}
export declare const qDTO_Kota: QDTO_Kota;
export declare class QDTO_KotaId extends QId<DTO_KotaId> {
    private readonly params;
    getParams(): {};
}
export declare class QDTO_Kecamatan extends QueryObject {
    readonly Id: QNumberPath<number>;
    readonly IdProvinsi: QNumberPath<number>;
    readonly IdKota: QNumberPath<number>;
    readonly Nama: QStringPath<string>;
    readonly Aktif: QBooleanPath<boolean>;
    readonly DibuatTanggal: QDateTimeOffsetPath<string>;
    readonly Provinsi: QEntityPath<QDTO_Provinsi>;
    readonly Kota: QEntityPath<QDTO_Kota>;
    readonly Kelurahans: QEntityCollectionPath<QDTO_Kelurahan>;
}
export declare const qDTO_Kecamatan: QDTO_Kecamatan;
export declare class QDTO_KecamatanId extends QId<DTO_KecamatanId> {
    private readonly params;
    getParams(): {};
}
export declare class QDTO_Kelurahan extends QueryObject {
    readonly Id: QNumberPath<number>;
    readonly IdProvinsi: QNumberPath<number>;
    readonly IdKota: QNumberPath<number>;
    readonly IdKecamatan: QNumberPath<number>;
    readonly Nama: QStringPath<string>;
    readonly Aktif: QBooleanPath<boolean>;
    readonly DibuatTanggal: QDateTimeOffsetPath<string>;
    readonly Provinsi: QEntityPath<QDTO_Provinsi>;
    readonly Kota: QEntityPath<QDTO_Kota>;
    readonly Kecamatan: QEntityPath<QDTO_Kecamatan>;
}
export declare const qDTO_Kelurahan: QDTO_Kelurahan;
export declare class QDTO_KelurahanId extends QId<DTO_KelurahanId> {
    private readonly params;
    getParams(): {};
}
export declare class QDTO_Region extends QueryObject {
    readonly Id: QNumberPath<number>;
    readonly Nama: QStringPath<string>;
    readonly IdRegion: QNumberPath<number>;
    readonly Aktif: QBooleanPath<boolean>;
    readonly DibuatTanggal: QDateTimeOffsetPath<string>;
    readonly Area: QEntityCollectionPath<QDTO_Area>;
}
export declare const qDTO_Region: QDTO_Region;
export declare class QDTO_RegionId extends QId<DTO_RegionId> {
    private readonly params;
    getParams(): {};
}
export declare class QDTO_Resi extends QueryObject {
    readonly Id: QNumberPath<number>;
    readonly NoDokumen: QStringPath<string>;
    readonly IdPpl: QNumberPath<number>;
    readonly JenisKlaim: QStringPath<string>;
    readonly UniqueId: QStringPath<string>;
    readonly NilaiKlaim: QNumberPath<number>;
    readonly NoDistributor: QStringPath<string>;
    readonly PeriodeAwal: QDateTimeOffsetPath<string>;
    readonly PeriodeAkhir: QDateTimeOffsetPath<string>;
    readonly IdArea: QNumberPath<number>;
    readonly FakturPajak: QStringPath<string>;
    readonly TanggalFakturPajak: QDateTimeOffsetPath<string>;
    readonly IdBrand: QNumberPath<number>;
    readonly IdCashback: QNumberPath<number>;
    readonly IdCashbackDetail: QNumberPath<number>;
    readonly ClosePettycash: QBooleanPath<boolean>;
    readonly Status: QStringPath<string>;
    readonly Aktif: QBooleanPath<boolean>;
    readonly DibuatOleh: QStringPath<string>;
    readonly Keterangan: QStringPath<string>;
    readonly AllOutlet: QNumberPath<number>;
    readonly AllArea: QBooleanPath<boolean>;
    readonly OutletLainnya: QStringPath<string>;
    readonly NamaArea: QStringPath<string>;
    readonly Syarat: QEntityPath<QSyaratDto>;
    readonly ResiOutlet: QEntityCollectionPath<QDTO_ResiOutlet>;
    readonly ResiDetailProduk: QEntityCollectionPath<QDTO_ResiDetailProduk>;
    readonly ResiPic: QEntityCollectionPath<QDTO_ResiPic>;
    readonly ResiAttachment: QEntityCollectionPath<QDTO_ResiAttachment>;
}
export declare const qDTO_Resi: QDTO_Resi;
export declare class QDTO_ResiId extends QId<DTO_ResiId> {
    private readonly params;
    getParams(): {};
}
export declare class QDTO_ResiOutlet extends QueryObject {
    readonly Id: QNumberPath<number>;
    readonly IdResi: QNumberPath<number>;
    readonly IdOutlet: QNumberPath<number>;
    readonly DibuatTanggal: QDateTimeOffsetPath<string>;
    readonly Outlet: QEntityPath<QDTO_Outlet>;
}
export declare const qDTO_ResiOutlet: QDTO_ResiOutlet;
export declare class QDTO_ResiOutletId extends QId<DTO_ResiOutletId> {
    private readonly params;
    getParams(): {};
}
export declare class QDTO_Sales extends QueryObject {
    readonly Id: QNumberPath<number>;
    readonly IdArea: QNumberPath<number>;
    readonly AreaName: QStringPath<string>;
    readonly IdDistributor: QNumberPath<number>;
    readonly DistributorName: QStringPath<string>;
    readonly Nama: QStringPath<string>;
    readonly KodeDistributor: QStringPath<string>;
    readonly NamaDistributor: QStringPath<string>;
    readonly Keterangan: QStringPath<string>;
    readonly Aktif: QBooleanPath<boolean>;
    readonly DibuatTanggal: QDateTimeOffsetPath<string>;
    readonly Area: QEntityPath<QDTO_Area>;
    readonly Distributor: QEntityPath<QDTO_Distributor>;
}
export declare const qDTO_Sales: QDTO_Sales;
export declare class QDTO_SalesId extends QId<DTO_SalesId> {
    private readonly params;
    getParams(): {};
}
export declare class QDTO_Salesman extends QueryObject {
    readonly Id: QNumberPath<number>;
    readonly IdArea: QNumberPath<number>;
    readonly AreaName: QStringPath<string>;
    readonly IdDistributor: QNumberPath<number>;
    readonly DistributorName: QStringPath<string>;
    readonly Nama: QStringPath<string>;
    readonly KodeDistributor: QStringPath<string>;
    readonly NamaDistributor: QStringPath<string>;
    readonly Keterangan: QStringPath<string>;
    readonly Aktif: QBooleanPath<boolean>;
    readonly DibuatTanggal: QDateTimeOffsetPath<string>;
    readonly Area: QEntityPath<QDTO_Area>;
    readonly Distributor: QEntityPath<QDTO_Distributor>;
}
export declare const qDTO_Salesman: QDTO_Salesman;
export declare class QDTO_SalesmanId extends QId<DTO_SalesmanId> {
    private readonly params;
    getParams(): {};
}
export declare class QDTO_Settings extends QueryObject {
    readonly Id: QNumberPath<number>;
    readonly FeatureName: QStringPath<string>;
    readonly SettingKey: QStringPath<string>;
    readonly SettingValue: QStringPath<string>;
    readonly DibuatTanggal: QDateTimeOffsetPath<string>;
}
export declare const qDTO_Settings: QDTO_Settings;
export declare class QDTO_SettingsId extends QId<DTO_SettingsId> {
    private readonly params;
    getParams(): {};
}
export declare class QDTO_SkenarioBudget extends QueryObject {
    readonly Id: QNumberPath<number>;
    readonly NoDokumen: QStringPath<string>;
    readonly Tahun: QNumberPath<number>;
    readonly Nama: QStringPath<string>;
    readonly Tipe: QStringPath<string>;
    readonly BudgetAwal: QNumberPath<number>;
    readonly BudgetSisa: QNumberPath<number>;
    readonly DibuatTanggal: QDateTimeOffsetPath<string>;
    readonly Status: QStringPath<string>;
    readonly DibuatOleh: QStringPath<string>;
    readonly UserId: QNumberPath<number>;
}
export declare const qDTO_SkenarioBudget: QDTO_SkenarioBudget;
export declare class QDTO_SkenarioBudgetId extends QId<DTO_SkenarioBudgetId> {
    private readonly params;
    getParams(): {};
}
export declare class QDTO_SkenarioBudgetList extends QueryObject {
    readonly Id: QNumberPath<number>;
    readonly NoDokumen: QStringPath<string>;
    readonly Tahun: QNumberPath<number>;
    readonly Nama: QStringPath<string>;
    readonly Tipe: QStringPath<string>;
    readonly BudgetAwal: QNumberPath<number>;
    readonly BudgetSisa: QNumberPath<number>;
    readonly DibuatTanggal: QDateTimeOffsetPath<string>;
    readonly Status: QStringPath<string>;
    readonly DibuatOleh: QStringPath<string>;
    readonly UserId: QNumberPath<number>;
}
export declare const qDTO_SkenarioBudgetList: QDTO_SkenarioBudgetList;
export declare class QDTO_SkenarioBudgetListId extends QId<DTO_SkenarioBudgetListId> {
    private readonly params;
    getParams(): {};
}
export declare class QDTO_MasterKeyVisual extends QueryObject {
    readonly Id: QNumberPath<number>;
    readonly Nama: QStringPath<string>;
    readonly Status: QNumberPath<number>;
}
export declare const qDTO_MasterKeyVisual: QDTO_MasterKeyVisual;
export declare class QDTO_MasterKeyVisualId extends QId<DTO_MasterKeyVisualId> {
    private readonly params;
    getParams(): {};
}
export declare class QDTO_MasterOrgSlim extends QueryObject {
    readonly Id: QNumberPath<number>;
    readonly CompanyName: QStringPath<string>;
}
export declare const qDTO_MasterOrgSlim: QDTO_MasterOrgSlim;
export declare class QDTO_MasterOrgSlimId extends QId<DTO_MasterOrgSlimId> {
    private readonly params;
    getParams(): {};
}
export declare class QDTO_UserArea extends QueryObject {
    readonly Id: QNumberPath<number>;
    readonly IdUser: QNumberPath<number>;
    readonly KodeArea: QStringPath<string>;
    readonly Nama: QStringPath<string>;
    readonly DibuatTanggal: QDateTimeOffsetPath<string>;
}
export declare const qDTO_UserArea: QDTO_UserArea;
export declare class QDTO_UserAreaId extends QId<DTO_UserAreaId> {
    private readonly params;
    getParams(): {};
}
export declare class QDTO_UserDistributor extends QueryObject {
    readonly Id: QNumberPath<number>;
    readonly IdUser: QNumberPath<number>;
    readonly CardCode: QStringPath<string>;
    readonly Nama: QStringPath<string>;
    readonly DibuatTanggal: QDateTimeOffsetPath<string>;
}
export declare const qDTO_UserDistributor: QDTO_UserDistributor;
export declare class QDTO_UserDistributorId extends QId<DTO_UserDistributorId> {
    private readonly params;
    getParams(): {};
}
export declare class QDTO_ResiDetailProduk extends QueryObject {
    readonly Id: QNumberPath<number>;
    readonly IdResi: QNumberPath<number>;
    readonly IdPplProduk: QNumberPath<number>;
    readonly KodeProduk: QStringPath<string>;
    readonly NamaProduk: QStringPath<string>;
    readonly Qty: QNumberPath<number>;
    readonly Biaya: QNumberPath<number>;
    readonly PPN: QNumberPath<number>;
    readonly TotalBiaya: QNumberPath<number>;
    readonly DibuatTanggal: QDateTimeOffsetPath<string>;
}
export declare const qDTO_ResiDetailProduk: QDTO_ResiDetailProduk;
export declare class QDTO_ResiDetailProdukId extends QId<DTO_ResiDetailProdukId> {
    private readonly params;
    getParams(): {};
}
export declare class QDTO_ResiPic extends QueryObject {
    readonly Id: QNumberPath<number>;
    readonly IdResi: QNumberPath<number>;
    readonly IdSe: QNumberPath<number>;
    readonly Nik: QStringPath<string>;
    readonly Nama: QStringPath<string>;
    readonly IdArea: QNumberPath<number>;
    readonly DibuatTanggal: QDateTimeOffsetPath<string>;
}
export declare const qDTO_ResiPic: QDTO_ResiPic;
export declare class QDTO_ResiPicId extends QId<DTO_ResiPicId> {
    private readonly params;
    getParams(): {};
}
export declare class QDTO_ResiAttachment extends QueryObject {
    readonly Id: QNumberPath<number>;
    readonly IdResi: QNumberPath<number>;
    readonly Label: QStringPath<string>;
    readonly File: QStringPath<string>;
    readonly IdPengajuanKlaim: QNumberPath<number>;
    readonly DibuatTanggal: QDateTimeOffsetPath<string>;
    readonly DibuatOleh: QStringPath<string>;
    readonly Base64Data: QStringPath<string>;
}
export declare const qDTO_ResiAttachment: QDTO_ResiAttachment;
export declare class QDTO_ResiAttachmentId extends QId<DTO_ResiAttachmentId> {
    private readonly params;
    getParams(): {};
}
export declare class QDtoHistoryTransaksiEstimasi extends QueryObject {
    readonly Id: QNumberPath<number>;
    readonly NoDokumenPpl: QStringPath<string>;
    readonly IdAlokasi: QNumberPath<number>;
    readonly Bulan: QNumberPath<number>;
    readonly Tahun: QNumberPath<number>;
    readonly Nilai: QNumberPath<number>;
    readonly Status: QStringPath<string>;
    readonly DibuatTanggal: QDateTimeOffsetPath<string>;
    readonly PeriodeAwal: QDateTimeOffsetPath<string>;
    readonly PeriodeAkhir: QDateTimeOffsetPath<string>;
    readonly BudgetAlokasi: QEntityPath<QDTO_BudgetAlokasi>;
}
export declare const qDtoHistoryTransaksiEstimasi: QDtoHistoryTransaksiEstimasi;
export declare class QDtoHistoryTransaksiEstimasiId extends QId<DtoHistoryTransaksiEstimasiId> {
    private readonly params;
    getParams(): {};
}
export declare class QDtoHistoryTransaksiRealiasasi extends QueryObject {
    readonly Id: QNumberPath<number>;
    readonly NoDokumenPpl: QStringPath<string>;
    readonly IdAlokasi: QNumberPath<number>;
    readonly Bulan: QNumberPath<number>;
    readonly Tahun: QNumberPath<number>;
    readonly Nilai: QNumberPath<number>;
    readonly Status: QStringPath<string>;
    readonly DibuatTanggal: QDateTimeOffsetPath<string>;
    readonly PeriodeAwal: QDateTimeOffsetPath<string>;
    readonly PeriodeAkhir: QDateTimeOffsetPath<string>;
    readonly BudgetAlokasi: QEntityPath<QDTO_BudgetAlokasi>;
}
export declare const qDtoHistoryTransaksiRealiasasi: QDtoHistoryTransaksiRealiasasi;
export declare class QDtoHistoryTransaksiRealiasasiId extends QId<DtoHistoryTransaksiRealiasasiId> {
    private readonly params;
    getParams(): {};
}
export declare class QUserDto extends QueryObject {
    readonly Users: QEntityCollectionPath<QUserItem>;
}
export declare const qUserDto: QUserDto;
export declare class QUserItem extends QueryObject {
    readonly UserId: QNumberPath<number>;
    readonly Aktif: QBooleanPath<boolean>;
    readonly Nama: QStringPath<string>;
    readonly Email: QStringPath<string>;
}
export declare const qUserItem: QUserItem;
export declare class QTargetSeDto extends QueryObject {
    readonly TargetAo: QEntityCollectionPath<QTargetItem>;
    readonly TargetValue: QEntityCollectionPath<QTargetItem>;
}
export declare const qTargetSeDto: QTargetSeDto;
export declare class QTargetItem extends QueryObject {
    readonly Bulan: QStringPath<string>;
    readonly Value: QNumberPath<number>;
}
export declare const qTargetItem: QTargetItem;
export declare class QSosmedDto extends QueryObject {
    readonly Tiktok: QEntityCollectionPath<QPlatformItem>;
    readonly Instagram: QEntityCollectionPath<QPlatformItem>;
    readonly Youtube: QEntityCollectionPath<QPlatformItem>;
    readonly Facebook: QEntityCollectionPath<QPlatformItem>;
    readonly Twitter: QEntityCollectionPath<QPlatformItem>;
}
export declare const qSosmedDto: QSosmedDto;
export declare class QPlatformItem extends QueryObject {
    readonly Link: QStringPath<string>;
    readonly Followers: QStringPath<string>;
    readonly View: QStringPath<string>;
    readonly Like: QStringPath<string>;
    readonly AvView: QStringPath<string>;
    readonly Rate: QStringPath<string>;
    readonly CPV: QStringPath<string>;
    readonly TotalRate: QStringPath<string>;
}
export declare const qPlatformItem: QPlatformItem;
export declare class QBookAuthor extends QueryObject {
    readonly BookId: QNumberPath<number>;
    readonly AuthorId: QNumberPath<number>;
    readonly Book: QEntityPath<QBook>;
    readonly Author: QEntityPath<QAuthor>;
}
export declare const qBookAuthor: QBookAuthor;
export declare class QSyaratDto extends QueryObject {
    readonly Syarat: QEntityCollectionPath<QSyaratItem>;
}
export declare const qSyaratDto: QSyaratDto;
export declare class QSyaratItem extends QueryObject {
    readonly ItemId: QNumberPath<number>;
    readonly Syarat: QStringPath<string>;
    readonly Keterangan: QStringPath<string>;
}
export declare const qSyaratItem: QSyaratItem;
