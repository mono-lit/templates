// @ts-nocheck
import { QNumberPath, QStringPath, QBooleanPath, QDateTimeOffsetPath, QEntityPath, QEntityCollectionPath, QueryObject, QId, QNumberParam, QStringParam, QCollectionPath, QNumberCollection, QEnumPath } from "@odata2ts/odata-query-objects";
import { RoleTypeEnum, CompanyStatusType } from "./DefaultModel";
export class QDTO_BudgetAlokasi extends QueryObject {
    Id = new QNumberPath(this.withPrefix("Id"));
    IdHeaderProjek = new QNumberPath(this.withPrefix("IdHeaderProjek"));
    IdPostBudget = new QNumberPath(this.withPrefix("IdPostBudget"));
    MetodePembagian = new QStringPath(this.withPrefix("MetodePembagian"));
    KodeDept = new QStringPath(this.withPrefix("KodeDept"));
    NamaActivity = new QStringPath(this.withPrefix("NamaActivity"));
    NamaActivity1 = new QStringPath(this.withPrefix("NamaActivity1"));
    NamaActivity2 = new QStringPath(this.withPrefix("NamaActivity2"));
    NilaiBudget = new QNumberPath(this.withPrefix("NilaiBudget"));
    SisaNilaiBudget = new QNumberPath(this.withPrefix("SisaNilaiBudget"));
    IdSkenario = new QNumberPath(this.withPrefix("IdSkenario"));
    Aktif = new QBooleanPath(this.withPrefix("Aktif"));
    Tahun = new QNumberPath(this.withPrefix("Tahun"));
    DibuatTanggal = new QDateTimeOffsetPath(this.withPrefix("DibuatTanggal"));
    PostBudget = new QEntityPath(this.withPrefix("PostBudget"), () => QDTO_PostBudget);
    SkenarioBudget = new QEntityPath(this.withPrefix("SkenarioBudget"), () => QDTO_SkenarioBudget);
    BudgetAlokasiDetail = new QEntityCollectionPath(this.withPrefix("BudgetAlokasiDetail"), () => QDTO_BudgetAlokasiDetail);
}
export const qDTO_BudgetAlokasi = new QDTO_BudgetAlokasi();
export class QDTO_BudgetAlokasiId extends QId {
    params = [new QNumberParam("Id")];
    getParams() {
        return this.params;
    }
}
export class QDTO_BudgetAlokasiList extends QueryObject {
    Id = new QNumberPath(this.withPrefix("Id"));
    IdHeaderProjek = new QNumberPath(this.withPrefix("IdHeaderProjek"));
    NomorDokumenProjek = new QStringPath(this.withPrefix("NomorDokumenProjek"));
    IdPostBudget = new QNumberPath(this.withPrefix("IdPostBudget"));
    MetodePembagian = new QStringPath(this.withPrefix("MetodePembagian"));
    NilaiBudget = new QNumberPath(this.withPrefix("NilaiBudget"));
    SisaNilaiBudget = new QNumberPath(this.withPrefix("SisaNilaiBudget"));
    IdSkenario = new QNumberPath(this.withPrefix("IdSkenario"));
    Aktif = new QBooleanPath(this.withPrefix("Aktif"));
    Tahun = new QNumberPath(this.withPrefix("Tahun"));
    DibuatTanggal = new QDateTimeOffsetPath(this.withPrefix("DibuatTanggal"));
    PostBudget = new QEntityPath(this.withPrefix("PostBudget"), () => QDTO_PostBudget);
    BudgetAlokasiDetail = new QEntityCollectionPath(this.withPrefix("BudgetAlokasiDetail"), () => QDTO_BudgetAlokasiDetail);
}
export const qDTO_BudgetAlokasiList = new QDTO_BudgetAlokasiList();
export class QDTO_BudgetAlokasiListId extends QId {
    params = [new QNumberParam("Id")];
    getParams() {
        return this.params;
    }
}
export class QDTO_BudgetLedger extends QueryObject {
    Id = new QNumberPath(this.withPrefix("Id"));
    IdSkenario = new QNumberPath(this.withPrefix("IdSkenario"));
    IdHeaderProject = new QNumberPath(this.withPrefix("IdHeaderProject"));
    HeaderProjectNoDokumen = new QStringPath(this.withPrefix("HeaderProjectNoDokumen"));
    IdBudgetAlokasi = new QNumberPath(this.withPrefix("IdBudgetAlokasi"));
    IdBudgetAlokasiDetail = new QNumberPath(this.withPrefix("IdBudgetAlokasiDetail"));
    IdHeadePpl = new QNumberPath(this.withPrefix("IdHeadePpl"));
    HeaderPplNoDokumen = new QStringPath(this.withPrefix("HeaderPplNoDokumen"));
    Bulan = new QNumberPath(this.withPrefix("Bulan"));
    BudgetAlokasiNilaiBudget = new QNumberPath(this.withPrefix("BudgetAlokasiNilaiBudget"));
    BudgetAlokasiSisaNilaiBudget = new QNumberPath(this.withPrefix("BudgetAlokasiSisaNilaiBudget"));
    Kredit = new QNumberPath(this.withPrefix("Kredit"));
    Jenis = new QStringPath(this.withPrefix("Jenis"));
    Debit = new QNumberPath(this.withPrefix("Debit"));
    DibuatTanggal = new QDateTimeOffsetPath(this.withPrefix("DibuatTanggal"));
    UserId = new QNumberPath(this.withPrefix("UserId"));
    DibuatOleh = new QStringPath(this.withPrefix("DibuatOleh"));
    Keterangan = new QStringPath(this.withPrefix("Keterangan"));
    SkenarioBudget = new QEntityPath(this.withPrefix("SkenarioBudget"), () => QDTO_SkenarioBudget);
    HeaderProjek = new QEntityPath(this.withPrefix("HeaderProjek"), () => QDTO_HeaderProjek);
    BudgetAlokasi = new QEntityPath(this.withPrefix("BudgetAlokasi"), () => QDTO_BudgetAlokasi);
    HeaderPpl = new QEntityPath(this.withPrefix("HeaderPpl"), () => QDTO_HeaderPpl);
}
export const qDTO_BudgetLedger = new QDTO_BudgetLedger();
export class QDTO_BudgetLedgerId extends QId {
    params = [new QNumberParam("Id")];
    getParams() {
        return this.params;
    }
}
export class QDTO_BudgetAlokasiRemaining extends QueryObject {
    sid = new QNumberPath(this.withPrefix("sid"));
    CoaId = new QNumberPath(this.withPrefix("CoaId"));
    CoaNama = new QStringPath(this.withPrefix("CoaNama"));
    Tahun = new QNumberPath(this.withPrefix("Tahun"));
    Bulan = new QNumberPath(this.withPrefix("Bulan"));
    IdPostBudget = new QNumberPath(this.withPrefix("IdPostBudget"));
    NamaPostBudget = new QStringPath(this.withPrefix("NamaPostBudget"));
    IdBudgetAlokasi = new QNumberPath(this.withPrefix("IdBudgetAlokasi"));
    Budget = new QNumberPath(this.withPrefix("Budget"));
    Actual = new QNumberPath(this.withPrefix("Actual"));
    Remaining = new QNumberPath(this.withPrefix("Remaining"));
}
export const qDTO_BudgetAlokasiRemaining = new QDTO_BudgetAlokasiRemaining();
export class QDTO_BudgetAlokasiRemainingId extends QId {
    params = [new QNumberParam("sid")];
    getParams() {
        return this.params;
    }
}
export class QDTO_Budget extends QueryObject {
    Id = new QNumberPath(this.withPrefix("Id"));
    YEAR = new QNumberPath(this.withPrefix("YEAR"));
    CoaKode = new QStringPath(this.withPrefix("CoaKode"));
    CoaName = new QStringPath(this.withPrefix("CoaName"));
    CoaId = new QNumberPath(this.withPrefix("CoaId"));
    DeptKode = new QStringPath(this.withPrefix("DeptKode"));
    NamaBrand = new QStringPath(this.withPrefix("NamaBrand"));
    NamaBudget = new QStringPath(this.withPrefix("NamaBudget"));
    DeptNama = new QStringPath(this.withPrefix("DeptNama"));
    Jan = new QNumberPath(this.withPrefix("Jan"));
    Feb = new QNumberPath(this.withPrefix("Feb"));
    Mar = new QNumberPath(this.withPrefix("Mar"));
    Apr = new QNumberPath(this.withPrefix("Apr"));
    Mei = new QNumberPath(this.withPrefix("Mei"));
    Jun = new QNumberPath(this.withPrefix("Jun"));
    Jul = new QNumberPath(this.withPrefix("Jul"));
    Agt = new QNumberPath(this.withPrefix("Agt"));
    Sep = new QNumberPath(this.withPrefix("Sep"));
    Okt = new QNumberPath(this.withPrefix("Okt"));
    Nov = new QNumberPath(this.withPrefix("Nov"));
    Des = new QNumberPath(this.withPrefix("Des"));
    Total = new QNumberPath(this.withPrefix("Total"));
    Details = new QEntityCollectionPath(this.withPrefix("Details"), () => QDTO_BudgetDetail);
}
export const qDTO_Budget = new QDTO_Budget();
export class QDTO_BudgetId extends QId {
    params = [new QStringParam("CoaKode"), new QStringParam("DeptKode"), new QStringParam("NamaBudget"), new QNumberParam("YEAR")];
    getParams() {
        return this.params;
    }
}
export class QDTO_MasterBudgets extends QueryObject {
    Id = new QNumberPath(this.withPrefix("Id"));
    IdPostBudget = new QNumberPath(this.withPrefix("IdPostBudget"));
    Year = new QNumberPath(this.withPrefix("Year"));
    Nama = new QStringPath(this.withPrefix("Nama"));
    Kode = new QStringPath(this.withPrefix("Kode"));
    DeptKode = new QStringPath(this.withPrefix("DeptKode"));
    IdBrand = new QNumberPath(this.withPrefix("IdBrand"));
    CoaId = new QNumberPath(this.withPrefix("CoaId"));
    Bulan_1 = new QNumberPath(this.withPrefix("Bulan_1"));
    Bulan_2 = new QNumberPath(this.withPrefix("Bulan_2"));
    Bulan_3 = new QNumberPath(this.withPrefix("Bulan_3"));
    Bulan_4 = new QNumberPath(this.withPrefix("Bulan_4"));
    Bulan_5 = new QNumberPath(this.withPrefix("Bulan_5"));
    Bulan_6 = new QNumberPath(this.withPrefix("Bulan_6"));
    Bulan_7 = new QNumberPath(this.withPrefix("Bulan_7"));
    Bulan_8 = new QNumberPath(this.withPrefix("Bulan_8"));
    Bulan_9 = new QNumberPath(this.withPrefix("Bulan_9"));
    Bulan_10 = new QNumberPath(this.withPrefix("Bulan_10"));
    Bulan_11 = new QNumberPath(this.withPrefix("Bulan_11"));
    Bulan_12 = new QNumberPath(this.withPrefix("Bulan_12"));
    TotalBudget = new QNumberPath(this.withPrefix("TotalBudget"));
    TotalBudgetSisa = new QNumberPath(this.withPrefix("TotalBudgetSisa"));
    IsLocked = new QBooleanPath(this.withPrefix("IsLocked"));
    UserId = new QNumberPath(this.withPrefix("UserId"));
    DibuatTanggal = new QDateTimeOffsetPath(this.withPrefix("DibuatTanggal"));
    DibuatOleh = new QStringPath(this.withPrefix("DibuatOleh"));
    MasterBudgetIds = new QStringPath(this.withPrefix("MasterBudgetIds"));
    MasterBudgetIdList = new QCollectionPath(this.withPrefix("MasterBudgetIdList"), () => QNumberCollection);
}
export const qDTO_MasterBudgets = new QDTO_MasterBudgets();
export class QDTO_MasterBudgetsId extends QId {
    params = [new QNumberParam("Id")];
    getParams() {
        return this.params;
    }
}
export class QDTO_BudgetDetail extends QueryObject {
    IdBudgetSap = new QNumberPath(this.withPrefix("IdBudgetSap"));
    IdBrand = new QNumberPath(this.withPrefix("IdBrand"));
    YEAR = new QNumberPath(this.withPrefix("YEAR"));
    Bulan = new QNumberPath(this.withPrefix("Bulan"));
    Kode = new QStringPath(this.withPrefix("Kode"));
    CoaNama = new QStringPath(this.withPrefix("CoaNama"));
    NamaPostBudget = new QStringPath(this.withPrefix("NamaPostBudget"));
    BrandNama = new QStringPath(this.withPrefix("BrandNama"));
    NamaBudget = new QStringPath(this.withPrefix("NamaBudget"));
    IdPostBudget = new QNumberPath(this.withPrefix("IdPostBudget"));
    IsLocked = new QBooleanPath(this.withPrefix("IsLocked"));
    DeptKode = new QStringPath(this.withPrefix("DeptKode"));
    Kategori = new QStringPath(this.withPrefix("Kategori"));
    Channel = new QStringPath(this.withPrefix("Channel"));
    Deskripsi = new QStringPath(this.withPrefix("Deskripsi"));
    IdMasterBudget = new QNumberPath(this.withPrefix("IdMasterBudget"));
    BulanMasterBudget = new QNumberPath(this.withPrefix("BulanMasterBudget"));
    DeptCodeMasterBudget = new QStringPath(this.withPrefix("DeptCodeMasterBudget"));
    YearMasterBudget = new QNumberPath(this.withPrefix("YearMasterBudget"));
    BudgetMasterBudget = new QNumberPath(this.withPrefix("BudgetMasterBudget"));
}
export const qDTO_BudgetDetail = new QDTO_BudgetDetail();
export class QDTO_BudgetDetailId extends QId {
    params = [new QNumberParam("IdBudgetSap"), new QNumberParam("IdPostBudget"), new QStringParam("Kode"), new QStringParam("NamaBudget"), new QNumberParam("YEAR")];
    getParams() {
        return this.params;
    }
}
export class QDTO_Budgets extends QueryObject {
    Id = new QNumberPath(this.withPrefix("Id"));
    YEAR = new QNumberPath(this.withPrefix("YEAR"));
    CoaKode = new QStringPath(this.withPrefix("CoaKode"));
    CoaName = new QStringPath(this.withPrefix("CoaName"));
    CoaId = new QNumberPath(this.withPrefix("CoaId"));
    DeptKode = new QStringPath(this.withPrefix("DeptKode"));
    NamaBrand = new QStringPath(this.withPrefix("NamaBrand"));
    NamaBudget = new QStringPath(this.withPrefix("NamaBudget"));
    DeptNama = new QStringPath(this.withPrefix("DeptNama"));
    Jan = new QNumberPath(this.withPrefix("Jan"));
    Feb = new QNumberPath(this.withPrefix("Feb"));
    Mar = new QNumberPath(this.withPrefix("Mar"));
    Apr = new QNumberPath(this.withPrefix("Apr"));
    Mei = new QNumberPath(this.withPrefix("Mei"));
    Jun = new QNumberPath(this.withPrefix("Jun"));
    Jul = new QNumberPath(this.withPrefix("Jul"));
    Agt = new QNumberPath(this.withPrefix("Agt"));
    Sep = new QNumberPath(this.withPrefix("Sep"));
    Okt = new QNumberPath(this.withPrefix("Okt"));
    Nov = new QNumberPath(this.withPrefix("Nov"));
    Des = new QNumberPath(this.withPrefix("Des"));
    Total = new QNumberPath(this.withPrefix("Total"));
    Details = new QStringPath(this.withPrefix("Details"));
}
export const qDTO_Budgets = new QDTO_Budgets();
export class QDTO_BudgetsId extends QId {
    params = [new QNumberParam("Id")];
    getParams() {
        return this.params;
    }
}
export class QDTO_PPLH extends QueryObject {
    Id = new QNumberPath(this.withPrefix("Id"));
    Name = new QStringPath(this.withPrefix("Name"));
    PplDetails = new QEntityCollectionPath(this.withPrefix("PplDetails"), () => QDTO_PPLD);
}
export const qDTO_PPLH = new QDTO_PPLH();
export class QDTO_PPLHId extends QId {
    params = [new QNumberParam("Id")];
    getParams() {
        return this.params;
    }
}
export class QDTO_PPLD extends QueryObject {
    Id = new QNumberPath(this.withPrefix("Id"));
    IdHeader = new QNumberPath(this.withPrefix("IdHeader"));
    Name = new QStringPath(this.withPrefix("Name"));
}
export const qDTO_PPLD = new QDTO_PPLD();
export class QDTO_PPLDId extends QId {
    params = [new QNumberParam("Id")];
    getParams() {
        return this.params;
    }
}
export class QDTO_RETUR extends QueryObject {
    Id = new QNumberPath(this.withPrefix("Id"));
    Name = new QStringPath(this.withPrefix("Name"));
    ReturDetail = new QEntityCollectionPath(this.withPrefix("ReturDetail"), () => QDTO_RETURD);
    ReturProduct = new QEntityCollectionPath(this.withPrefix("ReturProduct"), () => QDTO_RETURP);
}
export const qDTO_RETUR = new QDTO_RETUR();
export class QDTO_RETURId extends QId {
    params = [new QNumberParam("Id")];
    getParams() {
        return this.params;
    }
}
export class QDTO_RETURD extends QueryObject {
    Id = new QNumberPath(this.withPrefix("Id"));
    IdHeader = new QNumberPath(this.withPrefix("IdHeader"));
    Name = new QStringPath(this.withPrefix("Name"));
}
export const qDTO_RETURD = new QDTO_RETURD();
export class QDTO_RETURDId extends QId {
    params = [new QNumberParam("Id")];
    getParams() {
        return this.params;
    }
}
export class QDTO_RETURP extends QueryObject {
    Id = new QNumberPath(this.withPrefix("Id"));
    IdHeader = new QNumberPath(this.withPrefix("IdHeader"));
    Name = new QStringPath(this.withPrefix("Name"));
}
export const qDTO_RETURP = new QDTO_RETURP();
export class QDTO_RETURPId extends QId {
    params = [new QNumberParam("Id")];
    getParams() {
        return this.params;
    }
}
export class QDTO_UserType extends QueryObject {
    Id = new QNumberPath(this.withPrefix("Id"));
    Nama = new QStringPath(this.withPrefix("Nama"));
    Kode = new QStringPath(this.withPrefix("Kode"));
}
export const qDTO_UserType = new QDTO_UserType();
export class QDTO_UserTypeId extends QId {
    params = [new QNumberParam("Id")];
    getParams() {
        return this.params;
    }
}
export class QMasterRole extends QueryObject {
    Id = new QNumberPath(this.withPrefix("Id"));
    RoleName = new QStringPath(this.withPrefix("RoleName"));
    RoleType = new QEnumPath(this.withPrefix("RoleType"), RoleTypeEnum);
    OrgId = new QNumberPath(this.withPrefix("OrgId"));
    JobPosId = new QNumberPath(this.withPrefix("JobPosId"));
    JobLvlId = new QNumberPath(this.withPrefix("JobLvlId"));
    Organization = new QEntityPath(this.withPrefix("Organization"), () => QMasterOrganization);
    JobPosition = new QEntityPath(this.withPrefix("JobPosition"), () => QMasterJobPosition);
    JobLevel = new QEntityPath(this.withPrefix("JobLevel"), () => QMasterJobLevel);
    Permissions = new QEntityCollectionPath(this.withPrefix("Permissions"), () => QPermissionRef);
}
export const qMasterRole = new QMasterRole();
export class QMasterRoleId extends QId {
    params = [new QNumberParam("Id")];
    getParams() {
        return this.params;
    }
}
export class QMasterOrganization extends QueryObject {
    Id = new QNumberPath(this.withPrefix("Id"));
    CompanyCode = new QStringPath(this.withPrefix("CompanyCode"));
    CompanyName = new QStringPath(this.withPrefix("CompanyName"));
    CompanyAddres = new QStringPath(this.withPrefix("CompanyAddres"));
    CompanyDescription = new QStringPath(this.withPrefix("CompanyDescription"));
    CompanyStatus = new QEnumPath(this.withPrefix("CompanyStatus"), CompanyStatusType);
}
export const qMasterOrganization = new QMasterOrganization();
export class QMasterOrganizationId extends QId {
    params = [new QNumberParam("Id")];
    getParams() {
        return this.params;
    }
}
export class QMasterJobPosition extends QueryObject {
    Id = new QNumberPath(this.withPrefix("Id"));
    PositionName = new QStringPath(this.withPrefix("PositionName"));
}
export const qMasterJobPosition = new QMasterJobPosition();
export class QMasterJobPositionId extends QId {
    params = [new QNumberParam("Id")];
    getParams() {
        return this.params;
    }
}
export class QMasterJobLevel extends QueryObject {
    Id = new QNumberPath(this.withPrefix("Id"));
    LevelName = new QStringPath(this.withPrefix("LevelName"));
    KodeJabatan = new QStringPath(this.withPrefix("KodeJabatan"));
}
export const qMasterJobLevel = new QMasterJobLevel();
export class QMasterJobLevelId extends QId {
    params = [new QNumberParam("Id")];
    getParams() {
        return this.params;
    }
}
export class QPermissionRef extends QueryObject {
    Id = new QNumberPath(this.withPrefix("Id"));
    RoleId = new QNumberPath(this.withPrefix("RoleId"));
    PermId = new QNumberPath(this.withPrefix("PermId"));
    CanView = new QBooleanPath(this.withPrefix("CanView"));
    CanEdit = new QBooleanPath(this.withPrefix("CanEdit"));
    CanDelete = new QBooleanPath(this.withPrefix("CanDelete"));
    CanCreate = new QBooleanPath(this.withPrefix("CanCreate"));
    CanApprove = new QBooleanPath(this.withPrefix("CanApprove"));
    CanReport = new QBooleanPath(this.withPrefix("CanReport"));
    Role = new QEntityPath(this.withPrefix("Role"), () => QMasterRole);
    Permission = new QEntityPath(this.withPrefix("Permission"), () => QMasterPermission);
}
export const qPermissionRef = new QPermissionRef();
export class QPermissionRefId extends QId {
    params = [new QNumberParam("Id")];
    getParams() {
        return this.params;
    }
}
export class QMasterPermission extends QueryObject {
    Id = new QNumberPath(this.withPrefix("Id"));
    ModuleName = new QStringPath(this.withPrefix("ModuleName"));
}
export const qMasterPermission = new QMasterPermission();
export class QMasterPermissionId extends QId {
    params = [new QNumberParam("Id")];
    getParams() {
        return this.params;
    }
}
export class QAuthor extends QueryObject {
    Id = new QNumberPath(this.withPrefix("Id"));
    Name = new QStringPath(this.withPrefix("Name"));
    Biography = new QStringPath(this.withPrefix("Biography"));
    DateOfBirth = new QDateTimeOffsetPath(this.withPrefix("DateOfBirth"));
    Nationality = new QStringPath(this.withPrefix("Nationality"));
    BookAuthors = new QEntityCollectionPath(this.withPrefix("BookAuthors"), () => QBookAuthor);
}
export const qAuthor = new QAuthor();
export class QAuthorId extends QId {
    params = [new QNumberParam("Id")];
    getParams() {
        return this.params;
    }
}
export class QBook extends QueryObject {
    Id = new QNumberPath(this.withPrefix("Id"));
    Title = new QStringPath(this.withPrefix("Title"));
    Genre = new QStringPath(this.withPrefix("Genre"));
    Price = new QNumberPath(this.withPrefix("Price"));
    PublicationYear = new QNumberPath(this.withPrefix("PublicationYear"));
    BookAuthors = new QEntityCollectionPath(this.withPrefix("BookAuthors"), () => QBookAuthor);
}
export const qBook = new QBook();
export class QBookId extends QId {
    params = [new QNumberParam("Id")];
    getParams() {
        return this.params;
    }
}
export class QDTO_Feature extends QueryObject {
    Id = new QNumberPath(this.withPrefix("Id"));
    Nama = new QStringPath(this.withPrefix("Nama"));
    Kode = new QStringPath(this.withPrefix("Kode"));
    Aktif = new QBooleanPath(this.withPrefix("Aktif"));
    DibuatTanggal = new QDateTimeOffsetPath(this.withPrefix("DibuatTanggal"));
}
export const qDTO_Feature = new QDTO_Feature();
export class QDTO_FeatureId extends QId {
    params = [new QNumberParam("Id")];
    getParams() {
        return this.params;
    }
}
export class QDTO_ApprovalConfig extends QueryObject {
    Id = new QNumberPath(this.withPrefix("Id"));
    IdFeature = new QNumberPath(this.withPrefix("IdFeature"));
    IdJenisProgram = new QNumberPath(this.withPrefix("IdJenisProgram"));
    JenisKode = new QStringPath(this.withPrefix("JenisKode"));
    Aktif = new QBooleanPath(this.withPrefix("Aktif"));
    Nama = new QStringPath(this.withPrefix("Nama"));
    DibuatTanggal = new QDateTimeOffsetPath(this.withPrefix("DibuatTanggal"));
    Feature = new QEntityPath(this.withPrefix("Feature"), () => QDTO_Feature);
}
export const qDTO_ApprovalConfig = new QDTO_ApprovalConfig();
export class QDTO_ApprovalConfigId extends QId {
    params = [new QNumberParam("Id")];
    getParams() {
        return this.params;
    }
}
export class QDTO_Approval extends QueryObject {
    Id = new QNumberPath(this.withPrefix("Id"));
    IdFeature = new QNumberPath(this.withPrefix("IdFeature"));
    IdDokumen = new QNumberPath(this.withPrefix("IdDokumen"));
    IdDokumenPengajuanForm = new QNumberPath(this.withPrefix("IdDokumenPengajuanForm"));
    IdDokumenTransferBudget = new QNumberPath(this.withPrefix("IdDokumenTransferBudget"));
    NoDokumen = new QStringPath(this.withPrefix("NoDokumen"));
    StepId = new QNumberPath(this.withPrefix("StepId"));
    IdRole = new QNumberPath(this.withPrefix("IdRole"));
    UserId = new QEntityPath(this.withPrefix("UserId"), () => QUserDto);
    SubUserId = new QEntityPath(this.withPrefix("SubUserId"), () => QUserDto);
    Progress = new QNumberPath(this.withPrefix("Progress"));
    ActionType = new QStringPath(this.withPrefix("ActionType"));
    Step = new QNumberPath(this.withPrefix("Step"));
    ApprovalBy = new QNumberPath(this.withPrefix("ApprovalBy"));
    Aktif = new QBooleanPath(this.withPrefix("Aktif"));
    Status = new QStringPath(this.withPrefix("Status"));
    Deskripsi = new QStringPath(this.withPrefix("Deskripsi"));
    DibuatTanggal = new QDateTimeOffsetPath(this.withPrefix("DibuatTanggal"));
    Feature = new QEntityPath(this.withPrefix("Feature"), () => QDTO_Feature);
    StepApproval = new QEntityPath(this.withPrefix("StepApproval"), () => QDTO_StepApproval);
    MasterRole = new QEntityPath(this.withPrefix("MasterRole"), () => QMasterRole);
    MasterUser = new QEntityPath(this.withPrefix("MasterUser"), () => QDTO_MasterUser);
}
export const qDTO_Approval = new QDTO_Approval();
export class QDTO_ApprovalId extends QId {
    params = [new QNumberParam("Id")];
    getParams() {
        return this.params;
    }
}
export class QDTO_ApprovalConfigCondition extends QueryObject {
    Id = new QNumberPath(this.withPrefix("Id"));
    Idconfig = new QNumberPath(this.withPrefix("Idconfig"));
    IdRole = new QNumberPath(this.withPrefix("IdRole"));
    FieldName = new QStringPath(this.withPrefix("FieldName"));
    Brand = new QStringPath(this.withPrefix("Brand"));
    Channel = new QStringPath(this.withPrefix("Channel"));
    Departemen = new QStringPath(this.withPrefix("Departemen"));
    Area = new QStringPath(this.withPrefix("Area"));
    Region = new QStringPath(this.withPrefix("Region"));
    Sumber = new QStringPath(this.withPrefix("Sumber"));
    Distributor = new QStringPath(this.withPrefix("Distributor"));
    Operator = new QStringPath(this.withPrefix("Operator"));
    Value = new QStringPath(this.withPrefix("Value"));
    Aktif = new QBooleanPath(this.withPrefix("Aktif"));
    DibuatTanggal = new QDateTimeOffsetPath(this.withPrefix("DibuatTanggal"));
    UserId = new QEntityPath(this.withPrefix("UserId"), () => QUserDto);
    ApprovalConfig = new QEntityPath(this.withPrefix("ApprovalConfig"), () => QDTO_ApprovalConfig);
    MasterRole = new QEntityPath(this.withPrefix("MasterRole"), () => QDTO_MasterRole);
    StepApproval = new QEntityCollectionPath(this.withPrefix("StepApproval"), () => QDTO_StepApproval);
}
export const qDTO_ApprovalConfigCondition = new QDTO_ApprovalConfigCondition();
export class QDTO_ApprovalConfigConditionId extends QId {
    params = [new QNumberParam("Id")];
    getParams() {
        return this.params;
    }
}
export class QDTO_StepApproval extends QueryObject {
    Id = new QNumberPath(this.withPrefix("Id"));
    IdCondition = new QNumberPath(this.withPrefix("IdCondition"));
    IdRole = new QNumberPath(this.withPrefix("IdRole"));
    UserId = new QEntityPath(this.withPrefix("UserId"), () => QUserDto);
    SubUserId = new QEntityPath(this.withPrefix("SubUserId"), () => QUserDto);
    Step = new QNumberPath(this.withPrefix("Step"));
    Aktif = new QBooleanPath(this.withPrefix("Aktif"));
    ActionType = new QStringPath(this.withPrefix("ActionType"));
    Progress = new QNumberPath(this.withPrefix("Progress"));
    DibuatTanggal = new QDateTimeOffsetPath(this.withPrefix("DibuatTanggal"));
    MasterRole = new QEntityPath(this.withPrefix("MasterRole"), () => QDTO_MasterRole);
}
export const qDTO_StepApproval = new QDTO_StepApproval();
export class QDTO_StepApprovalId extends QId {
    params = [new QNumberParam("Id")];
    getParams() {
        return this.params;
    }
}
export class QDTO_Area extends QueryObject {
    Id = new QNumberPath(this.withPrefix("Id"));
    Nama = new QStringPath(this.withPrefix("Nama"));
    IdRegion = new QNumberPath(this.withPrefix("IdRegion"));
    KodeArea = new QStringPath(this.withPrefix("KodeArea"));
    RegionName = new QStringPath(this.withPrefix("RegionName"));
    Aktif = new QBooleanPath(this.withPrefix("Aktif"));
    DibuatTanggal = new QDateTimeOffsetPath(this.withPrefix("DibuatTanggal"));
}
export const qDTO_Area = new QDTO_Area();
export class QDTO_AreaId extends QId {
    params = [new QNumberParam("Id")];
    getParams() {
        return this.params;
    }
}
export class QDTO_BookWithAuthors extends QueryObject {
    Id = new QNumberPath(this.withPrefix("Id"));
    Title = new QStringPath(this.withPrefix("Title"));
    Genre = new QStringPath(this.withPrefix("Genre"));
    PublicationYear = new QNumberPath(this.withPrefix("PublicationYear"));
    Authors = new QEntityCollectionPath(this.withPrefix("Authors"), () => QAuthor);
}
export const qDTO_BookWithAuthors = new QDTO_BookWithAuthors();
export class QDTO_BookWithAuthorsId extends QId {
    params = [new QNumberParam("Id")];
    getParams() {
        return this.params;
    }
}
export class QDTO_Brand extends QueryObject {
    Id = new QNumberPath(this.withPrefix("Id"));
    Nama = new QStringPath(this.withPrefix("Nama"));
    NamaBudget = new QStringPath(this.withPrefix("NamaBudget"));
    Aktif = new QBooleanPath(this.withPrefix("Aktif"));
    DibuatTanggal = new QDateTimeOffsetPath(this.withPrefix("DibuatTanggal"));
}
export const qDTO_Brand = new QDTO_Brand();
export class QDTO_BrandId extends QId {
    params = [new QNumberParam("Id")];
    getParams() {
        return this.params;
    }
}
export class QDTO_BudgetAlokasiDetail extends QueryObject {
    Id = new QNumberPath(this.withPrefix("Id"));
    IdBudgetAlokasi = new QNumberPath(this.withPrefix("IdBudgetAlokasi"));
    IdMasterBudget = new QNumberPath(this.withPrefix("IdMasterBudget"));
    Bulan = new QNumberPath(this.withPrefix("Bulan"));
    NilaiBudget = new QNumberPath(this.withPrefix("NilaiBudget"));
    SisaNilaiBudget = new QNumberPath(this.withPrefix("SisaNilaiBudget"));
    DibuatTanggal = new QDateTimeOffsetPath(this.withPrefix("DibuatTanggal"));
    MasterBudget = new QEntityPath(this.withPrefix("MasterBudget"), () => QDTO_MasterBudget);
}
export const qDTO_BudgetAlokasiDetail = new QDTO_BudgetAlokasiDetail();
export class QDTO_BudgetAlokasiDetailId extends QId {
    params = [new QNumberParam("Id")];
    getParams() {
        return this.params;
    }
}
export class QDTO_BudgetTopUp extends QueryObject {
    Id = new QNumberPath(this.withPrefix("Id"));
    NoDokumen = new QStringPath(this.withPrefix("NoDokumen"));
    IdProjectSumber = new QNumberPath(this.withPrefix("IdProjectSumber"));
    NoDokumenProjectSumber = new QStringPath(this.withPrefix("NoDokumenProjectSumber"));
    IdProjectTujuan = new QNumberPath(this.withPrefix("IdProjectTujuan"));
    NoDokumenProjectTujuan = new QStringPath(this.withPrefix("NoDokumenProjectTujuan"));
    TotalTransfer = new QNumberPath(this.withPrefix("TotalTransfer"));
    Save_Transfer = new QBooleanPath(this.withPrefix("Save_Transfer"));
    Jenis = new QStringPath(this.withPrefix("Jenis"));
    Status = new QStringPath(this.withPrefix("Status"));
    DibuatOleh = new QStringPath(this.withPrefix("DibuatOleh"));
    UserId = new QNumberPath(this.withPrefix("UserId"));
    UserApproval = new QNumberPath(this.withPrefix("UserApproval"));
    Aktif = new QBooleanPath(this.withPrefix("Aktif"));
    IdFeature = new QNumberPath(this.withPrefix("IdFeature"));
    DibuatTanggal = new QDateTimeOffsetPath(this.withPrefix("DibuatTanggal"));
    BudgetTransferDetail = new QEntityCollectionPath(this.withPrefix("BudgetTransferDetail"), () => QDTO_BudgetTopUpDetail);
    Approval = new QEntityCollectionPath(this.withPrefix("Approval"), () => QDTO_Approval);
    Feature = new QEntityPath(this.withPrefix("Feature"), () => QDTO_Feature);
    HeaderProjekSumber = new QEntityPath(this.withPrefix("HeaderProjekSumber"), () => QDTO_HeaderProjek);
    HeaderProjekTujuan = new QEntityPath(this.withPrefix("HeaderProjekTujuan"), () => QDTO_HeaderProjek);
}
export const qDTO_BudgetTopUp = new QDTO_BudgetTopUp();
export class QDTO_BudgetTopUpId extends QId {
    params = [new QNumberParam("Id")];
    getParams() {
        return this.params;
    }
}
export class QDTO_BudgetTopUpDetail extends QueryObject {
    Id = new QNumberPath(this.withPrefix("Id"));
    IdTransfer = new QNumberPath(this.withPrefix("IdTransfer"));
    IdAlokasiBudgetSumber = new QNumberPath(this.withPrefix("IdAlokasiBudgetSumber"));
    IdAlokasiBudgetTujuan = new QNumberPath(this.withPrefix("IdAlokasiBudgetTujuan"));
    IdPostBugdetSumber = new QNumberPath(this.withPrefix("IdPostBugdetSumber"));
    NamaPostBugdetSumber = new QStringPath(this.withPrefix("NamaPostBugdetSumber"));
    IdPostBugdetTujuan = new QNumberPath(this.withPrefix("IdPostBugdetTujuan"));
    NamaPostBugdetTujuan = new QStringPath(this.withPrefix("NamaPostBugdetTujuan"));
    IdAlokasiDetailSumber = new QNumberPath(this.withPrefix("IdAlokasiDetailSumber"));
    IdAlokasiDetailTujuan = new QNumberPath(this.withPrefix("IdAlokasiDetailTujuan"));
    BulanBudgetSumber = new QNumberPath(this.withPrefix("BulanBudgetSumber"));
    BulanBudgetTujuan = new QNumberPath(this.withPrefix("BulanBudgetTujuan"));
    IdSkenarioSumber = new QNumberPath(this.withPrefix("IdSkenarioSumber"));
    NamaSkenarioSumber = new QStringPath(this.withPrefix("NamaSkenarioSumber"));
    IdSkenarioTujuan = new QNumberPath(this.withPrefix("IdSkenarioTujuan"));
    NamaSkenarioTujuan = new QStringPath(this.withPrefix("NamaSkenarioTujuan"));
    Nilai = new QNumberPath(this.withPrefix("Nilai"));
    BudgetAlokasiSumber = new QEntityPath(this.withPrefix("BudgetAlokasiSumber"), () => QDTO_BudgetAlokasi);
    BudgetAlokasiTujuan = new QEntityPath(this.withPrefix("BudgetAlokasiTujuan"), () => QDTO_BudgetAlokasi);
    PostBudgetSumber = new QEntityPath(this.withPrefix("PostBudgetSumber"), () => QDTO_PostBudget);
    PostBudgetTujuan = new QEntityPath(this.withPrefix("PostBudgetTujuan"), () => QDTO_PostBudget);
    BudgetAlokasiDetailSumber = new QEntityPath(this.withPrefix("BudgetAlokasiDetailSumber"), () => QDTO_BudgetAlokasiDetail);
    BudgetAlokasiDetailTujuan = new QEntityPath(this.withPrefix("BudgetAlokasiDetailTujuan"), () => QDTO_BudgetAlokasiDetail);
    SkenarioBudgetSumber = new QEntityPath(this.withPrefix("SkenarioBudgetSumber"), () => QDTO_SkenarioBudget);
    SkenarioBudgetTujuan = new QEntityPath(this.withPrefix("SkenarioBudgetTujuan"), () => QDTO_SkenarioBudget);
}
export const qDTO_BudgetTopUpDetail = new QDTO_BudgetTopUpDetail();
export class QDTO_BudgetTopUpDetailId extends QId {
    params = [new QNumberParam("Id")];
    getParams() {
        return this.params;
    }
}
export class QDTO_BudgetTransfer extends QueryObject {
    Id = new QNumberPath(this.withPrefix("Id"));
    NoDokumen = new QStringPath(this.withPrefix("NoDokumen"));
    IdProjectSumber = new QNumberPath(this.withPrefix("IdProjectSumber"));
    NoDokumenProjectSumber = new QStringPath(this.withPrefix("NoDokumenProjectSumber"));
    IdProjectTujuan = new QNumberPath(this.withPrefix("IdProjectTujuan"));
    NoDokumenProjectTujuan = new QStringPath(this.withPrefix("NoDokumenProjectTujuan"));
    TotalTransfer = new QNumberPath(this.withPrefix("TotalTransfer"));
    Save_Transfer = new QBooleanPath(this.withPrefix("Save_Transfer"));
    Jenis = new QStringPath(this.withPrefix("Jenis"));
    Status = new QStringPath(this.withPrefix("Status"));
    DibuatOleh = new QStringPath(this.withPrefix("DibuatOleh"));
    UserId = new QNumberPath(this.withPrefix("UserId"));
    UserApproval = new QNumberPath(this.withPrefix("UserApproval"));
    Aktif = new QBooleanPath(this.withPrefix("Aktif"));
    IdFeature = new QNumberPath(this.withPrefix("IdFeature"));
    DibuatTanggal = new QDateTimeOffsetPath(this.withPrefix("DibuatTanggal"));
    BudgetTransferDetail = new QEntityCollectionPath(this.withPrefix("BudgetTransferDetail"), () => QDTO_BudgetTransferDetail);
    Approval = new QEntityCollectionPath(this.withPrefix("Approval"), () => QDTO_Approval);
    Feature = new QEntityPath(this.withPrefix("Feature"), () => QDTO_Feature);
    HeaderProjekSumber = new QEntityPath(this.withPrefix("HeaderProjekSumber"), () => QDTO_HeaderProjek);
    HeaderProjekTujuan = new QEntityPath(this.withPrefix("HeaderProjekTujuan"), () => QDTO_HeaderProjek);
}
export const qDTO_BudgetTransfer = new QDTO_BudgetTransfer();
export class QDTO_BudgetTransferId extends QId {
    params = [new QNumberParam("Id")];
    getParams() {
        return this.params;
    }
}
export class QDTO_BudgetTransferDetail extends QueryObject {
    Id = new QNumberPath(this.withPrefix("Id"));
    IdTransfer = new QNumberPath(this.withPrefix("IdTransfer"));
    IdAlokasiBudgetSumber = new QNumberPath(this.withPrefix("IdAlokasiBudgetSumber"));
    IdAlokasiBudgetTujuan = new QNumberPath(this.withPrefix("IdAlokasiBudgetTujuan"));
    IdPostBugdetSumber = new QNumberPath(this.withPrefix("IdPostBugdetSumber"));
    NamaPostBugdetSumber = new QStringPath(this.withPrefix("NamaPostBugdetSumber"));
    IdPostBugdetTujuan = new QNumberPath(this.withPrefix("IdPostBugdetTujuan"));
    NamaPostBugdetTujuan = new QStringPath(this.withPrefix("NamaPostBugdetTujuan"));
    IdAlokasiDetailSumber = new QNumberPath(this.withPrefix("IdAlokasiDetailSumber"));
    IdAlokasiDetailTujuan = new QNumberPath(this.withPrefix("IdAlokasiDetailTujuan"));
    BulanBudgetSumber = new QNumberPath(this.withPrefix("BulanBudgetSumber"));
    BulanBudgetTujuan = new QNumberPath(this.withPrefix("BulanBudgetTujuan"));
    IdSkenarioSumber = new QNumberPath(this.withPrefix("IdSkenarioSumber"));
    NamaSkenarioSumber = new QStringPath(this.withPrefix("NamaSkenarioSumber"));
    IdSkenarioTujuan = new QNumberPath(this.withPrefix("IdSkenarioTujuan"));
    NamaSkenarioTujuan = new QStringPath(this.withPrefix("NamaSkenarioTujuan"));
    Nilai = new QNumberPath(this.withPrefix("Nilai"));
    BudgetAlokasiSumber = new QEntityPath(this.withPrefix("BudgetAlokasiSumber"), () => QDTO_BudgetAlokasi);
    BudgetAlokasiTujuan = new QEntityPath(this.withPrefix("BudgetAlokasiTujuan"), () => QDTO_BudgetAlokasi);
    PostBudgetSumber = new QEntityPath(this.withPrefix("PostBudgetSumber"), () => QDTO_PostBudget);
    PostBudgetTujuan = new QEntityPath(this.withPrefix("PostBudgetTujuan"), () => QDTO_PostBudget);
    BudgetAlokasiDetailSumber = new QEntityPath(this.withPrefix("BudgetAlokasiDetailSumber"), () => QDTO_BudgetAlokasiDetail);
    BudgetAlokasiDetailTujuan = new QEntityPath(this.withPrefix("BudgetAlokasiDetailTujuan"), () => QDTO_BudgetAlokasiDetail);
    SkenarioBudgetSumber = new QEntityPath(this.withPrefix("SkenarioBudgetSumber"), () => QDTO_SkenarioBudget);
    SkenarioBudgetTujuan = new QEntityPath(this.withPrefix("SkenarioBudgetTujuan"), () => QDTO_SkenarioBudget);
}
export const qDTO_BudgetTransferDetail = new QDTO_BudgetTransferDetail();
export class QDTO_BudgetTransferDetailId extends QId {
    params = [new QNumberParam("Id")];
    getParams() {
        return this.params;
    }
}
export class QDTO_Coa extends QueryObject {
    Id = new QNumberPath(this.withPrefix("Id"));
    Kode = new QStringPath(this.withPrefix("Kode"));
    Nama = new QStringPath(this.withPrefix("Nama"));
    Aktif = new QBooleanPath(this.withPrefix("Aktif"));
    Deskripsi = new QStringPath(this.withPrefix("Deskripsi"));
    DibuatTanggal = new QDateTimeOffsetPath(this.withPrefix("DibuatTanggal"));
    PostBudget = new QEntityCollectionPath(this.withPrefix("PostBudget"), () => QDTO_PostBudget);
}
export const qDTO_Coa = new QDTO_Coa();
export class QDTO_CoaId extends QId {
    params = [new QNumberParam("Id")];
    getParams() {
        return this.params;
    }
}
export class QDTO_Departmen extends QueryObject {
    Id = new QNumberPath(this.withPrefix("Id"));
    Code = new QStringPath(this.withPrefix("Code"));
    Nama = new QStringPath(this.withPrefix("Nama"));
    DibuatTanggal = new QDateTimeOffsetPath(this.withPrefix("DibuatTanggal"));
    Aktif = new QBooleanPath(this.withPrefix("Aktif"));
}
export const qDTO_Departmen = new QDTO_Departmen();
export class QDTO_DepartmenId extends QId {
    params = [new QNumberParam("Id")];
    getParams() {
        return this.params;
    }
}
export class QDTO_Distributor extends QueryObject {
    Id = new QNumberPath(this.withPrefix("Id"));
    CardCode = new QStringPath(this.withPrefix("CardCode"));
    Nama = new QStringPath(this.withPrefix("Nama"));
    NamaAlias = new QStringPath(this.withPrefix("NamaAlias"));
    AreaId = new QNumberPath(this.withPrefix("AreaId"));
    AreaName = new QStringPath(this.withPrefix("AreaName"));
    Aktif = new QBooleanPath(this.withPrefix("Aktif"));
    Area = new QEntityPath(this.withPrefix("Area"), () => QDTO_Area);
}
export const qDTO_Distributor = new QDTO_Distributor();
export class QDTO_DistributorId extends QId {
    params = [new QNumberParam("Id")];
    getParams() {
        return this.params;
    }
}
export class QDTO_EmailTemplate extends QueryObject {
    Id = new QNumberPath(this.withPrefix("Id"));
    IdFeature = new QNumberPath(this.withPrefix("IdFeature"));
    SubFeature = new QStringPath(this.withPrefix("SubFeature"));
    Subject = new QStringPath(this.withPrefix("Subject"));
    Body = new QStringPath(this.withPrefix("Body"));
    CreatedAt = new QDateTimeOffsetPath(this.withPrefix("CreatedAt"));
    UpdatedAt = new QDateTimeOffsetPath(this.withPrefix("UpdatedAt"));
    Feature = new QEntityPath(this.withPrefix("Feature"), () => QDTO_Feature);
}
export const qDTO_EmailTemplate = new QDTO_EmailTemplate();
export class QDTO_EmailTemplateId extends QId {
    params = [new QNumberParam("Id")];
    getParams() {
        return this.params;
    }
}
export class QDTO_EstimasiHargaBranding extends QueryObject {
    Id = new QNumberPath(this.withPrefix("Id"));
    IdArea = new QNumberPath(this.withPrefix("IdArea"));
    IdJenisPpl = new QNumberPath(this.withPrefix("IdJenisPpl"));
    HargaAwal = new QNumberPath(this.withPrefix("HargaAwal"));
    HargaAkhir = new QNumberPath(this.withPrefix("HargaAkhir"));
    Aktif = new QBooleanPath(this.withPrefix("Aktif"));
    DibuatTanggal = new QDateTimeOffsetPath(this.withPrefix("DibuatTanggal"));
    Area = new QEntityPath(this.withPrefix("Area"), () => QDTO_Area);
    JenisPpl = new QEntityPath(this.withPrefix("JenisPpl"), () => QDTO_JenisPpl);
}
export const qDTO_EstimasiHargaBranding = new QDTO_EstimasiHargaBranding();
export class QDTO_EstimasiHargaBrandingId extends QId {
    params = [new QNumberParam("Id")];
    getParams() {
        return this.params;
    }
}
export class QDTO_EstimasiHargaBrandingList extends QueryObject {
    Id = new QNumberPath(this.withPrefix("Id"));
    IdArea = new QNumberPath(this.withPrefix("IdArea"));
    AreaName = new QStringPath(this.withPrefix("AreaName"));
    IdJenisPpl = new QNumberPath(this.withPrefix("IdJenisPpl"));
    JenisPplName = new QStringPath(this.withPrefix("JenisPplName"));
    HargaAwal = new QNumberPath(this.withPrefix("HargaAwal"));
    HargaAkhir = new QNumberPath(this.withPrefix("HargaAkhir"));
    Aktif = new QBooleanPath(this.withPrefix("Aktif"));
    DibuatTanggal = new QDateTimeOffsetPath(this.withPrefix("DibuatTanggal"));
}
export const qDTO_EstimasiHargaBrandingList = new QDTO_EstimasiHargaBrandingList();
export class QDTO_EstimasiHargaBrandingListId extends QId {
    params = [new QNumberParam("Id")];
    getParams() {
        return this.params;
    }
}
export class QDTO_HeaderPpl extends QueryObject {
    Id = new QNumberPath(this.withPrefix("Id"));
    NoDokumen = new QStringPath(this.withPrefix("NoDokumen"));
    IdHeaderProjek = new QNumberPath(this.withPrefix("IdHeaderProjek"));
    SumberDokumen = new QStringPath(this.withPrefix("SumberDokumen"));
    IdArea = new QNumberPath(this.withPrefix("IdArea"));
    IdDistributor = new QNumberPath(this.withPrefix("IdDistributor"));
    IdBudgetAlokasi = new QNumberPath(this.withPrefix("IdBudgetAlokasi"));
    IdKategoriPpl = new QNumberPath(this.withPrefix("IdKategoriPpl"));
    IdJenisPpl = new QNumberPath(this.withPrefix("IdJenisPpl"));
    SubCategory = new QNumberPath(this.withPrefix("SubCategory"));
    CostCenter = new QStringPath(this.withPrefix("CostCenter"));
    Remarks = new QStringPath(this.withPrefix("Remarks"));
    Klaim = new QStringPath(this.withPrefix("Klaim"));
    Pic = new QStringPath(this.withPrefix("Pic"));
    KontakPic = new QStringPath(this.withPrefix("KontakPic"));
    Audiens = new QStringPath(this.withPrefix("Audiens"));
    TargetPenjualan = new QNumberPath(this.withPrefix("TargetPenjualan"));
    EstimasiBudget = new QNumberPath(this.withPrefix("EstimasiBudget"));
    AvgSalesBln = new QNumberPath(this.withPrefix("AvgSalesBln"));
    CostRatio = new QNumberPath(this.withPrefix("CostRatio"));
    EstimasiPoPertama = new QNumberPath(this.withPrefix("EstimasiPoPertama"));
    DressUp = new QBooleanPath(this.withPrefix("DressUp"));
    Growth = new QNumberPath(this.withPrefix("Growth"));
    NilaiProgram = new QNumberPath(this.withPrefix("NilaiProgram"));
    MaxAchive = new QNumberPath(this.withPrefix("MaxAchive"));
    NikKaryawan = new QStringPath(this.withPrefix("NikKaryawan"));
    NamaKaryawan = new QStringPath(this.withPrefix("NamaKaryawan"));
    JabatanKaryawan = new QStringPath(this.withPrefix("JabatanKaryawan"));
    Jabatan = new QStringPath(this.withPrefix("Jabatan"));
    KotaTujuan = new QStringPath(this.withPrefix("KotaTujuan"));
    JumlahHari = new QNumberPath(this.withPrefix("JumlahHari"));
    FlightDate = new QDateTimeOffsetPath(this.withPrefix("FlightDate"));
    FlightName = new QStringPath(this.withPrefix("FlightName"));
    FlightFrom = new QStringPath(this.withPrefix("FlightFrom"));
    FlightTo = new QStringPath(this.withPrefix("FlightTo"));
    FlightDeparture = new QDateTimeOffsetPath(this.withPrefix("FlightDeparture"));
    FlightArrival = new QDateTimeOffsetPath(this.withPrefix("FlightArrival"));
    TransportPp = new QNumberPath(this.withPrefix("TransportPp"));
    InsentifAktifOutlet = new QNumberPath(this.withPrefix("InsentifAktifOutlet"));
    InsentifSalesValue = new QNumberPath(this.withPrefix("InsentifSalesValue"));
    Penginapan = new QNumberPath(this.withPrefix("Penginapan"));
    Laundry = new QNumberPath(this.withPrefix("Laundry"));
    AkomodasiUm = new QNumberPath(this.withPrefix("AkomodasiUm"));
    TransportDk = new QNumberPath(this.withPrefix("TransportDk"));
    PPN = new QNumberPath(this.withPrefix("PPN"));
    PPNNilai = new QNumberPath(this.withPrefix("PPNNilai"));
    PPH = new QNumberPath(this.withPrefix("PPH"));
    PPHNilai = new QNumberPath(this.withPrefix("PPHNilai"));
    Budget = new QNumberPath(this.withPrefix("Budget"));
    Alamat = new QStringPath(this.withPrefix("Alamat"));
    TipePerpanjangan = new QStringPath(this.withPrefix("TipePerpanjangan"));
    UserId = new QNumberPath(this.withPrefix("UserId"));
    IdFeature = new QNumberPath(this.withPrefix("IdFeature"));
    TotalEstimasi = new QNumberPath(this.withPrefix("TotalEstimasi"));
    AtasNama = new QStringPath(this.withPrefix("AtasNama"));
    Rekening = new QStringPath(this.withPrefix("Rekening"));
    Bank = new QStringPath(this.withPrefix("Bank"));
    ChannelPpl = new QStringPath(this.withPrefix("ChannelPpl"));
    BiayaLainnya = new QNumberPath(this.withPrefix("BiayaLainnya"));
    PeriodeAwal = new QDateTimeOffsetPath(this.withPrefix("PeriodeAwal"));
    PeriodeAkhir = new QDateTimeOffsetPath(this.withPrefix("PeriodeAkhir"));
    OutletLainnya = new QStringPath(this.withPrefix("OutletLainnya"));
    DibuatOleh = new QStringPath(this.withPrefix("DibuatOleh"));
    Aktif = new QBooleanPath(this.withPrefix("Aktif"));
    AllOutlet = new QNumberPath(this.withPrefix("AllOutlet"));
    AllArea = new QBooleanPath(this.withPrefix("AllArea"));
    AllDistributor = new QBooleanPath(this.withPrefix("AllDistributor"));
    DibuatTanggal = new QDateTimeOffsetPath(this.withPrefix("DibuatTanggal"));
    Status = new QStringPath(this.withPrefix("Status"));
    PplOutlet = new QEntityCollectionPath(this.withPrefix("PplOutlet"), () => QDTO_PplOutlet);
    PplArea = new QEntityCollectionPath(this.withPrefix("PplArea"), () => QDTO_PplArea);
    PplDetailProduk = new QEntityCollectionPath(this.withPrefix("PplDetailProduk"), () => QDTO_PplDetailProduk);
    PplDetails = new QEntityCollectionPath(this.withPrefix("PplDetails"), () => QDTO_PplDetails);
    PplBudgetAlokasi = new QEntityCollectionPath(this.withPrefix("PplBudgetAlokasi"), () => QDTO_PplBudgetAlokasi);
    PplAttachment = new QEntityCollectionPath(this.withPrefix("PplAttachment"), () => QDTO_PplAttachment);
}
export const qDTO_HeaderPpl = new QDTO_HeaderPpl();
export class QDTO_HeaderPplId extends QId {
    params = [new QNumberParam("Id")];
    getParams() {
        return this.params;
    }
}
export class QDTO_HeaderPplList extends QueryObject {
    Id = new QNumberPath(this.withPrefix("Id"));
    NoDokumen = new QStringPath(this.withPrefix("NoDokumen"));
    IdHeaderProjek = new QNumberPath(this.withPrefix("IdHeaderProjek"));
    SumberDokumen = new QStringPath(this.withPrefix("SumberDokumen"));
    ProjectName = new QStringPath(this.withPrefix("ProjectName"));
    KategoriPplComponent = new QStringPath(this.withPrefix("KategoriPplComponent"));
    BrandId = new QNumberPath(this.withPrefix("BrandId"));
    BrandName = new QStringPath(this.withPrefix("BrandName"));
    IdRegion = new QNumberPath(this.withPrefix("IdRegion"));
    Scope = new QStringPath(this.withPrefix("Scope"));
    KodeKlaim = new QStringPath(this.withPrefix("KodeKlaim"));
    IdArea = new QNumberPath(this.withPrefix("IdArea"));
    AreaName = new QStringPath(this.withPrefix("AreaName"));
    IdDistributor = new QNumberPath(this.withPrefix("IdDistributor"));
    DistributorName = new QStringPath(this.withPrefix("DistributorName"));
    IdBudgetAlokasi = new QNumberPath(this.withPrefix("IdBudgetAlokasi"));
    Pic = new QStringPath(this.withPrefix("Pic"));
    KontakPic = new QStringPath(this.withPrefix("KontakPic"));
    Audiens = new QStringPath(this.withPrefix("Audiens"));
    TargetPenjualan = new QNumberPath(this.withPrefix("TargetPenjualan"));
    BudgetAlokasi = new QStringPath(this.withPrefix("BudgetAlokasi"));
    DressUp = new QBooleanPath(this.withPrefix("DressUp"));
    Growth = new QNumberPath(this.withPrefix("Growth"));
    NilaiProgram = new QNumberPath(this.withPrefix("NilaiProgram"));
    MaxAchive = new QNumberPath(this.withPrefix("MaxAchive"));
    NikKaryawan = new QStringPath(this.withPrefix("NikKaryawan"));
    NamaKaryawan = new QStringPath(this.withPrefix("NamaKaryawan"));
    JabatanKaryawan = new QStringPath(this.withPrefix("JabatanKaryawan"));
    Jabatan = new QStringPath(this.withPrefix("Jabatan"));
    KotaTujuan = new QStringPath(this.withPrefix("KotaTujuan"));
    JumlahHari = new QNumberPath(this.withPrefix("JumlahHari"));
    FlightDate = new QDateTimeOffsetPath(this.withPrefix("FlightDate"));
    FlightName = new QStringPath(this.withPrefix("FlightName"));
    FlightFrom = new QStringPath(this.withPrefix("FlightFrom"));
    FlightTo = new QStringPath(this.withPrefix("FlightTo"));
    FlightDeparture = new QDateTimeOffsetPath(this.withPrefix("FlightDeparture"));
    FlightArrival = new QDateTimeOffsetPath(this.withPrefix("FlightArrival"));
    TransportPp = new QNumberPath(this.withPrefix("TransportPp"));
    Penginapan = new QNumberPath(this.withPrefix("Penginapan"));
    Laundry = new QNumberPath(this.withPrefix("Laundry"));
    AkomodasiUm = new QNumberPath(this.withPrefix("AkomodasiUm"));
    TransportDk = new QNumberPath(this.withPrefix("TransportDk"));
    PPN = new QNumberPath(this.withPrefix("PPN"));
    PPNNilai = new QNumberPath(this.withPrefix("PPNNilai"));
    PPH = new QNumberPath(this.withPrefix("PPH"));
    PPHNilai = new QNumberPath(this.withPrefix("PPHNilai"));
    Budget = new QNumberPath(this.withPrefix("Budget"));
    Alamat = new QStringPath(this.withPrefix("Alamat"));
    TipePerpanjangan = new QStringPath(this.withPrefix("TipePerpanjangan"));
    UserId = new QNumberPath(this.withPrefix("UserId"));
    IdFeature = new QNumberPath(this.withPrefix("IdFeature"));
    TotalEstimasi = new QNumberPath(this.withPrefix("TotalEstimasi"));
    AtasNama = new QStringPath(this.withPrefix("AtasNama"));
    Rekening = new QStringPath(this.withPrefix("Rekening"));
    Bank = new QStringPath(this.withPrefix("Bank"));
    ChannelPpl = new QStringPath(this.withPrefix("ChannelPpl"));
    BiayaLainnya = new QNumberPath(this.withPrefix("BiayaLainnya"));
    PeriodeAwal = new QDateTimeOffsetPath(this.withPrefix("PeriodeAwal"));
    PeriodeAkhir = new QDateTimeOffsetPath(this.withPrefix("PeriodeAkhir"));
    IdKategoriPpl = new QNumberPath(this.withPrefix("IdKategoriPpl"));
    KategoriPplName = new QStringPath(this.withPrefix("KategoriPplName"));
    IdJenisPpl = new QNumberPath(this.withPrefix("IdJenisPpl"));
    SubCategory = new QNumberPath(this.withPrefix("SubCategory"));
    CostCenter = new QStringPath(this.withPrefix("CostCenter"));
    Remarks = new QStringPath(this.withPrefix("Remarks"));
    Klaim = new QStringPath(this.withPrefix("Klaim"));
    EstimasiBudget = new QNumberPath(this.withPrefix("EstimasiBudget"));
    AvgSalesBln = new QNumberPath(this.withPrefix("AvgSalesBln"));
    CostRatio = new QNumberPath(this.withPrefix("CostRatio"));
    EstimasiPoPertama = new QNumberPath(this.withPrefix("EstimasiPoPertama"));
    DibuatOleh = new QStringPath(this.withPrefix("DibuatOleh"));
    OutletLainnya = new QStringPath(this.withPrefix("OutletLainnya"));
    Aktif = new QBooleanPath(this.withPrefix("Aktif"));
    AllOutlet = new QNumberPath(this.withPrefix("AllOutlet"));
    AllArea = new QBooleanPath(this.withPrefix("AllArea"));
    AllDistributor = new QBooleanPath(this.withPrefix("AllDistributor"));
    DibuatTanggal = new QDateTimeOffsetPath(this.withPrefix("DibuatTanggal"));
    Status = new QStringPath(this.withPrefix("Status"));
    KategoriPpl = new QEntityPath(this.withPrefix("KategoriPpl"), () => QDTO_KategoriPpl);
    JenisPpl = new QEntityPath(this.withPrefix("JenisPpl"), () => QDTO_JenisPpl);
    PplOutlet = new QEntityCollectionPath(this.withPrefix("PplOutlet"), () => QDTO_PplOutlet);
    PplArea = new QEntityCollectionPath(this.withPrefix("PplArea"), () => QDTO_PplArea);
    PplDetailProduk = new QEntityCollectionPath(this.withPrefix("PplDetailProduk"), () => QDTO_PplDetailProduk);
    PplDetails = new QEntityCollectionPath(this.withPrefix("PplDetails"), () => QDTO_PplDetails);
    PplBudgetAlokasi = new QEntityCollectionPath(this.withPrefix("PplBudgetAlokasi"), () => QDTO_PplBudgetAlokasi);
    PplAttachment = new QEntityCollectionPath(this.withPrefix("PplAttachment"), () => QDTO_PplAttachment);
}
export const qDTO_HeaderPplList = new QDTO_HeaderPplList();
export class QDTO_HeaderPplListId extends QId {
    params = [new QNumberParam("Id")];
    getParams() {
        return this.params;
    }
}
export class QDTO_HeaderProjek extends QueryObject {
    Id = new QNumberPath(this.withPrefix("Id"));
    NoDokumen = new QStringPath(this.withPrefix("NoDokumen"));
    IdJenisProgram = new QNumberPath(this.withPrefix("IdJenisProgram"));
    ParentId = new QNumberPath(this.withPrefix("ParentId"));
    ActivityDetail = new QStringPath(this.withPrefix("ActivityDetail"));
    Channel = new QStringPath(this.withPrefix("Channel"));
    ProgramBa = new QBooleanPath(this.withPrefix("ProgramBa"));
    IdDepartmen = new QNumberPath(this.withPrefix("IdDepartmen"));
    KodeDept = new QStringPath(this.withPrefix("KodeDept"));
    IdBrand = new QNumberPath(this.withPrefix("IdBrand"));
    Scope = new QStringPath(this.withPrefix("Scope"));
    Status = new QStringPath(this.withPrefix("Status"));
    IdRegion = new QNumberPath(this.withPrefix("IdRegion"));
    Aktif = new QBooleanPath(this.withPrefix("Aktif"));
    IsBottomToTop = new QBooleanPath(this.withPrefix("IsBottomToTop"));
    DanaCadangan = new QBooleanPath(this.withPrefix("DanaCadangan"));
    NilaiBudget = new QNumberPath(this.withPrefix("NilaiBudget"));
    SisaNilaiBudget = new QNumberPath(this.withPrefix("SisaNilaiBudget"));
    IdHeaderProject = new QNumberPath(this.withPrefix("IdHeaderProject"));
    NilaiBudgetTransaksi = new QNumberPath(this.withPrefix("NilaiBudgetTransaksi"));
    PeriodeAwal = new QDateTimeOffsetPath(this.withPrefix("PeriodeAwal"));
    PeriodeAkhir = new QDateTimeOffsetPath(this.withPrefix("PeriodeAkhir"));
    DibuatOleh = new QStringPath(this.withPrefix("DibuatOleh"));
    UserId = new QNumberPath(this.withPrefix("UserId"));
    IdFeature = new QNumberPath(this.withPrefix("IdFeature"));
    DibuatTanggal = new QDateTimeOffsetPath(this.withPrefix("DibuatTanggal"));
    JenisAlokasi = new QStringPath(this.withPrefix("JenisAlokasi"));
    MultiBudget = new QBooleanPath(this.withPrefix("MultiBudget"));
    Brand = new QEntityPath(this.withPrefix("Brand"), () => QDTO_Brand);
    JenisProgram = new QEntityPath(this.withPrefix("JenisProgram"), () => QDTO_JenisProgram);
    Departmen = new QEntityPath(this.withPrefix("Departmen"), () => QDTO_Departmen);
    Region = new QEntityPath(this.withPrefix("Region"), () => QDTO_Region);
    BudgetAlokasi = new QEntityCollectionPath(this.withPrefix("BudgetAlokasi"), () => QDTO_BudgetAlokasi);
    Approval = new QEntityCollectionPath(this.withPrefix("Approval"), () => QDTO_Approval);
    HeaderProjekBrand = new QEntityCollectionPath(this.withPrefix("HeaderProjekBrand"), () => QDTO_HeaderProjekBrand);
    HeaderProjekDepartemen = new QEntityCollectionPath(this.withPrefix("HeaderProjekDepartemen"), () => QDTO_HeaderProjekDepartemen);
}
export const qDTO_HeaderProjek = new QDTO_HeaderProjek();
export class QDTO_HeaderProjekId extends QId {
    params = [new QNumberParam("Id")];
    getParams() {
        return this.params;
    }
}
export class QDTO_HeaderProjekList extends QueryObject {
    Id = new QNumberPath(this.withPrefix("Id"));
    NoDokumen = new QStringPath(this.withPrefix("NoDokumen"));
    IdJenisProgram = new QNumberPath(this.withPrefix("IdJenisProgram"));
    ParentId = new QNumberPath(this.withPrefix("ParentId"));
    ActivityDetail = new QStringPath(this.withPrefix("ActivityDetail"));
    Channel = new QStringPath(this.withPrefix("Channel"));
    ProgramBa = new QBooleanPath(this.withPrefix("ProgramBa"));
    IdDepartmen = new QNumberPath(this.withPrefix("IdDepartmen"));
    IdBrand = new QNumberPath(this.withPrefix("IdBrand"));
    Scope = new QStringPath(this.withPrefix("Scope"));
    Status = new QStringPath(this.withPrefix("Status"));
    IdRegion = new QNumberPath(this.withPrefix("IdRegion"));
    Aktif = new QBooleanPath(this.withPrefix("Aktif"));
    IsBottomToTop = new QBooleanPath(this.withPrefix("IsBottomToTop"));
    DanaCadangan = new QBooleanPath(this.withPrefix("DanaCadangan"));
    NilaiBudget = new QNumberPath(this.withPrefix("NilaiBudget"));
    SisaNilaiBudget = new QNumberPath(this.withPrefix("SisaNilaiBudget"));
    IdHeaderProject = new QNumberPath(this.withPrefix("IdHeaderProject"));
    NilaiBudgetTransaksi = new QNumberPath(this.withPrefix("NilaiBudgetTransaksi"));
    PeriodeAwal = new QDateTimeOffsetPath(this.withPrefix("PeriodeAwal"));
    PeriodeAkhir = new QDateTimeOffsetPath(this.withPrefix("PeriodeAkhir"));
    DibuatOleh = new QStringPath(this.withPrefix("DibuatOleh"));
    UserId = new QNumberPath(this.withPrefix("UserId"));
    DibuatTanggal = new QDateTimeOffsetPath(this.withPrefix("DibuatTanggal"));
    JenisAlokasi = new QStringPath(this.withPrefix("JenisAlokasi"));
    MultiBudget = new QBooleanPath(this.withPrefix("MultiBudget"));
    Brand = new QEntityPath(this.withPrefix("Brand"), () => QDTO_Brand);
    JenisProgram = new QEntityPath(this.withPrefix("JenisProgram"), () => QDTO_JenisProgram);
    Departmen = new QEntityPath(this.withPrefix("Departmen"), () => QDTO_Departmen);
    Region = new QEntityPath(this.withPrefix("Region"), () => QDTO_Region);
    BudgetAlokasi = new QEntityCollectionPath(this.withPrefix("BudgetAlokasi"), () => QDTO_BudgetAlokasi);
    HeaderProjekBrand = new QEntityCollectionPath(this.withPrefix("HeaderProjekBrand"), () => QDTO_HeaderProjekBrand);
    HeaderProjekDepartemen = new QEntityCollectionPath(this.withPrefix("HeaderProjekDepartemen"), () => QDTO_HeaderProjekDepartemen);
}
export const qDTO_HeaderProjekList = new QDTO_HeaderProjekList();
export class QDTO_HeaderProjekListId extends QId {
    params = [new QNumberParam("Id")];
    getParams() {
        return this.params;
    }
}
export class QDTO_HeaderProjekBrand extends QueryObject {
    Id = new QNumberPath(this.withPrefix("Id"));
    IdHeaderProjek = new QNumberPath(this.withPrefix("IdHeaderProjek"));
    IdBrand = new QNumberPath(this.withPrefix("IdBrand"));
    DibuatTanggal = new QDateTimeOffsetPath(this.withPrefix("DibuatTanggal"));
    Brand = new QEntityPath(this.withPrefix("Brand"), () => QDTO_Brand);
}
export const qDTO_HeaderProjekBrand = new QDTO_HeaderProjekBrand();
export class QDTO_HeaderProjekBrandId extends QId {
    params = [new QNumberParam("Id")];
    getParams() {
        return this.params;
    }
}
export class QDTO_HeaderProjekDepartemen extends QueryObject {
    Id = new QNumberPath(this.withPrefix("Id"));
    IdHeaderProjek = new QNumberPath(this.withPrefix("IdHeaderProjek"));
    IdDepartmen = new QNumberPath(this.withPrefix("IdDepartmen"));
    KodeDepartmen = new QStringPath(this.withPrefix("KodeDepartmen"));
    DibuatTanggal = new QDateTimeOffsetPath(this.withPrefix("DibuatTanggal"));
    Departmen = new QEntityPath(this.withPrefix("Departmen"), () => QDTO_Departmen);
}
export const qDTO_HeaderProjekDepartemen = new QDTO_HeaderProjekDepartemen();
export class QDTO_HeaderProjekDepartemenId extends QId {
    params = [new QNumberParam("Id")];
    getParams() {
        return this.params;
    }
}
export class QDTO_JenisPpl extends QueryObject {
    Id = new QNumberPath(this.withPrefix("Id"));
    KategoriPplId = new QNumberPath(this.withPrefix("KategoriPplId"));
    Nama = new QStringPath(this.withPrefix("Nama"));
    SubJenis = new QStringPath(this.withPrefix("SubJenis"));
    Leadtime = new QNumberPath(this.withPrefix("Leadtime"));
    DibuatTanggal = new QDateTimeOffsetPath(this.withPrefix("DibuatTanggal"));
    Aktif = new QBooleanPath(this.withPrefix("Aktif"));
    KodeKlaim = new QStringPath(this.withPrefix("KodeKlaim"));
    SubKlaim = new QStringPath(this.withPrefix("SubKlaim"));
    IdKodeKlaim = new QNumberPath(this.withPrefix("IdKodeKlaim"));
    KategoriPpl = new QEntityPath(this.withPrefix("KategoriPpl"), () => QDTO_KategoriPpl);
    KodeKlaims = new QEntityPath(this.withPrefix("KodeKlaims"), () => QDTO_KodeKlaims);
}
export const qDTO_JenisPpl = new QDTO_JenisPpl();
export class QDTO_JenisPplId extends QId {
    params = [new QNumberParam("Id")];
    getParams() {
        return this.params;
    }
}
export class QDTO_KodeKlaims extends QueryObject {
    Id = new QNumberPath(this.withPrefix("Id"));
    Kode = new QStringPath(this.withPrefix("Kode"));
    Nama = new QStringPath(this.withPrefix("Nama"));
    Keterangan = new QStringPath(this.withPrefix("Keterangan"));
    Aktif = new QBooleanPath(this.withPrefix("Aktif"));
    DibuatTanggal = new QDateTimeOffsetPath(this.withPrefix("DibuatTanggal"));
}
export const qDTO_KodeKlaims = new QDTO_KodeKlaims();
export class QDTO_KodeKlaimsId extends QId {
    params = [new QNumberParam("Id")];
    getParams() {
        return this.params;
    }
}
export class QDTO_JenisPplList extends QueryObject {
    Id = new QNumberPath(this.withPrefix("Id"));
    KategoriPplId = new QNumberPath(this.withPrefix("KategoriPplId"));
    KategoriPplName = new QStringPath(this.withPrefix("KategoriPplName"));
    Nama = new QStringPath(this.withPrefix("Nama"));
    KodeJenisPpl = new QStringPath(this.withPrefix("KodeJenisPpl"));
    SubJenis = new QStringPath(this.withPrefix("SubJenis"));
    Leadtime = new QNumberPath(this.withPrefix("Leadtime"));
    DibuatTanggal = new QDateTimeOffsetPath(this.withPrefix("DibuatTanggal"));
    Aktif = new QBooleanPath(this.withPrefix("Aktif"));
    KodeKlaim = new QStringPath(this.withPrefix("KodeKlaim"));
    SubKlaim = new QStringPath(this.withPrefix("SubKlaim"));
    IdKodeKlaim = new QNumberPath(this.withPrefix("IdKodeKlaim"));
    KategoriPpl = new QEntityPath(this.withPrefix("KategoriPpl"), () => QDTO_KategoriPpl);
    KodeKlaims = new QEntityPath(this.withPrefix("KodeKlaims"), () => QDTO_KodeKlaims);
}
export const qDTO_JenisPplList = new QDTO_JenisPplList();
export class QDTO_JenisPplListId extends QId {
    params = [new QNumberParam("Id")];
    getParams() {
        return this.params;
    }
}
export class QDTO_JenisProgram extends QueryObject {
    Id = new QNumberPath(this.withPrefix("Id"));
    Nama = new QStringPath(this.withPrefix("Nama"));
    Aktif = new QBooleanPath(this.withPrefix("Aktif"));
    Kode = new QStringPath(this.withPrefix("Kode"));
    DibuatTanggal = new QDateTimeOffsetPath(this.withPrefix("DibuatTanggal"));
    KategoriPpl = new QEntityCollectionPath(this.withPrefix("KategoriPpl"), () => QDTO_KategoriPpl);
}
export const qDTO_JenisProgram = new QDTO_JenisProgram();
export class QDTO_JenisProgramId extends QId {
    params = [new QNumberParam("Id")];
    getParams() {
        return this.params;
    }
}
export class QDTO_JurnalLedger extends QueryObject {
    Id = new QNumberPath(this.withPrefix("Id"));
    IdBudgetSap = new QNumberPath(this.withPrefix("IdBudgetSap"));
    IdMasterBudget = new QNumberPath(this.withPrefix("IdMasterBudget"));
    Tanggal = new QDateTimeOffsetPath(this.withPrefix("Tanggal"));
    Account = new QStringPath(this.withPrefix("Account"));
    Deskripsi = new QStringPath(this.withPrefix("Deskripsi"));
    Dept = new QStringPath(this.withPrefix("Dept"));
    SubDept = new QStringPath(this.withPrefix("SubDept"));
    Periode = new QNumberPath(this.withPrefix("Periode"));
    Debit = new QNumberPath(this.withPrefix("Debit"));
    Kredit = new QNumberPath(this.withPrefix("Kredit"));
    ContraRef = new QStringPath(this.withPrefix("ContraRef"));
    DibuatTanggal = new QDateTimeOffsetPath(this.withPrefix("DibuatTanggal"));
    MasterBudget = new QEntityPath(this.withPrefix("MasterBudget"), () => QDTO_MasterBudget);
    BudgetSap = new QEntityPath(this.withPrefix("BudgetSap"), () => QDTO_BudgetSap);
}
export const qDTO_JurnalLedger = new QDTO_JurnalLedger();
export class QDTO_JurnalLedgerId extends QId {
    params = [new QNumberParam("Id")];
    getParams() {
        return this.params;
    }
}
export class QDTO_KategoriPpl extends QueryObject {
    Id = new QNumberPath(this.withPrefix("Id"));
    IdJenisProgram = new QNumberPath(this.withPrefix("IdJenisProgram"));
    Nama = new QStringPath(this.withPrefix("Nama"));
    Component = new QStringPath(this.withPrefix("Component"));
    DibuatTanggal = new QDateTimeOffsetPath(this.withPrefix("DibuatTanggal"));
    Kode = new QStringPath(this.withPrefix("Kode"));
    Aktif = new QBooleanPath(this.withPrefix("Aktif"));
    JenisProgram = new QEntityPath(this.withPrefix("JenisProgram"), () => QDTO_JenisProgram);
    JenisPpl = new QEntityCollectionPath(this.withPrefix("JenisPpl"), () => QDTO_JenisPpl);
}
export const qDTO_KategoriPpl = new QDTO_KategoriPpl();
export class QDTO_KategoriPplId extends QId {
    params = [new QNumberParam("Id")];
    getParams() {
        return this.params;
    }
}
export class QDTO_MasterAccount extends QueryObject {
    Id = new QNumberPath(this.withPrefix("Id"));
    Nama = new QStringPath(this.withPrefix("Nama"));
    Type = new QStringPath(this.withPrefix("Type"));
    Aktif = new QBooleanPath(this.withPrefix("Aktif"));
    DibuatTanggal = new QDateTimeOffsetPath(this.withPrefix("DibuatTanggal"));
}
export const qDTO_MasterAccount = new QDTO_MasterAccount();
export class QDTO_MasterAccountId extends QId {
    params = [new QNumberParam("Id")];
    getParams() {
        return this.params;
    }
}
export class QDTO_MasterJabatan extends QueryObject {
    Id = new QNumberPath(this.withPrefix("Id"));
    KodeJabatan = new QStringPath(this.withPrefix("KodeJabatan"));
    NamaJabatan = new QStringPath(this.withPrefix("NamaJabatan"));
    LevelJabat = new QNumberPath(this.withPrefix("LevelJabat"));
}
export const qDTO_MasterJabatan = new QDTO_MasterJabatan();
export class QDTO_MasterJabatanId extends QId {
    params = [new QNumberParam("Id")];
    getParams() {
        return this.params;
    }
}
export class QDTO_MasterKaryawan extends QueryObject {
    Id = new QNumberPath(this.withPrefix("Id"));
    NamaKaryawan = new QStringPath(this.withPrefix("NamaKaryawan"));
    NikKaryawan = new QStringPath(this.withPrefix("NikKaryawan"));
    Jabatan = new QStringPath(this.withPrefix("Jabatan"));
    KodeDept = new QStringPath(this.withPrefix("KodeDept"));
    IdLevel = new QNumberPath(this.withPrefix("IdLevel"));
    IdDep = new QNumberPath(this.withPrefix("IdDep"));
    LevelJabatan = new QStringPath(this.withPrefix("LevelJabatan"));
    KodeJabatan = new QStringPath(this.withPrefix("KodeJabatan"));
}
export const qDTO_MasterKaryawan = new QDTO_MasterKaryawan();
export class QDTO_MasterKaryawanId extends QId {
    params = [new QNumberParam("Id")];
    getParams() {
        return this.params;
    }
}
export class QDTO_MasterKlaim extends QueryObject {
    Id = new QNumberPath(this.withPrefix("Id"));
    KodeKlaim = new QStringPath(this.withPrefix("KodeKlaim"));
    Nama = new QStringPath(this.withPrefix("Nama"));
    Keterangan = new QStringPath(this.withPrefix("Keterangan"));
    Sumber = new QStringPath(this.withPrefix("Sumber"));
    Aktif = new QBooleanPath(this.withPrefix("Aktif"));
    IdKodeKlaim = new QNumberPath(this.withPrefix("IdKodeKlaim"));
    KodeKlaims = new QEntityPath(this.withPrefix("KodeKlaims"), () => QDTO_KodeKlaims);
    MasterKlaimSyarat = new QEntityCollectionPath(this.withPrefix("MasterKlaimSyarat"), () => QDTO_MasterKlaimSyarat);
}
export const qDTO_MasterKlaim = new QDTO_MasterKlaim();
export class QDTO_MasterKlaimId extends QId {
    params = [new QNumberParam("Id")];
    getParams() {
        return this.params;
    }
}
export class QDTO_MasterKlaimSyarat extends QueryObject {
    Id = new QNumberPath(this.withPrefix("Id"));
    IdMasterKlaim = new QNumberPath(this.withPrefix("IdMasterKlaim"));
    Sub = new QStringPath(this.withPrefix("Sub"));
    Syarat = new QStringPath(this.withPrefix("Syarat"));
    Keterangan = new QStringPath(this.withPrefix("Keterangan"));
    Aktif = new QBooleanPath(this.withPrefix("Aktif"));
}
export const qDTO_MasterKlaimSyarat = new QDTO_MasterKlaimSyarat();
export class QDTO_MasterKlaimSyaratId extends QId {
    params = [new QNumberParam("Id")];
    getParams() {
        return this.params;
    }
}
export class QDTO_MasterOrg extends QueryObject {
    Id = new QNumberPath(this.withPrefix("Id"));
    CompanyName = new QStringPath(this.withPrefix("CompanyName"));
    CompanyCode = new QStringPath(this.withPrefix("CompanyCode"));
    CompanyAddres = new QStringPath(this.withPrefix("CompanyAddres"));
    CompanyDescription = new QStringPath(this.withPrefix("CompanyDescription"));
    CompanyStatus = new QEnumPath(this.withPrefix("CompanyStatus"), CompanyStatusType);
}
export const qDTO_MasterOrg = new QDTO_MasterOrg();
export class QDTO_MasterOrgId extends QId {
    params = [new QNumberParam("Id")];
    getParams() {
        return this.params;
    }
}
export class QDTO_MasterJobPos extends QueryObject {
    Id = new QNumberPath(this.withPrefix("Id"));
    PositionName = new QStringPath(this.withPrefix("PositionName"));
}
export const qDTO_MasterJobPos = new QDTO_MasterJobPos();
export class QDTO_MasterJobPosId extends QId {
    params = [new QNumberParam("Id")];
    getParams() {
        return this.params;
    }
}
export class QDTO_MasterJobLvl extends QueryObject {
    Id = new QNumberPath(this.withPrefix("Id"));
    LevelName = new QStringPath(this.withPrefix("LevelName"));
    KodeJabatan = new QStringPath(this.withPrefix("KodeJabatan"));
}
export const qDTO_MasterJobLvl = new QDTO_MasterJobLvl();
export class QDTO_MasterJobLvlId extends QId {
    params = [new QNumberParam("Id")];
    getParams() {
        return this.params;
    }
}
export class QDTO_MasterPerm extends QueryObject {
    Id = new QNumberPath(this.withPrefix("Id"));
    ModuleName = new QStringPath(this.withPrefix("ModuleName"));
}
export const qDTO_MasterPerm = new QDTO_MasterPerm();
export class QDTO_MasterPermId extends QId {
    params = [new QNumberParam("Id")];
    getParams() {
        return this.params;
    }
}
export class QDTO_MasterRole extends QueryObject {
    Id = new QNumberPath(this.withPrefix("Id"));
    RoleName = new QStringPath(this.withPrefix("RoleName"));
    RoleType = new QEnumPath(this.withPrefix("RoleType"), RoleTypeEnum);
    Organization = new QEntityPath(this.withPrefix("Organization"), () => QDTO_MasterOrgSlim);
    JobPosition = new QEntityPath(this.withPrefix("JobPosition"), () => QDTO_MasterJobPos);
    JobLevel = new QEntityPath(this.withPrefix("JobLevel"), () => QDTO_MasterJobLvl);
    Permissions = new QEntityCollectionPath(this.withPrefix("Permissions"), () => QDTO_PermissionRef);
}
export const qDTO_MasterRole = new QDTO_MasterRole();
export class QDTO_MasterRoleId extends QId {
    params = [new QNumberParam("Id")];
    getParams() {
        return this.params;
    }
}
export class QDTO_PermissionRef extends QueryObject {
    Id = new QNumberPath(this.withPrefix("Id"));
    CanView = new QBooleanPath(this.withPrefix("CanView"));
    CanEdit = new QBooleanPath(this.withPrefix("CanEdit"));
    CanDelete = new QBooleanPath(this.withPrefix("CanDelete"));
    CanCreate = new QBooleanPath(this.withPrefix("CanCreate"));
    CanApprove = new QBooleanPath(this.withPrefix("CanApprove"));
    CanReport = new QBooleanPath(this.withPrefix("CanReport"));
    Permission = new QEntityPath(this.withPrefix("Permission"), () => QDTO_MasterPerm);
}
export const qDTO_PermissionRef = new QDTO_PermissionRef();
export class QDTO_PermissionRefId extends QId {
    params = [new QNumberParam("Id")];
    getParams() {
        return this.params;
    }
}
export class QDTO_MasterUser extends QueryObject {
    Id = new QNumberPath(this.withPrefix("Id"));
    Username = new QStringPath(this.withPrefix("Username"));
    Password = new QStringPath(this.withPrefix("Password"));
    IsActive = new QBooleanPath(this.withPrefix("IsActive"));
    IsDeptHead = new QBooleanPath(this.withPrefix("IsDeptHead"));
    IsSuperAdmin = new QBooleanPath(this.withPrefix("IsSuperAdmin"));
    Channel = new QStringPath(this.withPrefix("Channel"));
    RoleId = new QNumberPath(this.withPrefix("RoleId"));
    KodeDepartemen = new QStringPath(this.withPrefix("KodeDepartemen"));
    KodeUserType = new QStringPath(this.withPrefix("KodeUserType"));
    TandaTangan = new QStringPath(this.withPrefix("TandaTangan"));
    Base64Data = new QStringPath(this.withPrefix("Base64Data"));
    Nik = new QStringPath(this.withPrefix("Nik"));
    NamaLengkap = new QStringPath(this.withPrefix("NamaLengkap"));
    AllDistributor = new QBooleanPath(this.withPrefix("AllDistributor"));
    AllArea = new QBooleanPath(this.withPrefix("AllArea"));
    Role = new QEntityPath(this.withPrefix("Role"), () => QDTO_MasterRole);
    UserArea = new QEntityCollectionPath(this.withPrefix("UserArea"), () => QDTO_UserArea);
    UserDistributor = new QEntityCollectionPath(this.withPrefix("UserDistributor"), () => QDTO_UserDistributor);
    UsersAttachment = new QEntityCollectionPath(this.withPrefix("UsersAttachment"), () => QDTO_UsersAttachment);
}
export const qDTO_MasterUser = new QDTO_MasterUser();
export class QDTO_MasterUserId extends QId {
    params = [new QNumberParam("Id")];
    getParams() {
        return this.params;
    }
}
export class QDTO_UsersAttachment extends QueryObject {
    Id = new QNumberPath(this.withPrefix("Id"));
    IdMasterUser = new QNumberPath(this.withPrefix("IdMasterUser"));
    Label = new QStringPath(this.withPrefix("Label"));
    File = new QStringPath(this.withPrefix("File"));
    DibuatTanggal = new QDateTimeOffsetPath(this.withPrefix("DibuatTanggal"));
    Base64Data = new QStringPath(this.withPrefix("Base64Data"));
}
export const qDTO_UsersAttachment = new QDTO_UsersAttachment();
export class QDTO_UsersAttachmentId extends QId {
    params = [new QNumberParam("Id")];
    getParams() {
        return this.params;
    }
}
export class QDTO_MasterProvinsi extends QueryObject {
    Id = new QNumberPath(this.withPrefix("Id"));
    NamaProvinsi = new QStringPath(this.withPrefix("NamaProvinsi"));
    MasterKota = new QEntityCollectionPath(this.withPrefix("MasterKota"), () => QDTO_MasterKota);
}
export const qDTO_MasterProvinsi = new QDTO_MasterProvinsi();
export class QDTO_MasterProvinsiId extends QId {
    params = [new QNumberParam("Id")];
    getParams() {
        return this.params;
    }
}
export class QDTO_MasterKota extends QueryObject {
    Id = new QNumberPath(this.withPrefix("Id"));
    IdProvinsi = new QNumberPath(this.withPrefix("IdProvinsi"));
    NamaKota = new QStringPath(this.withPrefix("NamaKota"));
    MasterProvinsi = new QEntityPath(this.withPrefix("MasterProvinsi"), () => QDTO_MasterProvinsi);
    MasterKecamatan = new QEntityCollectionPath(this.withPrefix("MasterKecamatan"), () => QDTO_MasterKecamatan);
}
export const qDTO_MasterKota = new QDTO_MasterKota();
export class QDTO_MasterKotaId extends QId {
    params = [new QNumberParam("Id")];
    getParams() {
        return this.params;
    }
}
export class QDTO_MasterKecamatan extends QueryObject {
    Id = new QNumberPath(this.withPrefix("Id"));
    IdProvinsi = new QNumberPath(this.withPrefix("IdProvinsi"));
    IdKota = new QNumberPath(this.withPrefix("IdKota"));
    NamaKecamatan = new QStringPath(this.withPrefix("NamaKecamatan"));
    MasterProvinsi = new QEntityPath(this.withPrefix("MasterProvinsi"), () => QDTO_MasterProvinsi);
    MasterKota = new QEntityPath(this.withPrefix("MasterKota"), () => QDTO_MasterKota);
    MasterKelurahan = new QEntityCollectionPath(this.withPrefix("MasterKelurahan"), () => QDTO_MasterKelurahan);
}
export const qDTO_MasterKecamatan = new QDTO_MasterKecamatan();
export class QDTO_MasterKecamatanId extends QId {
    params = [new QNumberParam("Id")];
    getParams() {
        return this.params;
    }
}
export class QDTO_MasterKelurahan extends QueryObject {
    Id = new QNumberPath(this.withPrefix("Id"));
    IdProvinsi = new QNumberPath(this.withPrefix("IdProvinsi"));
    IdKota = new QNumberPath(this.withPrefix("IdKota"));
    IdKecamatan = new QNumberPath(this.withPrefix("IdKecamatan"));
    NamaKelurahan = new QStringPath(this.withPrefix("NamaKelurahan"));
    MasterProvinsi = new QEntityPath(this.withPrefix("MasterProvinsi"), () => QDTO_MasterProvinsi);
    MasterKota = new QEntityPath(this.withPrefix("MasterKota"), () => QDTO_MasterKota);
    MasterKecamatan = new QEntityPath(this.withPrefix("MasterKecamatan"), () => QDTO_MasterKecamatan);
}
export const qDTO_MasterKelurahan = new QDTO_MasterKelurahan();
export class QDTO_MasterKelurahanId extends QId {
    params = [new QNumberParam("Id")];
    getParams() {
        return this.params;
    }
}
export class QDTO_OITM extends QueryObject {
    ItemCode = new QStringPath(this.withPrefix("ItemCode"));
    ItemName = new QStringPath(this.withPrefix("ItemName"));
    CodeBars = new QStringPath(this.withPrefix("CodeBars"));
    Price = new QNumberPath(this.withPrefix("Price"));
}
export const qDTO_OITM = new QDTO_OITM();
export class QDTO_OITMId extends QId {
    params = [new QStringParam("ItemCode")];
    getParams() {
        return this.params;
    }
}
export class QDTO_Outlet extends QueryObject {
    Id = new QNumberPath(this.withPrefix("Id"));
    IdArea = new QNumberPath(this.withPrefix("IdArea"));
    IdKota = new QNumberPath(this.withPrefix("IdKota"));
    NamaKota = new QStringPath(this.withPrefix("NamaKota"));
    IdGroup = new QNumberPath(this.withPrefix("IdGroup"));
    IdKecamatan = new QNumberPath(this.withPrefix("IdKecamatan"));
    NamaKecamatan = new QStringPath(this.withPrefix("NamaKecamatan"));
    IdKelurahan = new QNumberPath(this.withPrefix("IdKelurahan"));
    NamaKelurahan = new QStringPath(this.withPrefix("NamaKelurahan"));
    JumlahStore = new QNumberPath(this.withPrefix("JumlahStore"));
    KodeOutlet = new QStringPath(this.withPrefix("KodeOutlet"));
    KodeCustomer = new QStringPath(this.withPrefix("KodeCustomer"));
    NamaStore = new QStringPath(this.withPrefix("NamaStore"));
    NamaCustomer = new QStringPath(this.withPrefix("NamaCustomer"));
    KodeDistributor = new QStringPath(this.withPrefix("KodeDistributor"));
    Distributor = new QStringPath(this.withPrefix("Distributor"));
    AlamatStore = new QStringPath(this.withPrefix("AlamatStore"));
    JenisStore = new QStringPath(this.withPrefix("JenisStore"));
    SubMt = new QStringPath(this.withPrefix("SubMt"));
    GroupOutlet = new QStringPath(this.withPrefix("GroupOutlet"));
    TipeStore = new QStringPath(this.withPrefix("TipeStore"));
    NamaPic = new QStringPath(this.withPrefix("NamaPic"));
    TeleponPic = new QStringPath(this.withPrefix("TeleponPic"));
    EmailPic = new QStringPath(this.withPrefix("EmailPic"));
    Latitude = new QStringPath(this.withPrefix("Latitude"));
    Longitude = new QStringPath(this.withPrefix("Longitude"));
    AtasNama = new QStringPath(this.withPrefix("AtasNama"));
    Bank = new QStringPath(this.withPrefix("Bank"));
    NoRek = new QStringPath(this.withPrefix("NoRek"));
    StatusOutlet = new QStringPath(this.withPrefix("StatusOutlet"));
    Attacement = new QStringPath(this.withPrefix("Attacement"));
    Aktif = new QBooleanPath(this.withPrefix("Aktif"));
    StatusBa = new QBooleanPath(this.withPrefix("StatusBa"));
    DibuatTanggal = new QDateTimeOffsetPath(this.withPrefix("DibuatTanggal"));
    Area = new QEntityPath(this.withPrefix("Area"), () => QDTO_Area);
    OutletGroup = new QEntityPath(this.withPrefix("OutletGroup"), () => QDTO_OutletGroup);
}
export const qDTO_Outlet = new QDTO_Outlet();
export class QDTO_OutletId extends QId {
    params = [new QNumberParam("Id")];
    getParams() {
        return this.params;
    }
}
export class QDTO_OutletGroup extends QueryObject {
    Id = new QNumberPath(this.withPrefix("Id"));
    Nama = new QStringPath(this.withPrefix("Nama"));
    Aktif = new QBooleanPath(this.withPrefix("Aktif"));
    DibuatTanggal = new QDateTimeOffsetPath(this.withPrefix("DibuatTanggal"));
    Outlet = new QEntityCollectionPath(this.withPrefix("Outlet"), () => QDTO_Outlet);
}
export const qDTO_OutletGroup = new QDTO_OutletGroup();
export class QDTO_OutletGroupId extends QId {
    params = [new QNumberParam("Id")];
    getParams() {
        return this.params;
    }
}
export class QDTO_PengajuanForm extends QueryObject {
    Id = new QNumberPath(this.withPrefix("Id"));
    NoDokumen = new QStringPath(this.withPrefix("NoDokumen"));
    IdFeature = new QNumberPath(this.withPrefix("IdFeature"));
    DibuatOleh = new QStringPath(this.withPrefix("DibuatOleh"));
    UserId = new QNumberPath(this.withPrefix("UserId"));
    ApprovalTypeAction = new QStringPath(this.withPrefix("ApprovalTypeAction"));
    StatusApproval = new QBooleanPath(this.withPrefix("StatusApproval"));
    ApprovalId = new QNumberPath(this.withPrefix("ApprovalId"));
    Status = new QStringPath(this.withPrefix("Status"));
    Kategori = new QStringPath(this.withPrefix("Kategori"));
    AllArea = new QBooleanPath(this.withPrefix("AllArea"));
    KodeArea = new QStringPath(this.withPrefix("KodeArea"));
    NamaArea = new QStringPath(this.withPrefix("NamaArea"));
    AllOutlet = new QNumberPath(this.withPrefix("AllOutlet"));
    OutletLainnya = new QStringPath(this.withPrefix("OutletLainnya"));
    KodeOutlet = new QStringPath(this.withPrefix("KodeOutlet"));
    NamaOutlet = new QStringPath(this.withPrefix("NamaOutlet"));
    JenisOutlet = new QStringPath(this.withPrefix("JenisOutlet"));
    KodeDistributor = new QStringPath(this.withPrefix("KodeDistributor"));
    NamaDistributor = new QStringPath(this.withPrefix("NamaDistributor"));
    Alamat = new QStringPath(this.withPrefix("Alamat"));
    NamaKegiatan = new QStringPath(this.withPrefix("NamaKegiatan"));
    JenisEvent = new QStringPath(this.withPrefix("JenisEvent"));
    PeriodeAwal = new QDateTimeOffsetPath(this.withPrefix("PeriodeAwal"));
    PeriodeAkhir = new QDateTimeOffsetPath(this.withPrefix("PeriodeAkhir"));
    WaktuAwal = new QDateTimeOffsetPath(this.withPrefix("WaktuAwal"));
    WaktuAkhir = new QDateTimeOffsetPath(this.withPrefix("WaktuAkhir"));
    Pic = new QStringPath(this.withPrefix("Pic"));
    Kontak = new QStringPath(this.withPrefix("Kontak"));
    TujuanPengajuan = new QStringPath(this.withPrefix("TujuanPengajuan"));
    DetailPengajuan = new QStringPath(this.withPrefix("DetailPengajuan"));
    JangkauanArea = new QStringPath(this.withPrefix("JangkauanArea"));
    Audiens = new QStringPath(this.withPrefix("Audiens"));
    StrategiPromosi = new QStringPath(this.withPrefix("StrategiPromosi"));
    BenefitSponsor = new QStringPath(this.withPrefix("BenefitSponsor"));
    EstimasiTarget = new QNumberPath(this.withPrefix("EstimasiTarget"));
    Remarks = new QStringPath(this.withPrefix("Remarks"));
    Aktif = new QBooleanPath(this.withPrefix("Aktif"));
    DibuatTanggal = new QDateTimeOffsetPath(this.withPrefix("DibuatTanggal"));
    PengajuanFormOutlet = new QEntityCollectionPath(this.withPrefix("PengajuanFormOutlet"), () => QDTO_PengajuanFormOutlet);
    PengajuanFormAttachment = new QEntityCollectionPath(this.withPrefix("PengajuanFormAttachment"), () => QDTO_PengajuanFormAttachment);
    PengajuanFormDetail = new QEntityCollectionPath(this.withPrefix("PengajuanFormDetail"), () => QDTO_PengajuanFormDetail);
    PengajuanFormProduk = new QEntityCollectionPath(this.withPrefix("PengajuanFormProduk"), () => QDTO_PengajuanFormProduk);
    Approval = new QEntityCollectionPath(this.withPrefix("Approval"), () => QDTO_Approval);
}
export const qDTO_PengajuanForm = new QDTO_PengajuanForm();
export class QDTO_PengajuanFormId extends QId {
    params = [new QNumberParam("Id")];
    getParams() {
        return this.params;
    }
}
export class QDTO_PengajuanFormOutlet extends QueryObject {
    Id = new QNumberPath(this.withPrefix("Id"));
    IdPengajuanForm = new QNumberPath(this.withPrefix("IdPengajuanForm"));
    IdOutlet = new QNumberPath(this.withPrefix("IdOutlet"));
    KodeOutlet = new QStringPath(this.withPrefix("KodeOutlet"));
    NamaOutlet = new QStringPath(this.withPrefix("NamaOutlet"));
    DibuatTanggal = new QDateTimeOffsetPath(this.withPrefix("DibuatTanggal"));
}
export const qDTO_PengajuanFormOutlet = new QDTO_PengajuanFormOutlet();
export class QDTO_PengajuanFormOutletId extends QId {
    params = [new QNumberParam("Id")];
    getParams() {
        return this.params;
    }
}
export class QDTO_PengajuanFormAttachment extends QueryObject {
    Id = new QNumberPath(this.withPrefix("Id"));
    IdPengajuanForm = new QNumberPath(this.withPrefix("IdPengajuanForm"));
    Label = new QStringPath(this.withPrefix("Label"));
    File = new QStringPath(this.withPrefix("File"));
    DibuatTanggal = new QDateTimeOffsetPath(this.withPrefix("DibuatTanggal"));
    Base64Data = new QStringPath(this.withPrefix("Base64Data"));
}
export const qDTO_PengajuanFormAttachment = new QDTO_PengajuanFormAttachment();
export class QDTO_PengajuanFormAttachmentId extends QId {
    params = [new QNumberParam("Id")];
    getParams() {
        return this.params;
    }
}
export class QDTO_PengajuanFormProduk extends QueryObject {
    Id = new QNumberPath(this.withPrefix("Id"));
    IdPengajuanForm = new QNumberPath(this.withPrefix("IdPengajuanForm"));
    KodeProduk = new QStringPath(this.withPrefix("KodeProduk"));
    NamaProduk = new QStringPath(this.withPrefix("NamaProduk"));
    Qty = new QNumberPath(this.withPrefix("Qty"));
    Biaya = new QNumberPath(this.withPrefix("Biaya"));
    PPN = new QNumberPath(this.withPrefix("PPN"));
    TotalBiaya = new QNumberPath(this.withPrefix("TotalBiaya"));
    DibuatTanggal = new QDateTimeOffsetPath(this.withPrefix("DibuatTanggal"));
    UsedResi = new QBooleanPath(this.withPrefix("UsedResi"));
}
export const qDTO_PengajuanFormProduk = new QDTO_PengajuanFormProduk();
export class QDTO_PengajuanFormProdukId extends QId {
    params = [new QNumberParam("Id")];
    getParams() {
        return this.params;
    }
}
export class QDTO_PengajuanFormDetail extends QueryObject {
    Id = new QNumberPath(this.withPrefix("Id"));
    IdPengajuanForm = new QNumberPath(this.withPrefix("IdPengajuanForm"));
    Deskripsi = new QStringPath(this.withPrefix("Deskripsi"));
    Keterangan = new QStringPath(this.withPrefix("Keterangan"));
    Klaim = new QStringPath(this.withPrefix("Klaim"));
    NamaPostBudget = new QStringPath(this.withPrefix("NamaPostBudget"));
    Biaya = new QNumberPath(this.withPrefix("Biaya"));
    IdPostBudget = new QNumberPath(this.withPrefix("IdPostBudget"));
}
export const qDTO_PengajuanFormDetail = new QDTO_PengajuanFormDetail();
export class QDTO_PengajuanFormDetailId extends QId {
    params = [new QNumberParam("Id")];
    getParams() {
        return this.params;
    }
}
export class QDTO_PostBudget extends QueryObject {
    Id = new QNumberPath(this.withPrefix("Id"));
    CoaId = new QNumberPath(this.withPrefix("CoaId"));
    ParentId = new QNumberPath(this.withPrefix("ParentId"));
    IdDepartemen = new QNumberPath(this.withPrefix("IdDepartemen"));
    BrandId = new QNumberPath(this.withPrefix("BrandId"));
    Nama = new QStringPath(this.withPrefix("Nama"));
    Kategori = new QStringPath(this.withPrefix("Kategori"));
    Channel = new QStringPath(this.withPrefix("Channel"));
    Deskripsi = new QStringPath(this.withPrefix("Deskripsi"));
    Departemen = new QStringPath(this.withPrefix("Departemen"));
    DibuatTanggal = new QDateTimeOffsetPath(this.withPrefix("DibuatTanggal"));
    Aktif = new QBooleanPath(this.withPrefix("Aktif"));
    ParentName = new QStringPath(this.withPrefix("ParentName"));
    Departmen = new QEntityPath(this.withPrefix("Departmen"), () => QDTO_Departmen);
    Coa = new QEntityPath(this.withPrefix("Coa"), () => QDTO_Coa);
    Brand = new QEntityPath(this.withPrefix("Brand"), () => QDTO_Brand);
}
export const qDTO_PostBudget = new QDTO_PostBudget();
export class QDTO_PostBudgetId extends QId {
    params = [new QNumberParam("Id")];
    getParams() {
        return this.params;
    }
}
export class QDTO_Channel extends QueryObject {
    Id = new QNumberPath(this.withPrefix("Id"));
    Nama = new QStringPath(this.withPrefix("Nama"));
    SubNama = new QStringPath(this.withPrefix("SubNama"));
    Kode = new QStringPath(this.withPrefix("Kode"));
    DibuatTanggal = new QDateTimeOffsetPath(this.withPrefix("DibuatTanggal"));
    Aktif = new QBooleanPath(this.withPrefix("Aktif"));
}
export const qDTO_Channel = new QDTO_Channel();
export class QDTO_ChannelId extends QId {
    params = [new QNumberParam("Id")];
    getParams() {
        return this.params;
    }
}
export class QDTO_BudgetSap extends QueryObject {
    Id = new QNumberPath(this.withPrefix("Id"));
    AcctCode = new QStringPath(this.withPrefix("AcctCode"));
    OcrCode = new QStringPath(this.withPrefix("OcrCode"));
    OcrCode1 = new QStringPath(this.withPrefix("OcrCode1"));
    OcrCode5 = new QStringPath(this.withPrefix("OcrCode5"));
    DimCode = new QStringPath(this.withPrefix("DimCode"));
    Instance = new QNumberPath(this.withPrefix("Instance"));
    Line_ID = new QNumberPath(this.withPrefix("Line_ID"));
    DebLTotal = new QNumberPath(this.withPrefix("DebLTotal"));
    DebSTotalSisa = new QNumberPath(this.withPrefix("DebSTotalSisa"));
    CredLTotal = new QNumberPath(this.withPrefix("CredLTotal"));
    DebSTotal = new QNumberPath(this.withPrefix("DebSTotal"));
    CredSTotal = new QNumberPath(this.withPrefix("CredSTotal"));
    TransAmnt = new QStringPath(this.withPrefix("TransAmnt"));
    UserSign = new QNumberPath(this.withPrefix("UserSign"));
    AcctName = new QStringPath(this.withPrefix("AcctName"));
    Year = new QNumberPath(this.withPrefix("Year"));
    DibuatTanggal = new QDateTimeOffsetPath(this.withPrefix("DibuatTanggal"));
    MasterBudget = new QEntityCollectionPath(this.withPrefix("MasterBudget"), () => QDTO_MasterBudget);
}
export const qDTO_BudgetSap = new QDTO_BudgetSap();
export class QDTO_BudgetSapId extends QId {
    params = [new QNumberParam("Id")];
    getParams() {
        return this.params;
    }
}
export class QDTO_MasterBudget extends QueryObject {
    Id = new QNumberPath(this.withPrefix("Id"));
    IdBudgetSap = new QNumberPath(this.withPrefix("IdBudgetSap"));
    IdBrand = new QNumberPath(this.withPrefix("IdBrand"));
    IdPostBudget = new QNumberPath(this.withPrefix("IdPostBudget"));
    CoaId = new QNumberPath(this.withPrefix("CoaId"));
    DeptKode = new QStringPath(this.withPrefix("DeptKode"));
    Year = new QNumberPath(this.withPrefix("Year"));
    Month = new QNumberPath(this.withPrefix("Month"));
    Budget = new QNumberPath(this.withPrefix("Budget"));
    BudgetSisa = new QNumberPath(this.withPrefix("BudgetSisa"));
    DibuatTanggal = new QDateTimeOffsetPath(this.withPrefix("DibuatTanggal"));
    DibuatOleh = new QStringPath(this.withPrefix("DibuatOleh"));
    UserId = new QNumberPath(this.withPrefix("UserId"));
    IsLocked = new QBooleanPath(this.withPrefix("IsLocked"));
    PostBudget = new QEntityPath(this.withPrefix("PostBudget"), () => QDTO_PostBudget);
    Coa = new QEntityPath(this.withPrefix("Coa"), () => QDTO_Coa);
    Brand = new QEntityPath(this.withPrefix("Brand"), () => QDTO_Brand);
}
export const qDTO_MasterBudget = new QDTO_MasterBudget();
export class QDTO_MasterBudgetId extends QId {
    params = [new QNumberParam("Id")];
    getParams() {
        return this.params;
    }
}
export class QDTO_PplArea extends QueryObject {
    Id = new QNumberPath(this.withPrefix("Id"));
    IdHeaderPpl = new QNumberPath(this.withPrefix("IdHeaderPpl"));
    IdArea = new QNumberPath(this.withPrefix("IdArea"));
    DibuatTanggal = new QDateTimeOffsetPath(this.withPrefix("DibuatTanggal"));
    Area = new QEntityPath(this.withPrefix("Area"), () => QDTO_Area);
}
export const qDTO_PplArea = new QDTO_PplArea();
export class QDTO_PplAreaId extends QId {
    params = [new QNumberParam("Id")];
    getParams() {
        return this.params;
    }
}
export class QDTO_PplAttachment extends QueryObject {
    Id = new QNumberPath(this.withPrefix("Id"));
    IdHeaderPpl = new QNumberPath(this.withPrefix("IdHeaderPpl"));
    Label = new QStringPath(this.withPrefix("Label"));
    File = new QStringPath(this.withPrefix("File"));
    DibuatTanggal = new QDateTimeOffsetPath(this.withPrefix("DibuatTanggal"));
    Base64Data = new QStringPath(this.withPrefix("Base64Data"));
}
export const qDTO_PplAttachment = new QDTO_PplAttachment();
export class QDTO_PplAttachmentId extends QId {
    params = [new QNumberParam("Id")];
    getParams() {
        return this.params;
    }
}
export class QDTO_PplBudgetAlokasi extends QueryObject {
    Id = new QNumberPath(this.withPrefix("Id"));
    IdHeaderPpl = new QNumberPath(this.withPrefix("IdHeaderPpl"));
    IdHeaderProject = new QNumberPath(this.withPrefix("IdHeaderProject"));
    IdAlokasi = new QNumberPath(this.withPrefix("IdAlokasi"));
    IdAlokasiDetail = new QNumberPath(this.withPrefix("IdAlokasiDetail"));
    Status = new QStringPath(this.withPrefix("Status"));
    NoDokumenResi = new QStringPath(this.withPrefix("NoDokumenResi"));
    StatusRealisasi = new QBooleanPath(this.withPrefix("StatusRealisasi"));
    Bulan = new QNumberPath(this.withPrefix("Bulan"));
    NilaiBudget = new QNumberPath(this.withPrefix("NilaiBudget"));
    DibuatTanggal = new QDateTimeOffsetPath(this.withPrefix("DibuatTanggal"));
}
export const qDTO_PplBudgetAlokasi = new QDTO_PplBudgetAlokasi();
export class QDTO_PplBudgetAlokasiId extends QId {
    params = [new QNumberParam("Id")];
    getParams() {
        return this.params;
    }
}
export class QDTO_PplDetailProduk extends QueryObject {
    Id = new QNumberPath(this.withPrefix("Id"));
    IdHeaderPpl = new QNumberPath(this.withPrefix("IdHeaderPpl"));
    KodeProduk = new QStringPath(this.withPrefix("KodeProduk"));
    NamaProduk = new QStringPath(this.withPrefix("NamaProduk"));
    Qty = new QNumberPath(this.withPrefix("Qty"));
    Biaya = new QNumberPath(this.withPrefix("Biaya"));
    PPN = new QNumberPath(this.withPrefix("PPN"));
    TotalBiaya = new QNumberPath(this.withPrefix("TotalBiaya"));
    DibuatTanggal = new QDateTimeOffsetPath(this.withPrefix("DibuatTanggal"));
}
export const qDTO_PplDetailProduk = new QDTO_PplDetailProduk();
export class QDTO_PplDetailProdukId extends QId {
    params = [new QNumberParam("Id")];
    getParams() {
        return this.params;
    }
}
export class QDTO_PplDetails extends QueryObject {
    Id = new QNumberPath(this.withPrefix("Id"));
    IdHeaderPpl = new QNumberPath(this.withPrefix("IdHeaderPpl"));
    NamaBiaya = new QStringPath(this.withPrefix("NamaBiaya"));
    Keterangan = new QStringPath(this.withPrefix("Keterangan"));
    Biaya = new QNumberPath(this.withPrefix("Biaya"));
    IdSales = new QNumberPath(this.withPrefix("IdSales"));
    NamaSales = new QStringPath(this.withPrefix("NamaSales"));
    Qty = new QNumberPath(this.withPrefix("Qty"));
    TotalBiaya = new QNumberPath(this.withPrefix("TotalBiaya"));
    Target = new QNumberPath(this.withPrefix("Target"));
    Insentif = new QNumberPath(this.withPrefix("Insentif"));
    TargetGt = new QNumberPath(this.withPrefix("TargetGt"));
    InsentifGt = new QNumberPath(this.withPrefix("InsentifGt"));
    BobotGt = new QNumberPath(this.withPrefix("BobotGt"));
    TargetMt = new QNumberPath(this.withPrefix("TargetMt"));
    InsentifMt = new QNumberPath(this.withPrefix("InsentifMt"));
    BobotMt = new QNumberPath(this.withPrefix("BobotMt"));
    Ratio = new QNumberPath(this.withPrefix("Ratio"));
    TargetSe = new QEntityPath(this.withPrefix("TargetSe"), () => QTargetSeDto);
    Sosmed = new QEntityPath(this.withPrefix("Sosmed"), () => QSosmedDto);
    TipeSe = new QStringPath(this.withPrefix("TipeSe"));
    Bulan = new QStringPath(this.withPrefix("Bulan"));
    Periode = new QDateTimeOffsetPath(this.withPrefix("Periode"));
    PeriodeAwal = new QDateTimeOffsetPath(this.withPrefix("PeriodeAwal"));
    PeriodeAkhir = new QDateTimeOffsetPath(this.withPrefix("PeriodeAkhir"));
    Value = new QNumberPath(this.withPrefix("Value"));
    Tanggal = new QDateTimeOffsetPath(this.withPrefix("Tanggal"));
    JamMulai = new QDateTimeOffsetPath(this.withPrefix("JamMulai"));
    JamSelesai = new QDateTimeOffsetPath(this.withPrefix("JamSelesai"));
    DibuatTanggal = new QDateTimeOffsetPath(this.withPrefix("DibuatTanggal"));
}
export const qDTO_PplDetails = new QDTO_PplDetails();
export class QDTO_PplDetailsId extends QId {
    params = [new QNumberParam("Id")];
    getParams() {
        return this.params;
    }
}
export class QDTO_PplOutlet extends QueryObject {
    Id = new QNumberPath(this.withPrefix("Id"));
    IdHeaderPpl = new QNumberPath(this.withPrefix("IdHeaderPpl"));
    IdOutlet = new QNumberPath(this.withPrefix("IdOutlet"));
    DibuatTanggal = new QDateTimeOffsetPath(this.withPrefix("DibuatTanggal"));
    Outlet = new QEntityPath(this.withPrefix("Outlet"), () => QDTO_Outlet);
}
export const qDTO_PplOutlet = new QDTO_PplOutlet();
export class QDTO_PplOutletId extends QId {
    params = [new QNumberParam("Id")];
    getParams() {
        return this.params;
    }
}
export class QDTO_Produk extends QueryObject {
    Id = new QNumberPath(this.withPrefix("Id"));
    ItemCode = new QStringPath(this.withPrefix("ItemCode"));
    ItemName = new QStringPath(this.withPrefix("ItemName"));
    ItmsGrpCod = new QStringPath(this.withPrefix("ItmsGrpCod"));
    CodeBars = new QStringPath(this.withPrefix("CodeBars"));
    CostCenter = new QStringPath(this.withPrefix("CostCenter"));
    SubCategori = new QStringPath(this.withPrefix("SubCategori"));
}
export const qDTO_Produk = new QDTO_Produk();
export class QDTO_ProdukId extends QId {
    params = [new QNumberParam("Id")];
    getParams() {
        return this.params;
    }
}
export class QDTO_ProdukCategori extends QueryObject {
    Id = new QNumberPath(this.withPrefix("Id"));
    Code = new QStringPath(this.withPrefix("Code"));
    Name = new QStringPath(this.withPrefix("Name"));
    DibuatTanggal = new QDateTimeOffsetPath(this.withPrefix("DibuatTanggal"));
}
export const qDTO_ProdukCategori = new QDTO_ProdukCategori();
export class QDTO_ProdukCategoriId extends QId {
    params = [new QNumberParam("Id")];
    getParams() {
        return this.params;
    }
}
export class QDTO_Provinsi extends QueryObject {
    Id = new QNumberPath(this.withPrefix("Id"));
    Nama = new QStringPath(this.withPrefix("Nama"));
    Aktif = new QBooleanPath(this.withPrefix("Aktif"));
    DibuatTanggal = new QDateTimeOffsetPath(this.withPrefix("DibuatTanggal"));
    Kotas = new QEntityCollectionPath(this.withPrefix("Kotas"), () => QDTO_Kota);
}
export const qDTO_Provinsi = new QDTO_Provinsi();
export class QDTO_ProvinsiId extends QId {
    params = [new QNumberParam("Id")];
    getParams() {
        return this.params;
    }
}
export class QDTO_Kota extends QueryObject {
    Id = new QNumberPath(this.withPrefix("Id"));
    IdProvinsi = new QNumberPath(this.withPrefix("IdProvinsi"));
    Nama = new QStringPath(this.withPrefix("Nama"));
    Aktif = new QBooleanPath(this.withPrefix("Aktif"));
    DibuatTanggal = new QDateTimeOffsetPath(this.withPrefix("DibuatTanggal"));
    Provinsi = new QEntityPath(this.withPrefix("Provinsi"), () => QDTO_Provinsi);
    Kecamatans = new QEntityCollectionPath(this.withPrefix("Kecamatans"), () => QDTO_Kecamatan);
}
export const qDTO_Kota = new QDTO_Kota();
export class QDTO_KotaId extends QId {
    params = [new QNumberParam("Id")];
    getParams() {
        return this.params;
    }
}
export class QDTO_Kecamatan extends QueryObject {
    Id = new QNumberPath(this.withPrefix("Id"));
    IdProvinsi = new QNumberPath(this.withPrefix("IdProvinsi"));
    IdKota = new QNumberPath(this.withPrefix("IdKota"));
    Nama = new QStringPath(this.withPrefix("Nama"));
    Aktif = new QBooleanPath(this.withPrefix("Aktif"));
    DibuatTanggal = new QDateTimeOffsetPath(this.withPrefix("DibuatTanggal"));
    Provinsi = new QEntityPath(this.withPrefix("Provinsi"), () => QDTO_Provinsi);
    Kota = new QEntityPath(this.withPrefix("Kota"), () => QDTO_Kota);
    Kelurahans = new QEntityCollectionPath(this.withPrefix("Kelurahans"), () => QDTO_Kelurahan);
}
export const qDTO_Kecamatan = new QDTO_Kecamatan();
export class QDTO_KecamatanId extends QId {
    params = [new QNumberParam("Id")];
    getParams() {
        return this.params;
    }
}
export class QDTO_Kelurahan extends QueryObject {
    Id = new QNumberPath(this.withPrefix("Id"));
    IdProvinsi = new QNumberPath(this.withPrefix("IdProvinsi"));
    IdKota = new QNumberPath(this.withPrefix("IdKota"));
    IdKecamatan = new QNumberPath(this.withPrefix("IdKecamatan"));
    Nama = new QStringPath(this.withPrefix("Nama"));
    Aktif = new QBooleanPath(this.withPrefix("Aktif"));
    DibuatTanggal = new QDateTimeOffsetPath(this.withPrefix("DibuatTanggal"));
    Provinsi = new QEntityPath(this.withPrefix("Provinsi"), () => QDTO_Provinsi);
    Kota = new QEntityPath(this.withPrefix("Kota"), () => QDTO_Kota);
    Kecamatan = new QEntityPath(this.withPrefix("Kecamatan"), () => QDTO_Kecamatan);
}
export const qDTO_Kelurahan = new QDTO_Kelurahan();
export class QDTO_KelurahanId extends QId {
    params = [new QNumberParam("Id")];
    getParams() {
        return this.params;
    }
}
export class QDTO_Region extends QueryObject {
    Id = new QNumberPath(this.withPrefix("Id"));
    Nama = new QStringPath(this.withPrefix("Nama"));
    IdRegion = new QNumberPath(this.withPrefix("IdRegion"));
    Aktif = new QBooleanPath(this.withPrefix("Aktif"));
    DibuatTanggal = new QDateTimeOffsetPath(this.withPrefix("DibuatTanggal"));
    Area = new QEntityCollectionPath(this.withPrefix("Area"), () => QDTO_Area);
}
export const qDTO_Region = new QDTO_Region();
export class QDTO_RegionId extends QId {
    params = [new QNumberParam("Id")];
    getParams() {
        return this.params;
    }
}
export class QDTO_Resi extends QueryObject {
    Id = new QNumberPath(this.withPrefix("Id"));
    NoDokumen = new QStringPath(this.withPrefix("NoDokumen"));
    IdPpl = new QNumberPath(this.withPrefix("IdPpl"));
    JenisKlaim = new QStringPath(this.withPrefix("JenisKlaim"));
    UniqueId = new QStringPath(this.withPrefix("UniqueId"));
    NilaiKlaim = new QNumberPath(this.withPrefix("NilaiKlaim"));
    NoDistributor = new QStringPath(this.withPrefix("NoDistributor"));
    PeriodeAwal = new QDateTimeOffsetPath(this.withPrefix("PeriodeAwal"));
    PeriodeAkhir = new QDateTimeOffsetPath(this.withPrefix("PeriodeAkhir"));
    IdArea = new QNumberPath(this.withPrefix("IdArea"));
    FakturPajak = new QStringPath(this.withPrefix("FakturPajak"));
    TanggalFakturPajak = new QDateTimeOffsetPath(this.withPrefix("TanggalFakturPajak"));
    IdBrand = new QNumberPath(this.withPrefix("IdBrand"));
    IdCashback = new QNumberPath(this.withPrefix("IdCashback"));
    IdCashbackDetail = new QNumberPath(this.withPrefix("IdCashbackDetail"));
    ClosePettycash = new QBooleanPath(this.withPrefix("ClosePettycash"));
    Status = new QStringPath(this.withPrefix("Status"));
    Aktif = new QBooleanPath(this.withPrefix("Aktif"));
    DibuatOleh = new QStringPath(this.withPrefix("DibuatOleh"));
    Keterangan = new QStringPath(this.withPrefix("Keterangan"));
    AllOutlet = new QNumberPath(this.withPrefix("AllOutlet"));
    AllArea = new QBooleanPath(this.withPrefix("AllArea"));
    OutletLainnya = new QStringPath(this.withPrefix("OutletLainnya"));
    NamaArea = new QStringPath(this.withPrefix("NamaArea"));
    Syarat = new QEntityPath(this.withPrefix("Syarat"), () => QSyaratDto);
    ResiOutlet = new QEntityCollectionPath(this.withPrefix("ResiOutlet"), () => QDTO_ResiOutlet);
    ResiDetailProduk = new QEntityCollectionPath(this.withPrefix("ResiDetailProduk"), () => QDTO_ResiDetailProduk);
    ResiPic = new QEntityCollectionPath(this.withPrefix("ResiPic"), () => QDTO_ResiPic);
    ResiAttachment = new QEntityCollectionPath(this.withPrefix("ResiAttachment"), () => QDTO_ResiAttachment);
}
export const qDTO_Resi = new QDTO_Resi();
export class QDTO_ResiId extends QId {
    params = [new QNumberParam("Id")];
    getParams() {
        return this.params;
    }
}
export class QDTO_ResiOutlet extends QueryObject {
    Id = new QNumberPath(this.withPrefix("Id"));
    IdResi = new QNumberPath(this.withPrefix("IdResi"));
    IdOutlet = new QNumberPath(this.withPrefix("IdOutlet"));
    DibuatTanggal = new QDateTimeOffsetPath(this.withPrefix("DibuatTanggal"));
    Outlet = new QEntityPath(this.withPrefix("Outlet"), () => QDTO_Outlet);
}
export const qDTO_ResiOutlet = new QDTO_ResiOutlet();
export class QDTO_ResiOutletId extends QId {
    params = [new QNumberParam("Id")];
    getParams() {
        return this.params;
    }
}
export class QDTO_Sales extends QueryObject {
    Id = new QNumberPath(this.withPrefix("Id"));
    IdArea = new QNumberPath(this.withPrefix("IdArea"));
    AreaName = new QStringPath(this.withPrefix("AreaName"));
    IdDistributor = new QNumberPath(this.withPrefix("IdDistributor"));
    DistributorName = new QStringPath(this.withPrefix("DistributorName"));
    Nama = new QStringPath(this.withPrefix("Nama"));
    KodeDistributor = new QStringPath(this.withPrefix("KodeDistributor"));
    NamaDistributor = new QStringPath(this.withPrefix("NamaDistributor"));
    Keterangan = new QStringPath(this.withPrefix("Keterangan"));
    Aktif = new QBooleanPath(this.withPrefix("Aktif"));
    DibuatTanggal = new QDateTimeOffsetPath(this.withPrefix("DibuatTanggal"));
    Area = new QEntityPath(this.withPrefix("Area"), () => QDTO_Area);
    Distributor = new QEntityPath(this.withPrefix("Distributor"), () => QDTO_Distributor);
}
export const qDTO_Sales = new QDTO_Sales();
export class QDTO_SalesId extends QId {
    params = [new QNumberParam("Id")];
    getParams() {
        return this.params;
    }
}
export class QDTO_Salesman extends QueryObject {
    Id = new QNumberPath(this.withPrefix("Id"));
    IdArea = new QNumberPath(this.withPrefix("IdArea"));
    AreaName = new QStringPath(this.withPrefix("AreaName"));
    IdDistributor = new QNumberPath(this.withPrefix("IdDistributor"));
    DistributorName = new QStringPath(this.withPrefix("DistributorName"));
    Nama = new QStringPath(this.withPrefix("Nama"));
    KodeDistributor = new QStringPath(this.withPrefix("KodeDistributor"));
    NamaDistributor = new QStringPath(this.withPrefix("NamaDistributor"));
    Keterangan = new QStringPath(this.withPrefix("Keterangan"));
    Aktif = new QBooleanPath(this.withPrefix("Aktif"));
    DibuatTanggal = new QDateTimeOffsetPath(this.withPrefix("DibuatTanggal"));
    Area = new QEntityPath(this.withPrefix("Area"), () => QDTO_Area);
    Distributor = new QEntityPath(this.withPrefix("Distributor"), () => QDTO_Distributor);
}
export const qDTO_Salesman = new QDTO_Salesman();
export class QDTO_SalesmanId extends QId {
    params = [new QNumberParam("Id")];
    getParams() {
        return this.params;
    }
}
export class QDTO_Settings extends QueryObject {
    Id = new QNumberPath(this.withPrefix("Id"));
    FeatureName = new QStringPath(this.withPrefix("FeatureName"));
    SettingKey = new QStringPath(this.withPrefix("SettingKey"));
    SettingValue = new QStringPath(this.withPrefix("SettingValue"));
    DibuatTanggal = new QDateTimeOffsetPath(this.withPrefix("DibuatTanggal"));
}
export const qDTO_Settings = new QDTO_Settings();
export class QDTO_SettingsId extends QId {
    params = [new QNumberParam("Id")];
    getParams() {
        return this.params;
    }
}
export class QDTO_SkenarioBudget extends QueryObject {
    Id = new QNumberPath(this.withPrefix("Id"));
    NoDokumen = new QStringPath(this.withPrefix("NoDokumen"));
    Tahun = new QNumberPath(this.withPrefix("Tahun"));
    Nama = new QStringPath(this.withPrefix("Nama"));
    Tipe = new QStringPath(this.withPrefix("Tipe"));
    BudgetAwal = new QNumberPath(this.withPrefix("BudgetAwal"));
    BudgetSisa = new QNumberPath(this.withPrefix("BudgetSisa"));
    DibuatTanggal = new QDateTimeOffsetPath(this.withPrefix("DibuatTanggal"));
    Status = new QStringPath(this.withPrefix("Status"));
    DibuatOleh = new QStringPath(this.withPrefix("DibuatOleh"));
    UserId = new QNumberPath(this.withPrefix("UserId"));
}
export const qDTO_SkenarioBudget = new QDTO_SkenarioBudget();
export class QDTO_SkenarioBudgetId extends QId {
    params = [new QNumberParam("Id")];
    getParams() {
        return this.params;
    }
}
export class QDTO_SkenarioBudgetList extends QueryObject {
    Id = new QNumberPath(this.withPrefix("Id"));
    NoDokumen = new QStringPath(this.withPrefix("NoDokumen"));
    Tahun = new QNumberPath(this.withPrefix("Tahun"));
    Nama = new QStringPath(this.withPrefix("Nama"));
    Tipe = new QStringPath(this.withPrefix("Tipe"));
    BudgetAwal = new QNumberPath(this.withPrefix("BudgetAwal"));
    BudgetSisa = new QNumberPath(this.withPrefix("BudgetSisa"));
    DibuatTanggal = new QDateTimeOffsetPath(this.withPrefix("DibuatTanggal"));
    Status = new QStringPath(this.withPrefix("Status"));
    DibuatOleh = new QStringPath(this.withPrefix("DibuatOleh"));
    UserId = new QNumberPath(this.withPrefix("UserId"));
}
export const qDTO_SkenarioBudgetList = new QDTO_SkenarioBudgetList();
export class QDTO_SkenarioBudgetListId extends QId {
    params = [new QNumberParam("Id")];
    getParams() {
        return this.params;
    }
}
export class QDTO_MasterKeyVisual extends QueryObject {
    Id = new QNumberPath(this.withPrefix("Id"));
    Nama = new QStringPath(this.withPrefix("Nama"));
    Status = new QNumberPath(this.withPrefix("Status"));
}
export const qDTO_MasterKeyVisual = new QDTO_MasterKeyVisual();
export class QDTO_MasterKeyVisualId extends QId {
    params = [new QNumberParam("Id")];
    getParams() {
        return this.params;
    }
}
export class QDTO_MasterOrgSlim extends QueryObject {
    Id = new QNumberPath(this.withPrefix("Id"));
    CompanyName = new QStringPath(this.withPrefix("CompanyName"));
}
export const qDTO_MasterOrgSlim = new QDTO_MasterOrgSlim();
export class QDTO_MasterOrgSlimId extends QId {
    params = [new QNumberParam("Id")];
    getParams() {
        return this.params;
    }
}
export class QDTO_UserArea extends QueryObject {
    Id = new QNumberPath(this.withPrefix("Id"));
    IdUser = new QNumberPath(this.withPrefix("IdUser"));
    KodeArea = new QStringPath(this.withPrefix("KodeArea"));
    Nama = new QStringPath(this.withPrefix("Nama"));
    DibuatTanggal = new QDateTimeOffsetPath(this.withPrefix("DibuatTanggal"));
}
export const qDTO_UserArea = new QDTO_UserArea();
export class QDTO_UserAreaId extends QId {
    params = [new QNumberParam("Id")];
    getParams() {
        return this.params;
    }
}
export class QDTO_UserDistributor extends QueryObject {
    Id = new QNumberPath(this.withPrefix("Id"));
    IdUser = new QNumberPath(this.withPrefix("IdUser"));
    CardCode = new QStringPath(this.withPrefix("CardCode"));
    Nama = new QStringPath(this.withPrefix("Nama"));
    DibuatTanggal = new QDateTimeOffsetPath(this.withPrefix("DibuatTanggal"));
}
export const qDTO_UserDistributor = new QDTO_UserDistributor();
export class QDTO_UserDistributorId extends QId {
    params = [new QNumberParam("Id")];
    getParams() {
        return this.params;
    }
}
export class QDTO_ResiDetailProduk extends QueryObject {
    Id = new QNumberPath(this.withPrefix("Id"));
    IdResi = new QNumberPath(this.withPrefix("IdResi"));
    IdPplProduk = new QNumberPath(this.withPrefix("IdPplProduk"));
    KodeProduk = new QStringPath(this.withPrefix("KodeProduk"));
    NamaProduk = new QStringPath(this.withPrefix("NamaProduk"));
    Qty = new QNumberPath(this.withPrefix("Qty"));
    Biaya = new QNumberPath(this.withPrefix("Biaya"));
    PPN = new QNumberPath(this.withPrefix("PPN"));
    TotalBiaya = new QNumberPath(this.withPrefix("TotalBiaya"));
    DibuatTanggal = new QDateTimeOffsetPath(this.withPrefix("DibuatTanggal"));
}
export const qDTO_ResiDetailProduk = new QDTO_ResiDetailProduk();
export class QDTO_ResiDetailProdukId extends QId {
    params = [new QNumberParam("Id")];
    getParams() {
        return this.params;
    }
}
export class QDTO_ResiPic extends QueryObject {
    Id = new QNumberPath(this.withPrefix("Id"));
    IdResi = new QNumberPath(this.withPrefix("IdResi"));
    IdSe = new QNumberPath(this.withPrefix("IdSe"));
    Nik = new QStringPath(this.withPrefix("Nik"));
    Nama = new QStringPath(this.withPrefix("Nama"));
    IdArea = new QNumberPath(this.withPrefix("IdArea"));
    DibuatTanggal = new QDateTimeOffsetPath(this.withPrefix("DibuatTanggal"));
}
export const qDTO_ResiPic = new QDTO_ResiPic();
export class QDTO_ResiPicId extends QId {
    params = [new QNumberParam("Id")];
    getParams() {
        return this.params;
    }
}
export class QDTO_ResiAttachment extends QueryObject {
    Id = new QNumberPath(this.withPrefix("Id"));
    IdResi = new QNumberPath(this.withPrefix("IdResi"));
    Label = new QStringPath(this.withPrefix("Label"));
    File = new QStringPath(this.withPrefix("File"));
    IdPengajuanKlaim = new QNumberPath(this.withPrefix("IdPengajuanKlaim"));
    DibuatTanggal = new QDateTimeOffsetPath(this.withPrefix("DibuatTanggal"));
    DibuatOleh = new QStringPath(this.withPrefix("DibuatOleh"));
    Base64Data = new QStringPath(this.withPrefix("Base64Data"));
}
export const qDTO_ResiAttachment = new QDTO_ResiAttachment();
export class QDTO_ResiAttachmentId extends QId {
    params = [new QNumberParam("Id")];
    getParams() {
        return this.params;
    }
}
export class QDtoHistoryTransaksiEstimasi extends QueryObject {
    Id = new QNumberPath(this.withPrefix("Id"));
    NoDokumenPpl = new QStringPath(this.withPrefix("NoDokumenPpl"));
    IdAlokasi = new QNumberPath(this.withPrefix("IdAlokasi"));
    Bulan = new QNumberPath(this.withPrefix("Bulan"));
    Tahun = new QNumberPath(this.withPrefix("Tahun"));
    Nilai = new QNumberPath(this.withPrefix("Nilai"));
    Status = new QStringPath(this.withPrefix("Status"));
    DibuatTanggal = new QDateTimeOffsetPath(this.withPrefix("DibuatTanggal"));
    PeriodeAwal = new QDateTimeOffsetPath(this.withPrefix("PeriodeAwal"));
    PeriodeAkhir = new QDateTimeOffsetPath(this.withPrefix("PeriodeAkhir"));
    BudgetAlokasi = new QEntityPath(this.withPrefix("BudgetAlokasi"), () => QDTO_BudgetAlokasi);
}
export const qDtoHistoryTransaksiEstimasi = new QDtoHistoryTransaksiEstimasi();
export class QDtoHistoryTransaksiEstimasiId extends QId {
    params = [new QNumberParam("Id")];
    getParams() {
        return this.params;
    }
}
export class QDtoHistoryTransaksiRealiasasi extends QueryObject {
    Id = new QNumberPath(this.withPrefix("Id"));
    NoDokumenPpl = new QStringPath(this.withPrefix("NoDokumenPpl"));
    IdAlokasi = new QNumberPath(this.withPrefix("IdAlokasi"));
    Bulan = new QNumberPath(this.withPrefix("Bulan"));
    Tahun = new QNumberPath(this.withPrefix("Tahun"));
    Nilai = new QNumberPath(this.withPrefix("Nilai"));
    Status = new QStringPath(this.withPrefix("Status"));
    DibuatTanggal = new QDateTimeOffsetPath(this.withPrefix("DibuatTanggal"));
    PeriodeAwal = new QDateTimeOffsetPath(this.withPrefix("PeriodeAwal"));
    PeriodeAkhir = new QDateTimeOffsetPath(this.withPrefix("PeriodeAkhir"));
    BudgetAlokasi = new QEntityPath(this.withPrefix("BudgetAlokasi"), () => QDTO_BudgetAlokasi);
}
export const qDtoHistoryTransaksiRealiasasi = new QDtoHistoryTransaksiRealiasasi();
export class QDtoHistoryTransaksiRealiasasiId extends QId {
    params = [new QNumberParam("Id")];
    getParams() {
        return this.params;
    }
}
export class QUserDto extends QueryObject {
    Users = new QEntityCollectionPath(this.withPrefix("Users"), () => QUserItem);
}
export const qUserDto = new QUserDto();
export class QUserItem extends QueryObject {
    UserId = new QNumberPath(this.withPrefix("UserId"));
    Aktif = new QBooleanPath(this.withPrefix("Aktif"));
    Nama = new QStringPath(this.withPrefix("Nama"));
    Email = new QStringPath(this.withPrefix("Email"));
}
export const qUserItem = new QUserItem();
export class QTargetSeDto extends QueryObject {
    TargetAo = new QEntityCollectionPath(this.withPrefix("TargetAo"), () => QTargetItem);
    TargetValue = new QEntityCollectionPath(this.withPrefix("TargetValue"), () => QTargetItem);
}
export const qTargetSeDto = new QTargetSeDto();
export class QTargetItem extends QueryObject {
    Bulan = new QStringPath(this.withPrefix("Bulan"));
    Value = new QNumberPath(this.withPrefix("Value"));
}
export const qTargetItem = new QTargetItem();
export class QSosmedDto extends QueryObject {
    Tiktok = new QEntityCollectionPath(this.withPrefix("Tiktok"), () => QPlatformItem);
    Instagram = new QEntityCollectionPath(this.withPrefix("Instagram"), () => QPlatformItem);
    Youtube = new QEntityCollectionPath(this.withPrefix("Youtube"), () => QPlatformItem);
    Facebook = new QEntityCollectionPath(this.withPrefix("Facebook"), () => QPlatformItem);
    Twitter = new QEntityCollectionPath(this.withPrefix("Twitter"), () => QPlatformItem);
}
export const qSosmedDto = new QSosmedDto();
export class QPlatformItem extends QueryObject {
    Link = new QStringPath(this.withPrefix("Link"));
    Followers = new QStringPath(this.withPrefix("Followers"));
    View = new QStringPath(this.withPrefix("View"));
    Like = new QStringPath(this.withPrefix("Like"));
    AvView = new QStringPath(this.withPrefix("AvView"));
    Rate = new QStringPath(this.withPrefix("Rate"));
    CPV = new QStringPath(this.withPrefix("CPV"));
    TotalRate = new QStringPath(this.withPrefix("TotalRate"));
}
export const qPlatformItem = new QPlatformItem();
export class QBookAuthor extends QueryObject {
    BookId = new QNumberPath(this.withPrefix("BookId"));
    AuthorId = new QNumberPath(this.withPrefix("AuthorId"));
    Book = new QEntityPath(this.withPrefix("Book"), () => QBook);
    Author = new QEntityPath(this.withPrefix("Author"), () => QAuthor);
}
export const qBookAuthor = new QBookAuthor();
export class QSyaratDto extends QueryObject {
    Syarat = new QEntityCollectionPath(this.withPrefix("Syarat"), () => QSyaratItem);
}
export const qSyaratDto = new QSyaratDto();
export class QSyaratItem extends QueryObject {
    ItemId = new QNumberPath(this.withPrefix("ItemId"));
    Syarat = new QStringPath(this.withPrefix("Syarat"));
    Keterangan = new QStringPath(this.withPrefix("Keterangan"));
}
export const qSyaratItem = new QSyaratItem();
