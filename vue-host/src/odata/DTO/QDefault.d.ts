import { QNumberPath, QStringPath, QBooleanPath, QDateTimeOffsetPath, QEntityPath, QEntityCollectionPath, QueryObject, QId, QCollectionPath, QNumberCollection, QEnumPath } from "@odata2ts/odata-query-objects";
import type { DTO_BudgetAlokasiId, DTO_BudgetAlokasiListId, DTO_BudgetLedgerId, DTO_BudgetAlokasiRemainingId, DTO_BudgetId, DTO_MasterBudgetsId, DTO_PostBudgetListId, DTO_BudgetDetailId, DTO_BudgetsId, DTO_TopUpDetailId, DTO_ReportProgramId, DtoHistoryBudgetId, DtoProgramTransferId, DtoKurangBudgetDetailsId, DtoBudgetSapViewId, DTO_BudgetMasterHistoryId, DtoKurangBudgetId, DtoKurangBudgetDetailId, DTO_PPLHId, DTO_PPLDId, DTO_RETURId, DTO_RETURDId, DTO_RETURPId, DTO_UserTypeId, MasterRoleId, MasterOrganizationId, MasterJobPositionId, MasterJobLevelId, PermissionRefId, MasterPermissionId, AuthorId, BookId, ApprovalId, FeatureId, StepApprovalId, ApprovalConfigConditionId, ApprovalConfigId, HeaderProjekId, JenisProgramId, KategoriPplId, JenisPplId, KodeKlaimsId, MasterKlaimId, MasterKlaimSyaratId, RegionId, AreaId, DistributorId, BrandId, PostBudgetId, CoaId, DepartmenId, PostBudgetProgramId, BudgetAlokasiId, SkenarioBudgetId, BudgetAlokasiDetailId, MasterBudgetId, BudgetSapId, HeaderProjekBrandId, HeaderProjekDepartemenId, PengajuanFormId, PengajuanFormOutletId, OutletId, OutletGroupId, PengajuanFormAttachmentId, PengajuanFormProdukId, PengajuanFormDetailId, BudgetTransferId, BudgetTransferDetailId, KurangBudgetId, KurangBudgetDetailId, MasterUserId, UserDistributorId, UserAreaId, UsersAttachmentId, UserBrandId, TopUpBudgetId, TopUpBudgetDetailId, ChannelId, EstimasiVSRealisasiId, DTO_FeatureId, DTO_ApprovalConfigId, DTO_ApprovalId, DTO_EstimasiVSRealisasiId, DTO_ApprovalConfigConditionId, DTO_StepApprovalId, DTO_AreaId, DTO_BookWithAuthorsId, DTO_BrandId, DTO_BudgetAlokasiDetailId, DTO_BudgetTopUpId, DTO_BudgetTopUpDetailId, DTO_BudgetTransferId, DTO_BudgetTransferDetailId, DTO_CoaId, DTO_DepartmenId, DTO_DistributorId, DTO_EmailTemplateId, DTO_EstimasiHargaBrandingId, DTO_EstimasiHargaBrandingListId, DTO_HeaderPplId, DTO_HeaderPplListId, DTO_HeaderProjekId, DTO_HeaderProjekListId, DtoProjectListId, DTO_HeaderProjekBrandId, DTO_HeaderProjekDepartemenId, DTO_JenisPplId, DTO_KodeKlaimsId, DTO_JenisPplListId, DTO_JenisProgramId, DTO_JurnalLedgerId, DTO_KategoriPplId, DTO_MasterAccountId, DTO_MasterJabatanId, DTO_MasterKaryawanId, DTO_MasterKlaimId, DTO_MasterKlaimSyaratId, DTO_MasterOrgId, DTO_MasterJobPosId, DTO_MasterJobLvlId, DTO_MasterPermId, DTO_MasterRoleId, DTO_PermissionRefId, DTO_MasterUserId, DTO_UsersAttachmentId, DTO_MasterProvinsiId, DTO_MasterKotaId, DTO_MasterKecamatanId, DTO_MasterKelurahanId, DTO_OITMId, DTO_OutletId, DTO_OutletGroupId, DTO_PengajuanFormId, DTO_PengajuanFormOutletId, DTO_PengajuanFormAttachmentId, DTO_PengajuanFormProdukId, DTO_PengajuanFormDetailId, DTO_PostBudgetId, DTO_PostBudgetProgramId, DTO_ChannelId, DTO_BudgetSapId, DTO_MasterBudgetId, DTO_PplAreaId, DTO_PplAttachmentId, DTO_PplBudgetAlokasiId, DTO_PplDetailProdukId, DTO_PplDetailsId, DTO_PplOutletId, DTO_ProdukId, DTO_ProdukCategoriId, DTO_ProvinsiId, DTO_KotaId, DTO_KecamatanId, DTO_KelurahanId, DTO_RegionId, DTO_ResiId, DTO_ResiOutletId, DTO_SalesId, DTO_SalesmanId, DTO_SettingsId, DTO_SkenarioBudgetId, DTO_SkenarioBudgetListId, DTO_TopUpBudgetId, DTO_TopUpBudgetDetailId, DTO_MasterKeyVisualId, DTO_MasterOrgSlimId, DTO_UserAreaId, DTO_UserDistributorId, DTO_UserBrandId, DTO_ResiDetailProdukId, DTO_ResiPicId, DTO_ResiAttachmentId, DtoHistoryTransaksiEstimasiId, DtoHistoryTransaksiRealiasasiId, DtoHistoryTransaksiEstimasiViewId, DtoHistoryTransaksiRealiasasiViewId, DtoMasterProdukId } from "./DefaultModel";
import { RoleTypeEnum, CompanyStatusType } from "./DefaultModel";
export declare class QDTO_BudgetAlokasi extends QueryObject {
    readonly Id: QNumberPath<number>;
    readonly IdHeaderProjek: QNumberPath<number>;
    readonly IdPostBudget: QNumberPath<number>;
    readonly IdJenisPpl: QNumberPath<number>;
    readonly MetodePembagian: QStringPath<string>;
    readonly KodeDept: QStringPath<string>;
    readonly NamaActivity: QStringPath<string>;
    readonly NamaActivity1: QStringPath<string>;
    readonly NamaActivity2: QStringPath<string>;
    readonly NilaiBudget: QNumberPath<number>;
    readonly SisaNilaiBudget: QNumberPath<number>;
    readonly IdSkenario: QNumberPath<number>;
    readonly Aktif: QBooleanPath<boolean>;
    readonly AutoGenerate: QBooleanPath<boolean>;
    readonly Tahun: QNumberPath<number>;
    readonly DibuatTanggal: QDateTimeOffsetPath<string>;
    readonly PostBudget: QEntityPath<QDTO_PostBudget>;
    readonly SkenarioBudget: QEntityPath<QDTO_SkenarioBudget>;
    readonly JenisPpl: QEntityPath<QDTO_JenisPpl>;
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
    readonly NilaiTransferSumber: QNumberPath<number>;
    readonly NilaiTransferTujuan: QNumberPath<number>;
    readonly NilaiFix: QNumberPath<number>;
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
    readonly CompanyName: QStringPath<string>;
    readonly CompanyId: QNumberPath<number>;
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
    readonly Jan_sisa: QNumberPath<number>;
    readonly Feb_sisa: QNumberPath<number>;
    readonly Mar_sisa: QNumberPath<number>;
    readonly Apr_sisa: QNumberPath<number>;
    readonly Mei_sisa: QNumberPath<number>;
    readonly Jun_sisa: QNumberPath<number>;
    readonly Jul_sisa: QNumberPath<number>;
    readonly Agt_sisa: QNumberPath<number>;
    readonly Sep_sisa: QNumberPath<number>;
    readonly Okt_sisa: QNumberPath<number>;
    readonly Nov_sisa: QNumberPath<number>;
    readonly Des_sisa: QNumberPath<number>;
    readonly TotalSisa: QNumberPath<number>;
    readonly Details: QEntityCollectionPath<QDTO_BudgetDetail>;
    readonly PostBudgetList: QEntityCollectionPath<QDTO_PostBudgetList>;
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
    readonly DeptNama: QStringPath<string>;
    readonly DeptKode: QStringPath<string>;
    readonly Kategori: QStringPath<string>;
    readonly Channel: QStringPath<string>;
    readonly BrandNama: QStringPath<string>;
    readonly CoaNama: QStringPath<string>;
    readonly CoaKode: QStringPath<string>;
    readonly ParentNama: QStringPath<string>;
    readonly IdBrand: QNumberPath<number>;
    readonly CoaId: QNumberPath<number>;
    readonly CompanyId: QNumberPath<number>;
    readonly CompanyName: QStringPath<string>;
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
    readonly Bulan_1_topup: QNumberPath<number>;
    readonly Bulan_2_topup: QNumberPath<number>;
    readonly Bulan_3_topup: QNumberPath<number>;
    readonly Bulan_4_topup: QNumberPath<number>;
    readonly Bulan_5_topup: QNumberPath<number>;
    readonly Bulan_6_topup: QNumberPath<number>;
    readonly Bulan_7_topup: QNumberPath<number>;
    readonly Bulan_8_topup: QNumberPath<number>;
    readonly Bulan_9_topup: QNumberPath<number>;
    readonly Bulan_10_topup: QNumberPath<number>;
    readonly Bulan_11_topup: QNumberPath<number>;
    readonly Bulan_12_topup: QNumberPath<number>;
    readonly TotalTopup: QNumberPath<number>;
    readonly Bulan_1_transfer: QNumberPath<number>;
    readonly Bulan_2_transfer: QNumberPath<number>;
    readonly Bulan_3_transfer: QNumberPath<number>;
    readonly Bulan_4_transfer: QNumberPath<number>;
    readonly Bulan_5_transfer: QNumberPath<number>;
    readonly Bulan_6_transfer: QNumberPath<number>;
    readonly Bulan_7_transfer: QNumberPath<number>;
    readonly Bulan_8_transfer: QNumberPath<number>;
    readonly Bulan_9_transfer: QNumberPath<number>;
    readonly Bulan_10_transfer: QNumberPath<number>;
    readonly Bulan_11_transfer: QNumberPath<number>;
    readonly Bulan_12_transfer: QNumberPath<number>;
    readonly TotalTransfer: QNumberPath<number>;
    readonly Bulan_1_program: QNumberPath<number>;
    readonly Bulan_2_program: QNumberPath<number>;
    readonly Bulan_3_program: QNumberPath<number>;
    readonly Bulan_4_program: QNumberPath<number>;
    readonly Bulan_5_program: QNumberPath<number>;
    readonly Bulan_6_program: QNumberPath<number>;
    readonly Bulan_7_program: QNumberPath<number>;
    readonly Bulan_8_program: QNumberPath<number>;
    readonly Bulan_9_program: QNumberPath<number>;
    readonly Bulan_10_program: QNumberPath<number>;
    readonly Bulan_11_program: QNumberPath<number>;
    readonly Bulan_12_program: QNumberPath<number>;
    readonly TotalBudgetProgram: QNumberPath<number>;
    readonly Bulan_1_program_sisa: QNumberPath<number>;
    readonly Bulan_2_program_sisa: QNumberPath<number>;
    readonly Bulan_3_program_sisa: QNumberPath<number>;
    readonly Bulan_4_program_sisa: QNumberPath<number>;
    readonly Bulan_5_program_sisa: QNumberPath<number>;
    readonly Bulan_6_program_sisa: QNumberPath<number>;
    readonly Bulan_7_program_sisa: QNumberPath<number>;
    readonly Bulan_8_program_sisa: QNumberPath<number>;
    readonly Bulan_9_program_sisa: QNumberPath<number>;
    readonly Bulan_10_program_sisa: QNumberPath<number>;
    readonly Bulan_11_program_sisa: QNumberPath<number>;
    readonly Bulan_12_program_sisa: QNumberPath<number>;
    readonly TotalBudgetProgramSisa: QNumberPath<number>;
    readonly Bulan_1_estimasi: QNumberPath<number>;
    readonly Bulan_2_estimasi: QNumberPath<number>;
    readonly Bulan_3_estimasi: QNumberPath<number>;
    readonly Bulan_4_estimasi: QNumberPath<number>;
    readonly Bulan_5_estimasi: QNumberPath<number>;
    readonly Bulan_6_estimasi: QNumberPath<number>;
    readonly Bulan_7_estimasi: QNumberPath<number>;
    readonly Bulan_8_estimasi: QNumberPath<number>;
    readonly Bulan_9_estimasi: QNumberPath<number>;
    readonly Bulan_10_estimasi: QNumberPath<number>;
    readonly Bulan_11_estimasi: QNumberPath<number>;
    readonly Bulan_12_estimasi: QNumberPath<number>;
    readonly TotalEstimasi: QNumberPath<number>;
    readonly Bulan_1_realisasi: QNumberPath<number>;
    readonly Bulan_2_realisasi: QNumberPath<number>;
    readonly Bulan_3_realisasi: QNumberPath<number>;
    readonly Bulan_4_realisasi: QNumberPath<number>;
    readonly Bulan_5_realisasi: QNumberPath<number>;
    readonly Bulan_6_realisasi: QNumberPath<number>;
    readonly Bulan_7_realisasi: QNumberPath<number>;
    readonly Bulan_8_realisasi: QNumberPath<number>;
    readonly Bulan_9_realisasi: QNumberPath<number>;
    readonly Bulan_10_realisasi: QNumberPath<number>;
    readonly Bulan_11_realisasi: QNumberPath<number>;
    readonly Bulan_12_realisasi: QNumberPath<number>;
    readonly TotalRealisasi: QNumberPath<number>;
    readonly Bulan_1_sisa: QNumberPath<number>;
    readonly Bulan_2_sisa: QNumberPath<number>;
    readonly Bulan_3_sisa: QNumberPath<number>;
    readonly Bulan_4_sisa: QNumberPath<number>;
    readonly Bulan_5_sisa: QNumberPath<number>;
    readonly Bulan_6_sisa: QNumberPath<number>;
    readonly Bulan_7_sisa: QNumberPath<number>;
    readonly Bulan_8_sisa: QNumberPath<number>;
    readonly Bulan_9_sisa: QNumberPath<number>;
    readonly Bulan_10_sisa: QNumberPath<number>;
    readonly Bulan_11_sisa: QNumberPath<number>;
    readonly Bulan_12_sisa: QNumberPath<number>;
    readonly TotalBudgetSisa: QNumberPath<number>;
    readonly IsLocked: QBooleanPath<boolean>;
    readonly UserId: QNumberPath<number>;
    readonly DibuatTanggal: QDateTimeOffsetPath<string>;
    readonly DibuatOleh: QStringPath<string>;
    readonly MasterBudgetIds: QStringPath<string>;
    readonly JenisPplIds: QStringPath<string>;
    readonly MasterBudgetIdList: QCollectionPath<QNumberCollection<any>>;
    readonly JenisPplIdList: QCollectionPath<QNumberCollection<any>>;
}
export declare const qDTO_MasterBudgets: QDTO_MasterBudgets;
export declare class QDTO_MasterBudgetsId extends QId<DTO_MasterBudgetsId> {
    private readonly params;
    getParams(): {};
}
export declare class QDTO_PostBudgetList extends QueryObject {
    readonly Id: QNumberPath<number>;
    readonly Year: QNumberPath<number>;
    readonly Kode: QStringPath<string>;
    readonly CoaNama: QStringPath<string>;
    readonly IdPostBudget: QNumberPath<number>;
    readonly CompanyId: QNumberPath<number>;
    readonly CompanyName: QStringPath<string>;
    readonly NamaPostBudget: QStringPath<string>;
    readonly Channel: QStringPath<string>;
    readonly NamaParent: QStringPath<string>;
    readonly BrandNama: QStringPath<string>;
    readonly NamaBudget: QStringPath<string>;
    readonly DeptKode: QStringPath<string>;
    readonly DeptNama: QStringPath<string>;
    readonly Kategori: QStringPath<string>;
    readonly IdBrand: QNumberPath<number>;
    readonly Bulans: QStringPath<string>;
    readonly BudgetSapIds: QStringPath<string>;
    readonly MasterBudgetIds: QStringPath<string>;
    readonly IsLockeds: QStringPath<string>;
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
}
export declare const qDTO_PostBudgetList: QDTO_PostBudgetList;
export declare class QDTO_PostBudgetListId extends QId<DTO_PostBudgetListId> {
    private readonly params;
    getParams(): {};
}
export declare class QDTO_BudgetDetail extends QueryObject {
    readonly IdBudgetSap: QNumberPath<number>;
    readonly IdBrand: QNumberPath<number>;
    readonly YEAR: QNumberPath<number>;
    readonly Bulan: QNumberPath<number>;
    readonly IdCoa: QNumberPath<number>;
    readonly Kode: QStringPath<string>;
    readonly CoaNama: QStringPath<string>;
    readonly NamaPostBudget: QStringPath<string>;
    readonly BrandNama: QStringPath<string>;
    readonly CompanyName: QStringPath<string>;
    readonly CompanyId: QNumberPath<number>;
    readonly NamaBudget: QStringPath<string>;
    readonly NamaParent: QStringPath<string>;
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
    readonly BudgetMasterBudgetSisa: QNumberPath<number>;
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
export declare class QDTO_TopUpDetail extends QueryObject {
    readonly Id: QNumberPath<number>;
    readonly Tahun: QNumberPath<number>;
    readonly Nama: QStringPath<string>;
    readonly Kategori: QStringPath<string>;
    readonly Channel: QStringPath<string>;
    readonly CoaNama: QStringPath<string>;
    readonly BrandNama: QStringPath<string>;
    readonly IdTopUpBudget: QNumberPath<number>;
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
}
export declare const qDTO_TopUpDetail: QDTO_TopUpDetail;
export declare class QDTO_TopUpDetailId extends QId<DTO_TopUpDetailId> {
    private readonly params;
    getParams(): {};
}
export declare class QDTO_ReportProgram extends QueryObject {
    readonly Id: QNumberPath<number>;
    readonly Year: QNumberPath<number>;
    readonly DeptId: QNumberPath<number>;
    readonly CompanyId: QNumberPath<number>;
    readonly DeptKode: QStringPath<string>;
    readonly DeptNama: QStringPath<string>;
    readonly IdJenisPpl: QNumberPath<number>;
    readonly NamaActivity: QStringPath<string>;
    readonly NamaActivity1: QStringPath<string>;
    readonly NamaActivity2: QStringPath<string>;
    readonly IdBudgetAlokasi: QStringPath<string>;
    readonly IdBrand: QNumberPath<number>;
    readonly NamaBrand: QStringPath<string>;
    readonly IdPostBudget: QNumberPath<number>;
    readonly NamaPostBudget: QStringPath<string>;
    readonly Kategori: QStringPath<string>;
    readonly KodePostBudget: QStringPath<string>;
    readonly Channel: QStringPath<string>;
    readonly PostBulan1: QNumberPath<number>;
    readonly TransferBulan1: QNumberPath<number>;
    readonly EstimasiBulan1: QNumberPath<number>;
    readonly RealisasiBulan1: QNumberPath<number>;
    readonly RemainingBulan1: QNumberPath<number>;
    readonly PostBulan2: QNumberPath<number>;
    readonly TransferBulan2: QNumberPath<number>;
    readonly EstimasiBulan2: QNumberPath<number>;
    readonly RealisasiBulan2: QNumberPath<number>;
    readonly RemainingBulan2: QNumberPath<number>;
    readonly PostBulan3: QNumberPath<number>;
    readonly TransferBulan3: QNumberPath<number>;
    readonly EstimasiBulan3: QNumberPath<number>;
    readonly RealisasiBulan3: QNumberPath<number>;
    readonly RemainingBulan3: QNumberPath<number>;
    readonly PostBulan4: QNumberPath<number>;
    readonly TransferBulan4: QNumberPath<number>;
    readonly EstimasiBulan4: QNumberPath<number>;
    readonly RealisasiBulan4: QNumberPath<number>;
    readonly RemainingBulan4: QNumberPath<number>;
    readonly PostBulan5: QNumberPath<number>;
    readonly TransferBulan5: QNumberPath<number>;
    readonly EstimasiBulan5: QNumberPath<number>;
    readonly RealisasiBulan5: QNumberPath<number>;
    readonly RemainingBulan5: QNumberPath<number>;
    readonly PostBulan6: QNumberPath<number>;
    readonly TransferBulan6: QNumberPath<number>;
    readonly EstimasiBulan6: QNumberPath<number>;
    readonly RealisasiBulan6: QNumberPath<number>;
    readonly RemainingBulan6: QNumberPath<number>;
    readonly PostBulan7: QNumberPath<number>;
    readonly TransferBulan7: QNumberPath<number>;
    readonly EstimasiBulan7: QNumberPath<number>;
    readonly RealisasiBulan7: QNumberPath<number>;
    readonly RemainingBulan7: QNumberPath<number>;
    readonly PostBulan8: QNumberPath<number>;
    readonly TransferBulan8: QNumberPath<number>;
    readonly EstimasiBulan8: QNumberPath<number>;
    readonly RealisasiBulan8: QNumberPath<number>;
    readonly RemainingBulan8: QNumberPath<number>;
    readonly PostBulan9: QNumberPath<number>;
    readonly TransferBulan9: QNumberPath<number>;
    readonly EstimasiBulan9: QNumberPath<number>;
    readonly RealisasiBulan9: QNumberPath<number>;
    readonly RemainingBulan9: QNumberPath<number>;
    readonly PostBulan10: QNumberPath<number>;
    readonly TransferBulan10: QNumberPath<number>;
    readonly EstimasiBulan10: QNumberPath<number>;
    readonly RealisasiBulan10: QNumberPath<number>;
    readonly RemainingBulan10: QNumberPath<number>;
    readonly PostBulan11: QNumberPath<number>;
    readonly TransferBulan11: QNumberPath<number>;
    readonly EstimasiBulan11: QNumberPath<number>;
    readonly RealisasiBulan11: QNumberPath<number>;
    readonly RemainingBulan11: QNumberPath<number>;
    readonly PostBulan12: QNumberPath<number>;
    readonly TransferBulan12: QNumberPath<number>;
    readonly EstimasiBulan12: QNumberPath<number>;
    readonly RealisasiBulan12: QNumberPath<number>;
    readonly RemainingBulan12: QNumberPath<number>;
    readonly TotalPost: QNumberPath<number>;
    readonly TotalTransfer: QNumberPath<number>;
    readonly TotalEstimasi: QNumberPath<number>;
    readonly TotalRealisasi: QNumberPath<number>;
    readonly TotalRemaining: QNumberPath<number>;
    readonly PostQ1: QNumberPath<number>;
    readonly RemainingQ1: QNumberPath<number>;
    readonly PostQ2: QNumberPath<number>;
    readonly RemainingQ2: QNumberPath<number>;
    readonly PostQ3: QNumberPath<number>;
    readonly RemainingQ3: QNumberPath<number>;
    readonly PostQ4: QNumberPath<number>;
    readonly RemainingQ4: QNumberPath<number>;
}
export declare const qDTO_ReportProgram: QDTO_ReportProgram;
export declare class QDTO_ReportProgramId extends QId<DTO_ReportProgramId> {
    private readonly params;
    getParams(): {};
}
export declare class QDtoHistoryBudget extends QueryObject {
    readonly Id: QNumberPath<number>;
    readonly Jenis: QStringPath<string>;
    readonly DibuatTanggal: QDateTimeOffsetPath<string>;
    readonly YEAR: QNumberPath<number>;
    readonly KodeCoa: QStringPath<string>;
    readonly CoaNama: QStringPath<string>;
    readonly IdPostBudget: QNumberPath<number>;
    readonly CompanyId: QNumberPath<number>;
    readonly BudgetFinal: QBooleanPath<boolean>;
    readonly IdBudgetAlokasi: QNumberPath<number>;
    readonly Status: QStringPath<string>;
    readonly NamaActivity: QStringPath<string>;
    readonly NamaActivity1: QStringPath<string>;
    readonly NamaActivity2: QStringPath<string>;
    readonly NamaPostBudget: QStringPath<string>;
    readonly Channel: QStringPath<string>;
    readonly NamaParent: QStringPath<string>;
    readonly BrandNama: QStringPath<string>;
    readonly BrandId: QNumberPath<number>;
    readonly DeptKode: QStringPath<string>;
    readonly DeptNama: QStringPath<string>;
    readonly Kategori: QStringPath<string>;
    readonly ProgramNama: QStringPath<string>;
    readonly NoDokumen: QStringPath<string>;
    readonly NoDokumenProgram: QStringPath<string>;
    readonly LinkDokumen: QStringPath<string>;
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
}
export declare const qDtoHistoryBudget: QDtoHistoryBudget;
export declare class QDtoHistoryBudgetId extends QId<DtoHistoryBudgetId> {
    private readonly params;
    getParams(): {};
}
export declare class QDtoProgramTransfer extends QueryObject {
    readonly Id: QNumberPath<number>;
    readonly NoDokumen: QStringPath<string>;
    readonly Year: QNumberPath<number>;
    readonly Status: QStringPath<string>;
    readonly IdBudgetAlokasi: QNumberPath<number>;
    readonly Program: QStringPath<string>;
    readonly BrandNama: QStringPath<string>;
    readonly BrandId: QNumberPath<number>;
    readonly CompanyId: QNumberPath<number>;
    readonly CompanyName: QStringPath<string>;
    readonly PostBudgetNama: QStringPath<string>;
    readonly Kategori: QStringPath<string>;
    readonly Channel: QStringPath<string>;
    readonly DeptKode: QStringPath<string>;
    readonly IdPostBudget: QNumberPath<number>;
    readonly NamaParent: QStringPath<string>;
    readonly BudgetAlokasiDetailIds: QStringPath<string>;
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
}
export declare const qDtoProgramTransfer: QDtoProgramTransfer;
export declare class QDtoProgramTransferId extends QId<DtoProgramTransferId> {
    private readonly params;
    getParams(): {};
}
export declare class QDtoKurangBudgetDetails extends QueryObject {
    readonly Id: QNumberPath<number>;
    readonly IdKurangBudget: QNumberPath<number>;
    readonly NamaActivity: QStringPath<string>;
    readonly IdJenisPpl: QNumberPath<number>;
    readonly IdPostBudget: QNumberPath<number>;
    readonly NamaPostBudget: QStringPath<string>;
    readonly NamaBrand: QStringPath<string>;
    readonly IdAlokasi: QNumberPath<number>;
    readonly IdAlokasiBudgetDetail: QNumberPath<number>;
    readonly Bulan: QNumberPath<number>;
    readonly IdDetailPembayaran: QNumberPath<number>;
    readonly NoDokumenPpl: QStringPath<string>;
    readonly TotalKurangBudget: QNumberPath<number>;
}
export declare const qDtoKurangBudgetDetails: QDtoKurangBudgetDetails;
export declare class QDtoKurangBudgetDetailsId extends QId<DtoKurangBudgetDetailsId> {
    private readonly params;
    getParams(): {};
}
export declare class QDtoBudgetSapView extends QueryObject {
    readonly Id: QStringPath<string>;
    readonly Year: QNumberPath<number>;
    readonly CoaKode: QStringPath<string>;
    readonly CoaNama: QStringPath<string>;
    readonly CoaId: QNumberPath<number>;
    readonly DeptKode: QStringPath<string>;
    readonly DeptNama: QStringPath<string>;
    readonly NamaBrand: QStringPath<string>;
    readonly NamaBudget: QStringPath<string>;
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
    readonly Total: QNumberPath<number>;
    readonly Bulan_1_sisa: QNumberPath<number>;
    readonly Bulan_2_sisa: QNumberPath<number>;
    readonly Bulan_3_sisa: QNumberPath<number>;
    readonly Bulan_4_sisa: QNumberPath<number>;
    readonly Bulan_5_sisa: QNumberPath<number>;
    readonly Bulan_6_sisa: QNumberPath<number>;
    readonly Bulan_7_sisa: QNumberPath<number>;
    readonly Bulan_8_sisa: QNumberPath<number>;
    readonly Bulan_9_sisa: QNumberPath<number>;
    readonly Bulan_10_sisa: QNumberPath<number>;
    readonly Bulan_11_sisa: QNumberPath<number>;
    readonly Bulan_12_sisa: QNumberPath<number>;
    readonly TotalSisa: QNumberPath<number>;
}
export declare const qDtoBudgetSapView: QDtoBudgetSapView;
export declare class QDtoBudgetSapViewId extends QId<DtoBudgetSapViewId> {
    private readonly params;
    getParams(): {};
}
export declare class QDTO_BudgetMasterHistory extends QueryObject {
    readonly Id: QNumberPath<number>;
    readonly NamaBrand: QStringPath<string>;
    readonly NoDokumen: QStringPath<string>;
    readonly Status: QStringPath<string>;
    readonly ActivityDetail: QStringPath<string>;
    readonly JenisAlokasi: QStringPath<string>;
    readonly PeriodeAwal: QDateTimeOffsetPath<string>;
    readonly PeriodeAkhir: QDateTimeOffsetPath<string>;
    readonly Scope: QStringPath<string>;
    readonly IdPostBudget: QNumberPath<number>;
    readonly IdHeaderProject: QNumberPath<number>;
    readonly IdBrand: QNumberPath<number>;
    readonly NamaPostBudget: QStringPath<string>;
    readonly Kategori: QStringPath<string>;
    readonly KodePostBudget: QStringPath<string>;
    readonly Channel: QStringPath<string>;
    readonly NamaDepartmen: QStringPath<string>;
    readonly NamaCoa: QStringPath<string>;
    readonly KodeCoa: QStringPath<string>;
    readonly Tahun: QNumberPath<number>;
    readonly KodeDept: QStringPath<string>;
    readonly NamaActivity: QStringPath<string>;
    readonly NamaActivity1: QStringPath<string>;
    readonly NamaActivity2: QStringPath<string>;
    readonly MasterBudgetIds: QStringPath<string>;
    readonly BudgetBulan1: QNumberPath<number>;
    readonly BudgetBulan2: QNumberPath<number>;
    readonly BudgetBulan3: QNumberPath<number>;
    readonly BudgetBulan4: QNumberPath<number>;
    readonly BudgetBulan5: QNumberPath<number>;
    readonly BudgetBulan6: QNumberPath<number>;
    readonly BudgetBulan7: QNumberPath<number>;
    readonly BudgetBulan8: QNumberPath<number>;
    readonly BudgetBulan9: QNumberPath<number>;
    readonly BudgetBulan10: QNumberPath<number>;
    readonly BudgetBulan11: QNumberPath<number>;
    readonly BudgetBulan12: QNumberPath<number>;
    readonly SisaBudgetBulan1: QNumberPath<number>;
    readonly SisaBudgetBulan2: QNumberPath<number>;
    readonly SisaBudgetBulan3: QNumberPath<number>;
    readonly SisaBudgetBulan4: QNumberPath<number>;
    readonly SisaBudgetBulan5: QNumberPath<number>;
    readonly SisaBudgetBulan6: QNumberPath<number>;
    readonly SisaBudgetBulan7: QNumberPath<number>;
    readonly SisaBudgetBulan8: QNumberPath<number>;
    readonly SisaBudgetBulan9: QNumberPath<number>;
    readonly SisaBudgetBulan10: QNumberPath<number>;
    readonly SisaBudgetBulan11: QNumberPath<number>;
    readonly SisaBudgetBulan12: QNumberPath<number>;
}
export declare const qDTO_BudgetMasterHistory: QDTO_BudgetMasterHistory;
export declare class QDTO_BudgetMasterHistoryId extends QId<DTO_BudgetMasterHistoryId> {
    private readonly params;
    getParams(): {};
}
export declare class QDtoKurangBudget extends QueryObject {
    readonly Id: QNumberPath<number>;
    readonly Status: QStringPath<string>;
    readonly NoDokumen: QStringPath<string>;
    readonly Aktif: QBooleanPath<boolean>;
    readonly DibuatTanggal: QDateTimeOffsetPath<string>;
    readonly NamaPembuat: QStringPath<string>;
    readonly EmailPembuat: QStringPath<string>;
    readonly Type: QStringPath<string>;
    readonly IdFeature: QNumberPath<number>;
    readonly NomorPembayaran: QStringPath<string>;
    readonly PemilikBudget: QNumberPath<number>;
    readonly Year: QNumberPath<number>;
    readonly IdBudgetTransfer: QNumberPath<number>;
    readonly NoDokumenTransfer: QStringPath<string>;
    readonly MasterUser: QEntityPath<QDTO_MasterUser>;
    readonly Approval: QEntityCollectionPath<QDTO_Approval>;
    readonly KurangBudgetDetail: QEntityCollectionPath<QDtoKurangBudgetDetail>;
}
export declare const qDtoKurangBudget: QDtoKurangBudget;
export declare class QDtoKurangBudgetId extends QId<DtoKurangBudgetId> {
    private readonly params;
    getParams(): {};
}
export declare class QDtoKurangBudgetDetail extends QueryObject {
    readonly Id: QNumberPath<number>;
    readonly IdKurangBudget: QNumberPath<number>;
    readonly IdAlokasi: QNumberPath<number>;
    readonly NoDokumenPpl: QStringPath<string>;
    readonly Bulan: QNumberPath<number>;
    readonly Nilai: QNumberPath<number>;
    readonly IdDetailPembayaran: QNumberPath<number>;
    readonly BudgetAlokasi: QEntityPath<QDTO_BudgetAlokasi>;
}
export declare const qDtoKurangBudgetDetail: QDtoKurangBudgetDetail;
export declare class QDtoKurangBudgetDetailId extends QId<DtoKurangBudgetDetailId> {
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
    readonly Link: QStringPath<string>;
    readonly IsActive: QBooleanPath<boolean>;
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
export declare class QApproval extends QueryObject {
    readonly Id: QNumberPath<number>;
    readonly IdFeature: QNumberPath<number>;
    readonly IdDokumen: QNumberPath<number>;
    readonly IdDokumenPengajuanForm: QNumberPath<number>;
    readonly IdTopUpBudget: QNumberPath<number>;
    readonly IdKurangBudget: QNumberPath<number>;
    readonly IdEstimasiVsRealisasi: QNumberPath<number>;
    readonly IdDokumenTransferBudget: QNumberPath<number>;
    readonly Step: QNumberPath<number>;
    readonly NoDokumen: QStringPath<string>;
    readonly StepId: QNumberPath<number>;
    readonly IdRole: QNumberPath<number>;
    readonly UserId: QEntityPath<QUserDto>;
    readonly SubUserId: QEntityPath<QUserDto>;
    readonly ApprovalBy: QNumberPath<number>;
    readonly Progress: QNumberPath<number>;
    readonly ActionType: QStringPath<string>;
    readonly Aktif: QBooleanPath<boolean>;
    readonly Status: QStringPath<string>;
    readonly Deskripsi: QStringPath<string>;
    readonly DibuatTanggal: QDateTimeOffsetPath<string>;
    readonly Feature: QEntityPath<QFeature>;
    readonly StepApproval: QEntityPath<QStepApproval>;
    readonly MasterRole: QEntityPath<QMasterRole>;
    readonly HeaderProjek: QEntityPath<QHeaderProjek>;
    readonly PengajuanForm: QEntityPath<QPengajuanForm>;
    readonly BudgetTransfer: QEntityPath<QBudgetTransfer>;
    readonly MasterUser: QEntityPath<QMasterUser>;
    readonly TopUpBudget: QEntityPath<QTopUpBudget>;
    readonly KurangBudget: QEntityPath<QKurangBudget>;
    readonly EstimasiVSRealisasi: QEntityPath<QEstimasiVSRealisasi>;
}
export declare const qApproval: QApproval;
export declare class QApprovalId extends QId<ApprovalId> {
    private readonly params;
    getParams(): {};
}
export declare class QFeature extends QueryObject {
    readonly Id: QNumberPath<number>;
    readonly Nama: QStringPath<string>;
    readonly Kode: QStringPath<string>;
    readonly Aktif: QBooleanPath<boolean>;
    readonly DibuatTanggal: QDateTimeOffsetPath<string>;
}
export declare const qFeature: QFeature;
export declare class QFeatureId extends QId<FeatureId> {
    private readonly params;
    getParams(): {};
}
export declare class QStepApproval extends QueryObject {
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
    readonly MasterRole: QEntityPath<QMasterRole>;
    readonly ApprovalConfigCondition: QEntityPath<QApprovalConfigCondition>;
}
export declare const qStepApproval: QStepApproval;
export declare class QStepApprovalId extends QId<StepApprovalId> {
    private readonly params;
    getParams(): {};
}
export declare class QApprovalConfigCondition extends QueryObject {
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
    readonly UserId: QEntityPath<QUserDto>;
    readonly DibuatTanggal: QDateTimeOffsetPath<string>;
    readonly ApprovalConfig: QEntityPath<QApprovalConfig>;
    readonly MasterRole: QEntityPath<QMasterRole>;
    readonly StepApproval: QEntityCollectionPath<QStepApproval>;
}
export declare const qApprovalConfigCondition: QApprovalConfigCondition;
export declare class QApprovalConfigConditionId extends QId<ApprovalConfigConditionId> {
    private readonly params;
    getParams(): {};
}
export declare class QApprovalConfig extends QueryObject {
    readonly Id: QNumberPath<number>;
    readonly IdFeature: QNumberPath<number>;
    readonly Aktif: QBooleanPath<boolean>;
    readonly JenisKode: QStringPath<string>;
    readonly Nama: QStringPath<string>;
    readonly DibuatTanggal: QDateTimeOffsetPath<string>;
    readonly Feature: QEntityPath<QFeature>;
}
export declare const qApprovalConfig: QApprovalConfig;
export declare class QApprovalConfigId extends QId<ApprovalConfigId> {
    private readonly params;
    getParams(): {};
}
export declare class QHeaderProjek extends QueryObject {
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
    readonly Status: QEntityPath<QSTATUS_ENUM>;
    readonly IsBottomToTop: QBooleanPath<boolean>;
    readonly AutoApproved: QBooleanPath<boolean>;
    readonly DanaCadangan: QBooleanPath<boolean>;
    readonly NilaiBudget: QNumberPath<number>;
    readonly SisaNilaiBudget: QNumberPath<number>;
    readonly IdHeaderProject: QNumberPath<number>;
    readonly NilaiBudgetTransaksi: QNumberPath<number>;
    readonly IdRegion: QNumberPath<number>;
    readonly CompanyId: QNumberPath<number>;
    readonly Aktif: QBooleanPath<boolean>;
    readonly PeriodeAwal: QDateTimeOffsetPath<string>;
    readonly PeriodeAkhir: QDateTimeOffsetPath<string>;
    readonly DibuatOleh: QStringPath<string>;
    readonly UserId: QNumberPath<number>;
    readonly IdFeature: QNumberPath<number>;
    readonly DibuatTanggal: QDateTimeOffsetPath<string>;
    readonly JenisAlokasi: QStringPath<string>;
    readonly Kategori: QStringPath<string>;
    readonly SubKategori: QStringPath<string>;
    readonly GroupKategori: QStringPath<string>;
    readonly MultiBudget: QBooleanPath<boolean>;
    readonly JenisProgram: QEntityPath<QJenisProgram>;
    readonly Region: QEntityPath<QRegion>;
    readonly Brand: QEntityPath<QBrand>;
    readonly Departmen: QEntityPath<QDepartmen>;
    readonly MasterOrganization: QEntityPath<QMasterOrganization>;
    readonly BudgetAlokasi: QEntityCollectionPath<QBudgetAlokasi>;
    readonly HeaderProjekBrand: QEntityCollectionPath<QHeaderProjekBrand>;
    readonly HeaderProjekDepartemen: QEntityCollectionPath<QHeaderProjekDepartemen>;
    readonly Approval: QEntityCollectionPath<QApproval>;
}
export declare const qHeaderProjek: QHeaderProjek;
export declare class QHeaderProjekId extends QId<HeaderProjekId> {
    private readonly params;
    getParams(): {};
}
export declare class QJenisProgram extends QueryObject {
    readonly Id: QNumberPath<number>;
    readonly Nama: QStringPath<string>;
    readonly Aktif: QBooleanPath<boolean>;
    readonly Kode: QStringPath<string>;
    readonly MetodePemotongan: QStringPath<string>;
    readonly DibuatTanggal: QDateTimeOffsetPath<string>;
    readonly KategoriPpl: QEntityCollectionPath<QKategoriPpl>;
}
export declare const qJenisProgram: QJenisProgram;
export declare class QJenisProgramId extends QId<JenisProgramId> {
    private readonly params;
    getParams(): {};
}
export declare class QKategoriPpl extends QueryObject {
    readonly Id: QNumberPath<number>;
    readonly IdJenisProgram: QNumberPath<number>;
    readonly Nama: QStringPath<string>;
    readonly Aktif: QBooleanPath<boolean>;
    readonly Component: QStringPath<string>;
    readonly DibuatTanggal: QDateTimeOffsetPath<string>;
    readonly Kode: QStringPath<string>;
    readonly JenisProgram: QEntityPath<QJenisProgram>;
    readonly JenisPpl: QEntityCollectionPath<QJenisPpl>;
}
export declare const qKategoriPpl: QKategoriPpl;
export declare class QKategoriPplId extends QId<KategoriPplId> {
    private readonly params;
    getParams(): {};
}
export declare class QJenisPpl extends QueryObject {
    readonly Id: QNumberPath<number>;
    readonly KategoriPplId: QNumberPath<number>;
    readonly IdPostBudget: QNumberPath<number>;
    readonly Nama: QStringPath<string>;
    readonly KodeJenisPpl: QStringPath<string>;
    readonly SubJenis: QStringPath<string>;
    readonly LeadTime: QNumberPath<number>;
    readonly DibuatTanggal: QDateTimeOffsetPath<string>;
    readonly Aktif: QBooleanPath<boolean>;
    readonly KodeKlaim: QStringPath<string>;
    readonly SubKlaim: QStringPath<string>;
    readonly IdKodeKlaim: QNumberPath<number>;
    readonly KodeKlaims: QEntityPath<QKodeKlaims>;
    readonly KategoriPpl: QEntityPath<QKategoriPpl>;
}
export declare const qJenisPpl: QJenisPpl;
export declare class QJenisPplId extends QId<JenisPplId> {
    private readonly params;
    getParams(): {};
}
export declare class QKodeKlaims extends QueryObject {
    readonly Id: QNumberPath<number>;
    readonly Kode: QStringPath<string>;
    readonly Nama: QStringPath<string>;
    readonly Keterangan: QStringPath<string>;
    readonly Aktif: QBooleanPath<boolean>;
    readonly DibuatTanggal: QDateTimeOffsetPath<string>;
    readonly MasterKlaim: QEntityCollectionPath<QMasterKlaim>;
}
export declare const qKodeKlaims: QKodeKlaims;
export declare class QKodeKlaimsId extends QId<KodeKlaimsId> {
    private readonly params;
    getParams(): {};
}
export declare class QMasterKlaim extends QueryObject {
    readonly Id: QNumberPath<number>;
    readonly KodeKlaim: QStringPath<string>;
    readonly IdKodeKlaim: QNumberPath<number>;
    readonly Nama: QStringPath<string>;
    readonly Keterangan: QStringPath<string>;
    readonly Sumber: QStringPath<string>;
    readonly Aktif: QBooleanPath<boolean>;
    readonly DibuatTanggal: QDateTimeOffsetPath<string>;
    readonly KodeKlaims: QEntityPath<QKodeKlaims>;
    readonly MasterKlaimSyarat: QEntityCollectionPath<QMasterKlaimSyarat>;
}
export declare const qMasterKlaim: QMasterKlaim;
export declare class QMasterKlaimId extends QId<MasterKlaimId> {
    private readonly params;
    getParams(): {};
}
export declare class QMasterKlaimSyarat extends QueryObject {
    readonly Id: QNumberPath<number>;
    readonly IdMasterKlaim: QNumberPath<number>;
    readonly Sub: QStringPath<string>;
    readonly Syarat: QStringPath<string>;
    readonly Keterangan: QStringPath<string>;
    readonly Aktif: QBooleanPath<boolean>;
    readonly DibuatTanggal: QDateTimeOffsetPath<string>;
    readonly MasterKlaim: QEntityPath<QMasterKlaim>;
}
export declare const qMasterKlaimSyarat: QMasterKlaimSyarat;
export declare class QMasterKlaimSyaratId extends QId<MasterKlaimSyaratId> {
    private readonly params;
    getParams(): {};
}
export declare class QRegion extends QueryObject {
    readonly Id: QNumberPath<number>;
    readonly Nama: QStringPath<string>;
    readonly NamaAlias: QStringPath<string>;
    readonly PosisiWilayah: QStringPath<string>;
    readonly Aktif: QBooleanPath<boolean>;
    readonly Negara: QStringPath<string>;
    readonly Sort: QNumberPath<number>;
    readonly DibuatTanggal: QDateTimeOffsetPath<string>;
    readonly Area: QEntityCollectionPath<QArea>;
}
export declare const qRegion: QRegion;
export declare class QRegionId extends QId<RegionId> {
    private readonly params;
    getParams(): {};
}
export declare class QArea extends QueryObject {
    readonly Id: QNumberPath<number>;
    readonly Nama: QStringPath<string>;
    readonly IdRegion: QNumberPath<number>;
    readonly KodeArea: QStringPath<string>;
    readonly Aktif: QBooleanPath<boolean>;
    readonly DibuatTanggal: QDateTimeOffsetPath<string>;
    readonly Region: QEntityPath<QRegion>;
    readonly Distributor: QEntityCollectionPath<QDistributor>;
}
export declare const qArea: QArea;
export declare class QAreaId extends QId<AreaId> {
    private readonly params;
    getParams(): {};
}
export declare class QDistributor extends QueryObject {
    readonly Id: QNumberPath<number>;
    readonly CardCode: QStringPath<string>;
    readonly Nama: QStringPath<string>;
    readonly NamaAlias: QStringPath<string>;
    readonly AreaId: QNumberPath<number>;
    readonly Aktif: QBooleanPath<boolean>;
    readonly DibuatTanggal: QDateTimeOffsetPath<string>;
    readonly Area: QEntityPath<QArea>;
}
export declare const qDistributor: QDistributor;
export declare class QDistributorId extends QId<DistributorId> {
    private readonly params;
    getParams(): {};
}
export declare class QBrand extends QueryObject {
    readonly Id: QNumberPath<number>;
    readonly Nama: QStringPath<string>;
    readonly NamaBudget: QStringPath<string>;
    readonly Aktif: QBooleanPath<boolean>;
    readonly Sort: QNumberPath<number>;
    readonly DibuatTanggal: QDateTimeOffsetPath<string>;
    readonly PostBudget: QEntityCollectionPath<QPostBudget>;
}
export declare const qBrand: QBrand;
export declare class QBrandId extends QId<BrandId> {
    private readonly params;
    getParams(): {};
}
export declare class QPostBudget extends QueryObject {
    readonly Id: QNumberPath<number>;
    readonly CoaId: QNumberPath<number>;
    readonly ParentId: QNumberPath<number>;
    readonly IdDepartemen: QNumberPath<number>;
    readonly Nama: QStringPath<string>;
    readonly Channel: QStringPath<string>;
    readonly Kategori: QStringPath<string>;
    readonly Deskripsi: QStringPath<string>;
    readonly Departemen: QStringPath<string>;
    readonly Kode: QStringPath<string>;
    readonly BrandId: QNumberPath<number>;
    readonly DibuatTanggal: QDateTimeOffsetPath<string>;
    readonly Aktif: QBooleanPath<boolean>;
    readonly CompanyId: QNumberPath<number>;
    readonly Coa: QEntityPath<QCoa>;
    readonly Departmen: QEntityPath<QDepartmen>;
    readonly Brand: QEntityPath<QBrand>;
    readonly Parent: QEntityPath<QPostBudget>;
    readonly PostBudgetProgram: QEntityCollectionPath<QPostBudgetProgram>;
}
export declare const qPostBudget: QPostBudget;
export declare class QPostBudgetId extends QId<PostBudgetId> {
    private readonly params;
    getParams(): {};
}
export declare class QCoa extends QueryObject {
    readonly Id: QNumberPath<number>;
    readonly Nama: QStringPath<string>;
    readonly Kode: QStringPath<string>;
    readonly Aktif: QBooleanPath<boolean>;
    readonly DibuatTanggal: QDateTimeOffsetPath<string>;
    readonly CompanyId: QNumberPath<number>;
    readonly PostBudget: QEntityCollectionPath<QPostBudget>;
}
export declare const qCoa: QCoa;
export declare class QCoaId extends QId<CoaId> {
    private readonly params;
    getParams(): {};
}
export declare class QDepartmen extends QueryObject {
    readonly Id: QNumberPath<number>;
    readonly Code: QStringPath<string>;
    readonly Nama: QStringPath<string>;
    readonly DibuatTanggal: QDateTimeOffsetPath<string>;
    readonly CompanyId: QNumberPath<number>;
    readonly Aktif: QBooleanPath<boolean>;
}
export declare const qDepartmen: QDepartmen;
export declare class QDepartmenId extends QId<DepartmenId> {
    private readonly params;
    getParams(): {};
}
export declare class QPostBudgetProgram extends QueryObject {
    readonly Id: QNumberPath<number>;
    readonly IdPostBudget: QNumberPath<number>;
    readonly IdJenisPpl: QNumberPath<number>;
    readonly PostBudget: QEntityPath<QPostBudget>;
    readonly JenisPpl: QEntityPath<QJenisPpl>;
}
export declare const qPostBudgetProgram: QPostBudgetProgram;
export declare class QPostBudgetProgramId extends QId<PostBudgetProgramId> {
    private readonly params;
    getParams(): {};
}
export declare class QBudgetAlokasi extends QueryObject {
    readonly Id: QNumberPath<number>;
    readonly IdHeaderProjek: QNumberPath<number>;
    readonly IdPostBudget: QNumberPath<number>;
    readonly IdJenisPpl: QNumberPath<number>;
    readonly MetodePembagian: QStringPath<string>;
    readonly NilaiBudget: QNumberPath<number>;
    readonly SisaNilaiBudget: QNumberPath<number>;
    readonly IdSkenario: QNumberPath<number>;
    readonly Aktif: QBooleanPath<boolean>;
    readonly AutoGenerate: QBooleanPath<boolean>;
    readonly KodeDept: QStringPath<string>;
    readonly NamaActivity: QStringPath<string>;
    readonly NamaActivity1: QStringPath<string>;
    readonly NamaActivity2: QStringPath<string>;
    readonly Tahun: QNumberPath<number>;
    readonly DibuatTanggal: QDateTimeOffsetPath<string>;
    readonly PostBudget: QEntityPath<QPostBudget>;
    readonly JenisPpl: QEntityPath<QJenisPpl>;
    readonly SkenarioBudget: QEntityPath<QSkenarioBudget>;
    readonly HeaderProjek: QEntityPath<QHeaderProjek>;
    readonly BudgetAlokasiDetail: QEntityCollectionPath<QBudgetAlokasiDetail>;
}
export declare const qBudgetAlokasi: QBudgetAlokasi;
export declare class QBudgetAlokasiId extends QId<BudgetAlokasiId> {
    private readonly params;
    getParams(): {};
}
export declare class QSkenarioBudget extends QueryObject {
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
export declare const qSkenarioBudget: QSkenarioBudget;
export declare class QSkenarioBudgetId extends QId<SkenarioBudgetId> {
    private readonly params;
    getParams(): {};
}
export declare class QBudgetAlokasiDetail extends QueryObject {
    readonly Id: QNumberPath<number>;
    readonly IdBudgetAlokasi: QNumberPath<number>;
    readonly IdMasterBudget: QNumberPath<number>;
    readonly BulanMasterBudget: QNumberPath<number>;
    readonly Bulan: QNumberPath<number>;
    readonly DibuatTanggal: QDateTimeOffsetPath<string>;
    readonly NilaiBudget: QNumberPath<number>;
    readonly SisaNilaiBudget: QNumberPath<number>;
    readonly NilaiTransferSumber: QNumberPath<number>;
    readonly NilaiTransferTujuan: QNumberPath<number>;
    readonly NilaiFix: QNumberPath<number>;
    readonly BudgetAlokasi: QEntityPath<QBudgetAlokasi>;
    readonly MasterBudget: QEntityPath<QMasterBudget>;
}
export declare const qBudgetAlokasiDetail: QBudgetAlokasiDetail;
export declare class QBudgetAlokasiDetailId extends QId<BudgetAlokasiDetailId> {
    private readonly params;
    getParams(): {};
}
export declare class QMasterBudget extends QueryObject {
    readonly Id: QNumberPath<number>;
    readonly IdBudgetSap: QNumberPath<number>;
    readonly IdPostBudget: QNumberPath<number>;
    readonly CoaId: QNumberPath<number>;
    readonly IdBrand: QNumberPath<number>;
    readonly DeptKode: QStringPath<string>;
    readonly Year: QNumberPath<number>;
    readonly Month: QNumberPath<number>;
    readonly Budget: QNumberPath<number>;
    readonly BudgetSisa: QNumberPath<number>;
    readonly NilaiTopUp: QNumberPath<number>;
    readonly NilaiTransferSumber: QNumberPath<number>;
    readonly NilaiTransferTujuan: QNumberPath<number>;
    readonly NilaiFix: QNumberPath<number>;
    readonly DibuatTanggal: QDateTimeOffsetPath<string>;
    readonly DieditTanggal: QDateTimeOffsetPath<string>;
    readonly DibuatOleh: QStringPath<string>;
    readonly UserId: QNumberPath<number>;
    readonly CompanyId: QNumberPath<number>;
    readonly IsLocked: QBooleanPath<boolean>;
    readonly BudgetSap: QEntityPath<QBudgetSap>;
    readonly PostBudget: QEntityPath<QPostBudget>;
    readonly Coa: QEntityPath<QCoa>;
    readonly Brand: QEntityPath<QBrand>;
}
export declare const qMasterBudget: QMasterBudget;
export declare class QMasterBudgetId extends QId<MasterBudgetId> {
    private readonly params;
    getParams(): {};
}
export declare class QBudgetSap extends QueryObject {
    readonly Id: QNumberPath<number>;
    readonly AcctCode: QStringPath<string>;
    readonly OcrCode: QStringPath<string>;
    readonly OcrCode1: QStringPath<string>;
    readonly OcrCode5: QStringPath<string>;
    readonly DimCode: QStringPath<string>;
    readonly Instance: QNumberPath<number>;
    readonly Line_ID: QNumberPath<number>;
    readonly DebLTotal: QNumberPath<number>;
    readonly CredLTotal: QNumberPath<number>;
    readonly DebSTotal: QNumberPath<number>;
    readonly DebSTotalSisa: QNumberPath<number>;
    readonly CredSTotal: QNumberPath<number>;
    readonly NilaiFix: QNumberPath<number>;
    readonly TransAmnt: QStringPath<string>;
    readonly UserSign: QNumberPath<number>;
    readonly CompanyId: QNumberPath<number>;
    readonly AcctName: QStringPath<string>;
    readonly Year: QNumberPath<number>;
    readonly DibuatTanggal: QDateTimeOffsetPath<string>;
    readonly MasterBudget: QEntityCollectionPath<QMasterBudget>;
}
export declare const qBudgetSap: QBudgetSap;
export declare class QBudgetSapId extends QId<BudgetSapId> {
    private readonly params;
    getParams(): {};
}
export declare class QHeaderProjekBrand extends QueryObject {
    readonly Id: QNumberPath<number>;
    readonly IdHeaderProjek: QNumberPath<number>;
    readonly IdBrand: QNumberPath<number>;
    readonly DibuatTanggal: QDateTimeOffsetPath<string>;
    readonly Brand: QEntityPath<QBrand>;
    readonly HeaderProjek: QEntityPath<QHeaderProjek>;
}
export declare const qHeaderProjekBrand: QHeaderProjekBrand;
export declare class QHeaderProjekBrandId extends QId<HeaderProjekBrandId> {
    private readonly params;
    getParams(): {};
}
export declare class QHeaderProjekDepartemen extends QueryObject {
    readonly Id: QNumberPath<number>;
    readonly IdHeaderProjek: QNumberPath<number>;
    readonly IdDepartmen: QNumberPath<number>;
    readonly KodeDepartmen: QStringPath<string>;
    readonly DibuatTanggal: QDateTimeOffsetPath<string>;
    readonly Departmen: QEntityPath<QDepartmen>;
    readonly HeaderProjek: QEntityPath<QHeaderProjek>;
}
export declare const qHeaderProjekDepartemen: QHeaderProjekDepartemen;
export declare class QHeaderProjekDepartemenId extends QId<HeaderProjekDepartemenId> {
    private readonly params;
    getParams(): {};
}
export declare class QPengajuanForm extends QueryObject {
    readonly Id: QNumberPath<number>;
    readonly NoDokumen: QStringPath<string>;
    readonly Kategori: QStringPath<string>;
    readonly IdFeature: QNumberPath<number>;
    readonly DibuatOleh: QStringPath<string>;
    readonly UserId: QNumberPath<number>;
    readonly Status: QEntityPath<QSTATUS_ENUM>;
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
    readonly PengajuanFormOutlet: QEntityCollectionPath<QPengajuanFormOutlet>;
    readonly PengajuanFormAttachment: QEntityCollectionPath<QPengajuanFormAttachment>;
    readonly PengajuanFormProduk: QEntityCollectionPath<QPengajuanFormProduk>;
    readonly PengajuanFormDetail: QEntityCollectionPath<QPengajuanFormDetail>;
    readonly Approval: QEntityCollectionPath<QApproval>;
}
export declare const qPengajuanForm: QPengajuanForm;
export declare class QPengajuanFormId extends QId<PengajuanFormId> {
    private readonly params;
    getParams(): {};
}
export declare class QPengajuanFormOutlet extends QueryObject {
    readonly Id: QNumberPath<number>;
    readonly IdPengajuanForm: QNumberPath<number>;
    readonly IdOutlet: QNumberPath<number>;
    readonly DibuatTanggal: QDateTimeOffsetPath<string>;
    readonly Outlet: QEntityPath<QOutlet>;
    readonly PengajuanForm: QEntityPath<QPengajuanForm>;
}
export declare const qPengajuanFormOutlet: QPengajuanFormOutlet;
export declare class QPengajuanFormOutletId extends QId<PengajuanFormOutletId> {
    private readonly params;
    getParams(): {};
}
export declare class QOutlet extends QueryObject {
    readonly Id: QNumberPath<number>;
    readonly IdArea: QNumberPath<number>;
    readonly IdGroup: QNumberPath<number>;
    readonly IdKota: QNumberPath<number>;
    readonly NamaKota: QStringPath<string>;
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
    readonly Area: QEntityPath<QArea>;
    readonly OutletGroup: QEntityPath<QOutletGroup>;
}
export declare const qOutlet: QOutlet;
export declare class QOutletId extends QId<OutletId> {
    private readonly params;
    getParams(): {};
}
export declare class QOutletGroup extends QueryObject {
    readonly Id: QNumberPath<number>;
    readonly Nama: QStringPath<string>;
    readonly Aktif: QBooleanPath<boolean>;
    readonly DibuatTanggal: QDateTimeOffsetPath<string>;
    readonly Outlet: QEntityCollectionPath<QOutlet>;
}
export declare const qOutletGroup: QOutletGroup;
export declare class QOutletGroupId extends QId<OutletGroupId> {
    private readonly params;
    getParams(): {};
}
export declare class QPengajuanFormAttachment extends QueryObject {
    readonly Id: QNumberPath<number>;
    readonly IdPengajuanForm: QNumberPath<number>;
    readonly Label: QStringPath<string>;
    readonly File: QStringPath<string>;
    readonly DibuatTanggal: QDateTimeOffsetPath<string>;
    readonly PengajuanForm: QEntityPath<QPengajuanForm>;
}
export declare const qPengajuanFormAttachment: QPengajuanFormAttachment;
export declare class QPengajuanFormAttachmentId extends QId<PengajuanFormAttachmentId> {
    private readonly params;
    getParams(): {};
}
export declare class QPengajuanFormProduk extends QueryObject {
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
    readonly PengajuanForm: QEntityPath<QPengajuanForm>;
}
export declare const qPengajuanFormProduk: QPengajuanFormProduk;
export declare class QPengajuanFormProdukId extends QId<PengajuanFormProdukId> {
    private readonly params;
    getParams(): {};
}
export declare class QPengajuanFormDetail extends QueryObject {
    readonly Id: QNumberPath<number>;
    readonly IdPengajuanForm: QNumberPath<number>;
    readonly Deskripsi: QStringPath<string>;
    readonly Keterangan: QStringPath<string>;
    readonly Klaim: QStringPath<string>;
    readonly Biaya: QNumberPath<number>;
    readonly IdPostBudget: QNumberPath<number>;
    readonly PengajuanForm: QEntityPath<QPengajuanForm>;
    readonly PostBudget: QEntityPath<QPostBudget>;
}
export declare const qPengajuanFormDetail: QPengajuanFormDetail;
export declare class QPengajuanFormDetailId extends QId<PengajuanFormDetailId> {
    private readonly params;
    getParams(): {};
}
export declare class QBudgetTransfer extends QueryObject {
    readonly Id: QNumberPath<number>;
    readonly NoDokumen: QStringPath<string>;
    readonly IdProjectSumber: QNumberPath<number>;
    readonly IdProjectTujuan: QNumberPath<number>;
    readonly IdKurangBudget: QNumberPath<number>;
    readonly TotalTransfer: QNumberPath<number>;
    readonly Jenis: QStringPath<string>;
    readonly Deskripsi: QStringPath<string>;
    readonly Status: QEntityPath<QSTATUS_ENUM>;
    readonly DibuatOleh: QStringPath<string>;
    readonly UserId: QNumberPath<number>;
    readonly UserApproval: QNumberPath<number>;
    readonly Aktif: QBooleanPath<boolean>;
    readonly IdFeature: QNumberPath<number>;
    readonly DibuatTanggal: QDateTimeOffsetPath<string>;
    readonly BudgetTransferDetail: QEntityCollectionPath<QBudgetTransferDetail>;
    readonly Approval: QEntityCollectionPath<QApproval>;
    readonly Feature: QEntityPath<QFeature>;
    readonly KurangBudget: QEntityPath<QKurangBudget>;
    readonly HeaderProjekSumber: QEntityPath<QHeaderProjek>;
    readonly HeaderProjekTujuan: QEntityPath<QHeaderProjek>;
}
export declare const qBudgetTransfer: QBudgetTransfer;
export declare class QBudgetTransferId extends QId<BudgetTransferId> {
    private readonly params;
    getParams(): {};
}
export declare class QBudgetTransferDetail extends QueryObject {
    readonly Id: QNumberPath<number>;
    readonly IdTransfer: QNumberPath<number>;
    readonly IdAlokasiBudgetSumber: QNumberPath<number>;
    readonly IdAlokasiBudgetTujuan: QNumberPath<number>;
    readonly IdPostBugdetSumber: QNumberPath<number>;
    readonly IdPostBugdetTujuan: QNumberPath<number>;
    readonly IdAlokasiDetailSumber: QNumberPath<number>;
    readonly IdAlokasiDetailTujuan: QNumberPath<number>;
    readonly BulanBudgetSumber: QNumberPath<number>;
    readonly BulanBudgetTujuan: QNumberPath<number>;
    readonly IdSkenarioTujuan: QNumberPath<number>;
    readonly IdSkenarioSumber: QNumberPath<number>;
    readonly Nilai: QNumberPath<number>;
    readonly DifferencePosBudget: QBooleanPath<boolean>;
    readonly BudgetTransfer: QEntityPath<QBudgetTransfer>;
    readonly BudgetAlokasiSumber: QEntityPath<QBudgetAlokasi>;
    readonly BudgetAlokasiTujuan: QEntityPath<QBudgetAlokasi>;
    readonly BudgetAlokasiDetailSumber: QEntityPath<QBudgetAlokasiDetail>;
    readonly BudgetAlokasiDetailTujuan: QEntityPath<QBudgetAlokasiDetail>;
    readonly SkenarioBudgetSumber: QEntityPath<QSkenarioBudget>;
    readonly SkenarioBudgetTujuan: QEntityPath<QSkenarioBudget>;
    readonly PostBudgetSumber: QEntityPath<QPostBudget>;
    readonly PostBudgetTujuan: QEntityPath<QPostBudget>;
}
export declare const qBudgetTransferDetail: QBudgetTransferDetail;
export declare class QBudgetTransferDetailId extends QId<BudgetTransferDetailId> {
    private readonly params;
    getParams(): {};
}
export declare class QKurangBudget extends QueryObject {
    readonly Id: QNumberPath<number>;
    readonly Status: QEntityPath<QSTATUS_ENUM>;
    readonly NoDokumen: QStringPath<string>;
    readonly Aktif: QBooleanPath<boolean>;
    readonly DibuatTanggal: QDateTimeOffsetPath<string>;
    readonly NamaPembuat: QStringPath<string>;
    readonly EmailPembuat: QStringPath<string>;
    readonly Type: QStringPath<string>;
    readonly IdFeature: QNumberPath<number>;
    readonly NomorPembayaran: QStringPath<string>;
    readonly PemilikBudget: QNumberPath<number>;
    readonly Year: QNumberPath<number>;
    readonly IdBudgetTransfer: QNumberPath<number>;
    readonly NoDokumenTransfer: QStringPath<string>;
    readonly KurangBudgetDetail: QEntityCollectionPath<QKurangBudgetDetail>;
    readonly MasterUser: QEntityPath<QMasterUser>;
    readonly Approval: QEntityCollectionPath<QApproval>;
}
export declare const qKurangBudget: QKurangBudget;
export declare class QKurangBudgetId extends QId<KurangBudgetId> {
    private readonly params;
    getParams(): {};
}
export declare class QKurangBudgetDetail extends QueryObject {
    readonly Id: QNumberPath<number>;
    readonly IdKurangBudget: QNumberPath<number>;
    readonly IdAlokasi: QNumberPath<number>;
    readonly NoDokumenPpl: QStringPath<string>;
    readonly Bulan: QNumberPath<number>;
    readonly Nilai: QNumberPath<number>;
    readonly IdDetailPembayaran: QNumberPath<number>;
    readonly KurangBudget: QEntityPath<QKurangBudget>;
    readonly BudgetAlokasi: QEntityPath<QBudgetAlokasi>;
}
export declare const qKurangBudgetDetail: QKurangBudgetDetail;
export declare class QKurangBudgetDetailId extends QId<KurangBudgetDetailId> {
    private readonly params;
    getParams(): {};
}
export declare class QMasterUser extends QueryObject {
    readonly Id: QNumberPath<number>;
    readonly Username: QStringPath<string>;
    readonly Password: QStringPath<string>;
    readonly IsActive: QBooleanPath<boolean>;
    readonly IsApprovalProgram: QBooleanPath<boolean>;
    readonly AllBrand: QBooleanPath<boolean>;
    readonly AllDistributor: QBooleanPath<boolean>;
    readonly AllArea: QBooleanPath<boolean>;
    readonly IsDeptHead: QBooleanPath<boolean>;
    readonly IsSuperAdmin: QBooleanPath<boolean>;
    readonly IsLocBudget: QBooleanPath<boolean>;
    readonly AllDepartmen: QBooleanPath<boolean>;
    readonly AllCompany: QBooleanPath<boolean>;
    readonly Nik: QStringPath<string>;
    readonly NamaLengkap: QStringPath<string>;
    readonly Channel: QStringPath<string>;
    readonly KodeDepartemen: QStringPath<string>;
    readonly KodeUserType: QStringPath<string>;
    readonly TandaTangan: QStringPath<string>;
    readonly RoleId: QNumberPath<number>;
    readonly CompanyId: QNumberPath<number>;
    readonly IdUserHana: QNumberPath<number>;
    readonly NamaUserHana: QStringPath<string>;
    readonly IdUserEsw: QNumberPath<number>;
    readonly NamaUserEsw: QStringPath<string>;
    readonly Role: QEntityPath<QMasterRole>;
    readonly UserDistributor: QEntityCollectionPath<QUserDistributor>;
    readonly UserArea: QEntityCollectionPath<QUserArea>;
    readonly UsersAttachment: QEntityCollectionPath<QUsersAttachment>;
    readonly UserBrand: QEntityCollectionPath<QUserBrand>;
}
export declare const qMasterUser: QMasterUser;
export declare class QMasterUserId extends QId<MasterUserId> {
    private readonly params;
    getParams(): {};
}
export declare class QUserDistributor extends QueryObject {
    readonly Id: QNumberPath<number>;
    readonly IdUser: QNumberPath<number>;
    readonly CardCode: QStringPath<string>;
    readonly Nama: QStringPath<string>;
    readonly DibuatTanggal: QDateTimeOffsetPath<string>;
    readonly MasterUser: QEntityPath<QMasterUser>;
}
export declare const qUserDistributor: QUserDistributor;
export declare class QUserDistributorId extends QId<UserDistributorId> {
    private readonly params;
    getParams(): {};
}
export declare class QUserArea extends QueryObject {
    readonly Id: QNumberPath<number>;
    readonly IdUser: QNumberPath<number>;
    readonly KodeArea: QStringPath<string>;
    readonly Nama: QStringPath<string>;
    readonly DibuatTanggal: QDateTimeOffsetPath<string>;
    readonly MasterUser: QEntityPath<QMasterUser>;
}
export declare const qUserArea: QUserArea;
export declare class QUserAreaId extends QId<UserAreaId> {
    private readonly params;
    getParams(): {};
}
export declare class QUsersAttachment extends QueryObject {
    readonly Id: QNumberPath<number>;
    readonly IdMasterUser: QNumberPath<number>;
    readonly Label: QStringPath<string>;
    readonly File: QStringPath<string>;
    readonly DibuatTanggal: QDateTimeOffsetPath<string>;
    readonly MasterUser: QEntityPath<QMasterUser>;
}
export declare const qUsersAttachment: QUsersAttachment;
export declare class QUsersAttachmentId extends QId<UsersAttachmentId> {
    private readonly params;
    getParams(): {};
}
export declare class QUserBrand extends QueryObject {
    readonly Id: QNumberPath<number>;
    readonly IdUser: QNumberPath<number>;
    readonly Nama: QStringPath<string>;
    readonly MasterUser: QEntityPath<QMasterUser>;
}
export declare const qUserBrand: QUserBrand;
export declare class QUserBrandId extends QId<UserBrandId> {
    private readonly params;
    getParams(): {};
}
export declare class QTopUpBudget extends QueryObject {
    readonly Id: QNumberPath<number>;
    readonly Deskripsi: QStringPath<string>;
    readonly DibuatTanggal: QDateTimeOffsetPath<string>;
    readonly DibuatOleh: QStringPath<string>;
    readonly UserId: QNumberPath<number>;
    readonly BrandId: QNumberPath<number>;
    readonly BrandOther: QStringPath<string>;
    readonly ChannelId: QNumberPath<number>;
    readonly ChannelOther: QStringPath<string>;
    readonly DeptId: QNumberPath<number>;
    readonly DeptOther: QStringPath<string>;
    readonly Aktif: QBooleanPath<boolean>;
    readonly NoDokumen: QStringPath<string>;
    readonly Status: QEntityPath<QSTATUS_ENUM>;
    readonly IdFeature: QNumberPath<number>;
    readonly TopUpBudgetDetail: QEntityCollectionPath<QTopUpBudgetDetail>;
    readonly Approval: QEntityCollectionPath<QApproval>;
    readonly Brand: QEntityPath<QBrand>;
    readonly Channel: QEntityPath<QChannel>;
    readonly Departmen: QEntityPath<QDepartmen>;
}
export declare const qTopUpBudget: QTopUpBudget;
export declare class QTopUpBudgetId extends QId<TopUpBudgetId> {
    private readonly params;
    getParams(): {};
}
export declare class QTopUpBudgetDetail extends QueryObject {
    readonly Id: QNumberPath<number>;
    readonly IdTopUpBudget: QNumberPath<number>;
    readonly IdSap: QNumberPath<number>;
    readonly IdMasterBudget: QNumberPath<number>;
    readonly IdPostBudget: QNumberPath<number>;
    readonly Tahun: QNumberPath<number>;
    readonly Bulan: QNumberPath<number>;
    readonly NilaiBudget: QNumberPath<number>;
    readonly TopUpBudget: QEntityPath<QTopUpBudget>;
    readonly PostBudget: QEntityPath<QPostBudget>;
    readonly BudgetSap: QEntityPath<QBudgetSap>;
    readonly MasterBudget: QEntityPath<QMasterBudget>;
}
export declare const qTopUpBudgetDetail: QTopUpBudgetDetail;
export declare class QTopUpBudgetDetailId extends QId<TopUpBudgetDetailId> {
    private readonly params;
    getParams(): {};
}
export declare class QChannel extends QueryObject {
    readonly Id: QNumberPath<number>;
    readonly Nama: QStringPath<string>;
    readonly SubNama: QStringPath<string>;
    readonly Kode: QStringPath<string>;
    readonly DibuatTanggal: QDateTimeOffsetPath<string>;
    readonly Sort: QNumberPath<number>;
    readonly Aktif: QBooleanPath<boolean>;
}
export declare const qChannel: QChannel;
export declare class QChannelId extends QId<ChannelId> {
    private readonly params;
    getParams(): {};
}
export declare class QEstimasiVSRealisasi extends QueryObject {
    readonly Id: QNumberPath<number>;
    readonly NoDokumen: QStringPath<string>;
    readonly Status: QStringPath<string>;
    readonly DibuatTanggal: QDateTimeOffsetPath<string>;
    readonly BudgetAlokasiId: QNumberPath<number>;
    readonly Estimasi: QNumberPath<number>;
    readonly Realisasi: QNumberPath<number>;
    readonly UserId: QNumberPath<number>;
    readonly DibuatOleh: QStringPath<string>;
    readonly CompanyId: QNumberPath<number>;
    readonly IdFeature: QNumberPath<number>;
    readonly MasterUser: QEntityPath<QMasterUser>;
    readonly Approval: QEntityCollectionPath<QApproval>;
}
export declare const qEstimasiVSRealisasi: QEstimasiVSRealisasi;
export declare class QEstimasiVSRealisasiId extends QId<EstimasiVSRealisasiId> {
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
    readonly IdTopUpBudget: QNumberPath<number>;
    readonly IdKurangBudget: QNumberPath<number>;
    readonly IdEstimasiVsRealisasi: QNumberPath<number>;
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
export declare class QDTO_EstimasiVSRealisasi extends QueryObject {
    readonly Id: QNumberPath<number>;
    readonly NoDokumen: QStringPath<string>;
    readonly Status: QStringPath<string>;
    readonly DibuatTanggal: QDateTimeOffsetPath<string>;
    readonly BudgetAlokasiId: QNumberPath<number>;
    readonly Estimasi: QNumberPath<number>;
    readonly Realisasi: QNumberPath<number>;
    readonly UserId: QNumberPath<number>;
    readonly DibuatOleh: QStringPath<string>;
    readonly CompanyId: QNumberPath<number>;
    readonly IdFeature: QNumberPath<number>;
    readonly MasterUser: QEntityPath<QDTO_MasterUser>;
    readonly Approval: QEntityCollectionPath<QDTO_Approval>;
}
export declare const qDTO_EstimasiVSRealisasi: QDTO_EstimasiVSRealisasi;
export declare class QDTO_EstimasiVSRealisasiId extends QId<DTO_EstimasiVSRealisasiId> {
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
    readonly Sort: QNumberPath<number>;
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
    readonly NilaiTransferSumber: QNumberPath<number>;
    readonly NilaiTransferTujuan: QNumberPath<number>;
    readonly NilaiFix: QNumberPath<number>;
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
    readonly IdKurangBudget: QNumberPath<number>;
    readonly NoDokumenProjectSumber: QStringPath<string>;
    readonly IdProjectTujuan: QNumberPath<number>;
    readonly NoDokumenProjectTujuan: QStringPath<string>;
    readonly TotalTransfer: QNumberPath<number>;
    readonly Save_Transfer: QBooleanPath<boolean>;
    readonly Jenis: QStringPath<string>;
    readonly Deskripsi: QStringPath<string>;
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
    readonly KurangBudget: QEntityPath<QDtoKurangBudget>;
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
    readonly NamaProgramSumber: QStringPath<string>;
    readonly NamaProgramTujuan: QStringPath<string>;
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
    readonly DifferencePosBudget: QBooleanPath<boolean>;
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
    readonly CompanyId: QNumberPath<number>;
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
    readonly CompanyId: QNumberPath<number>;
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
    readonly AutoApproved: QBooleanPath<boolean>;
    readonly IdJenisProgram: QNumberPath<number>;
    readonly ParentId: QNumberPath<number>;
    readonly ActivityDetail: QStringPath<string>;
    readonly CompanyName: QStringPath<string>;
    readonly Channel: QStringPath<string>;
    readonly ProgramBa: QBooleanPath<boolean>;
    readonly IdDepartmen: QNumberPath<number>;
    readonly KodeDept: QStringPath<string>;
    readonly IdBrand: QNumberPath<number>;
    readonly Scope: QStringPath<string>;
    readonly Status: QStringPath<string>;
    readonly IdRegion: QNumberPath<number>;
    readonly CompanyId: QNumberPath<number>;
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
    readonly Kategori: QStringPath<string>;
    readonly SubKategori: QStringPath<string>;
    readonly GroupKategori: QStringPath<string>;
    readonly MultiBudget: QBooleanPath<boolean>;
    readonly Brand: QEntityPath<QDTO_Brand>;
    readonly JenisProgram: QEntityPath<QDTO_JenisProgram>;
    readonly Departmen: QEntityPath<QDTO_Departmen>;
    readonly Region: QEntityPath<QDTO_Region>;
    readonly MasterOrganization: QEntityPath<QDTO_MasterOrg>;
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
export declare class QDtoProjectList extends QueryObject {
    readonly Id: QNumberPath<number>;
    readonly NoDokumen: QStringPath<string>;
    readonly ParentId: QNumberPath<number>;
    readonly ActivityDetail: QStringPath<string>;
    readonly Channel: QStringPath<string>;
    readonly ProgramBa: QBooleanPath<boolean>;
    readonly Scope: QStringPath<string>;
    readonly Status: QStringPath<string>;
    readonly PeriodeAwal: QDateTimeOffsetPath<string>;
    readonly PeriodeAkhir: QDateTimeOffsetPath<string>;
    readonly DibuatOleh: QStringPath<string>;
    readonly UserId: QNumberPath<number>;
}
export declare const qDtoProjectList: QDtoProjectList;
export declare class QDtoProjectListId extends QId<DtoProjectListId> {
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
    readonly IdPostBudget: QNumberPath<number>;
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
    readonly MetodePemotongan: QStringPath<string>;
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
    readonly IsActive: QBooleanPath<boolean>;
    readonly Link: QStringPath<string>;
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
    readonly CompanyId: QNumberPath<number>;
    readonly IsLocBudget: QBooleanPath<boolean>;
    readonly IdUserHana: QNumberPath<number>;
    readonly NamaUserHana: QStringPath<string>;
    readonly IdUserEsw: QNumberPath<number>;
    readonly NamaUserEsw: QStringPath<string>;
    readonly KodeDepartemen: QStringPath<string>;
    readonly KodeUserType: QStringPath<string>;
    readonly TandaTangan: QStringPath<string>;
    readonly Base64Data: QStringPath<string>;
    readonly Nik: QStringPath<string>;
    readonly NamaLengkap: QStringPath<string>;
    readonly AllDistributor: QBooleanPath<boolean>;
    readonly AllArea: QBooleanPath<boolean>;
    readonly IsApprovalProgram: QBooleanPath<boolean>;
    readonly AllBrand: QBooleanPath<boolean>;
    readonly AllDepartmen: QBooleanPath<boolean>;
    readonly AllCompany: QBooleanPath<boolean>;
    readonly Role: QEntityPath<QDTO_MasterRole>;
    readonly UserArea: QEntityCollectionPath<QDTO_UserArea>;
    readonly UserDistributor: QEntityCollectionPath<QDTO_UserDistributor>;
    readonly UserBrand: QEntityCollectionPath<QDTO_UserBrand>;
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
    readonly CompanyId: QNumberPath<number>;
    readonly ParentName: QStringPath<string>;
    readonly Departmen: QEntityPath<QDTO_Departmen>;
    readonly Coa: QEntityPath<QDTO_Coa>;
    readonly Brand: QEntityPath<QDTO_Brand>;
    readonly PostBudgetProgram: QEntityCollectionPath<QDTO_PostBudgetProgram>;
}
export declare const qDTO_PostBudget: QDTO_PostBudget;
export declare class QDTO_PostBudgetId extends QId<DTO_PostBudgetId> {
    private readonly params;
    getParams(): {};
}
export declare class QDTO_PostBudgetProgram extends QueryObject {
    readonly Id: QNumberPath<number>;
    readonly IdPostBudget: QNumberPath<number>;
    readonly IdJenisPpl: QNumberPath<number>;
}
export declare const qDTO_PostBudgetProgram: QDTO_PostBudgetProgram;
export declare class QDTO_PostBudgetProgramId extends QId<DTO_PostBudgetProgramId> {
    private readonly params;
    getParams(): {};
}
export declare class QDTO_Channel extends QueryObject {
    readonly Id: QNumberPath<number>;
    readonly Nama: QStringPath<string>;
    readonly SubNama: QStringPath<string>;
    readonly Kode: QStringPath<string>;
    readonly DibuatTanggal: QDateTimeOffsetPath<string>;
    readonly Sort: QNumberPath<number>;
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
    readonly NilaiTopUp: QNumberPath<number>;
    readonly NilaiTransferSumber: QNumberPath<number>;
    readonly NilaiTransferTujuan: QNumberPath<number>;
    readonly DibuatTanggal: QDateTimeOffsetPath<string>;
    readonly DieditTanggal: QDateTimeOffsetPath<string>;
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
    readonly Sort: QNumberPath<number>;
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
    readonly DeptCode: QStringPath<string>;
    readonly CompanyId: QNumberPath<number>;
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
export declare class QDTO_TopUpBudget extends QueryObject {
    readonly Id: QNumberPath<number>;
    readonly Deskripsi: QStringPath<string>;
    readonly DibuatTanggal: QDateTimeOffsetPath<string>;
    readonly DibuatOleh: QStringPath<string>;
    readonly UserId: QNumberPath<number>;
    readonly Aktif: QBooleanPath<boolean>;
    readonly BrandId: QNumberPath<number>;
    readonly BrandOther: QStringPath<string>;
    readonly ChannelId: QNumberPath<number>;
    readonly ChannelOther: QStringPath<string>;
    readonly DeptId: QNumberPath<number>;
    readonly DeptOther: QStringPath<string>;
    readonly NoDokumen: QStringPath<string>;
    readonly Status: QStringPath<string>;
    readonly IdFeature: QNumberPath<number>;
    readonly TopUpBudgetDetail: QEntityCollectionPath<QDTO_TopUpBudgetDetail>;
    readonly Approval: QEntityCollectionPath<QApproval>;
    readonly Brand: QEntityPath<QDTO_Brand>;
    readonly Departmen: QEntityPath<QDTO_Departmen>;
    readonly Channel: QEntityPath<QDTO_Channel>;
}
export declare const qDTO_TopUpBudget: QDTO_TopUpBudget;
export declare class QDTO_TopUpBudgetId extends QId<DTO_TopUpBudgetId> {
    private readonly params;
    getParams(): {};
}
export declare class QDTO_TopUpBudgetDetail extends QueryObject {
    readonly Id: QNumberPath<number>;
    readonly IdTopUpBudget: QNumberPath<number>;
    readonly IdPostBudget: QNumberPath<number>;
    readonly IdSap: QNumberPath<number>;
    readonly IdMasterBudget: QNumberPath<number>;
    readonly Tahun: QNumberPath<number>;
    readonly Bulan: QNumberPath<number>;
    readonly NilaiBudget: QNumberPath<number>;
    readonly PostBudget: QEntityPath<QDTO_PostBudget>;
    readonly BudgetSap: QEntityPath<QDTO_BudgetSap>;
    readonly MasterBudget: QEntityPath<QDTO_MasterBudget>;
}
export declare const qDTO_TopUpBudgetDetail: QDTO_TopUpBudgetDetail;
export declare class QDTO_TopUpBudgetDetailId extends QId<DTO_TopUpBudgetDetailId> {
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
export declare class QDTO_UserBrand extends QueryObject {
    readonly Id: QNumberPath<number>;
    readonly IdUser: QNumberPath<number>;
    readonly Nama: QStringPath<string>;
}
export declare const qDTO_UserBrand: QDTO_UserBrand;
export declare class QDTO_UserBrandId extends QId<DTO_UserBrandId> {
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
    readonly BudgetFinal: QBooleanPath<boolean>;
    readonly Status: QStringPath<string>;
    readonly DibuatTanggal: QDateTimeOffsetPath<string>;
    readonly Aktif: QBooleanPath<boolean>;
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
    readonly BudgetFinal: QBooleanPath<boolean>;
    readonly Status: QStringPath<string>;
    readonly Mark: QStringPath<string>;
    readonly DibuatTanggal: QDateTimeOffsetPath<string>;
    readonly Aktif: QBooleanPath<boolean>;
    readonly PeriodeAwal: QDateTimeOffsetPath<string>;
    readonly PeriodeAkhir: QDateTimeOffsetPath<string>;
    readonly BudgetAlokasi: QEntityPath<QDTO_BudgetAlokasi>;
}
export declare const qDtoHistoryTransaksiRealiasasi: QDtoHistoryTransaksiRealiasasi;
export declare class QDtoHistoryTransaksiRealiasasiId extends QId<DtoHistoryTransaksiRealiasasiId> {
    private readonly params;
    getParams(): {};
}
export declare class QDtoHistoryTransaksiEstimasiView extends QueryObject {
    readonly Id: QNumberPath<number>;
    readonly NoDokumenPpl: QStringPath<string>;
    readonly IdAlokasi: QNumberPath<number>;
    readonly Tahun: QNumberPath<number>;
    readonly Status: QStringPath<string>;
    readonly PostBudgetNama: QStringPath<string>;
    readonly CoaNama: QStringPath<string>;
    readonly BrandNama: QStringPath<string>;
    readonly NamaJenisProgram: QStringPath<string>;
    readonly KodeJenisProgram: QStringPath<string>;
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
    readonly DibuatTanggal: QDateTimeOffsetPath<string>;
}
export declare const qDtoHistoryTransaksiEstimasiView: QDtoHistoryTransaksiEstimasiView;
export declare class QDtoHistoryTransaksiEstimasiViewId extends QId<DtoHistoryTransaksiEstimasiViewId> {
    private readonly params;
    getParams(): {};
}
export declare class QDtoHistoryTransaksiRealiasasiView extends QueryObject {
    readonly Id: QNumberPath<number>;
    readonly NoDokumenPpl: QStringPath<string>;
    readonly IdAlokasi: QNumberPath<number>;
    readonly Tahun: QNumberPath<number>;
    readonly Status: QStringPath<string>;
    readonly PostBudgetNama: QStringPath<string>;
    readonly CoaNama: QStringPath<string>;
    readonly BrandNama: QStringPath<string>;
    readonly NamaJenisProgram: QStringPath<string>;
    readonly KodeJenisProgram: QStringPath<string>;
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
    readonly DibuatTanggal: QDateTimeOffsetPath<string>;
}
export declare const qDtoHistoryTransaksiRealiasasiView: QDtoHistoryTransaksiRealiasasiView;
export declare class QDtoHistoryTransaksiRealiasasiViewId extends QId<DtoHistoryTransaksiRealiasasiViewId> {
    private readonly params;
    getParams(): {};
}
export declare class QDtoMasterProduk extends QueryObject {
    readonly Id: QNumberPath<number>;
    readonly KodeProduk: QStringPath<string>;
    readonly NamaProduk: QStringPath<string>;
    readonly Brand: QStringPath<string>;
    readonly Kategori: QStringPath<string>;
    readonly SubKategori: QStringPath<string>;
    readonly GroupKategori: QStringPath<string>;
}
export declare const qDtoMasterProduk: QDtoMasterProduk;
export declare class QDtoMasterProdukId extends QId<DtoMasterProdukId> {
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
export declare class QSTATUS_ENUM extends QueryObject {
}
export declare const qSTATUS_ENUM: QSTATUS_ENUM;
