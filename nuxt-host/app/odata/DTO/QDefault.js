// @ts-nocheck
import { QNumberPath, QStringPath, QBooleanPath, QDateTimeOffsetPath, QEntityPath, QEntityCollectionPath, QueryObject, QId, QNumberParam, QCollectionPath, QNumberCollection, QStringParam, QEnumPath } from "@odata2ts/odata-query-objects";
import { RoleTypeEnum, CompanyStatusType } from "./DefaultModel";
export class QDTO_BudgetAlokasi extends QueryObject {
    Id = new QNumberPath(this.withPrefix("Id"));
    IdHeaderProjek = new QNumberPath(this.withPrefix("IdHeaderProjek"));
    IdPostBudget = new QNumberPath(this.withPrefix("IdPostBudget"));
    IdJenisPpl = new QNumberPath(this.withPrefix("IdJenisPpl"));
    MetodePembagian = new QStringPath(this.withPrefix("MetodePembagian"));
    KodeDept = new QStringPath(this.withPrefix("KodeDept"));
    NamaActivity = new QStringPath(this.withPrefix("NamaActivity"));
    NamaActivity1 = new QStringPath(this.withPrefix("NamaActivity1"));
    NamaActivity2 = new QStringPath(this.withPrefix("NamaActivity2"));
    NilaiBudget = new QNumberPath(this.withPrefix("NilaiBudget"));
    SisaNilaiBudget = new QNumberPath(this.withPrefix("SisaNilaiBudget"));
    IdSkenario = new QNumberPath(this.withPrefix("IdSkenario"));
    Aktif = new QBooleanPath(this.withPrefix("Aktif"));
    AutoGenerate = new QBooleanPath(this.withPrefix("AutoGenerate"));
    Tahun = new QNumberPath(this.withPrefix("Tahun"));
    DibuatTanggal = new QDateTimeOffsetPath(this.withPrefix("DibuatTanggal"));
    PostBudget = new QEntityPath(this.withPrefix("PostBudget"), () => QDTO_PostBudget);
    SkenarioBudget = new QEntityPath(this.withPrefix("SkenarioBudget"), () => QDTO_SkenarioBudget);
    JenisPpl = new QEntityPath(this.withPrefix("JenisPpl"), () => QDTO_JenisPpl);
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
    NilaiTransferSumber = new QNumberPath(this.withPrefix("NilaiTransferSumber"));
    NilaiTransferTujuan = new QNumberPath(this.withPrefix("NilaiTransferTujuan"));
    NilaiFix = new QNumberPath(this.withPrefix("NilaiFix"));
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
    CompanyName = new QStringPath(this.withPrefix("CompanyName"));
    CompanyId = new QNumberPath(this.withPrefix("CompanyId"));
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
    Jan_sisa = new QNumberPath(this.withPrefix("Jan_sisa"));
    Feb_sisa = new QNumberPath(this.withPrefix("Feb_sisa"));
    Mar_sisa = new QNumberPath(this.withPrefix("Mar_sisa"));
    Apr_sisa = new QNumberPath(this.withPrefix("Apr_sisa"));
    Mei_sisa = new QNumberPath(this.withPrefix("Mei_sisa"));
    Jun_sisa = new QNumberPath(this.withPrefix("Jun_sisa"));
    Jul_sisa = new QNumberPath(this.withPrefix("Jul_sisa"));
    Agt_sisa = new QNumberPath(this.withPrefix("Agt_sisa"));
    Sep_sisa = new QNumberPath(this.withPrefix("Sep_sisa"));
    Okt_sisa = new QNumberPath(this.withPrefix("Okt_sisa"));
    Nov_sisa = new QNumberPath(this.withPrefix("Nov_sisa"));
    Des_sisa = new QNumberPath(this.withPrefix("Des_sisa"));
    TotalSisa = new QNumberPath(this.withPrefix("TotalSisa"));
    Details = new QEntityCollectionPath(this.withPrefix("Details"), () => QDTO_BudgetDetail);
    PostBudgetList = new QEntityCollectionPath(this.withPrefix("PostBudgetList"), () => QDTO_PostBudgetList);
}
export const qDTO_Budget = new QDTO_Budget();
export class QDTO_BudgetId extends QId {
    params = [new QNumberParam("Id")];
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
    DeptNama = new QStringPath(this.withPrefix("DeptNama"));
    DeptKode = new QStringPath(this.withPrefix("DeptKode"));
    Kategori = new QStringPath(this.withPrefix("Kategori"));
    Channel = new QStringPath(this.withPrefix("Channel"));
    BrandNama = new QStringPath(this.withPrefix("BrandNama"));
    CoaNama = new QStringPath(this.withPrefix("CoaNama"));
    CoaKode = new QStringPath(this.withPrefix("CoaKode"));
    ParentNama = new QStringPath(this.withPrefix("ParentNama"));
    IdBrand = new QNumberPath(this.withPrefix("IdBrand"));
    CoaId = new QNumberPath(this.withPrefix("CoaId"));
    CompanyId = new QNumberPath(this.withPrefix("CompanyId"));
    CompanyName = new QStringPath(this.withPrefix("CompanyName"));
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
    Bulan_1_topup = new QNumberPath(this.withPrefix("Bulan_1_topup"));
    Bulan_2_topup = new QNumberPath(this.withPrefix("Bulan_2_topup"));
    Bulan_3_topup = new QNumberPath(this.withPrefix("Bulan_3_topup"));
    Bulan_4_topup = new QNumberPath(this.withPrefix("Bulan_4_topup"));
    Bulan_5_topup = new QNumberPath(this.withPrefix("Bulan_5_topup"));
    Bulan_6_topup = new QNumberPath(this.withPrefix("Bulan_6_topup"));
    Bulan_7_topup = new QNumberPath(this.withPrefix("Bulan_7_topup"));
    Bulan_8_topup = new QNumberPath(this.withPrefix("Bulan_8_topup"));
    Bulan_9_topup = new QNumberPath(this.withPrefix("Bulan_9_topup"));
    Bulan_10_topup = new QNumberPath(this.withPrefix("Bulan_10_topup"));
    Bulan_11_topup = new QNumberPath(this.withPrefix("Bulan_11_topup"));
    Bulan_12_topup = new QNumberPath(this.withPrefix("Bulan_12_topup"));
    TotalTopup = new QNumberPath(this.withPrefix("TotalTopup"));
    Bulan_1_transfer = new QNumberPath(this.withPrefix("Bulan_1_transfer"));
    Bulan_2_transfer = new QNumberPath(this.withPrefix("Bulan_2_transfer"));
    Bulan_3_transfer = new QNumberPath(this.withPrefix("Bulan_3_transfer"));
    Bulan_4_transfer = new QNumberPath(this.withPrefix("Bulan_4_transfer"));
    Bulan_5_transfer = new QNumberPath(this.withPrefix("Bulan_5_transfer"));
    Bulan_6_transfer = new QNumberPath(this.withPrefix("Bulan_6_transfer"));
    Bulan_7_transfer = new QNumberPath(this.withPrefix("Bulan_7_transfer"));
    Bulan_8_transfer = new QNumberPath(this.withPrefix("Bulan_8_transfer"));
    Bulan_9_transfer = new QNumberPath(this.withPrefix("Bulan_9_transfer"));
    Bulan_10_transfer = new QNumberPath(this.withPrefix("Bulan_10_transfer"));
    Bulan_11_transfer = new QNumberPath(this.withPrefix("Bulan_11_transfer"));
    Bulan_12_transfer = new QNumberPath(this.withPrefix("Bulan_12_transfer"));
    TotalTransfer = new QNumberPath(this.withPrefix("TotalTransfer"));
    Bulan_1_program = new QNumberPath(this.withPrefix("Bulan_1_program"));
    Bulan_2_program = new QNumberPath(this.withPrefix("Bulan_2_program"));
    Bulan_3_program = new QNumberPath(this.withPrefix("Bulan_3_program"));
    Bulan_4_program = new QNumberPath(this.withPrefix("Bulan_4_program"));
    Bulan_5_program = new QNumberPath(this.withPrefix("Bulan_5_program"));
    Bulan_6_program = new QNumberPath(this.withPrefix("Bulan_6_program"));
    Bulan_7_program = new QNumberPath(this.withPrefix("Bulan_7_program"));
    Bulan_8_program = new QNumberPath(this.withPrefix("Bulan_8_program"));
    Bulan_9_program = new QNumberPath(this.withPrefix("Bulan_9_program"));
    Bulan_10_program = new QNumberPath(this.withPrefix("Bulan_10_program"));
    Bulan_11_program = new QNumberPath(this.withPrefix("Bulan_11_program"));
    Bulan_12_program = new QNumberPath(this.withPrefix("Bulan_12_program"));
    TotalBudgetProgram = new QNumberPath(this.withPrefix("TotalBudgetProgram"));
    Bulan_1_program_sisa = new QNumberPath(this.withPrefix("Bulan_1_program_sisa"));
    Bulan_2_program_sisa = new QNumberPath(this.withPrefix("Bulan_2_program_sisa"));
    Bulan_3_program_sisa = new QNumberPath(this.withPrefix("Bulan_3_program_sisa"));
    Bulan_4_program_sisa = new QNumberPath(this.withPrefix("Bulan_4_program_sisa"));
    Bulan_5_program_sisa = new QNumberPath(this.withPrefix("Bulan_5_program_sisa"));
    Bulan_6_program_sisa = new QNumberPath(this.withPrefix("Bulan_6_program_sisa"));
    Bulan_7_program_sisa = new QNumberPath(this.withPrefix("Bulan_7_program_sisa"));
    Bulan_8_program_sisa = new QNumberPath(this.withPrefix("Bulan_8_program_sisa"));
    Bulan_9_program_sisa = new QNumberPath(this.withPrefix("Bulan_9_program_sisa"));
    Bulan_10_program_sisa = new QNumberPath(this.withPrefix("Bulan_10_program_sisa"));
    Bulan_11_program_sisa = new QNumberPath(this.withPrefix("Bulan_11_program_sisa"));
    Bulan_12_program_sisa = new QNumberPath(this.withPrefix("Bulan_12_program_sisa"));
    TotalBudgetProgramSisa = new QNumberPath(this.withPrefix("TotalBudgetProgramSisa"));
    Bulan_1_estimasi = new QNumberPath(this.withPrefix("Bulan_1_estimasi"));
    Bulan_2_estimasi = new QNumberPath(this.withPrefix("Bulan_2_estimasi"));
    Bulan_3_estimasi = new QNumberPath(this.withPrefix("Bulan_3_estimasi"));
    Bulan_4_estimasi = new QNumberPath(this.withPrefix("Bulan_4_estimasi"));
    Bulan_5_estimasi = new QNumberPath(this.withPrefix("Bulan_5_estimasi"));
    Bulan_6_estimasi = new QNumberPath(this.withPrefix("Bulan_6_estimasi"));
    Bulan_7_estimasi = new QNumberPath(this.withPrefix("Bulan_7_estimasi"));
    Bulan_8_estimasi = new QNumberPath(this.withPrefix("Bulan_8_estimasi"));
    Bulan_9_estimasi = new QNumberPath(this.withPrefix("Bulan_9_estimasi"));
    Bulan_10_estimasi = new QNumberPath(this.withPrefix("Bulan_10_estimasi"));
    Bulan_11_estimasi = new QNumberPath(this.withPrefix("Bulan_11_estimasi"));
    Bulan_12_estimasi = new QNumberPath(this.withPrefix("Bulan_12_estimasi"));
    TotalEstimasi = new QNumberPath(this.withPrefix("TotalEstimasi"));
    Bulan_1_realisasi = new QNumberPath(this.withPrefix("Bulan_1_realisasi"));
    Bulan_2_realisasi = new QNumberPath(this.withPrefix("Bulan_2_realisasi"));
    Bulan_3_realisasi = new QNumberPath(this.withPrefix("Bulan_3_realisasi"));
    Bulan_4_realisasi = new QNumberPath(this.withPrefix("Bulan_4_realisasi"));
    Bulan_5_realisasi = new QNumberPath(this.withPrefix("Bulan_5_realisasi"));
    Bulan_6_realisasi = new QNumberPath(this.withPrefix("Bulan_6_realisasi"));
    Bulan_7_realisasi = new QNumberPath(this.withPrefix("Bulan_7_realisasi"));
    Bulan_8_realisasi = new QNumberPath(this.withPrefix("Bulan_8_realisasi"));
    Bulan_9_realisasi = new QNumberPath(this.withPrefix("Bulan_9_realisasi"));
    Bulan_10_realisasi = new QNumberPath(this.withPrefix("Bulan_10_realisasi"));
    Bulan_11_realisasi = new QNumberPath(this.withPrefix("Bulan_11_realisasi"));
    Bulan_12_realisasi = new QNumberPath(this.withPrefix("Bulan_12_realisasi"));
    TotalRealisasi = new QNumberPath(this.withPrefix("TotalRealisasi"));
    Bulan_1_sisa = new QNumberPath(this.withPrefix("Bulan_1_sisa"));
    Bulan_2_sisa = new QNumberPath(this.withPrefix("Bulan_2_sisa"));
    Bulan_3_sisa = new QNumberPath(this.withPrefix("Bulan_3_sisa"));
    Bulan_4_sisa = new QNumberPath(this.withPrefix("Bulan_4_sisa"));
    Bulan_5_sisa = new QNumberPath(this.withPrefix("Bulan_5_sisa"));
    Bulan_6_sisa = new QNumberPath(this.withPrefix("Bulan_6_sisa"));
    Bulan_7_sisa = new QNumberPath(this.withPrefix("Bulan_7_sisa"));
    Bulan_8_sisa = new QNumberPath(this.withPrefix("Bulan_8_sisa"));
    Bulan_9_sisa = new QNumberPath(this.withPrefix("Bulan_9_sisa"));
    Bulan_10_sisa = new QNumberPath(this.withPrefix("Bulan_10_sisa"));
    Bulan_11_sisa = new QNumberPath(this.withPrefix("Bulan_11_sisa"));
    Bulan_12_sisa = new QNumberPath(this.withPrefix("Bulan_12_sisa"));
    TotalBudgetSisa = new QNumberPath(this.withPrefix("TotalBudgetSisa"));
    IsLocked = new QBooleanPath(this.withPrefix("IsLocked"));
    UserId = new QNumberPath(this.withPrefix("UserId"));
    DibuatTanggal = new QDateTimeOffsetPath(this.withPrefix("DibuatTanggal"));
    DibuatOleh = new QStringPath(this.withPrefix("DibuatOleh"));
    MasterBudgetIds = new QStringPath(this.withPrefix("MasterBudgetIds"));
    JenisPplIds = new QStringPath(this.withPrefix("JenisPplIds"));
    MasterBudgetIdList = new QCollectionPath(this.withPrefix("MasterBudgetIdList"), () => QNumberCollection);
    JenisPplIdList = new QCollectionPath(this.withPrefix("JenisPplIdList"), () => QNumberCollection);
}
export const qDTO_MasterBudgets = new QDTO_MasterBudgets();
export class QDTO_MasterBudgetsId extends QId {
    params = [new QNumberParam("Id")];
    getParams() {
        return this.params;
    }
}
export class QDTO_PostBudgetList extends QueryObject {
    Id = new QNumberPath(this.withPrefix("Id"));
    Year = new QNumberPath(this.withPrefix("Year"));
    Kode = new QStringPath(this.withPrefix("Kode"));
    CoaNama = new QStringPath(this.withPrefix("CoaNama"));
    IdPostBudget = new QNumberPath(this.withPrefix("IdPostBudget"));
    CompanyId = new QNumberPath(this.withPrefix("CompanyId"));
    CompanyName = new QStringPath(this.withPrefix("CompanyName"));
    NamaPostBudget = new QStringPath(this.withPrefix("NamaPostBudget"));
    Channel = new QStringPath(this.withPrefix("Channel"));
    NamaParent = new QStringPath(this.withPrefix("NamaParent"));
    BrandNama = new QStringPath(this.withPrefix("BrandNama"));
    NamaBudget = new QStringPath(this.withPrefix("NamaBudget"));
    DeptKode = new QStringPath(this.withPrefix("DeptKode"));
    DeptNama = new QStringPath(this.withPrefix("DeptNama"));
    Kategori = new QStringPath(this.withPrefix("Kategori"));
    IdBrand = new QNumberPath(this.withPrefix("IdBrand"));
    Bulans = new QStringPath(this.withPrefix("Bulans"));
    BudgetSapIds = new QStringPath(this.withPrefix("BudgetSapIds"));
    MasterBudgetIds = new QStringPath(this.withPrefix("MasterBudgetIds"));
    IsLockeds = new QStringPath(this.withPrefix("IsLockeds"));
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
}
export const qDTO_PostBudgetList = new QDTO_PostBudgetList();
export class QDTO_PostBudgetListId extends QId {
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
    IdCoa = new QNumberPath(this.withPrefix("IdCoa"));
    Kode = new QStringPath(this.withPrefix("Kode"));
    CoaNama = new QStringPath(this.withPrefix("CoaNama"));
    NamaPostBudget = new QStringPath(this.withPrefix("NamaPostBudget"));
    BrandNama = new QStringPath(this.withPrefix("BrandNama"));
    CompanyName = new QStringPath(this.withPrefix("CompanyName"));
    CompanyId = new QNumberPath(this.withPrefix("CompanyId"));
    NamaBudget = new QStringPath(this.withPrefix("NamaBudget"));
    NamaParent = new QStringPath(this.withPrefix("NamaParent"));
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
    BudgetMasterBudgetSisa = new QNumberPath(this.withPrefix("BudgetMasterBudgetSisa"));
}
export const qDTO_BudgetDetail = new QDTO_BudgetDetail();
export class QDTO_BudgetDetailId extends QId {
    params = [new QNumberParam("CompanyId"), new QNumberParam("IdBudgetSap"), new QNumberParam("IdPostBudget"), new QStringParam("Kode"), new QStringParam("NamaBudget"), new QNumberParam("YEAR")];
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
export class QDTO_TopUpDetail extends QueryObject {
    Id = new QNumberPath(this.withPrefix("Id"));
    Tahun = new QNumberPath(this.withPrefix("Tahun"));
    Nama = new QStringPath(this.withPrefix("Nama"));
    Kategori = new QStringPath(this.withPrefix("Kategori"));
    Channel = new QStringPath(this.withPrefix("Channel"));
    CoaNama = new QStringPath(this.withPrefix("CoaNama"));
    BrandNama = new QStringPath(this.withPrefix("BrandNama"));
    IdTopUpBudget = new QNumberPath(this.withPrefix("IdTopUpBudget"));
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
}
export const qDTO_TopUpDetail = new QDTO_TopUpDetail();
export class QDTO_TopUpDetailId extends QId {
    params = [new QNumberParam("Id")];
    getParams() {
        return this.params;
    }
}
export class QDTO_ReportProgram extends QueryObject {
    Id = new QNumberPath(this.withPrefix("Id"));
    Year = new QNumberPath(this.withPrefix("Year"));
    DeptId = new QNumberPath(this.withPrefix("DeptId"));
    CompanyId = new QNumberPath(this.withPrefix("CompanyId"));
    DeptKode = new QStringPath(this.withPrefix("DeptKode"));
    DeptNama = new QStringPath(this.withPrefix("DeptNama"));
    IdJenisPpl = new QNumberPath(this.withPrefix("IdJenisPpl"));
    NamaActivity = new QStringPath(this.withPrefix("NamaActivity"));
    NamaActivity1 = new QStringPath(this.withPrefix("NamaActivity1"));
    NamaActivity2 = new QStringPath(this.withPrefix("NamaActivity2"));
    IdBudgetAlokasi = new QStringPath(this.withPrefix("IdBudgetAlokasi"));
    IdBrand = new QNumberPath(this.withPrefix("IdBrand"));
    NamaBrand = new QStringPath(this.withPrefix("NamaBrand"));
    IdPostBudget = new QNumberPath(this.withPrefix("IdPostBudget"));
    NamaPostBudget = new QStringPath(this.withPrefix("NamaPostBudget"));
    Kategori = new QStringPath(this.withPrefix("Kategori"));
    KodePostBudget = new QStringPath(this.withPrefix("KodePostBudget"));
    Channel = new QStringPath(this.withPrefix("Channel"));
    PostBulan1 = new QNumberPath(this.withPrefix("PostBulan1"));
    TransferBulan1 = new QNumberPath(this.withPrefix("TransferBulan1"));
    EstimasiBulan1 = new QNumberPath(this.withPrefix("EstimasiBulan1"));
    RealisasiBulan1 = new QNumberPath(this.withPrefix("RealisasiBulan1"));
    RemainingBulan1 = new QNumberPath(this.withPrefix("RemainingBulan1"));
    PostBulan2 = new QNumberPath(this.withPrefix("PostBulan2"));
    TransferBulan2 = new QNumberPath(this.withPrefix("TransferBulan2"));
    EstimasiBulan2 = new QNumberPath(this.withPrefix("EstimasiBulan2"));
    RealisasiBulan2 = new QNumberPath(this.withPrefix("RealisasiBulan2"));
    RemainingBulan2 = new QNumberPath(this.withPrefix("RemainingBulan2"));
    PostBulan3 = new QNumberPath(this.withPrefix("PostBulan3"));
    TransferBulan3 = new QNumberPath(this.withPrefix("TransferBulan3"));
    EstimasiBulan3 = new QNumberPath(this.withPrefix("EstimasiBulan3"));
    RealisasiBulan3 = new QNumberPath(this.withPrefix("RealisasiBulan3"));
    RemainingBulan3 = new QNumberPath(this.withPrefix("RemainingBulan3"));
    PostBulan4 = new QNumberPath(this.withPrefix("PostBulan4"));
    TransferBulan4 = new QNumberPath(this.withPrefix("TransferBulan4"));
    EstimasiBulan4 = new QNumberPath(this.withPrefix("EstimasiBulan4"));
    RealisasiBulan4 = new QNumberPath(this.withPrefix("RealisasiBulan4"));
    RemainingBulan4 = new QNumberPath(this.withPrefix("RemainingBulan4"));
    PostBulan5 = new QNumberPath(this.withPrefix("PostBulan5"));
    TransferBulan5 = new QNumberPath(this.withPrefix("TransferBulan5"));
    EstimasiBulan5 = new QNumberPath(this.withPrefix("EstimasiBulan5"));
    RealisasiBulan5 = new QNumberPath(this.withPrefix("RealisasiBulan5"));
    RemainingBulan5 = new QNumberPath(this.withPrefix("RemainingBulan5"));
    PostBulan6 = new QNumberPath(this.withPrefix("PostBulan6"));
    TransferBulan6 = new QNumberPath(this.withPrefix("TransferBulan6"));
    EstimasiBulan6 = new QNumberPath(this.withPrefix("EstimasiBulan6"));
    RealisasiBulan6 = new QNumberPath(this.withPrefix("RealisasiBulan6"));
    RemainingBulan6 = new QNumberPath(this.withPrefix("RemainingBulan6"));
    PostBulan7 = new QNumberPath(this.withPrefix("PostBulan7"));
    TransferBulan7 = new QNumberPath(this.withPrefix("TransferBulan7"));
    EstimasiBulan7 = new QNumberPath(this.withPrefix("EstimasiBulan7"));
    RealisasiBulan7 = new QNumberPath(this.withPrefix("RealisasiBulan7"));
    RemainingBulan7 = new QNumberPath(this.withPrefix("RemainingBulan7"));
    PostBulan8 = new QNumberPath(this.withPrefix("PostBulan8"));
    TransferBulan8 = new QNumberPath(this.withPrefix("TransferBulan8"));
    EstimasiBulan8 = new QNumberPath(this.withPrefix("EstimasiBulan8"));
    RealisasiBulan8 = new QNumberPath(this.withPrefix("RealisasiBulan8"));
    RemainingBulan8 = new QNumberPath(this.withPrefix("RemainingBulan8"));
    PostBulan9 = new QNumberPath(this.withPrefix("PostBulan9"));
    TransferBulan9 = new QNumberPath(this.withPrefix("TransferBulan9"));
    EstimasiBulan9 = new QNumberPath(this.withPrefix("EstimasiBulan9"));
    RealisasiBulan9 = new QNumberPath(this.withPrefix("RealisasiBulan9"));
    RemainingBulan9 = new QNumberPath(this.withPrefix("RemainingBulan9"));
    PostBulan10 = new QNumberPath(this.withPrefix("PostBulan10"));
    TransferBulan10 = new QNumberPath(this.withPrefix("TransferBulan10"));
    EstimasiBulan10 = new QNumberPath(this.withPrefix("EstimasiBulan10"));
    RealisasiBulan10 = new QNumberPath(this.withPrefix("RealisasiBulan10"));
    RemainingBulan10 = new QNumberPath(this.withPrefix("RemainingBulan10"));
    PostBulan11 = new QNumberPath(this.withPrefix("PostBulan11"));
    TransferBulan11 = new QNumberPath(this.withPrefix("TransferBulan11"));
    EstimasiBulan11 = new QNumberPath(this.withPrefix("EstimasiBulan11"));
    RealisasiBulan11 = new QNumberPath(this.withPrefix("RealisasiBulan11"));
    RemainingBulan11 = new QNumberPath(this.withPrefix("RemainingBulan11"));
    PostBulan12 = new QNumberPath(this.withPrefix("PostBulan12"));
    TransferBulan12 = new QNumberPath(this.withPrefix("TransferBulan12"));
    EstimasiBulan12 = new QNumberPath(this.withPrefix("EstimasiBulan12"));
    RealisasiBulan12 = new QNumberPath(this.withPrefix("RealisasiBulan12"));
    RemainingBulan12 = new QNumberPath(this.withPrefix("RemainingBulan12"));
    TotalPost = new QNumberPath(this.withPrefix("TotalPost"));
    TotalTransfer = new QNumberPath(this.withPrefix("TotalTransfer"));
    TotalEstimasi = new QNumberPath(this.withPrefix("TotalEstimasi"));
    TotalRealisasi = new QNumberPath(this.withPrefix("TotalRealisasi"));
    TotalRemaining = new QNumberPath(this.withPrefix("TotalRemaining"));
    PostQ1 = new QNumberPath(this.withPrefix("PostQ1"));
    RemainingQ1 = new QNumberPath(this.withPrefix("RemainingQ1"));
    PostQ2 = new QNumberPath(this.withPrefix("PostQ2"));
    RemainingQ2 = new QNumberPath(this.withPrefix("RemainingQ2"));
    PostQ3 = new QNumberPath(this.withPrefix("PostQ3"));
    RemainingQ3 = new QNumberPath(this.withPrefix("RemainingQ3"));
    PostQ4 = new QNumberPath(this.withPrefix("PostQ4"));
    RemainingQ4 = new QNumberPath(this.withPrefix("RemainingQ4"));
}
export const qDTO_ReportProgram = new QDTO_ReportProgram();
export class QDTO_ReportProgramId extends QId {
    params = [new QNumberParam("Id")];
    getParams() {
        return this.params;
    }
}
export class QDtoHistoryBudget extends QueryObject {
    Id = new QNumberPath(this.withPrefix("Id"));
    Jenis = new QStringPath(this.withPrefix("Jenis"));
    DibuatTanggal = new QDateTimeOffsetPath(this.withPrefix("DibuatTanggal"));
    YEAR = new QNumberPath(this.withPrefix("YEAR"));
    KodeCoa = new QStringPath(this.withPrefix("KodeCoa"));
    CoaNama = new QStringPath(this.withPrefix("CoaNama"));
    IdPostBudget = new QNumberPath(this.withPrefix("IdPostBudget"));
    CompanyId = new QNumberPath(this.withPrefix("CompanyId"));
    BudgetFinal = new QBooleanPath(this.withPrefix("BudgetFinal"));
    IdBudgetAlokasi = new QNumberPath(this.withPrefix("IdBudgetAlokasi"));
    Status = new QStringPath(this.withPrefix("Status"));
    NamaActivity = new QStringPath(this.withPrefix("NamaActivity"));
    NamaActivity1 = new QStringPath(this.withPrefix("NamaActivity1"));
    NamaActivity2 = new QStringPath(this.withPrefix("NamaActivity2"));
    NamaPostBudget = new QStringPath(this.withPrefix("NamaPostBudget"));
    Channel = new QStringPath(this.withPrefix("Channel"));
    NamaParent = new QStringPath(this.withPrefix("NamaParent"));
    BrandNama = new QStringPath(this.withPrefix("BrandNama"));
    BrandId = new QNumberPath(this.withPrefix("BrandId"));
    DeptKode = new QStringPath(this.withPrefix("DeptKode"));
    DeptNama = new QStringPath(this.withPrefix("DeptNama"));
    Kategori = new QStringPath(this.withPrefix("Kategori"));
    ProgramNama = new QStringPath(this.withPrefix("ProgramNama"));
    NoDokumen = new QStringPath(this.withPrefix("NoDokumen"));
    NoDokumenProgram = new QStringPath(this.withPrefix("NoDokumenProgram"));
    LinkDokumen = new QStringPath(this.withPrefix("LinkDokumen"));
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
}
export const qDtoHistoryBudget = new QDtoHistoryBudget();
export class QDtoHistoryBudgetId extends QId {
    params = [new QNumberParam("Id")];
    getParams() {
        return this.params;
    }
}
export class QDtoProgramTransfer extends QueryObject {
    Id = new QNumberPath(this.withPrefix("Id"));
    NoDokumen = new QStringPath(this.withPrefix("NoDokumen"));
    Year = new QNumberPath(this.withPrefix("Year"));
    Status = new QStringPath(this.withPrefix("Status"));
    IdBudgetAlokasi = new QNumberPath(this.withPrefix("IdBudgetAlokasi"));
    Program = new QStringPath(this.withPrefix("Program"));
    BrandNama = new QStringPath(this.withPrefix("BrandNama"));
    BrandId = new QNumberPath(this.withPrefix("BrandId"));
    CompanyId = new QNumberPath(this.withPrefix("CompanyId"));
    CompanyName = new QStringPath(this.withPrefix("CompanyName"));
    PostBudgetNama = new QStringPath(this.withPrefix("PostBudgetNama"));
    Kategori = new QStringPath(this.withPrefix("Kategori"));
    Channel = new QStringPath(this.withPrefix("Channel"));
    DeptKode = new QStringPath(this.withPrefix("DeptKode"));
    IdPostBudget = new QNumberPath(this.withPrefix("IdPostBudget"));
    NamaParent = new QStringPath(this.withPrefix("NamaParent"));
    BudgetAlokasiDetailIds = new QStringPath(this.withPrefix("BudgetAlokasiDetailIds"));
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
}
export const qDtoProgramTransfer = new QDtoProgramTransfer();
export class QDtoProgramTransferId extends QId {
    params = [new QNumberParam("Id")];
    getParams() {
        return this.params;
    }
}
export class QDtoKurangBudgetDetails extends QueryObject {
    Id = new QNumberPath(this.withPrefix("Id"));
    IdKurangBudget = new QNumberPath(this.withPrefix("IdKurangBudget"));
    NamaActivity = new QStringPath(this.withPrefix("NamaActivity"));
    IdJenisPpl = new QNumberPath(this.withPrefix("IdJenisPpl"));
    IdPostBudget = new QNumberPath(this.withPrefix("IdPostBudget"));
    NamaPostBudget = new QStringPath(this.withPrefix("NamaPostBudget"));
    NamaBrand = new QStringPath(this.withPrefix("NamaBrand"));
    IdAlokasi = new QNumberPath(this.withPrefix("IdAlokasi"));
    IdAlokasiBudgetDetail = new QNumberPath(this.withPrefix("IdAlokasiBudgetDetail"));
    Bulan = new QNumberPath(this.withPrefix("Bulan"));
    IdDetailPembayaran = new QNumberPath(this.withPrefix("IdDetailPembayaran"));
    NoDokumenPpl = new QStringPath(this.withPrefix("NoDokumenPpl"));
    TotalKurangBudget = new QNumberPath(this.withPrefix("TotalKurangBudget"));
}
export const qDtoKurangBudgetDetails = new QDtoKurangBudgetDetails();
export class QDtoKurangBudgetDetailsId extends QId {
    params = [new QNumberParam("Id")];
    getParams() {
        return this.params;
    }
}
export class QDtoBudgetSapView extends QueryObject {
    Id = new QStringPath(this.withPrefix("Id"));
    Year = new QNumberPath(this.withPrefix("Year"));
    CoaKode = new QStringPath(this.withPrefix("CoaKode"));
    CoaNama = new QStringPath(this.withPrefix("CoaNama"));
    CoaId = new QNumberPath(this.withPrefix("CoaId"));
    DeptKode = new QStringPath(this.withPrefix("DeptKode"));
    DeptNama = new QStringPath(this.withPrefix("DeptNama"));
    NamaBrand = new QStringPath(this.withPrefix("NamaBrand"));
    NamaBudget = new QStringPath(this.withPrefix("NamaBudget"));
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
    Total = new QNumberPath(this.withPrefix("Total"));
    Bulan_1_sisa = new QNumberPath(this.withPrefix("Bulan_1_sisa"));
    Bulan_2_sisa = new QNumberPath(this.withPrefix("Bulan_2_sisa"));
    Bulan_3_sisa = new QNumberPath(this.withPrefix("Bulan_3_sisa"));
    Bulan_4_sisa = new QNumberPath(this.withPrefix("Bulan_4_sisa"));
    Bulan_5_sisa = new QNumberPath(this.withPrefix("Bulan_5_sisa"));
    Bulan_6_sisa = new QNumberPath(this.withPrefix("Bulan_6_sisa"));
    Bulan_7_sisa = new QNumberPath(this.withPrefix("Bulan_7_sisa"));
    Bulan_8_sisa = new QNumberPath(this.withPrefix("Bulan_8_sisa"));
    Bulan_9_sisa = new QNumberPath(this.withPrefix("Bulan_9_sisa"));
    Bulan_10_sisa = new QNumberPath(this.withPrefix("Bulan_10_sisa"));
    Bulan_11_sisa = new QNumberPath(this.withPrefix("Bulan_11_sisa"));
    Bulan_12_sisa = new QNumberPath(this.withPrefix("Bulan_12_sisa"));
    TotalSisa = new QNumberPath(this.withPrefix("TotalSisa"));
}
export const qDtoBudgetSapView = new QDtoBudgetSapView();
export class QDtoBudgetSapViewId extends QId {
    params = [new QStringParam("Id")];
    getParams() {
        return this.params;
    }
}
export class QDTO_BudgetMasterHistory extends QueryObject {
    Id = new QNumberPath(this.withPrefix("Id"));
    NamaBrand = new QStringPath(this.withPrefix("NamaBrand"));
    NoDokumen = new QStringPath(this.withPrefix("NoDokumen"));
    Status = new QStringPath(this.withPrefix("Status"));
    ActivityDetail = new QStringPath(this.withPrefix("ActivityDetail"));
    JenisAlokasi = new QStringPath(this.withPrefix("JenisAlokasi"));
    PeriodeAwal = new QDateTimeOffsetPath(this.withPrefix("PeriodeAwal"));
    PeriodeAkhir = new QDateTimeOffsetPath(this.withPrefix("PeriodeAkhir"));
    Scope = new QStringPath(this.withPrefix("Scope"));
    IdPostBudget = new QNumberPath(this.withPrefix("IdPostBudget"));
    IdHeaderProject = new QNumberPath(this.withPrefix("IdHeaderProject"));
    IdBrand = new QNumberPath(this.withPrefix("IdBrand"));
    NamaPostBudget = new QStringPath(this.withPrefix("NamaPostBudget"));
    Kategori = new QStringPath(this.withPrefix("Kategori"));
    KodePostBudget = new QStringPath(this.withPrefix("KodePostBudget"));
    Channel = new QStringPath(this.withPrefix("Channel"));
    NamaDepartmen = new QStringPath(this.withPrefix("NamaDepartmen"));
    NamaCoa = new QStringPath(this.withPrefix("NamaCoa"));
    KodeCoa = new QStringPath(this.withPrefix("KodeCoa"));
    Tahun = new QNumberPath(this.withPrefix("Tahun"));
    KodeDept = new QStringPath(this.withPrefix("KodeDept"));
    NamaActivity = new QStringPath(this.withPrefix("NamaActivity"));
    NamaActivity1 = new QStringPath(this.withPrefix("NamaActivity1"));
    NamaActivity2 = new QStringPath(this.withPrefix("NamaActivity2"));
    MasterBudgetIds = new QStringPath(this.withPrefix("MasterBudgetIds"));
    BudgetBulan1 = new QNumberPath(this.withPrefix("BudgetBulan1"));
    BudgetBulan2 = new QNumberPath(this.withPrefix("BudgetBulan2"));
    BudgetBulan3 = new QNumberPath(this.withPrefix("BudgetBulan3"));
    BudgetBulan4 = new QNumberPath(this.withPrefix("BudgetBulan4"));
    BudgetBulan5 = new QNumberPath(this.withPrefix("BudgetBulan5"));
    BudgetBulan6 = new QNumberPath(this.withPrefix("BudgetBulan6"));
    BudgetBulan7 = new QNumberPath(this.withPrefix("BudgetBulan7"));
    BudgetBulan8 = new QNumberPath(this.withPrefix("BudgetBulan8"));
    BudgetBulan9 = new QNumberPath(this.withPrefix("BudgetBulan9"));
    BudgetBulan10 = new QNumberPath(this.withPrefix("BudgetBulan10"));
    BudgetBulan11 = new QNumberPath(this.withPrefix("BudgetBulan11"));
    BudgetBulan12 = new QNumberPath(this.withPrefix("BudgetBulan12"));
    SisaBudgetBulan1 = new QNumberPath(this.withPrefix("SisaBudgetBulan1"));
    SisaBudgetBulan2 = new QNumberPath(this.withPrefix("SisaBudgetBulan2"));
    SisaBudgetBulan3 = new QNumberPath(this.withPrefix("SisaBudgetBulan3"));
    SisaBudgetBulan4 = new QNumberPath(this.withPrefix("SisaBudgetBulan4"));
    SisaBudgetBulan5 = new QNumberPath(this.withPrefix("SisaBudgetBulan5"));
    SisaBudgetBulan6 = new QNumberPath(this.withPrefix("SisaBudgetBulan6"));
    SisaBudgetBulan7 = new QNumberPath(this.withPrefix("SisaBudgetBulan7"));
    SisaBudgetBulan8 = new QNumberPath(this.withPrefix("SisaBudgetBulan8"));
    SisaBudgetBulan9 = new QNumberPath(this.withPrefix("SisaBudgetBulan9"));
    SisaBudgetBulan10 = new QNumberPath(this.withPrefix("SisaBudgetBulan10"));
    SisaBudgetBulan11 = new QNumberPath(this.withPrefix("SisaBudgetBulan11"));
    SisaBudgetBulan12 = new QNumberPath(this.withPrefix("SisaBudgetBulan12"));
}
export const qDTO_BudgetMasterHistory = new QDTO_BudgetMasterHistory();
export class QDTO_BudgetMasterHistoryId extends QId {
    params = [new QNumberParam("Id")];
    getParams() {
        return this.params;
    }
}
export class QDtoKurangBudget extends QueryObject {
    Id = new QNumberPath(this.withPrefix("Id"));
    Status = new QStringPath(this.withPrefix("Status"));
    NoDokumen = new QStringPath(this.withPrefix("NoDokumen"));
    Aktif = new QBooleanPath(this.withPrefix("Aktif"));
    DibuatTanggal = new QDateTimeOffsetPath(this.withPrefix("DibuatTanggal"));
    NamaPembuat = new QStringPath(this.withPrefix("NamaPembuat"));
    EmailPembuat = new QStringPath(this.withPrefix("EmailPembuat"));
    Type = new QStringPath(this.withPrefix("Type"));
    IdFeature = new QNumberPath(this.withPrefix("IdFeature"));
    NomorPembayaran = new QStringPath(this.withPrefix("NomorPembayaran"));
    PemilikBudget = new QNumberPath(this.withPrefix("PemilikBudget"));
    Year = new QNumberPath(this.withPrefix("Year"));
    IdBudgetTransfer = new QNumberPath(this.withPrefix("IdBudgetTransfer"));
    NoDokumenTransfer = new QStringPath(this.withPrefix("NoDokumenTransfer"));
    MasterUser = new QEntityPath(this.withPrefix("MasterUser"), () => QDTO_MasterUser);
    Approval = new QEntityCollectionPath(this.withPrefix("Approval"), () => QDTO_Approval);
    KurangBudgetDetail = new QEntityCollectionPath(this.withPrefix("KurangBudgetDetail"), () => QDtoKurangBudgetDetail);
}
export const qDtoKurangBudget = new QDtoKurangBudget();
export class QDtoKurangBudgetId extends QId {
    params = [new QNumberParam("Id")];
    getParams() {
        return this.params;
    }
}
export class QDtoKurangBudgetDetail extends QueryObject {
    Id = new QNumberPath(this.withPrefix("Id"));
    IdKurangBudget = new QNumberPath(this.withPrefix("IdKurangBudget"));
    IdAlokasi = new QNumberPath(this.withPrefix("IdAlokasi"));
    NoDokumenPpl = new QStringPath(this.withPrefix("NoDokumenPpl"));
    Bulan = new QNumberPath(this.withPrefix("Bulan"));
    Nilai = new QNumberPath(this.withPrefix("Nilai"));
    IdDetailPembayaran = new QNumberPath(this.withPrefix("IdDetailPembayaran"));
    BudgetAlokasi = new QEntityPath(this.withPrefix("BudgetAlokasi"), () => QDTO_BudgetAlokasi);
}
export const qDtoKurangBudgetDetail = new QDtoKurangBudgetDetail();
export class QDtoKurangBudgetDetailId extends QId {
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
    Link = new QStringPath(this.withPrefix("Link"));
    IsActive = new QBooleanPath(this.withPrefix("IsActive"));
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
export class QApproval extends QueryObject {
    Id = new QNumberPath(this.withPrefix("Id"));
    IdFeature = new QNumberPath(this.withPrefix("IdFeature"));
    IdDokumen = new QNumberPath(this.withPrefix("IdDokumen"));
    IdDokumenPengajuanForm = new QNumberPath(this.withPrefix("IdDokumenPengajuanForm"));
    IdTopUpBudget = new QNumberPath(this.withPrefix("IdTopUpBudget"));
    IdKurangBudget = new QNumberPath(this.withPrefix("IdKurangBudget"));
    IdEstimasiVsRealisasi = new QNumberPath(this.withPrefix("IdEstimasiVsRealisasi"));
    IdDokumenTransferBudget = new QNumberPath(this.withPrefix("IdDokumenTransferBudget"));
    Step = new QNumberPath(this.withPrefix("Step"));
    NoDokumen = new QStringPath(this.withPrefix("NoDokumen"));
    StepId = new QNumberPath(this.withPrefix("StepId"));
    IdRole = new QNumberPath(this.withPrefix("IdRole"));
    UserId = new QEntityPath(this.withPrefix("UserId"), () => QUserDto);
    SubUserId = new QEntityPath(this.withPrefix("SubUserId"), () => QUserDto);
    ApprovalBy = new QNumberPath(this.withPrefix("ApprovalBy"));
    Progress = new QNumberPath(this.withPrefix("Progress"));
    ActionType = new QStringPath(this.withPrefix("ActionType"));
    Aktif = new QBooleanPath(this.withPrefix("Aktif"));
    Status = new QStringPath(this.withPrefix("Status"));
    Deskripsi = new QStringPath(this.withPrefix("Deskripsi"));
    DibuatTanggal = new QDateTimeOffsetPath(this.withPrefix("DibuatTanggal"));
    Feature = new QEntityPath(this.withPrefix("Feature"), () => QFeature);
    StepApproval = new QEntityPath(this.withPrefix("StepApproval"), () => QStepApproval);
    MasterRole = new QEntityPath(this.withPrefix("MasterRole"), () => QMasterRole);
    HeaderProjek = new QEntityPath(this.withPrefix("HeaderProjek"), () => QHeaderProjek);
    PengajuanForm = new QEntityPath(this.withPrefix("PengajuanForm"), () => QPengajuanForm);
    BudgetTransfer = new QEntityPath(this.withPrefix("BudgetTransfer"), () => QBudgetTransfer);
    MasterUser = new QEntityPath(this.withPrefix("MasterUser"), () => QMasterUser);
    TopUpBudget = new QEntityPath(this.withPrefix("TopUpBudget"), () => QTopUpBudget);
    KurangBudget = new QEntityPath(this.withPrefix("KurangBudget"), () => QKurangBudget);
    EstimasiVSRealisasi = new QEntityPath(this.withPrefix("EstimasiVSRealisasi"), () => QEstimasiVSRealisasi);
}
export const qApproval = new QApproval();
export class QApprovalId extends QId {
    params = [new QNumberParam("Id")];
    getParams() {
        return this.params;
    }
}
export class QFeature extends QueryObject {
    Id = new QNumberPath(this.withPrefix("Id"));
    Nama = new QStringPath(this.withPrefix("Nama"));
    Kode = new QStringPath(this.withPrefix("Kode"));
    Aktif = new QBooleanPath(this.withPrefix("Aktif"));
    DibuatTanggal = new QDateTimeOffsetPath(this.withPrefix("DibuatTanggal"));
}
export const qFeature = new QFeature();
export class QFeatureId extends QId {
    params = [new QNumberParam("Id")];
    getParams() {
        return this.params;
    }
}
export class QStepApproval extends QueryObject {
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
    MasterRole = new QEntityPath(this.withPrefix("MasterRole"), () => QMasterRole);
    ApprovalConfigCondition = new QEntityPath(this.withPrefix("ApprovalConfigCondition"), () => QApprovalConfigCondition);
}
export const qStepApproval = new QStepApproval();
export class QStepApprovalId extends QId {
    params = [new QNumberParam("Id")];
    getParams() {
        return this.params;
    }
}
export class QApprovalConfigCondition extends QueryObject {
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
    UserId = new QEntityPath(this.withPrefix("UserId"), () => QUserDto);
    DibuatTanggal = new QDateTimeOffsetPath(this.withPrefix("DibuatTanggal"));
    ApprovalConfig = new QEntityPath(this.withPrefix("ApprovalConfig"), () => QApprovalConfig);
    MasterRole = new QEntityPath(this.withPrefix("MasterRole"), () => QMasterRole);
    StepApproval = new QEntityCollectionPath(this.withPrefix("StepApproval"), () => QStepApproval);
}
export const qApprovalConfigCondition = new QApprovalConfigCondition();
export class QApprovalConfigConditionId extends QId {
    params = [new QNumberParam("Id")];
    getParams() {
        return this.params;
    }
}
export class QApprovalConfig extends QueryObject {
    Id = new QNumberPath(this.withPrefix("Id"));
    IdFeature = new QNumberPath(this.withPrefix("IdFeature"));
    Aktif = new QBooleanPath(this.withPrefix("Aktif"));
    JenisKode = new QStringPath(this.withPrefix("JenisKode"));
    Nama = new QStringPath(this.withPrefix("Nama"));
    DibuatTanggal = new QDateTimeOffsetPath(this.withPrefix("DibuatTanggal"));
    Feature = new QEntityPath(this.withPrefix("Feature"), () => QFeature);
}
export const qApprovalConfig = new QApprovalConfig();
export class QApprovalConfigId extends QId {
    params = [new QNumberParam("Id")];
    getParams() {
        return this.params;
    }
}
export class QHeaderProjek extends QueryObject {
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
    Status = new QEntityPath(this.withPrefix("Status"), () => QSTATUS_ENUM);
    IsBottomToTop = new QBooleanPath(this.withPrefix("IsBottomToTop"));
    AutoApproved = new QBooleanPath(this.withPrefix("AutoApproved"));
    DanaCadangan = new QBooleanPath(this.withPrefix("DanaCadangan"));
    NilaiBudget = new QNumberPath(this.withPrefix("NilaiBudget"));
    SisaNilaiBudget = new QNumberPath(this.withPrefix("SisaNilaiBudget"));
    IdHeaderProject = new QNumberPath(this.withPrefix("IdHeaderProject"));
    NilaiBudgetTransaksi = new QNumberPath(this.withPrefix("NilaiBudgetTransaksi"));
    IdRegion = new QNumberPath(this.withPrefix("IdRegion"));
    CompanyId = new QNumberPath(this.withPrefix("CompanyId"));
    Aktif = new QBooleanPath(this.withPrefix("Aktif"));
    PeriodeAwal = new QDateTimeOffsetPath(this.withPrefix("PeriodeAwal"));
    PeriodeAkhir = new QDateTimeOffsetPath(this.withPrefix("PeriodeAkhir"));
    DibuatOleh = new QStringPath(this.withPrefix("DibuatOleh"));
    UserId = new QNumberPath(this.withPrefix("UserId"));
    IdFeature = new QNumberPath(this.withPrefix("IdFeature"));
    DibuatTanggal = new QDateTimeOffsetPath(this.withPrefix("DibuatTanggal"));
    JenisAlokasi = new QStringPath(this.withPrefix("JenisAlokasi"));
    Kategori = new QStringPath(this.withPrefix("Kategori"));
    SubKategori = new QStringPath(this.withPrefix("SubKategori"));
    GroupKategori = new QStringPath(this.withPrefix("GroupKategori"));
    MultiBudget = new QBooleanPath(this.withPrefix("MultiBudget"));
    JenisProgram = new QEntityPath(this.withPrefix("JenisProgram"), () => QJenisProgram);
    Region = new QEntityPath(this.withPrefix("Region"), () => QRegion);
    Brand = new QEntityPath(this.withPrefix("Brand"), () => QBrand);
    Departmen = new QEntityPath(this.withPrefix("Departmen"), () => QDepartmen);
    MasterOrganization = new QEntityPath(this.withPrefix("MasterOrganization"), () => QMasterOrganization);
    BudgetAlokasi = new QEntityCollectionPath(this.withPrefix("BudgetAlokasi"), () => QBudgetAlokasi);
    HeaderProjekBrand = new QEntityCollectionPath(this.withPrefix("HeaderProjekBrand"), () => QHeaderProjekBrand);
    HeaderProjekDepartemen = new QEntityCollectionPath(this.withPrefix("HeaderProjekDepartemen"), () => QHeaderProjekDepartemen);
    Approval = new QEntityCollectionPath(this.withPrefix("Approval"), () => QApproval);
}
export const qHeaderProjek = new QHeaderProjek();
export class QHeaderProjekId extends QId {
    params = [new QNumberParam("Id")];
    getParams() {
        return this.params;
    }
}
export class QJenisProgram extends QueryObject {
    Id = new QNumberPath(this.withPrefix("Id"));
    Nama = new QStringPath(this.withPrefix("Nama"));
    Aktif = new QBooleanPath(this.withPrefix("Aktif"));
    Kode = new QStringPath(this.withPrefix("Kode"));
    MetodePemotongan = new QStringPath(this.withPrefix("MetodePemotongan"));
    DibuatTanggal = new QDateTimeOffsetPath(this.withPrefix("DibuatTanggal"));
    KategoriPpl = new QEntityCollectionPath(this.withPrefix("KategoriPpl"), () => QKategoriPpl);
}
export const qJenisProgram = new QJenisProgram();
export class QJenisProgramId extends QId {
    params = [new QNumberParam("Id")];
    getParams() {
        return this.params;
    }
}
export class QKategoriPpl extends QueryObject {
    Id = new QNumberPath(this.withPrefix("Id"));
    IdJenisProgram = new QNumberPath(this.withPrefix("IdJenisProgram"));
    Nama = new QStringPath(this.withPrefix("Nama"));
    Aktif = new QBooleanPath(this.withPrefix("Aktif"));
    Component = new QStringPath(this.withPrefix("Component"));
    DibuatTanggal = new QDateTimeOffsetPath(this.withPrefix("DibuatTanggal"));
    Kode = new QStringPath(this.withPrefix("Kode"));
    JenisProgram = new QEntityPath(this.withPrefix("JenisProgram"), () => QJenisProgram);
    JenisPpl = new QEntityCollectionPath(this.withPrefix("JenisPpl"), () => QJenisPpl);
}
export const qKategoriPpl = new QKategoriPpl();
export class QKategoriPplId extends QId {
    params = [new QNumberParam("Id")];
    getParams() {
        return this.params;
    }
}
export class QJenisPpl extends QueryObject {
    Id = new QNumberPath(this.withPrefix("Id"));
    KategoriPplId = new QNumberPath(this.withPrefix("KategoriPplId"));
    IdPostBudget = new QNumberPath(this.withPrefix("IdPostBudget"));
    Nama = new QStringPath(this.withPrefix("Nama"));
    KodeJenisPpl = new QStringPath(this.withPrefix("KodeJenisPpl"));
    SubJenis = new QStringPath(this.withPrefix("SubJenis"));
    LeadTime = new QNumberPath(this.withPrefix("LeadTime"));
    DibuatTanggal = new QDateTimeOffsetPath(this.withPrefix("DibuatTanggal"));
    Aktif = new QBooleanPath(this.withPrefix("Aktif"));
    KodeKlaim = new QStringPath(this.withPrefix("KodeKlaim"));
    SubKlaim = new QStringPath(this.withPrefix("SubKlaim"));
    IdKodeKlaim = new QNumberPath(this.withPrefix("IdKodeKlaim"));
    KodeKlaims = new QEntityPath(this.withPrefix("KodeKlaims"), () => QKodeKlaims);
    KategoriPpl = new QEntityPath(this.withPrefix("KategoriPpl"), () => QKategoriPpl);
}
export const qJenisPpl = new QJenisPpl();
export class QJenisPplId extends QId {
    params = [new QNumberParam("Id")];
    getParams() {
        return this.params;
    }
}
export class QKodeKlaims extends QueryObject {
    Id = new QNumberPath(this.withPrefix("Id"));
    Kode = new QStringPath(this.withPrefix("Kode"));
    Nama = new QStringPath(this.withPrefix("Nama"));
    Keterangan = new QStringPath(this.withPrefix("Keterangan"));
    Aktif = new QBooleanPath(this.withPrefix("Aktif"));
    DibuatTanggal = new QDateTimeOffsetPath(this.withPrefix("DibuatTanggal"));
    MasterKlaim = new QEntityCollectionPath(this.withPrefix("MasterKlaim"), () => QMasterKlaim);
}
export const qKodeKlaims = new QKodeKlaims();
export class QKodeKlaimsId extends QId {
    params = [new QNumberParam("Id")];
    getParams() {
        return this.params;
    }
}
export class QMasterKlaim extends QueryObject {
    Id = new QNumberPath(this.withPrefix("Id"));
    KodeKlaim = new QStringPath(this.withPrefix("KodeKlaim"));
    IdKodeKlaim = new QNumberPath(this.withPrefix("IdKodeKlaim"));
    Nama = new QStringPath(this.withPrefix("Nama"));
    Keterangan = new QStringPath(this.withPrefix("Keterangan"));
    Sumber = new QStringPath(this.withPrefix("Sumber"));
    Aktif = new QBooleanPath(this.withPrefix("Aktif"));
    DibuatTanggal = new QDateTimeOffsetPath(this.withPrefix("DibuatTanggal"));
    KodeKlaims = new QEntityPath(this.withPrefix("KodeKlaims"), () => QKodeKlaims);
    MasterKlaimSyarat = new QEntityCollectionPath(this.withPrefix("MasterKlaimSyarat"), () => QMasterKlaimSyarat);
}
export const qMasterKlaim = new QMasterKlaim();
export class QMasterKlaimId extends QId {
    params = [new QNumberParam("Id")];
    getParams() {
        return this.params;
    }
}
export class QMasterKlaimSyarat extends QueryObject {
    Id = new QNumberPath(this.withPrefix("Id"));
    IdMasterKlaim = new QNumberPath(this.withPrefix("IdMasterKlaim"));
    Sub = new QStringPath(this.withPrefix("Sub"));
    Syarat = new QStringPath(this.withPrefix("Syarat"));
    Keterangan = new QStringPath(this.withPrefix("Keterangan"));
    Aktif = new QBooleanPath(this.withPrefix("Aktif"));
    DibuatTanggal = new QDateTimeOffsetPath(this.withPrefix("DibuatTanggal"));
    MasterKlaim = new QEntityPath(this.withPrefix("MasterKlaim"), () => QMasterKlaim);
}
export const qMasterKlaimSyarat = new QMasterKlaimSyarat();
export class QMasterKlaimSyaratId extends QId {
    params = [new QNumberParam("Id")];
    getParams() {
        return this.params;
    }
}
export class QRegion extends QueryObject {
    Id = new QNumberPath(this.withPrefix("Id"));
    Nama = new QStringPath(this.withPrefix("Nama"));
    NamaAlias = new QStringPath(this.withPrefix("NamaAlias"));
    PosisiWilayah = new QStringPath(this.withPrefix("PosisiWilayah"));
    Aktif = new QBooleanPath(this.withPrefix("Aktif"));
    Negara = new QStringPath(this.withPrefix("Negara"));
    Sort = new QNumberPath(this.withPrefix("Sort"));
    DibuatTanggal = new QDateTimeOffsetPath(this.withPrefix("DibuatTanggal"));
    Area = new QEntityCollectionPath(this.withPrefix("Area"), () => QArea);
}
export const qRegion = new QRegion();
export class QRegionId extends QId {
    params = [new QNumberParam("Id")];
    getParams() {
        return this.params;
    }
}
export class QArea extends QueryObject {
    Id = new QNumberPath(this.withPrefix("Id"));
    Nama = new QStringPath(this.withPrefix("Nama"));
    IdRegion = new QNumberPath(this.withPrefix("IdRegion"));
    KodeArea = new QStringPath(this.withPrefix("KodeArea"));
    Aktif = new QBooleanPath(this.withPrefix("Aktif"));
    DibuatTanggal = new QDateTimeOffsetPath(this.withPrefix("DibuatTanggal"));
    Region = new QEntityPath(this.withPrefix("Region"), () => QRegion);
    Distributor = new QEntityCollectionPath(this.withPrefix("Distributor"), () => QDistributor);
}
export const qArea = new QArea();
export class QAreaId extends QId {
    params = [new QNumberParam("Id")];
    getParams() {
        return this.params;
    }
}
export class QDistributor extends QueryObject {
    Id = new QNumberPath(this.withPrefix("Id"));
    CardCode = new QStringPath(this.withPrefix("CardCode"));
    Nama = new QStringPath(this.withPrefix("Nama"));
    NamaAlias = new QStringPath(this.withPrefix("NamaAlias"));
    AreaId = new QNumberPath(this.withPrefix("AreaId"));
    Aktif = new QBooleanPath(this.withPrefix("Aktif"));
    DibuatTanggal = new QDateTimeOffsetPath(this.withPrefix("DibuatTanggal"));
    Area = new QEntityPath(this.withPrefix("Area"), () => QArea);
}
export const qDistributor = new QDistributor();
export class QDistributorId extends QId {
    params = [new QNumberParam("Id")];
    getParams() {
        return this.params;
    }
}
export class QBrand extends QueryObject {
    Id = new QNumberPath(this.withPrefix("Id"));
    Nama = new QStringPath(this.withPrefix("Nama"));
    NamaBudget = new QStringPath(this.withPrefix("NamaBudget"));
    Aktif = new QBooleanPath(this.withPrefix("Aktif"));
    Sort = new QNumberPath(this.withPrefix("Sort"));
    DibuatTanggal = new QDateTimeOffsetPath(this.withPrefix("DibuatTanggal"));
    PostBudget = new QEntityCollectionPath(this.withPrefix("PostBudget"), () => QPostBudget);
}
export const qBrand = new QBrand();
export class QBrandId extends QId {
    params = [new QNumberParam("Id")];
    getParams() {
        return this.params;
    }
}
export class QPostBudget extends QueryObject {
    Id = new QNumberPath(this.withPrefix("Id"));
    CoaId = new QNumberPath(this.withPrefix("CoaId"));
    ParentId = new QNumberPath(this.withPrefix("ParentId"));
    IdDepartemen = new QNumberPath(this.withPrefix("IdDepartemen"));
    Nama = new QStringPath(this.withPrefix("Nama"));
    Channel = new QStringPath(this.withPrefix("Channel"));
    Kategori = new QStringPath(this.withPrefix("Kategori"));
    Deskripsi = new QStringPath(this.withPrefix("Deskripsi"));
    Departemen = new QStringPath(this.withPrefix("Departemen"));
    Kode = new QStringPath(this.withPrefix("Kode"));
    BrandId = new QNumberPath(this.withPrefix("BrandId"));
    DibuatTanggal = new QDateTimeOffsetPath(this.withPrefix("DibuatTanggal"));
    Aktif = new QBooleanPath(this.withPrefix("Aktif"));
    CompanyId = new QNumberPath(this.withPrefix("CompanyId"));
    Coa = new QEntityPath(this.withPrefix("Coa"), () => QCoa);
    Departmen = new QEntityPath(this.withPrefix("Departmen"), () => QDepartmen);
    Brand = new QEntityPath(this.withPrefix("Brand"), () => QBrand);
    Parent = new QEntityPath(this.withPrefix("Parent"), () => QPostBudget);
    PostBudgetProgram = new QEntityCollectionPath(this.withPrefix("PostBudgetProgram"), () => QPostBudgetProgram);
}
export const qPostBudget = new QPostBudget();
export class QPostBudgetId extends QId {
    params = [new QNumberParam("Id")];
    getParams() {
        return this.params;
    }
}
export class QCoa extends QueryObject {
    Id = new QNumberPath(this.withPrefix("Id"));
    Nama = new QStringPath(this.withPrefix("Nama"));
    Kode = new QStringPath(this.withPrefix("Kode"));
    Aktif = new QBooleanPath(this.withPrefix("Aktif"));
    DibuatTanggal = new QDateTimeOffsetPath(this.withPrefix("DibuatTanggal"));
    CompanyId = new QNumberPath(this.withPrefix("CompanyId"));
    PostBudget = new QEntityCollectionPath(this.withPrefix("PostBudget"), () => QPostBudget);
}
export const qCoa = new QCoa();
export class QCoaId extends QId {
    params = [new QNumberParam("Id")];
    getParams() {
        return this.params;
    }
}
export class QDepartmen extends QueryObject {
    Id = new QNumberPath(this.withPrefix("Id"));
    Code = new QStringPath(this.withPrefix("Code"));
    Nama = new QStringPath(this.withPrefix("Nama"));
    DibuatTanggal = new QDateTimeOffsetPath(this.withPrefix("DibuatTanggal"));
    CompanyId = new QNumberPath(this.withPrefix("CompanyId"));
    Aktif = new QBooleanPath(this.withPrefix("Aktif"));
}
export const qDepartmen = new QDepartmen();
export class QDepartmenId extends QId {
    params = [new QNumberParam("Id")];
    getParams() {
        return this.params;
    }
}
export class QPostBudgetProgram extends QueryObject {
    Id = new QNumberPath(this.withPrefix("Id"));
    IdPostBudget = new QNumberPath(this.withPrefix("IdPostBudget"));
    IdJenisPpl = new QNumberPath(this.withPrefix("IdJenisPpl"));
    PostBudget = new QEntityPath(this.withPrefix("PostBudget"), () => QPostBudget);
    JenisPpl = new QEntityPath(this.withPrefix("JenisPpl"), () => QJenisPpl);
}
export const qPostBudgetProgram = new QPostBudgetProgram();
export class QPostBudgetProgramId extends QId {
    params = [new QNumberParam("Id")];
    getParams() {
        return this.params;
    }
}
export class QBudgetAlokasi extends QueryObject {
    Id = new QNumberPath(this.withPrefix("Id"));
    IdHeaderProjek = new QNumberPath(this.withPrefix("IdHeaderProjek"));
    IdPostBudget = new QNumberPath(this.withPrefix("IdPostBudget"));
    IdJenisPpl = new QNumberPath(this.withPrefix("IdJenisPpl"));
    MetodePembagian = new QStringPath(this.withPrefix("MetodePembagian"));
    NilaiBudget = new QNumberPath(this.withPrefix("NilaiBudget"));
    SisaNilaiBudget = new QNumberPath(this.withPrefix("SisaNilaiBudget"));
    IdSkenario = new QNumberPath(this.withPrefix("IdSkenario"));
    Aktif = new QBooleanPath(this.withPrefix("Aktif"));
    AutoGenerate = new QBooleanPath(this.withPrefix("AutoGenerate"));
    KodeDept = new QStringPath(this.withPrefix("KodeDept"));
    NamaActivity = new QStringPath(this.withPrefix("NamaActivity"));
    NamaActivity1 = new QStringPath(this.withPrefix("NamaActivity1"));
    NamaActivity2 = new QStringPath(this.withPrefix("NamaActivity2"));
    Tahun = new QNumberPath(this.withPrefix("Tahun"));
    DibuatTanggal = new QDateTimeOffsetPath(this.withPrefix("DibuatTanggal"));
    PostBudget = new QEntityPath(this.withPrefix("PostBudget"), () => QPostBudget);
    JenisPpl = new QEntityPath(this.withPrefix("JenisPpl"), () => QJenisPpl);
    SkenarioBudget = new QEntityPath(this.withPrefix("SkenarioBudget"), () => QSkenarioBudget);
    HeaderProjek = new QEntityPath(this.withPrefix("HeaderProjek"), () => QHeaderProjek);
    BudgetAlokasiDetail = new QEntityCollectionPath(this.withPrefix("BudgetAlokasiDetail"), () => QBudgetAlokasiDetail);
}
export const qBudgetAlokasi = new QBudgetAlokasi();
export class QBudgetAlokasiId extends QId {
    params = [new QNumberParam("Id")];
    getParams() {
        return this.params;
    }
}
export class QSkenarioBudget extends QueryObject {
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
export const qSkenarioBudget = new QSkenarioBudget();
export class QSkenarioBudgetId extends QId {
    params = [new QNumberParam("Id")];
    getParams() {
        return this.params;
    }
}
export class QBudgetAlokasiDetail extends QueryObject {
    Id = new QNumberPath(this.withPrefix("Id"));
    IdBudgetAlokasi = new QNumberPath(this.withPrefix("IdBudgetAlokasi"));
    IdMasterBudget = new QNumberPath(this.withPrefix("IdMasterBudget"));
    BulanMasterBudget = new QNumberPath(this.withPrefix("BulanMasterBudget"));
    Bulan = new QNumberPath(this.withPrefix("Bulan"));
    DibuatTanggal = new QDateTimeOffsetPath(this.withPrefix("DibuatTanggal"));
    NilaiBudget = new QNumberPath(this.withPrefix("NilaiBudget"));
    SisaNilaiBudget = new QNumberPath(this.withPrefix("SisaNilaiBudget"));
    NilaiTransferSumber = new QNumberPath(this.withPrefix("NilaiTransferSumber"));
    NilaiTransferTujuan = new QNumberPath(this.withPrefix("NilaiTransferTujuan"));
    NilaiFix = new QNumberPath(this.withPrefix("NilaiFix"));
    BudgetAlokasi = new QEntityPath(this.withPrefix("BudgetAlokasi"), () => QBudgetAlokasi);
    MasterBudget = new QEntityPath(this.withPrefix("MasterBudget"), () => QMasterBudget);
}
export const qBudgetAlokasiDetail = new QBudgetAlokasiDetail();
export class QBudgetAlokasiDetailId extends QId {
    params = [new QNumberParam("Id")];
    getParams() {
        return this.params;
    }
}
export class QMasterBudget extends QueryObject {
    Id = new QNumberPath(this.withPrefix("Id"));
    IdBudgetSap = new QNumberPath(this.withPrefix("IdBudgetSap"));
    IdPostBudget = new QNumberPath(this.withPrefix("IdPostBudget"));
    CoaId = new QNumberPath(this.withPrefix("CoaId"));
    IdBrand = new QNumberPath(this.withPrefix("IdBrand"));
    DeptKode = new QStringPath(this.withPrefix("DeptKode"));
    Year = new QNumberPath(this.withPrefix("Year"));
    Month = new QNumberPath(this.withPrefix("Month"));
    Budget = new QNumberPath(this.withPrefix("Budget"));
    BudgetSisa = new QNumberPath(this.withPrefix("BudgetSisa"));
    NilaiTopUp = new QNumberPath(this.withPrefix("NilaiTopUp"));
    NilaiTransferSumber = new QNumberPath(this.withPrefix("NilaiTransferSumber"));
    NilaiTransferTujuan = new QNumberPath(this.withPrefix("NilaiTransferTujuan"));
    NilaiFix = new QNumberPath(this.withPrefix("NilaiFix"));
    DibuatTanggal = new QDateTimeOffsetPath(this.withPrefix("DibuatTanggal"));
    DieditTanggal = new QDateTimeOffsetPath(this.withPrefix("DieditTanggal"));
    DibuatOleh = new QStringPath(this.withPrefix("DibuatOleh"));
    UserId = new QNumberPath(this.withPrefix("UserId"));
    CompanyId = new QNumberPath(this.withPrefix("CompanyId"));
    IsLocked = new QBooleanPath(this.withPrefix("IsLocked"));
    BudgetSap = new QEntityPath(this.withPrefix("BudgetSap"), () => QBudgetSap);
    PostBudget = new QEntityPath(this.withPrefix("PostBudget"), () => QPostBudget);
    Coa = new QEntityPath(this.withPrefix("Coa"), () => QCoa);
    Brand = new QEntityPath(this.withPrefix("Brand"), () => QBrand);
}
export const qMasterBudget = new QMasterBudget();
export class QMasterBudgetId extends QId {
    params = [new QNumberParam("Id")];
    getParams() {
        return this.params;
    }
}
export class QBudgetSap extends QueryObject {
    Id = new QNumberPath(this.withPrefix("Id"));
    AcctCode = new QStringPath(this.withPrefix("AcctCode"));
    OcrCode = new QStringPath(this.withPrefix("OcrCode"));
    OcrCode1 = new QStringPath(this.withPrefix("OcrCode1"));
    OcrCode5 = new QStringPath(this.withPrefix("OcrCode5"));
    DimCode = new QStringPath(this.withPrefix("DimCode"));
    Instance = new QNumberPath(this.withPrefix("Instance"));
    Line_ID = new QNumberPath(this.withPrefix("Line_ID"));
    DebLTotal = new QNumberPath(this.withPrefix("DebLTotal"));
    CredLTotal = new QNumberPath(this.withPrefix("CredLTotal"));
    DebSTotal = new QNumberPath(this.withPrefix("DebSTotal"));
    DebSTotalSisa = new QNumberPath(this.withPrefix("DebSTotalSisa"));
    CredSTotal = new QNumberPath(this.withPrefix("CredSTotal"));
    NilaiFix = new QNumberPath(this.withPrefix("NilaiFix"));
    TransAmnt = new QStringPath(this.withPrefix("TransAmnt"));
    UserSign = new QNumberPath(this.withPrefix("UserSign"));
    CompanyId = new QNumberPath(this.withPrefix("CompanyId"));
    AcctName = new QStringPath(this.withPrefix("AcctName"));
    Year = new QNumberPath(this.withPrefix("Year"));
    DibuatTanggal = new QDateTimeOffsetPath(this.withPrefix("DibuatTanggal"));
    MasterBudget = new QEntityCollectionPath(this.withPrefix("MasterBudget"), () => QMasterBudget);
}
export const qBudgetSap = new QBudgetSap();
export class QBudgetSapId extends QId {
    params = [new QNumberParam("Id")];
    getParams() {
        return this.params;
    }
}
export class QHeaderProjekBrand extends QueryObject {
    Id = new QNumberPath(this.withPrefix("Id"));
    IdHeaderProjek = new QNumberPath(this.withPrefix("IdHeaderProjek"));
    IdBrand = new QNumberPath(this.withPrefix("IdBrand"));
    DibuatTanggal = new QDateTimeOffsetPath(this.withPrefix("DibuatTanggal"));
    Brand = new QEntityPath(this.withPrefix("Brand"), () => QBrand);
    HeaderProjek = new QEntityPath(this.withPrefix("HeaderProjek"), () => QHeaderProjek);
}
export const qHeaderProjekBrand = new QHeaderProjekBrand();
export class QHeaderProjekBrandId extends QId {
    params = [new QNumberParam("Id")];
    getParams() {
        return this.params;
    }
}
export class QHeaderProjekDepartemen extends QueryObject {
    Id = new QNumberPath(this.withPrefix("Id"));
    IdHeaderProjek = new QNumberPath(this.withPrefix("IdHeaderProjek"));
    IdDepartmen = new QNumberPath(this.withPrefix("IdDepartmen"));
    KodeDepartmen = new QStringPath(this.withPrefix("KodeDepartmen"));
    DibuatTanggal = new QDateTimeOffsetPath(this.withPrefix("DibuatTanggal"));
    Departmen = new QEntityPath(this.withPrefix("Departmen"), () => QDepartmen);
    HeaderProjek = new QEntityPath(this.withPrefix("HeaderProjek"), () => QHeaderProjek);
}
export const qHeaderProjekDepartemen = new QHeaderProjekDepartemen();
export class QHeaderProjekDepartemenId extends QId {
    params = [new QNumberParam("Id")];
    getParams() {
        return this.params;
    }
}
export class QPengajuanForm extends QueryObject {
    Id = new QNumberPath(this.withPrefix("Id"));
    NoDokumen = new QStringPath(this.withPrefix("NoDokumen"));
    Kategori = new QStringPath(this.withPrefix("Kategori"));
    IdFeature = new QNumberPath(this.withPrefix("IdFeature"));
    DibuatOleh = new QStringPath(this.withPrefix("DibuatOleh"));
    UserId = new QNumberPath(this.withPrefix("UserId"));
    Status = new QEntityPath(this.withPrefix("Status"), () => QSTATUS_ENUM);
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
    PengajuanFormOutlet = new QEntityCollectionPath(this.withPrefix("PengajuanFormOutlet"), () => QPengajuanFormOutlet);
    PengajuanFormAttachment = new QEntityCollectionPath(this.withPrefix("PengajuanFormAttachment"), () => QPengajuanFormAttachment);
    PengajuanFormProduk = new QEntityCollectionPath(this.withPrefix("PengajuanFormProduk"), () => QPengajuanFormProduk);
    PengajuanFormDetail = new QEntityCollectionPath(this.withPrefix("PengajuanFormDetail"), () => QPengajuanFormDetail);
    Approval = new QEntityCollectionPath(this.withPrefix("Approval"), () => QApproval);
}
export const qPengajuanForm = new QPengajuanForm();
export class QPengajuanFormId extends QId {
    params = [new QNumberParam("Id")];
    getParams() {
        return this.params;
    }
}
export class QPengajuanFormOutlet extends QueryObject {
    Id = new QNumberPath(this.withPrefix("Id"));
    IdPengajuanForm = new QNumberPath(this.withPrefix("IdPengajuanForm"));
    IdOutlet = new QNumberPath(this.withPrefix("IdOutlet"));
    DibuatTanggal = new QDateTimeOffsetPath(this.withPrefix("DibuatTanggal"));
    Outlet = new QEntityPath(this.withPrefix("Outlet"), () => QOutlet);
    PengajuanForm = new QEntityPath(this.withPrefix("PengajuanForm"), () => QPengajuanForm);
}
export const qPengajuanFormOutlet = new QPengajuanFormOutlet();
export class QPengajuanFormOutletId extends QId {
    params = [new QNumberParam("Id")];
    getParams() {
        return this.params;
    }
}
export class QOutlet extends QueryObject {
    Id = new QNumberPath(this.withPrefix("Id"));
    IdArea = new QNumberPath(this.withPrefix("IdArea"));
    IdGroup = new QNumberPath(this.withPrefix("IdGroup"));
    IdKota = new QNumberPath(this.withPrefix("IdKota"));
    NamaKota = new QStringPath(this.withPrefix("NamaKota"));
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
    Area = new QEntityPath(this.withPrefix("Area"), () => QArea);
    OutletGroup = new QEntityPath(this.withPrefix("OutletGroup"), () => QOutletGroup);
}
export const qOutlet = new QOutlet();
export class QOutletId extends QId {
    params = [new QNumberParam("Id")];
    getParams() {
        return this.params;
    }
}
export class QOutletGroup extends QueryObject {
    Id = new QNumberPath(this.withPrefix("Id"));
    Nama = new QStringPath(this.withPrefix("Nama"));
    Aktif = new QBooleanPath(this.withPrefix("Aktif"));
    DibuatTanggal = new QDateTimeOffsetPath(this.withPrefix("DibuatTanggal"));
    Outlet = new QEntityCollectionPath(this.withPrefix("Outlet"), () => QOutlet);
}
export const qOutletGroup = new QOutletGroup();
export class QOutletGroupId extends QId {
    params = [new QNumberParam("Id")];
    getParams() {
        return this.params;
    }
}
export class QPengajuanFormAttachment extends QueryObject {
    Id = new QNumberPath(this.withPrefix("Id"));
    IdPengajuanForm = new QNumberPath(this.withPrefix("IdPengajuanForm"));
    Label = new QStringPath(this.withPrefix("Label"));
    File = new QStringPath(this.withPrefix("File"));
    DibuatTanggal = new QDateTimeOffsetPath(this.withPrefix("DibuatTanggal"));
    PengajuanForm = new QEntityPath(this.withPrefix("PengajuanForm"), () => QPengajuanForm);
}
export const qPengajuanFormAttachment = new QPengajuanFormAttachment();
export class QPengajuanFormAttachmentId extends QId {
    params = [new QNumberParam("Id")];
    getParams() {
        return this.params;
    }
}
export class QPengajuanFormProduk extends QueryObject {
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
    PengajuanForm = new QEntityPath(this.withPrefix("PengajuanForm"), () => QPengajuanForm);
}
export const qPengajuanFormProduk = new QPengajuanFormProduk();
export class QPengajuanFormProdukId extends QId {
    params = [new QNumberParam("Id")];
    getParams() {
        return this.params;
    }
}
export class QPengajuanFormDetail extends QueryObject {
    Id = new QNumberPath(this.withPrefix("Id"));
    IdPengajuanForm = new QNumberPath(this.withPrefix("IdPengajuanForm"));
    Deskripsi = new QStringPath(this.withPrefix("Deskripsi"));
    Keterangan = new QStringPath(this.withPrefix("Keterangan"));
    Klaim = new QStringPath(this.withPrefix("Klaim"));
    Biaya = new QNumberPath(this.withPrefix("Biaya"));
    IdPostBudget = new QNumberPath(this.withPrefix("IdPostBudget"));
    PengajuanForm = new QEntityPath(this.withPrefix("PengajuanForm"), () => QPengajuanForm);
    PostBudget = new QEntityPath(this.withPrefix("PostBudget"), () => QPostBudget);
}
export const qPengajuanFormDetail = new QPengajuanFormDetail();
export class QPengajuanFormDetailId extends QId {
    params = [new QNumberParam("Id")];
    getParams() {
        return this.params;
    }
}
export class QBudgetTransfer extends QueryObject {
    Id = new QNumberPath(this.withPrefix("Id"));
    NoDokumen = new QStringPath(this.withPrefix("NoDokumen"));
    IdProjectSumber = new QNumberPath(this.withPrefix("IdProjectSumber"));
    IdProjectTujuan = new QNumberPath(this.withPrefix("IdProjectTujuan"));
    IdKurangBudget = new QNumberPath(this.withPrefix("IdKurangBudget"));
    TotalTransfer = new QNumberPath(this.withPrefix("TotalTransfer"));
    Jenis = new QStringPath(this.withPrefix("Jenis"));
    Deskripsi = new QStringPath(this.withPrefix("Deskripsi"));
    Status = new QEntityPath(this.withPrefix("Status"), () => QSTATUS_ENUM);
    DibuatOleh = new QStringPath(this.withPrefix("DibuatOleh"));
    UserId = new QNumberPath(this.withPrefix("UserId"));
    UserApproval = new QNumberPath(this.withPrefix("UserApproval"));
    Aktif = new QBooleanPath(this.withPrefix("Aktif"));
    IdFeature = new QNumberPath(this.withPrefix("IdFeature"));
    DibuatTanggal = new QDateTimeOffsetPath(this.withPrefix("DibuatTanggal"));
    BudgetTransferDetail = new QEntityCollectionPath(this.withPrefix("BudgetTransferDetail"), () => QBudgetTransferDetail);
    Approval = new QEntityCollectionPath(this.withPrefix("Approval"), () => QApproval);
    Feature = new QEntityPath(this.withPrefix("Feature"), () => QFeature);
    KurangBudget = new QEntityPath(this.withPrefix("KurangBudget"), () => QKurangBudget);
    HeaderProjekSumber = new QEntityPath(this.withPrefix("HeaderProjekSumber"), () => QHeaderProjek);
    HeaderProjekTujuan = new QEntityPath(this.withPrefix("HeaderProjekTujuan"), () => QHeaderProjek);
}
export const qBudgetTransfer = new QBudgetTransfer();
export class QBudgetTransferId extends QId {
    params = [new QNumberParam("Id")];
    getParams() {
        return this.params;
    }
}
export class QBudgetTransferDetail extends QueryObject {
    Id = new QNumberPath(this.withPrefix("Id"));
    IdTransfer = new QNumberPath(this.withPrefix("IdTransfer"));
    IdAlokasiBudgetSumber = new QNumberPath(this.withPrefix("IdAlokasiBudgetSumber"));
    IdAlokasiBudgetTujuan = new QNumberPath(this.withPrefix("IdAlokasiBudgetTujuan"));
    IdPostBugdetSumber = new QNumberPath(this.withPrefix("IdPostBugdetSumber"));
    IdPostBugdetTujuan = new QNumberPath(this.withPrefix("IdPostBugdetTujuan"));
    IdAlokasiDetailSumber = new QNumberPath(this.withPrefix("IdAlokasiDetailSumber"));
    IdAlokasiDetailTujuan = new QNumberPath(this.withPrefix("IdAlokasiDetailTujuan"));
    BulanBudgetSumber = new QNumberPath(this.withPrefix("BulanBudgetSumber"));
    BulanBudgetTujuan = new QNumberPath(this.withPrefix("BulanBudgetTujuan"));
    IdSkenarioTujuan = new QNumberPath(this.withPrefix("IdSkenarioTujuan"));
    IdSkenarioSumber = new QNumberPath(this.withPrefix("IdSkenarioSumber"));
    Nilai = new QNumberPath(this.withPrefix("Nilai"));
    DifferencePosBudget = new QBooleanPath(this.withPrefix("DifferencePosBudget"));
    BudgetTransfer = new QEntityPath(this.withPrefix("BudgetTransfer"), () => QBudgetTransfer);
    BudgetAlokasiSumber = new QEntityPath(this.withPrefix("BudgetAlokasiSumber"), () => QBudgetAlokasi);
    BudgetAlokasiTujuan = new QEntityPath(this.withPrefix("BudgetAlokasiTujuan"), () => QBudgetAlokasi);
    BudgetAlokasiDetailSumber = new QEntityPath(this.withPrefix("BudgetAlokasiDetailSumber"), () => QBudgetAlokasiDetail);
    BudgetAlokasiDetailTujuan = new QEntityPath(this.withPrefix("BudgetAlokasiDetailTujuan"), () => QBudgetAlokasiDetail);
    SkenarioBudgetSumber = new QEntityPath(this.withPrefix("SkenarioBudgetSumber"), () => QSkenarioBudget);
    SkenarioBudgetTujuan = new QEntityPath(this.withPrefix("SkenarioBudgetTujuan"), () => QSkenarioBudget);
    PostBudgetSumber = new QEntityPath(this.withPrefix("PostBudgetSumber"), () => QPostBudget);
    PostBudgetTujuan = new QEntityPath(this.withPrefix("PostBudgetTujuan"), () => QPostBudget);
}
export const qBudgetTransferDetail = new QBudgetTransferDetail();
export class QBudgetTransferDetailId extends QId {
    params = [new QNumberParam("Id")];
    getParams() {
        return this.params;
    }
}
export class QKurangBudget extends QueryObject {
    Id = new QNumberPath(this.withPrefix("Id"));
    Status = new QEntityPath(this.withPrefix("Status"), () => QSTATUS_ENUM);
    NoDokumen = new QStringPath(this.withPrefix("NoDokumen"));
    Aktif = new QBooleanPath(this.withPrefix("Aktif"));
    DibuatTanggal = new QDateTimeOffsetPath(this.withPrefix("DibuatTanggal"));
    NamaPembuat = new QStringPath(this.withPrefix("NamaPembuat"));
    EmailPembuat = new QStringPath(this.withPrefix("EmailPembuat"));
    Type = new QStringPath(this.withPrefix("Type"));
    IdFeature = new QNumberPath(this.withPrefix("IdFeature"));
    NomorPembayaran = new QStringPath(this.withPrefix("NomorPembayaran"));
    PemilikBudget = new QNumberPath(this.withPrefix("PemilikBudget"));
    Year = new QNumberPath(this.withPrefix("Year"));
    IdBudgetTransfer = new QNumberPath(this.withPrefix("IdBudgetTransfer"));
    NoDokumenTransfer = new QStringPath(this.withPrefix("NoDokumenTransfer"));
    KurangBudgetDetail = new QEntityCollectionPath(this.withPrefix("KurangBudgetDetail"), () => QKurangBudgetDetail);
    MasterUser = new QEntityPath(this.withPrefix("MasterUser"), () => QMasterUser);
    Approval = new QEntityCollectionPath(this.withPrefix("Approval"), () => QApproval);
}
export const qKurangBudget = new QKurangBudget();
export class QKurangBudgetId extends QId {
    params = [new QNumberParam("Id")];
    getParams() {
        return this.params;
    }
}
export class QKurangBudgetDetail extends QueryObject {
    Id = new QNumberPath(this.withPrefix("Id"));
    IdKurangBudget = new QNumberPath(this.withPrefix("IdKurangBudget"));
    IdAlokasi = new QNumberPath(this.withPrefix("IdAlokasi"));
    NoDokumenPpl = new QStringPath(this.withPrefix("NoDokumenPpl"));
    Bulan = new QNumberPath(this.withPrefix("Bulan"));
    Nilai = new QNumberPath(this.withPrefix("Nilai"));
    IdDetailPembayaran = new QNumberPath(this.withPrefix("IdDetailPembayaran"));
    KurangBudget = new QEntityPath(this.withPrefix("KurangBudget"), () => QKurangBudget);
    BudgetAlokasi = new QEntityPath(this.withPrefix("BudgetAlokasi"), () => QBudgetAlokasi);
}
export const qKurangBudgetDetail = new QKurangBudgetDetail();
export class QKurangBudgetDetailId extends QId {
    params = [new QNumberParam("Id")];
    getParams() {
        return this.params;
    }
}
export class QMasterUser extends QueryObject {
    Id = new QNumberPath(this.withPrefix("Id"));
    Username = new QStringPath(this.withPrefix("Username"));
    Password = new QStringPath(this.withPrefix("Password"));
    IsActive = new QBooleanPath(this.withPrefix("IsActive"));
    IsApprovalProgram = new QBooleanPath(this.withPrefix("IsApprovalProgram"));
    AllBrand = new QBooleanPath(this.withPrefix("AllBrand"));
    AllDistributor = new QBooleanPath(this.withPrefix("AllDistributor"));
    AllArea = new QBooleanPath(this.withPrefix("AllArea"));
    IsDeptHead = new QBooleanPath(this.withPrefix("IsDeptHead"));
    IsSuperAdmin = new QBooleanPath(this.withPrefix("IsSuperAdmin"));
    IsLocBudget = new QBooleanPath(this.withPrefix("IsLocBudget"));
    AllDepartmen = new QBooleanPath(this.withPrefix("AllDepartmen"));
    AllCompany = new QBooleanPath(this.withPrefix("AllCompany"));
    Nik = new QStringPath(this.withPrefix("Nik"));
    NamaLengkap = new QStringPath(this.withPrefix("NamaLengkap"));
    Channel = new QStringPath(this.withPrefix("Channel"));
    KodeDepartemen = new QStringPath(this.withPrefix("KodeDepartemen"));
    KodeUserType = new QStringPath(this.withPrefix("KodeUserType"));
    TandaTangan = new QStringPath(this.withPrefix("TandaTangan"));
    RoleId = new QNumberPath(this.withPrefix("RoleId"));
    CompanyId = new QNumberPath(this.withPrefix("CompanyId"));
    IdUserHana = new QNumberPath(this.withPrefix("IdUserHana"));
    NamaUserHana = new QStringPath(this.withPrefix("NamaUserHana"));
    IdUserEsw = new QNumberPath(this.withPrefix("IdUserEsw"));
    NamaUserEsw = new QStringPath(this.withPrefix("NamaUserEsw"));
    Role = new QEntityPath(this.withPrefix("Role"), () => QMasterRole);
    UserDistributor = new QEntityCollectionPath(this.withPrefix("UserDistributor"), () => QUserDistributor);
    UserArea = new QEntityCollectionPath(this.withPrefix("UserArea"), () => QUserArea);
    UsersAttachment = new QEntityCollectionPath(this.withPrefix("UsersAttachment"), () => QUsersAttachment);
    UserBrand = new QEntityCollectionPath(this.withPrefix("UserBrand"), () => QUserBrand);
}
export const qMasterUser = new QMasterUser();
export class QMasterUserId extends QId {
    params = [new QNumberParam("Id")];
    getParams() {
        return this.params;
    }
}
export class QUserDistributor extends QueryObject {
    Id = new QNumberPath(this.withPrefix("Id"));
    IdUser = new QNumberPath(this.withPrefix("IdUser"));
    CardCode = new QStringPath(this.withPrefix("CardCode"));
    Nama = new QStringPath(this.withPrefix("Nama"));
    DibuatTanggal = new QDateTimeOffsetPath(this.withPrefix("DibuatTanggal"));
    MasterUser = new QEntityPath(this.withPrefix("MasterUser"), () => QMasterUser);
}
export const qUserDistributor = new QUserDistributor();
export class QUserDistributorId extends QId {
    params = [new QNumberParam("Id")];
    getParams() {
        return this.params;
    }
}
export class QUserArea extends QueryObject {
    Id = new QNumberPath(this.withPrefix("Id"));
    IdUser = new QNumberPath(this.withPrefix("IdUser"));
    KodeArea = new QStringPath(this.withPrefix("KodeArea"));
    Nama = new QStringPath(this.withPrefix("Nama"));
    DibuatTanggal = new QDateTimeOffsetPath(this.withPrefix("DibuatTanggal"));
    MasterUser = new QEntityPath(this.withPrefix("MasterUser"), () => QMasterUser);
}
export const qUserArea = new QUserArea();
export class QUserAreaId extends QId {
    params = [new QNumberParam("Id")];
    getParams() {
        return this.params;
    }
}
export class QUsersAttachment extends QueryObject {
    Id = new QNumberPath(this.withPrefix("Id"));
    IdMasterUser = new QNumberPath(this.withPrefix("IdMasterUser"));
    Label = new QStringPath(this.withPrefix("Label"));
    File = new QStringPath(this.withPrefix("File"));
    DibuatTanggal = new QDateTimeOffsetPath(this.withPrefix("DibuatTanggal"));
    MasterUser = new QEntityPath(this.withPrefix("MasterUser"), () => QMasterUser);
}
export const qUsersAttachment = new QUsersAttachment();
export class QUsersAttachmentId extends QId {
    params = [new QNumberParam("Id")];
    getParams() {
        return this.params;
    }
}
export class QUserBrand extends QueryObject {
    Id = new QNumberPath(this.withPrefix("Id"));
    IdUser = new QNumberPath(this.withPrefix("IdUser"));
    Nama = new QStringPath(this.withPrefix("Nama"));
    MasterUser = new QEntityPath(this.withPrefix("MasterUser"), () => QMasterUser);
}
export const qUserBrand = new QUserBrand();
export class QUserBrandId extends QId {
    params = [new QNumberParam("Id")];
    getParams() {
        return this.params;
    }
}
export class QTopUpBudget extends QueryObject {
    Id = new QNumberPath(this.withPrefix("Id"));
    Deskripsi = new QStringPath(this.withPrefix("Deskripsi"));
    DibuatTanggal = new QDateTimeOffsetPath(this.withPrefix("DibuatTanggal"));
    DibuatOleh = new QStringPath(this.withPrefix("DibuatOleh"));
    UserId = new QNumberPath(this.withPrefix("UserId"));
    BrandId = new QNumberPath(this.withPrefix("BrandId"));
    BrandOther = new QStringPath(this.withPrefix("BrandOther"));
    ChannelId = new QNumberPath(this.withPrefix("ChannelId"));
    ChannelOther = new QStringPath(this.withPrefix("ChannelOther"));
    DeptId = new QNumberPath(this.withPrefix("DeptId"));
    DeptOther = new QStringPath(this.withPrefix("DeptOther"));
    Aktif = new QBooleanPath(this.withPrefix("Aktif"));
    NoDokumen = new QStringPath(this.withPrefix("NoDokumen"));
    Status = new QEntityPath(this.withPrefix("Status"), () => QSTATUS_ENUM);
    IdFeature = new QNumberPath(this.withPrefix("IdFeature"));
    TopUpBudgetDetail = new QEntityCollectionPath(this.withPrefix("TopUpBudgetDetail"), () => QTopUpBudgetDetail);
    Approval = new QEntityCollectionPath(this.withPrefix("Approval"), () => QApproval);
    Brand = new QEntityPath(this.withPrefix("Brand"), () => QBrand);
    Channel = new QEntityPath(this.withPrefix("Channel"), () => QChannel);
    Departmen = new QEntityPath(this.withPrefix("Departmen"), () => QDepartmen);
}
export const qTopUpBudget = new QTopUpBudget();
export class QTopUpBudgetId extends QId {
    params = [new QNumberParam("Id")];
    getParams() {
        return this.params;
    }
}
export class QTopUpBudgetDetail extends QueryObject {
    Id = new QNumberPath(this.withPrefix("Id"));
    IdTopUpBudget = new QNumberPath(this.withPrefix("IdTopUpBudget"));
    IdSap = new QNumberPath(this.withPrefix("IdSap"));
    IdMasterBudget = new QNumberPath(this.withPrefix("IdMasterBudget"));
    IdPostBudget = new QNumberPath(this.withPrefix("IdPostBudget"));
    Tahun = new QNumberPath(this.withPrefix("Tahun"));
    Bulan = new QNumberPath(this.withPrefix("Bulan"));
    NilaiBudget = new QNumberPath(this.withPrefix("NilaiBudget"));
    TopUpBudget = new QEntityPath(this.withPrefix("TopUpBudget"), () => QTopUpBudget);
    PostBudget = new QEntityPath(this.withPrefix("PostBudget"), () => QPostBudget);
    BudgetSap = new QEntityPath(this.withPrefix("BudgetSap"), () => QBudgetSap);
    MasterBudget = new QEntityPath(this.withPrefix("MasterBudget"), () => QMasterBudget);
}
export const qTopUpBudgetDetail = new QTopUpBudgetDetail();
export class QTopUpBudgetDetailId extends QId {
    params = [new QNumberParam("Id")];
    getParams() {
        return this.params;
    }
}
export class QChannel extends QueryObject {
    Id = new QNumberPath(this.withPrefix("Id"));
    Nama = new QStringPath(this.withPrefix("Nama"));
    SubNama = new QStringPath(this.withPrefix("SubNama"));
    Kode = new QStringPath(this.withPrefix("Kode"));
    DibuatTanggal = new QDateTimeOffsetPath(this.withPrefix("DibuatTanggal"));
    Sort = new QNumberPath(this.withPrefix("Sort"));
    Aktif = new QBooleanPath(this.withPrefix("Aktif"));
}
export const qChannel = new QChannel();
export class QChannelId extends QId {
    params = [new QNumberParam("Id")];
    getParams() {
        return this.params;
    }
}
export class QEstimasiVSRealisasi extends QueryObject {
    Id = new QNumberPath(this.withPrefix("Id"));
    NoDokumen = new QStringPath(this.withPrefix("NoDokumen"));
    Status = new QStringPath(this.withPrefix("Status"));
    DibuatTanggal = new QDateTimeOffsetPath(this.withPrefix("DibuatTanggal"));
    BudgetAlokasiId = new QNumberPath(this.withPrefix("BudgetAlokasiId"));
    Estimasi = new QNumberPath(this.withPrefix("Estimasi"));
    Realisasi = new QNumberPath(this.withPrefix("Realisasi"));
    UserId = new QNumberPath(this.withPrefix("UserId"));
    DibuatOleh = new QStringPath(this.withPrefix("DibuatOleh"));
    CompanyId = new QNumberPath(this.withPrefix("CompanyId"));
    IdFeature = new QNumberPath(this.withPrefix("IdFeature"));
    MasterUser = new QEntityPath(this.withPrefix("MasterUser"), () => QMasterUser);
    Approval = new QEntityCollectionPath(this.withPrefix("Approval"), () => QApproval);
}
export const qEstimasiVSRealisasi = new QEstimasiVSRealisasi();
export class QEstimasiVSRealisasiId extends QId {
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
    IdTopUpBudget = new QNumberPath(this.withPrefix("IdTopUpBudget"));
    IdKurangBudget = new QNumberPath(this.withPrefix("IdKurangBudget"));
    IdEstimasiVsRealisasi = new QNumberPath(this.withPrefix("IdEstimasiVsRealisasi"));
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
export class QDTO_EstimasiVSRealisasi extends QueryObject {
    Id = new QNumberPath(this.withPrefix("Id"));
    NoDokumen = new QStringPath(this.withPrefix("NoDokumen"));
    Status = new QStringPath(this.withPrefix("Status"));
    DibuatTanggal = new QDateTimeOffsetPath(this.withPrefix("DibuatTanggal"));
    BudgetAlokasiId = new QNumberPath(this.withPrefix("BudgetAlokasiId"));
    Estimasi = new QNumberPath(this.withPrefix("Estimasi"));
    Realisasi = new QNumberPath(this.withPrefix("Realisasi"));
    UserId = new QNumberPath(this.withPrefix("UserId"));
    DibuatOleh = new QStringPath(this.withPrefix("DibuatOleh"));
    CompanyId = new QNumberPath(this.withPrefix("CompanyId"));
    IdFeature = new QNumberPath(this.withPrefix("IdFeature"));
    MasterUser = new QEntityPath(this.withPrefix("MasterUser"), () => QDTO_MasterUser);
    Approval = new QEntityCollectionPath(this.withPrefix("Approval"), () => QDTO_Approval);
}
export const qDTO_EstimasiVSRealisasi = new QDTO_EstimasiVSRealisasi();
export class QDTO_EstimasiVSRealisasiId extends QId {
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
    Sort = new QNumberPath(this.withPrefix("Sort"));
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
    NilaiTransferSumber = new QNumberPath(this.withPrefix("NilaiTransferSumber"));
    NilaiTransferTujuan = new QNumberPath(this.withPrefix("NilaiTransferTujuan"));
    NilaiFix = new QNumberPath(this.withPrefix("NilaiFix"));
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
    IdKurangBudget = new QNumberPath(this.withPrefix("IdKurangBudget"));
    NoDokumenProjectSumber = new QStringPath(this.withPrefix("NoDokumenProjectSumber"));
    IdProjectTujuan = new QNumberPath(this.withPrefix("IdProjectTujuan"));
    NoDokumenProjectTujuan = new QStringPath(this.withPrefix("NoDokumenProjectTujuan"));
    TotalTransfer = new QNumberPath(this.withPrefix("TotalTransfer"));
    Save_Transfer = new QBooleanPath(this.withPrefix("Save_Transfer"));
    Jenis = new QStringPath(this.withPrefix("Jenis"));
    Deskripsi = new QStringPath(this.withPrefix("Deskripsi"));
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
    KurangBudget = new QEntityPath(this.withPrefix("KurangBudget"), () => QDtoKurangBudget);
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
    NamaProgramSumber = new QStringPath(this.withPrefix("NamaProgramSumber"));
    NamaProgramTujuan = new QStringPath(this.withPrefix("NamaProgramTujuan"));
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
    DifferencePosBudget = new QBooleanPath(this.withPrefix("DifferencePosBudget"));
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
    CompanyId = new QNumberPath(this.withPrefix("CompanyId"));
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
    CompanyId = new QNumberPath(this.withPrefix("CompanyId"));
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
    AutoApproved = new QBooleanPath(this.withPrefix("AutoApproved"));
    IdJenisProgram = new QNumberPath(this.withPrefix("IdJenisProgram"));
    ParentId = new QNumberPath(this.withPrefix("ParentId"));
    ActivityDetail = new QStringPath(this.withPrefix("ActivityDetail"));
    CompanyName = new QStringPath(this.withPrefix("CompanyName"));
    Channel = new QStringPath(this.withPrefix("Channel"));
    ProgramBa = new QBooleanPath(this.withPrefix("ProgramBa"));
    IdDepartmen = new QNumberPath(this.withPrefix("IdDepartmen"));
    KodeDept = new QStringPath(this.withPrefix("KodeDept"));
    IdBrand = new QNumberPath(this.withPrefix("IdBrand"));
    Scope = new QStringPath(this.withPrefix("Scope"));
    Status = new QStringPath(this.withPrefix("Status"));
    IdRegion = new QNumberPath(this.withPrefix("IdRegion"));
    CompanyId = new QNumberPath(this.withPrefix("CompanyId"));
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
    Kategori = new QStringPath(this.withPrefix("Kategori"));
    SubKategori = new QStringPath(this.withPrefix("SubKategori"));
    GroupKategori = new QStringPath(this.withPrefix("GroupKategori"));
    MultiBudget = new QBooleanPath(this.withPrefix("MultiBudget"));
    Brand = new QEntityPath(this.withPrefix("Brand"), () => QDTO_Brand);
    JenisProgram = new QEntityPath(this.withPrefix("JenisProgram"), () => QDTO_JenisProgram);
    Departmen = new QEntityPath(this.withPrefix("Departmen"), () => QDTO_Departmen);
    Region = new QEntityPath(this.withPrefix("Region"), () => QDTO_Region);
    MasterOrganization = new QEntityPath(this.withPrefix("MasterOrganization"), () => QDTO_MasterOrg);
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
export class QDtoProjectList extends QueryObject {
    Id = new QNumberPath(this.withPrefix("Id"));
    NoDokumen = new QStringPath(this.withPrefix("NoDokumen"));
    ParentId = new QNumberPath(this.withPrefix("ParentId"));
    ActivityDetail = new QStringPath(this.withPrefix("ActivityDetail"));
    Channel = new QStringPath(this.withPrefix("Channel"));
    ProgramBa = new QBooleanPath(this.withPrefix("ProgramBa"));
    Scope = new QStringPath(this.withPrefix("Scope"));
    Status = new QStringPath(this.withPrefix("Status"));
    PeriodeAwal = new QDateTimeOffsetPath(this.withPrefix("PeriodeAwal"));
    PeriodeAkhir = new QDateTimeOffsetPath(this.withPrefix("PeriodeAkhir"));
    DibuatOleh = new QStringPath(this.withPrefix("DibuatOleh"));
    UserId = new QNumberPath(this.withPrefix("UserId"));
}
export const qDtoProjectList = new QDtoProjectList();
export class QDtoProjectListId extends QId {
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
    IdPostBudget = new QNumberPath(this.withPrefix("IdPostBudget"));
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
    MetodePemotongan = new QStringPath(this.withPrefix("MetodePemotongan"));
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
    IsActive = new QBooleanPath(this.withPrefix("IsActive"));
    Link = new QStringPath(this.withPrefix("Link"));
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
    CompanyId = new QNumberPath(this.withPrefix("CompanyId"));
    IsLocBudget = new QBooleanPath(this.withPrefix("IsLocBudget"));
    IdUserHana = new QNumberPath(this.withPrefix("IdUserHana"));
    NamaUserHana = new QStringPath(this.withPrefix("NamaUserHana"));
    IdUserEsw = new QNumberPath(this.withPrefix("IdUserEsw"));
    NamaUserEsw = new QStringPath(this.withPrefix("NamaUserEsw"));
    KodeDepartemen = new QStringPath(this.withPrefix("KodeDepartemen"));
    KodeUserType = new QStringPath(this.withPrefix("KodeUserType"));
    TandaTangan = new QStringPath(this.withPrefix("TandaTangan"));
    Base64Data = new QStringPath(this.withPrefix("Base64Data"));
    Nik = new QStringPath(this.withPrefix("Nik"));
    NamaLengkap = new QStringPath(this.withPrefix("NamaLengkap"));
    AllDistributor = new QBooleanPath(this.withPrefix("AllDistributor"));
    AllArea = new QBooleanPath(this.withPrefix("AllArea"));
    IsApprovalProgram = new QBooleanPath(this.withPrefix("IsApprovalProgram"));
    AllBrand = new QBooleanPath(this.withPrefix("AllBrand"));
    AllDepartmen = new QBooleanPath(this.withPrefix("AllDepartmen"));
    AllCompany = new QBooleanPath(this.withPrefix("AllCompany"));
    Role = new QEntityPath(this.withPrefix("Role"), () => QDTO_MasterRole);
    UserArea = new QEntityCollectionPath(this.withPrefix("UserArea"), () => QDTO_UserArea);
    UserDistributor = new QEntityCollectionPath(this.withPrefix("UserDistributor"), () => QDTO_UserDistributor);
    UserBrand = new QEntityCollectionPath(this.withPrefix("UserBrand"), () => QDTO_UserBrand);
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
    CompanyId = new QNumberPath(this.withPrefix("CompanyId"));
    ParentName = new QStringPath(this.withPrefix("ParentName"));
    Departmen = new QEntityPath(this.withPrefix("Departmen"), () => QDTO_Departmen);
    Coa = new QEntityPath(this.withPrefix("Coa"), () => QDTO_Coa);
    Brand = new QEntityPath(this.withPrefix("Brand"), () => QDTO_Brand);
    PostBudgetProgram = new QEntityCollectionPath(this.withPrefix("PostBudgetProgram"), () => QDTO_PostBudgetProgram);
}
export const qDTO_PostBudget = new QDTO_PostBudget();
export class QDTO_PostBudgetId extends QId {
    params = [new QNumberParam("Id")];
    getParams() {
        return this.params;
    }
}
export class QDTO_PostBudgetProgram extends QueryObject {
    Id = new QNumberPath(this.withPrefix("Id"));
    IdPostBudget = new QNumberPath(this.withPrefix("IdPostBudget"));
    IdJenisPpl = new QNumberPath(this.withPrefix("IdJenisPpl"));
}
export const qDTO_PostBudgetProgram = new QDTO_PostBudgetProgram();
export class QDTO_PostBudgetProgramId extends QId {
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
    Sort = new QNumberPath(this.withPrefix("Sort"));
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
    NilaiTopUp = new QNumberPath(this.withPrefix("NilaiTopUp"));
    NilaiTransferSumber = new QNumberPath(this.withPrefix("NilaiTransferSumber"));
    NilaiTransferTujuan = new QNumberPath(this.withPrefix("NilaiTransferTujuan"));
    DibuatTanggal = new QDateTimeOffsetPath(this.withPrefix("DibuatTanggal"));
    DieditTanggal = new QDateTimeOffsetPath(this.withPrefix("DieditTanggal"));
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
    Sort = new QNumberPath(this.withPrefix("Sort"));
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
    DeptCode = new QStringPath(this.withPrefix("DeptCode"));
    CompanyId = new QNumberPath(this.withPrefix("CompanyId"));
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
export class QDTO_TopUpBudget extends QueryObject {
    Id = new QNumberPath(this.withPrefix("Id"));
    Deskripsi = new QStringPath(this.withPrefix("Deskripsi"));
    DibuatTanggal = new QDateTimeOffsetPath(this.withPrefix("DibuatTanggal"));
    DibuatOleh = new QStringPath(this.withPrefix("DibuatOleh"));
    UserId = new QNumberPath(this.withPrefix("UserId"));
    Aktif = new QBooleanPath(this.withPrefix("Aktif"));
    BrandId = new QNumberPath(this.withPrefix("BrandId"));
    BrandOther = new QStringPath(this.withPrefix("BrandOther"));
    ChannelId = new QNumberPath(this.withPrefix("ChannelId"));
    ChannelOther = new QStringPath(this.withPrefix("ChannelOther"));
    DeptId = new QNumberPath(this.withPrefix("DeptId"));
    DeptOther = new QStringPath(this.withPrefix("DeptOther"));
    NoDokumen = new QStringPath(this.withPrefix("NoDokumen"));
    Status = new QStringPath(this.withPrefix("Status"));
    IdFeature = new QNumberPath(this.withPrefix("IdFeature"));
    TopUpBudgetDetail = new QEntityCollectionPath(this.withPrefix("TopUpBudgetDetail"), () => QDTO_TopUpBudgetDetail);
    Approval = new QEntityCollectionPath(this.withPrefix("Approval"), () => QApproval);
    Brand = new QEntityPath(this.withPrefix("Brand"), () => QDTO_Brand);
    Departmen = new QEntityPath(this.withPrefix("Departmen"), () => QDTO_Departmen);
    Channel = new QEntityPath(this.withPrefix("Channel"), () => QDTO_Channel);
}
export const qDTO_TopUpBudget = new QDTO_TopUpBudget();
export class QDTO_TopUpBudgetId extends QId {
    params = [new QNumberParam("Id")];
    getParams() {
        return this.params;
    }
}
export class QDTO_TopUpBudgetDetail extends QueryObject {
    Id = new QNumberPath(this.withPrefix("Id"));
    IdTopUpBudget = new QNumberPath(this.withPrefix("IdTopUpBudget"));
    IdPostBudget = new QNumberPath(this.withPrefix("IdPostBudget"));
    IdSap = new QNumberPath(this.withPrefix("IdSap"));
    IdMasterBudget = new QNumberPath(this.withPrefix("IdMasterBudget"));
    Tahun = new QNumberPath(this.withPrefix("Tahun"));
    Bulan = new QNumberPath(this.withPrefix("Bulan"));
    NilaiBudget = new QNumberPath(this.withPrefix("NilaiBudget"));
    PostBudget = new QEntityPath(this.withPrefix("PostBudget"), () => QDTO_PostBudget);
    BudgetSap = new QEntityPath(this.withPrefix("BudgetSap"), () => QDTO_BudgetSap);
    MasterBudget = new QEntityPath(this.withPrefix("MasterBudget"), () => QDTO_MasterBudget);
}
export const qDTO_TopUpBudgetDetail = new QDTO_TopUpBudgetDetail();
export class QDTO_TopUpBudgetDetailId extends QId {
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
export class QDTO_UserBrand extends QueryObject {
    Id = new QNumberPath(this.withPrefix("Id"));
    IdUser = new QNumberPath(this.withPrefix("IdUser"));
    Nama = new QStringPath(this.withPrefix("Nama"));
}
export const qDTO_UserBrand = new QDTO_UserBrand();
export class QDTO_UserBrandId extends QId {
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
    BudgetFinal = new QBooleanPath(this.withPrefix("BudgetFinal"));
    Status = new QStringPath(this.withPrefix("Status"));
    DibuatTanggal = new QDateTimeOffsetPath(this.withPrefix("DibuatTanggal"));
    Aktif = new QBooleanPath(this.withPrefix("Aktif"));
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
    BudgetFinal = new QBooleanPath(this.withPrefix("BudgetFinal"));
    Status = new QStringPath(this.withPrefix("Status"));
    Mark = new QStringPath(this.withPrefix("Mark"));
    DibuatTanggal = new QDateTimeOffsetPath(this.withPrefix("DibuatTanggal"));
    Aktif = new QBooleanPath(this.withPrefix("Aktif"));
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
export class QDtoHistoryTransaksiEstimasiView extends QueryObject {
    Id = new QNumberPath(this.withPrefix("Id"));
    NoDokumenPpl = new QStringPath(this.withPrefix("NoDokumenPpl"));
    IdAlokasi = new QNumberPath(this.withPrefix("IdAlokasi"));
    Tahun = new QNumberPath(this.withPrefix("Tahun"));
    Status = new QStringPath(this.withPrefix("Status"));
    PostBudgetNama = new QStringPath(this.withPrefix("PostBudgetNama"));
    CoaNama = new QStringPath(this.withPrefix("CoaNama"));
    BrandNama = new QStringPath(this.withPrefix("BrandNama"));
    NamaJenisProgram = new QStringPath(this.withPrefix("NamaJenisProgram"));
    KodeJenisProgram = new QStringPath(this.withPrefix("KodeJenisProgram"));
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
    DibuatTanggal = new QDateTimeOffsetPath(this.withPrefix("DibuatTanggal"));
}
export const qDtoHistoryTransaksiEstimasiView = new QDtoHistoryTransaksiEstimasiView();
export class QDtoHistoryTransaksiEstimasiViewId extends QId {
    params = [new QNumberParam("Id")];
    getParams() {
        return this.params;
    }
}
export class QDtoHistoryTransaksiRealiasasiView extends QueryObject {
    Id = new QNumberPath(this.withPrefix("Id"));
    NoDokumenPpl = new QStringPath(this.withPrefix("NoDokumenPpl"));
    IdAlokasi = new QNumberPath(this.withPrefix("IdAlokasi"));
    Tahun = new QNumberPath(this.withPrefix("Tahun"));
    Status = new QStringPath(this.withPrefix("Status"));
    PostBudgetNama = new QStringPath(this.withPrefix("PostBudgetNama"));
    CoaNama = new QStringPath(this.withPrefix("CoaNama"));
    BrandNama = new QStringPath(this.withPrefix("BrandNama"));
    NamaJenisProgram = new QStringPath(this.withPrefix("NamaJenisProgram"));
    KodeJenisProgram = new QStringPath(this.withPrefix("KodeJenisProgram"));
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
    DibuatTanggal = new QDateTimeOffsetPath(this.withPrefix("DibuatTanggal"));
}
export const qDtoHistoryTransaksiRealiasasiView = new QDtoHistoryTransaksiRealiasasiView();
export class QDtoHistoryTransaksiRealiasasiViewId extends QId {
    params = [new QNumberParam("Id")];
    getParams() {
        return this.params;
    }
}
export class QDtoMasterProduk extends QueryObject {
    Id = new QNumberPath(this.withPrefix("Id"));
    KodeProduk = new QStringPath(this.withPrefix("KodeProduk"));
    NamaProduk = new QStringPath(this.withPrefix("NamaProduk"));
    Brand = new QStringPath(this.withPrefix("Brand"));
    Kategori = new QStringPath(this.withPrefix("Kategori"));
    SubKategori = new QStringPath(this.withPrefix("SubKategori"));
    GroupKategori = new QStringPath(this.withPrefix("GroupKategori"));
}
export const qDtoMasterProduk = new QDtoMasterProduk();
export class QDtoMasterProdukId extends QId {
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
export class QSTATUS_ENUM extends QueryObject {
}
export const qSTATUS_ENUM = new QSTATUS_ENUM();
