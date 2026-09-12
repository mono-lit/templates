import type { NumberCollection } from "@odata2ts/odata-query-objects";
import { QNumberCollection } from "@odata2ts/odata-query-objects";
import type { ODataHttpClient } from "@odata2ts/http-client-api";
import { ODataService, EntityTypeServiceV4, ODataServiceOptionsInternal, EntitySetServiceV4, CollectionServiceV4 } from "@odata2ts/odata-service";
import type { DTO_BudgetAlokasiId, DTO_BudgetAlokasiListId, DTO_BudgetLedgerId, DTO_BudgetAlokasiRemainingId, DTO_BudgetId, DTO_MasterBudgetsId, DTO_BudgetDetailId, DTO_BudgetsId, DTO_PPLHId, DTO_PPLDId, DTO_RETURId, DTO_RETURDId, DTO_RETURPId, DTO_UserTypeId, DTO_FeatureId, DTO_ApprovalConfigId, DTO_ApprovalId, DTO_ApprovalConfigConditionId, DTO_StepApprovalId, DTO_AreaId, DTO_BookWithAuthorsId, DTO_BrandId, DTO_BudgetAlokasiDetailId, DTO_BudgetTopUpId, DTO_BudgetTopUpDetailId, DTO_BudgetTransferId, DTO_BudgetTransferDetailId, DTO_CoaId, DTO_DepartmenId, DTO_DistributorId, DTO_EmailTemplateId, DTO_EstimasiHargaBrandingId, DTO_EstimasiHargaBrandingListId, DTO_HeaderPplId, DTO_HeaderPplListId, DTO_HeaderProjekId, DTO_HeaderProjekListId, DTO_HeaderProjekBrandId, DTO_HeaderProjekDepartemenId, DTO_JenisPplId, DTO_KodeKlaimsId, DTO_JenisPplListId, DTO_JenisProgramId, DTO_JurnalLedgerId, DTO_KategoriPplId, DTO_MasterAccountId, DTO_MasterJabatanId, DTO_MasterKaryawanId, DTO_MasterKlaimId, DTO_MasterKlaimSyaratId, DTO_MasterOrgId, DTO_MasterJobPosId, DTO_MasterJobLvlId, DTO_MasterPermId, DTO_MasterRoleId, DTO_PermissionRefId, DTO_MasterUserId, DTO_UsersAttachmentId, DTO_MasterProvinsiId, DTO_MasterKotaId, DTO_MasterKecamatanId, DTO_MasterKelurahanId, DTO_OITMId, DTO_OutletId, DTO_OutletGroupId, DTO_PengajuanFormId, DTO_PengajuanFormOutletId, DTO_PengajuanFormAttachmentId, DTO_PengajuanFormProdukId, DTO_PengajuanFormDetailId, DTO_PostBudgetId, DTO_ChannelId, DTO_BudgetSapId, DTO_MasterBudgetId, DTO_PplAreaId, DTO_PplAttachmentId, DTO_PplBudgetAlokasiId, DTO_PplDetailProdukId, DTO_PplDetailsId, DTO_PplOutletId, DTO_ProdukId, DTO_ProdukCategoriId, DTO_ProvinsiId, DTO_KotaId, DTO_KecamatanId, DTO_KelurahanId, DTO_RegionId, DTO_ResiId, DTO_ResiOutletId, DTO_SalesId, DTO_SalesmanId, DTO_SettingsId, DTO_SkenarioBudgetId, DTO_SkenarioBudgetListId, DTO_MasterKeyVisualId, DtoHistoryTransaksiEstimasiId, DtoHistoryTransaksiRealiasasiId, DTO_BudgetAlokasi, EditableDTO_BudgetAlokasi, DTO_BudgetAlokasiList, EditableDTO_BudgetAlokasiList, DTO_BudgetLedger, EditableDTO_BudgetLedger, DTO_BudgetAlokasiRemaining, EditableDTO_BudgetAlokasiRemaining, DTO_Budget, EditableDTO_Budget, DTO_MasterBudgets, EditableDTO_MasterBudgets, DTO_BudgetDetail, EditableDTO_BudgetDetail, DTO_Budgets, EditableDTO_Budgets, DTO_PPLH, EditableDTO_PPLH, DTO_PPLD, EditableDTO_PPLD, DTO_RETUR, EditableDTO_RETUR, DTO_RETURD, EditableDTO_RETURD, DTO_RETURP, EditableDTO_RETURP, DTO_UserType, EditableDTO_UserType, MasterRole, EditableMasterRole, PermissionRefId, MasterRoleId, MasterOrganization, EditableMasterOrganization, MasterOrganizationId, MasterJobPosition, EditableMasterJobPosition, MasterJobPositionId, MasterJobLevel, EditableMasterJobLevel, MasterJobLevelId, PermissionRef, EditablePermissionRef, MasterPermission, EditableMasterPermission, MasterPermissionId, Author, EditableAuthor, BookAuthor, EditableBookAuthor, AuthorId, Book, EditableBook, BookId, DTO_Feature, EditableDTO_Feature, DTO_ApprovalConfig, EditableDTO_ApprovalConfig, DTO_Approval, EditableDTO_Approval, DTO_ApprovalConfigCondition, EditableDTO_ApprovalConfigCondition, DTO_StepApproval, EditableDTO_StepApproval, DTO_Area, EditableDTO_Area, DTO_BookWithAuthors, EditableDTO_BookWithAuthors, DTO_Brand, EditableDTO_Brand, DTO_BudgetAlokasiDetail, EditableDTO_BudgetAlokasiDetail, DTO_BudgetTopUp, EditableDTO_BudgetTopUp, DTO_BudgetTopUpDetail, EditableDTO_BudgetTopUpDetail, DTO_BudgetTransfer, EditableDTO_BudgetTransfer, DTO_BudgetTransferDetail, EditableDTO_BudgetTransferDetail, DTO_Coa, EditableDTO_Coa, DTO_Departmen, EditableDTO_Departmen, DTO_Distributor, EditableDTO_Distributor, DTO_EmailTemplate, EditableDTO_EmailTemplate, DTO_EstimasiHargaBranding, EditableDTO_EstimasiHargaBranding, DTO_EstimasiHargaBrandingList, EditableDTO_EstimasiHargaBrandingList, DTO_HeaderPpl, EditableDTO_HeaderPpl, DTO_HeaderPplList, EditableDTO_HeaderPplList, DTO_HeaderProjek, EditableDTO_HeaderProjek, DTO_HeaderProjekList, EditableDTO_HeaderProjekList, DTO_HeaderProjekBrand, EditableDTO_HeaderProjekBrand, DTO_HeaderProjekDepartemen, EditableDTO_HeaderProjekDepartemen, DTO_JenisPpl, EditableDTO_JenisPpl, DTO_KodeKlaims, EditableDTO_KodeKlaims, DTO_JenisPplList, EditableDTO_JenisPplList, DTO_JenisProgram, EditableDTO_JenisProgram, DTO_JurnalLedger, EditableDTO_JurnalLedger, DTO_KategoriPpl, EditableDTO_KategoriPpl, DTO_MasterAccount, EditableDTO_MasterAccount, DTO_MasterJabatan, EditableDTO_MasterJabatan, DTO_MasterKaryawan, EditableDTO_MasterKaryawan, DTO_MasterKlaim, EditableDTO_MasterKlaim, DTO_MasterKlaimSyarat, EditableDTO_MasterKlaimSyarat, DTO_MasterOrg, EditableDTO_MasterOrg, DTO_MasterJobPos, EditableDTO_MasterJobPos, DTO_MasterJobLvl, EditableDTO_MasterJobLvl, DTO_MasterPerm, EditableDTO_MasterPerm, DTO_MasterRole, EditableDTO_MasterRole, DTO_PermissionRef, EditableDTO_PermissionRef, DTO_MasterUser, EditableDTO_MasterUser, DTO_UserAreaId, DTO_UserDistributorId, DTO_UsersAttachment, EditableDTO_UsersAttachment, DTO_MasterProvinsi, EditableDTO_MasterProvinsi, DTO_MasterKota, EditableDTO_MasterKota, DTO_MasterKecamatan, EditableDTO_MasterKecamatan, DTO_MasterKelurahan, EditableDTO_MasterKelurahan, DTO_OITM, EditableDTO_OITM, DTO_Outlet, EditableDTO_Outlet, DTO_OutletGroup, EditableDTO_OutletGroup, DTO_PengajuanForm, EditableDTO_PengajuanForm, DTO_PengajuanFormOutlet, EditableDTO_PengajuanFormOutlet, DTO_PengajuanFormAttachment, EditableDTO_PengajuanFormAttachment, DTO_PengajuanFormProduk, EditableDTO_PengajuanFormProduk, DTO_PengajuanFormDetail, EditableDTO_PengajuanFormDetail, DTO_PostBudget, EditableDTO_PostBudget, DTO_Channel, EditableDTO_Channel, DTO_BudgetSap, EditableDTO_BudgetSap, DTO_MasterBudget, EditableDTO_MasterBudget, DTO_PplArea, EditableDTO_PplArea, DTO_PplAttachment, EditableDTO_PplAttachment, DTO_PplBudgetAlokasi, EditableDTO_PplBudgetAlokasi, DTO_PplDetailProduk, EditableDTO_PplDetailProduk, DTO_PplDetails, EditableDTO_PplDetails, DTO_PplOutlet, EditableDTO_PplOutlet, DTO_Produk, EditableDTO_Produk, DTO_ProdukCategori, EditableDTO_ProdukCategori, DTO_Provinsi, EditableDTO_Provinsi, DTO_Kota, EditableDTO_Kota, DTO_Kecamatan, EditableDTO_Kecamatan, DTO_Kelurahan, EditableDTO_Kelurahan, DTO_Region, EditableDTO_Region, DTO_Resi, EditableDTO_Resi, DTO_ResiDetailProdukId, DTO_ResiPicId, DTO_ResiAttachmentId, DTO_ResiOutlet, EditableDTO_ResiOutlet, DTO_Sales, EditableDTO_Sales, DTO_Salesman, EditableDTO_Salesman, DTO_Settings, EditableDTO_Settings, DTO_SkenarioBudget, EditableDTO_SkenarioBudget, DTO_SkenarioBudgetList, EditableDTO_SkenarioBudgetList, DTO_MasterKeyVisual, EditableDTO_MasterKeyVisual, DTO_MasterOrgSlim, EditableDTO_MasterOrgSlim, DTO_MasterOrgSlimId, DTO_UserArea, EditableDTO_UserArea, DTO_UserDistributor, EditableDTO_UserDistributor, DTO_ResiDetailProduk, EditableDTO_ResiDetailProduk, DTO_ResiPic, EditableDTO_ResiPic, DTO_ResiAttachment, EditableDTO_ResiAttachment, DtoHistoryTransaksiEstimasi, EditableDtoHistoryTransaksiEstimasi, DtoHistoryTransaksiRealiasasi, EditableDtoHistoryTransaksiRealiasasi, UserDto, EditableUserDto, UserItem, EditableUserItem, TargetSeDto, EditableTargetSeDto, TargetItem, EditableTargetItem, SosmedDto, EditableSosmedDto, PlatformItem, EditablePlatformItem, SyaratDto, EditableSyaratDto, SyaratItem, EditableSyaratItem } from "./DefaultModel";
import type { QDTO_BudgetAlokasi, QDTO_BudgetAlokasiList, QDTO_BudgetLedger, QDTO_BudgetAlokasiRemaining, QDTO_Budget, QDTO_MasterBudgets, QDTO_BudgetDetail, QDTO_Budgets, QDTO_PPLH, QDTO_PPLD, QDTO_RETUR, QDTO_RETURD, QDTO_RETURP, QDTO_UserType, QMasterRole, QMasterOrganization, QMasterJobPosition, QMasterJobLevel, QPermissionRef, QMasterPermission, QAuthor, QBookAuthor, QBook, QDTO_Feature, QDTO_ApprovalConfig, QDTO_Approval, QDTO_ApprovalConfigCondition, QDTO_StepApproval, QDTO_Area, QDTO_BookWithAuthors, QDTO_Brand, QDTO_BudgetAlokasiDetail, QDTO_BudgetTopUp, QDTO_BudgetTopUpDetail, QDTO_BudgetTransfer, QDTO_BudgetTransferDetail, QDTO_Coa, QDTO_Departmen, QDTO_Distributor, QDTO_EmailTemplate, QDTO_EstimasiHargaBranding, QDTO_EstimasiHargaBrandingList, QDTO_HeaderPpl, QDTO_HeaderPplList, QDTO_HeaderProjek, QDTO_HeaderProjekList, QDTO_HeaderProjekBrand, QDTO_HeaderProjekDepartemen, QDTO_JenisPpl, QDTO_KodeKlaims, QDTO_JenisPplList, QDTO_JenisProgram, QDTO_JurnalLedger, QDTO_KategoriPpl, QDTO_MasterAccount, QDTO_MasterJabatan, QDTO_MasterKaryawan, QDTO_MasterKlaim, QDTO_MasterKlaimSyarat, QDTO_MasterOrg, QDTO_MasterJobPos, QDTO_MasterJobLvl, QDTO_MasterPerm, QDTO_MasterRole, QDTO_PermissionRef, QDTO_MasterUser, QDTO_UsersAttachment, QDTO_MasterProvinsi, QDTO_MasterKota, QDTO_MasterKecamatan, QDTO_MasterKelurahan, QDTO_OITM, QDTO_Outlet, QDTO_OutletGroup, QDTO_PengajuanForm, QDTO_PengajuanFormOutlet, QDTO_PengajuanFormAttachment, QDTO_PengajuanFormProduk, QDTO_PengajuanFormDetail, QDTO_PostBudget, QDTO_Channel, QDTO_BudgetSap, QDTO_MasterBudget, QDTO_PplArea, QDTO_PplAttachment, QDTO_PplBudgetAlokasi, QDTO_PplDetailProduk, QDTO_PplDetails, QDTO_PplOutlet, QDTO_Produk, QDTO_ProdukCategori, QDTO_Provinsi, QDTO_Kota, QDTO_Kecamatan, QDTO_Kelurahan, QDTO_Region, QDTO_Resi, QDTO_ResiOutlet, QDTO_Sales, QDTO_Salesman, QDTO_Settings, QDTO_SkenarioBudget, QDTO_SkenarioBudgetList, QDTO_MasterKeyVisual, QDTO_MasterOrgSlim, QDTO_UserArea, QDTO_UserDistributor, QDTO_ResiDetailProduk, QDTO_ResiPic, QDTO_ResiAttachment, QDtoHistoryTransaksiEstimasi, QDtoHistoryTransaksiRealiasasi, QUserDto, QUserItem, QTargetSeDto, QTargetItem, QSosmedDto, QPlatformItem, QSyaratDto, QSyaratItem } from "./QDefault";
export declare class DefaultService<in out ClientType extends ODataHttpClient> extends ODataService<ClientType> {
    DTO_BudgetAlokasi(): DTO_BudgetAlokasiCollectionService<ClientType>;
    DTO_BudgetAlokasi(id: DTO_BudgetAlokasiId): DTO_BudgetAlokasiService<ClientType>;
    DTO_BudgetAlokasiList(): DTO_BudgetAlokasiListCollectionService<ClientType>;
    DTO_BudgetAlokasiList(id: DTO_BudgetAlokasiListId): DTO_BudgetAlokasiListService<ClientType>;
    DTO_BudgetLedger(): DTO_BudgetLedgerCollectionService<ClientType>;
    DTO_BudgetLedger(id: DTO_BudgetLedgerId): DTO_BudgetLedgerService<ClientType>;
    DTO_BudgetAlokasiRemaining(): DTO_BudgetAlokasiRemainingCollectionService<ClientType>;
    DTO_BudgetAlokasiRemaining(id: DTO_BudgetAlokasiRemainingId): DTO_BudgetAlokasiRemainingService<ClientType>;
    DTO_Budget(): DTO_BudgetCollectionService<ClientType>;
    DTO_Budget(id: DTO_BudgetId): DTO_BudgetService<ClientType>;
    DTO_MasterBudgets(): DTO_MasterBudgetsCollectionService<ClientType>;
    DTO_MasterBudgets(id: DTO_MasterBudgetsId): DTO_MasterBudgetsService<ClientType>;
    DTO_BudgetDetail(): DTO_BudgetDetailCollectionService<ClientType>;
    DTO_BudgetDetail(id: DTO_BudgetDetailId): DTO_BudgetDetailService<ClientType>;
    DTO_Budgets(): DTO_BudgetsCollectionService<ClientType>;
    DTO_Budgets(id: DTO_BudgetsId): DTO_BudgetsService<ClientType>;
    DTO_PPLH(): DTO_PPLHCollectionService<ClientType>;
    DTO_PPLH(id: DTO_PPLHId): DTO_PPLHService<ClientType>;
    DTO_PPLD(): DTO_PPLDCollectionService<ClientType>;
    DTO_PPLD(id: DTO_PPLDId): DTO_PPLDService<ClientType>;
    DTO_RETUR(): DTO_RETURCollectionService<ClientType>;
    DTO_RETUR(id: DTO_RETURId): DTO_RETURService<ClientType>;
    DTO_RETURD(): DTO_RETURDCollectionService<ClientType>;
    DTO_RETURD(id: DTO_RETURDId): DTO_RETURDService<ClientType>;
    DTO_RETURP(): DTO_RETURPCollectionService<ClientType>;
    DTO_RETURP(id: DTO_RETURPId): DTO_RETURPService<ClientType>;
    DTO_UserType(): DTO_UserTypeCollectionService<ClientType>;
    DTO_UserType(id: DTO_UserTypeId): DTO_UserTypeService<ClientType>;
    DTO_Feature(): DTO_FeatureCollectionService<ClientType>;
    DTO_Feature(id: DTO_FeatureId): DTO_FeatureService<ClientType>;
    DTO_ApprovalConfig(): DTO_ApprovalConfigCollectionService<ClientType>;
    DTO_ApprovalConfig(id: DTO_ApprovalConfigId): DTO_ApprovalConfigService<ClientType>;
    DTO_Approval(): DTO_ApprovalCollectionService<ClientType>;
    DTO_Approval(id: DTO_ApprovalId): DTO_ApprovalService<ClientType>;
    DTO_ApprovalConfigCondition(): DTO_ApprovalConfigConditionCollectionService<ClientType>;
    DTO_ApprovalConfigCondition(id: DTO_ApprovalConfigConditionId): DTO_ApprovalConfigConditionService<ClientType>;
    DTO_StepApproval(): DTO_StepApprovalCollectionService<ClientType>;
    DTO_StepApproval(id: DTO_StepApprovalId): DTO_StepApprovalService<ClientType>;
    DTO_Area(): DTO_AreaCollectionService<ClientType>;
    DTO_Area(id: DTO_AreaId): DTO_AreaService<ClientType>;
    DTO_BookWithAuthors(): DTO_BookWithAuthorsCollectionService<ClientType>;
    DTO_BookWithAuthors(id: DTO_BookWithAuthorsId): DTO_BookWithAuthorsService<ClientType>;
    DTO_Brand(): DTO_BrandCollectionService<ClientType>;
    DTO_Brand(id: DTO_BrandId): DTO_BrandService<ClientType>;
    DTO_BudgetAlokasiDetail(): DTO_BudgetAlokasiDetailCollectionService<ClientType>;
    DTO_BudgetAlokasiDetail(id: DTO_BudgetAlokasiDetailId): DTO_BudgetAlokasiDetailService<ClientType>;
    DTO_BudgetTopUp(): DTO_BudgetTopUpCollectionService<ClientType>;
    DTO_BudgetTopUp(id: DTO_BudgetTopUpId): DTO_BudgetTopUpService<ClientType>;
    DTO_BudgetTopUpDetail(): DTO_BudgetTopUpDetailCollectionService<ClientType>;
    DTO_BudgetTopUpDetail(id: DTO_BudgetTopUpDetailId): DTO_BudgetTopUpDetailService<ClientType>;
    DTO_BudgetTransfer(): DTO_BudgetTransferCollectionService<ClientType>;
    DTO_BudgetTransfer(id: DTO_BudgetTransferId): DTO_BudgetTransferService<ClientType>;
    DTO_BudgetTransferDetail(): DTO_BudgetTransferDetailCollectionService<ClientType>;
    DTO_BudgetTransferDetail(id: DTO_BudgetTransferDetailId): DTO_BudgetTransferDetailService<ClientType>;
    DTO_Coa(): DTO_CoaCollectionService<ClientType>;
    DTO_Coa(id: DTO_CoaId): DTO_CoaService<ClientType>;
    DTO_Departmen(): DTO_DepartmenCollectionService<ClientType>;
    DTO_Departmen(id: DTO_DepartmenId): DTO_DepartmenService<ClientType>;
    DTO_Distributor(): DTO_DistributorCollectionService<ClientType>;
    DTO_Distributor(id: DTO_DistributorId): DTO_DistributorService<ClientType>;
    DTO_EmailTemplate(): DTO_EmailTemplateCollectionService<ClientType>;
    DTO_EmailTemplate(id: DTO_EmailTemplateId): DTO_EmailTemplateService<ClientType>;
    DTO_EstimasiHargaBranding(): DTO_EstimasiHargaBrandingCollectionService<ClientType>;
    DTO_EstimasiHargaBranding(id: DTO_EstimasiHargaBrandingId): DTO_EstimasiHargaBrandingService<ClientType>;
    DTO_EstimasiHargaBrandingList(): DTO_EstimasiHargaBrandingListCollectionService<ClientType>;
    DTO_EstimasiHargaBrandingList(id: DTO_EstimasiHargaBrandingListId): DTO_EstimasiHargaBrandingListService<ClientType>;
    DTO_HeaderPpl(): DTO_HeaderPplCollectionService<ClientType>;
    DTO_HeaderPpl(id: DTO_HeaderPplId): DTO_HeaderPplService<ClientType>;
    DTO_HeaderPplList(): DTO_HeaderPplListCollectionService<ClientType>;
    DTO_HeaderPplList(id: DTO_HeaderPplListId): DTO_HeaderPplListService<ClientType>;
    DTO_HeaderProjek(): DTO_HeaderProjekCollectionService<ClientType>;
    DTO_HeaderProjek(id: DTO_HeaderProjekId): DTO_HeaderProjekService<ClientType>;
    DTO_HeaderProjekList(): DTO_HeaderProjekListCollectionService<ClientType>;
    DTO_HeaderProjekList(id: DTO_HeaderProjekListId): DTO_HeaderProjekListService<ClientType>;
    DTO_HeaderProjekBrand(): DTO_HeaderProjekBrandCollectionService<ClientType>;
    DTO_HeaderProjekBrand(id: DTO_HeaderProjekBrandId): DTO_HeaderProjekBrandService<ClientType>;
    DTO_HeaderProjekDepartemen(): DTO_HeaderProjekDepartemenCollectionService<ClientType>;
    DTO_HeaderProjekDepartemen(id: DTO_HeaderProjekDepartemenId): DTO_HeaderProjekDepartemenService<ClientType>;
    DTO_JenisPpl(): DTO_JenisPplCollectionService<ClientType>;
    DTO_JenisPpl(id: DTO_JenisPplId): DTO_JenisPplService<ClientType>;
    DTO_KodeKlaims(): DTO_KodeKlaimsCollectionService<ClientType>;
    DTO_KodeKlaims(id: DTO_KodeKlaimsId): DTO_KodeKlaimsService<ClientType>;
    DTO_JenisPplList(): DTO_JenisPplListCollectionService<ClientType>;
    DTO_JenisPplList(id: DTO_JenisPplListId): DTO_JenisPplListService<ClientType>;
    DTO_JenisProgram(): DTO_JenisProgramCollectionService<ClientType>;
    DTO_JenisProgram(id: DTO_JenisProgramId): DTO_JenisProgramService<ClientType>;
    DTO_JurnalLedger(): DTO_JurnalLedgerCollectionService<ClientType>;
    DTO_JurnalLedger(id: DTO_JurnalLedgerId): DTO_JurnalLedgerService<ClientType>;
    DTO_KategoriPpl(): DTO_KategoriPplCollectionService<ClientType>;
    DTO_KategoriPpl(id: DTO_KategoriPplId): DTO_KategoriPplService<ClientType>;
    DTO_MasterAccount(): DTO_MasterAccountCollectionService<ClientType>;
    DTO_MasterAccount(id: DTO_MasterAccountId): DTO_MasterAccountService<ClientType>;
    DTO_MasterJabatan(): DTO_MasterJabatanCollectionService<ClientType>;
    DTO_MasterJabatan(id: DTO_MasterJabatanId): DTO_MasterJabatanService<ClientType>;
    DTO_MasterKaryawan(): DTO_MasterKaryawanCollectionService<ClientType>;
    DTO_MasterKaryawan(id: DTO_MasterKaryawanId): DTO_MasterKaryawanService<ClientType>;
    DTO_MasterKlaim(): DTO_MasterKlaimCollectionService<ClientType>;
    DTO_MasterKlaim(id: DTO_MasterKlaimId): DTO_MasterKlaimService<ClientType>;
    DTO_MasterKlaimSyarat(): DTO_MasterKlaimSyaratCollectionService<ClientType>;
    DTO_MasterKlaimSyarat(id: DTO_MasterKlaimSyaratId): DTO_MasterKlaimSyaratService<ClientType>;
    DTO_MasterOrg(): DTO_MasterOrgCollectionService<ClientType>;
    DTO_MasterOrg(id: DTO_MasterOrgId): DTO_MasterOrgService<ClientType>;
    DTO_MasterJobPos(): DTO_MasterJobPosCollectionService<ClientType>;
    DTO_MasterJobPos(id: DTO_MasterJobPosId): DTO_MasterJobPosService<ClientType>;
    DTO_MasterJobLvl(): DTO_MasterJobLvlCollectionService<ClientType>;
    DTO_MasterJobLvl(id: DTO_MasterJobLvlId): DTO_MasterJobLvlService<ClientType>;
    DTO_MasterPerm(): DTO_MasterPermCollectionService<ClientType>;
    DTO_MasterPerm(id: DTO_MasterPermId): DTO_MasterPermService<ClientType>;
    DTO_MasterRole(): DTO_MasterRoleCollectionService<ClientType>;
    DTO_MasterRole(id: DTO_MasterRoleId): DTO_MasterRoleService<ClientType>;
    DTO_PermissionRef(): DTO_PermissionRefCollectionService<ClientType>;
    DTO_PermissionRef(id: DTO_PermissionRefId): DTO_PermissionRefService<ClientType>;
    DTO_MasterUser(): DTO_MasterUserCollectionService<ClientType>;
    DTO_MasterUser(id: DTO_MasterUserId): DTO_MasterUserService<ClientType>;
    DTO_UsersAttachment(): DTO_UsersAttachmentCollectionService<ClientType>;
    DTO_UsersAttachment(id: DTO_UsersAttachmentId): DTO_UsersAttachmentService<ClientType>;
    DTO_MasterProvinsi(): DTO_MasterProvinsiCollectionService<ClientType>;
    DTO_MasterProvinsi(id: DTO_MasterProvinsiId): DTO_MasterProvinsiService<ClientType>;
    DTO_MasterKota(): DTO_MasterKotaCollectionService<ClientType>;
    DTO_MasterKota(id: DTO_MasterKotaId): DTO_MasterKotaService<ClientType>;
    DTO_MasterKecamatan(): DTO_MasterKecamatanCollectionService<ClientType>;
    DTO_MasterKecamatan(id: DTO_MasterKecamatanId): DTO_MasterKecamatanService<ClientType>;
    DTO_MasterKelurahan(): DTO_MasterKelurahanCollectionService<ClientType>;
    DTO_MasterKelurahan(id: DTO_MasterKelurahanId): DTO_MasterKelurahanService<ClientType>;
    DTO_OITM(): DTO_OITMCollectionService<ClientType>;
    DTO_OITM(id: DTO_OITMId): DTO_OITMService<ClientType>;
    DTO_Outlet(): DTO_OutletCollectionService<ClientType>;
    DTO_Outlet(id: DTO_OutletId): DTO_OutletService<ClientType>;
    DTO_OutletGroup(): DTO_OutletGroupCollectionService<ClientType>;
    DTO_OutletGroup(id: DTO_OutletGroupId): DTO_OutletGroupService<ClientType>;
    DTO_PengajuanForm(): DTO_PengajuanFormCollectionService<ClientType>;
    DTO_PengajuanForm(id: DTO_PengajuanFormId): DTO_PengajuanFormService<ClientType>;
    DTO_PengajuanFormOutlet(): DTO_PengajuanFormOutletCollectionService<ClientType>;
    DTO_PengajuanFormOutlet(id: DTO_PengajuanFormOutletId): DTO_PengajuanFormOutletService<ClientType>;
    DTO_PengajuanFormAttachment(): DTO_PengajuanFormAttachmentCollectionService<ClientType>;
    DTO_PengajuanFormAttachment(id: DTO_PengajuanFormAttachmentId): DTO_PengajuanFormAttachmentService<ClientType>;
    DTO_PengajuanFormProduk(): DTO_PengajuanFormProdukCollectionService<ClientType>;
    DTO_PengajuanFormProduk(id: DTO_PengajuanFormProdukId): DTO_PengajuanFormProdukService<ClientType>;
    DTO_PengajuanFormDetail(): DTO_PengajuanFormDetailCollectionService<ClientType>;
    DTO_PengajuanFormDetail(id: DTO_PengajuanFormDetailId): DTO_PengajuanFormDetailService<ClientType>;
    DTO_PostBudget(): DTO_PostBudgetCollectionService<ClientType>;
    DTO_PostBudget(id: DTO_PostBudgetId): DTO_PostBudgetService<ClientType>;
    DTO_Channel(): DTO_ChannelCollectionService<ClientType>;
    DTO_Channel(id: DTO_ChannelId): DTO_ChannelService<ClientType>;
    DTO_BudgetSap(): DTO_BudgetSapCollectionService<ClientType>;
    DTO_BudgetSap(id: DTO_BudgetSapId): DTO_BudgetSapService<ClientType>;
    DTO_MasterBudget(): DTO_MasterBudgetCollectionService<ClientType>;
    DTO_MasterBudget(id: DTO_MasterBudgetId): DTO_MasterBudgetService<ClientType>;
    DTO_PplArea(): DTO_PplAreaCollectionService<ClientType>;
    DTO_PplArea(id: DTO_PplAreaId): DTO_PplAreaService<ClientType>;
    DTO_PplAttachment(): DTO_PplAttachmentCollectionService<ClientType>;
    DTO_PplAttachment(id: DTO_PplAttachmentId): DTO_PplAttachmentService<ClientType>;
    DTO_PplBudgetAlokasi(): DTO_PplBudgetAlokasiCollectionService<ClientType>;
    DTO_PplBudgetAlokasi(id: DTO_PplBudgetAlokasiId): DTO_PplBudgetAlokasiService<ClientType>;
    DTO_PplDetailProduk(): DTO_PplDetailProdukCollectionService<ClientType>;
    DTO_PplDetailProduk(id: DTO_PplDetailProdukId): DTO_PplDetailProdukService<ClientType>;
    DTO_PplDetails(): DTO_PplDetailsCollectionService<ClientType>;
    DTO_PplDetails(id: DTO_PplDetailsId): DTO_PplDetailsService<ClientType>;
    DTO_PplOutlet(): DTO_PplOutletCollectionService<ClientType>;
    DTO_PplOutlet(id: DTO_PplOutletId): DTO_PplOutletService<ClientType>;
    DTO_Produk(): DTO_ProdukCollectionService<ClientType>;
    DTO_Produk(id: DTO_ProdukId): DTO_ProdukService<ClientType>;
    DTO_ProdukCategori(): DTO_ProdukCategoriCollectionService<ClientType>;
    DTO_ProdukCategori(id: DTO_ProdukCategoriId): DTO_ProdukCategoriService<ClientType>;
    DTO_Provinsi(): DTO_ProvinsiCollectionService<ClientType>;
    DTO_Provinsi(id: DTO_ProvinsiId): DTO_ProvinsiService<ClientType>;
    DTO_Kota(): DTO_KotaCollectionService<ClientType>;
    DTO_Kota(id: DTO_KotaId): DTO_KotaService<ClientType>;
    DTO_Kecamatan(): DTO_KecamatanCollectionService<ClientType>;
    DTO_Kecamatan(id: DTO_KecamatanId): DTO_KecamatanService<ClientType>;
    DTO_Kelurahan(): DTO_KelurahanCollectionService<ClientType>;
    DTO_Kelurahan(id: DTO_KelurahanId): DTO_KelurahanService<ClientType>;
    DTO_Region(): DTO_RegionCollectionService<ClientType>;
    DTO_Region(id: DTO_RegionId): DTO_RegionService<ClientType>;
    DTO_Resi(): DTO_ResiCollectionService<ClientType>;
    DTO_Resi(id: DTO_ResiId): DTO_ResiService<ClientType>;
    DTO_ResiOutlet(): DTO_ResiOutletCollectionService<ClientType>;
    DTO_ResiOutlet(id: DTO_ResiOutletId): DTO_ResiOutletService<ClientType>;
    DTO_Sales(): DTO_SalesCollectionService<ClientType>;
    DTO_Sales(id: DTO_SalesId): DTO_SalesService<ClientType>;
    DTO_Salesman(): DTO_SalesmanCollectionService<ClientType>;
    DTO_Salesman(id: DTO_SalesmanId): DTO_SalesmanService<ClientType>;
    DTO_Settings(): DTO_SettingsCollectionService<ClientType>;
    DTO_Settings(id: DTO_SettingsId): DTO_SettingsService<ClientType>;
    DTO_SkenarioBudget(): DTO_SkenarioBudgetCollectionService<ClientType>;
    DTO_SkenarioBudget(id: DTO_SkenarioBudgetId): DTO_SkenarioBudgetService<ClientType>;
    DTO_SkenarioBudgetList(): DTO_SkenarioBudgetListCollectionService<ClientType>;
    DTO_SkenarioBudgetList(id: DTO_SkenarioBudgetListId): DTO_SkenarioBudgetListService<ClientType>;
    DTO_MasterKeyVisual(): DTO_MasterKeyVisualCollectionService<ClientType>;
    DTO_MasterKeyVisual(id: DTO_MasterKeyVisualId): DTO_MasterKeyVisualService<ClientType>;
    DtoHistoryTransaksiEstimasi(): DtoHistoryTransaksiEstimasiCollectionService<ClientType>;
    DtoHistoryTransaksiEstimasi(id: DtoHistoryTransaksiEstimasiId): DtoHistoryTransaksiEstimasiService<ClientType>;
    DtoHistoryTransaksiRealiasasi(): DtoHistoryTransaksiRealiasasiCollectionService<ClientType>;
    DtoHistoryTransaksiRealiasasi(id: DtoHistoryTransaksiRealiasasiId): DtoHistoryTransaksiRealiasasiService<ClientType>;
}
export declare class DTO_BudgetAlokasiService<in out ClientType extends ODataHttpClient> extends EntityTypeServiceV4<ClientType, DTO_BudgetAlokasi, EditableDTO_BudgetAlokasi, QDTO_BudgetAlokasi> {
    private _PostBudget?;
    private _SkenarioBudget?;
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
    PostBudget(): DTO_PostBudgetService<ClientType>;
    SkenarioBudget(): DTO_SkenarioBudgetService<ClientType>;
    BudgetAlokasiDetail(): DTO_BudgetAlokasiDetailCollectionService<ClientType>;
    BudgetAlokasiDetail(id: DTO_BudgetAlokasiDetailId): DTO_BudgetAlokasiDetailService<ClientType>;
}
export declare class DTO_BudgetAlokasiCollectionService<in out ClientType extends ODataHttpClient> extends EntitySetServiceV4<ClientType, DTO_BudgetAlokasi, EditableDTO_BudgetAlokasi, QDTO_BudgetAlokasi, DTO_BudgetAlokasiId> {
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
}
export declare class DTO_BudgetAlokasiListService<in out ClientType extends ODataHttpClient> extends EntityTypeServiceV4<ClientType, DTO_BudgetAlokasiList, EditableDTO_BudgetAlokasiList, QDTO_BudgetAlokasiList> {
    private _PostBudget?;
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
    PostBudget(): DTO_PostBudgetService<ClientType>;
    BudgetAlokasiDetail(): DTO_BudgetAlokasiDetailCollectionService<ClientType>;
    BudgetAlokasiDetail(id: DTO_BudgetAlokasiDetailId): DTO_BudgetAlokasiDetailService<ClientType>;
}
export declare class DTO_BudgetAlokasiListCollectionService<in out ClientType extends ODataHttpClient> extends EntitySetServiceV4<ClientType, DTO_BudgetAlokasiList, EditableDTO_BudgetAlokasiList, QDTO_BudgetAlokasiList, DTO_BudgetAlokasiListId> {
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
}
export declare class DTO_BudgetLedgerService<in out ClientType extends ODataHttpClient> extends EntityTypeServiceV4<ClientType, DTO_BudgetLedger, EditableDTO_BudgetLedger, QDTO_BudgetLedger> {
    private _SkenarioBudget?;
    private _HeaderProjek?;
    private _BudgetAlokasi?;
    private _HeaderPpl?;
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
    SkenarioBudget(): DTO_SkenarioBudgetService<ClientType>;
    HeaderProjek(): DTO_HeaderProjekService<ClientType>;
    BudgetAlokasi(): DTO_BudgetAlokasiService<ClientType>;
    HeaderPpl(): DTO_HeaderPplService<ClientType>;
}
export declare class DTO_BudgetLedgerCollectionService<in out ClientType extends ODataHttpClient> extends EntitySetServiceV4<ClientType, DTO_BudgetLedger, EditableDTO_BudgetLedger, QDTO_BudgetLedger, DTO_BudgetLedgerId> {
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
}
export declare class DTO_BudgetAlokasiRemainingService<in out ClientType extends ODataHttpClient> extends EntityTypeServiceV4<ClientType, DTO_BudgetAlokasiRemaining, EditableDTO_BudgetAlokasiRemaining, QDTO_BudgetAlokasiRemaining> {
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
}
export declare class DTO_BudgetAlokasiRemainingCollectionService<in out ClientType extends ODataHttpClient> extends EntitySetServiceV4<ClientType, DTO_BudgetAlokasiRemaining, EditableDTO_BudgetAlokasiRemaining, QDTO_BudgetAlokasiRemaining, DTO_BudgetAlokasiRemainingId> {
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
}
export declare class DTO_BudgetService<in out ClientType extends ODataHttpClient> extends EntityTypeServiceV4<ClientType, DTO_Budget, EditableDTO_Budget, QDTO_Budget> {
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
    Details(): DTO_BudgetDetailCollectionService<ClientType>;
    Details(id: DTO_BudgetDetailId): DTO_BudgetDetailService<ClientType>;
}
export declare class DTO_BudgetCollectionService<in out ClientType extends ODataHttpClient> extends EntitySetServiceV4<ClientType, DTO_Budget, EditableDTO_Budget, QDTO_Budget, DTO_BudgetId> {
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
}
export declare class DTO_MasterBudgetsService<in out ClientType extends ODataHttpClient> extends EntityTypeServiceV4<ClientType, DTO_MasterBudgets, EditableDTO_MasterBudgets, QDTO_MasterBudgets> {
    private _MasterBudgetIdList?;
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
    MasterBudgetIdList(): CollectionServiceV4<ClientType, NumberCollection, QNumberCollection<number>, number>;
}
export declare class DTO_MasterBudgetsCollectionService<in out ClientType extends ODataHttpClient> extends EntitySetServiceV4<ClientType, DTO_MasterBudgets, EditableDTO_MasterBudgets, QDTO_MasterBudgets, DTO_MasterBudgetsId> {
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
}
export declare class DTO_BudgetDetailService<in out ClientType extends ODataHttpClient> extends EntityTypeServiceV4<ClientType, DTO_BudgetDetail, EditableDTO_BudgetDetail, QDTO_BudgetDetail> {
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
}
export declare class DTO_BudgetDetailCollectionService<in out ClientType extends ODataHttpClient> extends EntitySetServiceV4<ClientType, DTO_BudgetDetail, EditableDTO_BudgetDetail, QDTO_BudgetDetail, DTO_BudgetDetailId> {
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
}
export declare class DTO_BudgetsService<in out ClientType extends ODataHttpClient> extends EntityTypeServiceV4<ClientType, DTO_Budgets, EditableDTO_Budgets, QDTO_Budgets> {
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
}
export declare class DTO_BudgetsCollectionService<in out ClientType extends ODataHttpClient> extends EntitySetServiceV4<ClientType, DTO_Budgets, EditableDTO_Budgets, QDTO_Budgets, DTO_BudgetsId> {
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
}
export declare class DTO_PPLHService<in out ClientType extends ODataHttpClient> extends EntityTypeServiceV4<ClientType, DTO_PPLH, EditableDTO_PPLH, QDTO_PPLH> {
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
    PplDetails(): DTO_PPLDCollectionService<ClientType>;
    PplDetails(id: DTO_PPLDId): DTO_PPLDService<ClientType>;
}
export declare class DTO_PPLHCollectionService<in out ClientType extends ODataHttpClient> extends EntitySetServiceV4<ClientType, DTO_PPLH, EditableDTO_PPLH, QDTO_PPLH, DTO_PPLHId> {
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
}
export declare class DTO_PPLDService<in out ClientType extends ODataHttpClient> extends EntityTypeServiceV4<ClientType, DTO_PPLD, EditableDTO_PPLD, QDTO_PPLD> {
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
}
export declare class DTO_PPLDCollectionService<in out ClientType extends ODataHttpClient> extends EntitySetServiceV4<ClientType, DTO_PPLD, EditableDTO_PPLD, QDTO_PPLD, DTO_PPLDId> {
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
}
export declare class DTO_RETURService<in out ClientType extends ODataHttpClient> extends EntityTypeServiceV4<ClientType, DTO_RETUR, EditableDTO_RETUR, QDTO_RETUR> {
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
    ReturDetail(): DTO_RETURDCollectionService<ClientType>;
    ReturDetail(id: DTO_RETURDId): DTO_RETURDService<ClientType>;
    ReturProduct(): DTO_RETURPCollectionService<ClientType>;
    ReturProduct(id: DTO_RETURPId): DTO_RETURPService<ClientType>;
}
export declare class DTO_RETURCollectionService<in out ClientType extends ODataHttpClient> extends EntitySetServiceV4<ClientType, DTO_RETUR, EditableDTO_RETUR, QDTO_RETUR, DTO_RETURId> {
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
}
export declare class DTO_RETURDService<in out ClientType extends ODataHttpClient> extends EntityTypeServiceV4<ClientType, DTO_RETURD, EditableDTO_RETURD, QDTO_RETURD> {
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
}
export declare class DTO_RETURDCollectionService<in out ClientType extends ODataHttpClient> extends EntitySetServiceV4<ClientType, DTO_RETURD, EditableDTO_RETURD, QDTO_RETURD, DTO_RETURDId> {
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
}
export declare class DTO_RETURPService<in out ClientType extends ODataHttpClient> extends EntityTypeServiceV4<ClientType, DTO_RETURP, EditableDTO_RETURP, QDTO_RETURP> {
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
}
export declare class DTO_RETURPCollectionService<in out ClientType extends ODataHttpClient> extends EntitySetServiceV4<ClientType, DTO_RETURP, EditableDTO_RETURP, QDTO_RETURP, DTO_RETURPId> {
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
}
export declare class DTO_UserTypeService<in out ClientType extends ODataHttpClient> extends EntityTypeServiceV4<ClientType, DTO_UserType, EditableDTO_UserType, QDTO_UserType> {
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
}
export declare class DTO_UserTypeCollectionService<in out ClientType extends ODataHttpClient> extends EntitySetServiceV4<ClientType, DTO_UserType, EditableDTO_UserType, QDTO_UserType, DTO_UserTypeId> {
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
}
export declare class MasterRoleService<in out ClientType extends ODataHttpClient> extends EntityTypeServiceV4<ClientType, MasterRole, EditableMasterRole, QMasterRole> {
    private _Organization?;
    private _JobPosition?;
    private _JobLevel?;
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
    Organization(): MasterOrganizationService<ClientType>;
    JobPosition(): MasterJobPositionService<ClientType>;
    JobLevel(): MasterJobLevelService<ClientType>;
    Permissions(): PermissionRefCollectionService<ClientType>;
    Permissions(id: PermissionRefId): PermissionRefService<ClientType>;
}
export declare class MasterRoleCollectionService<in out ClientType extends ODataHttpClient> extends EntitySetServiceV4<ClientType, MasterRole, EditableMasterRole, QMasterRole, MasterRoleId> {
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
}
export declare class MasterOrganizationService<in out ClientType extends ODataHttpClient> extends EntityTypeServiceV4<ClientType, MasterOrganization, EditableMasterOrganization, QMasterOrganization> {
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
}
export declare class MasterOrganizationCollectionService<in out ClientType extends ODataHttpClient> extends EntitySetServiceV4<ClientType, MasterOrganization, EditableMasterOrganization, QMasterOrganization, MasterOrganizationId> {
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
}
export declare class MasterJobPositionService<in out ClientType extends ODataHttpClient> extends EntityTypeServiceV4<ClientType, MasterJobPosition, EditableMasterJobPosition, QMasterJobPosition> {
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
}
export declare class MasterJobPositionCollectionService<in out ClientType extends ODataHttpClient> extends EntitySetServiceV4<ClientType, MasterJobPosition, EditableMasterJobPosition, QMasterJobPosition, MasterJobPositionId> {
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
}
export declare class MasterJobLevelService<in out ClientType extends ODataHttpClient> extends EntityTypeServiceV4<ClientType, MasterJobLevel, EditableMasterJobLevel, QMasterJobLevel> {
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
}
export declare class MasterJobLevelCollectionService<in out ClientType extends ODataHttpClient> extends EntitySetServiceV4<ClientType, MasterJobLevel, EditableMasterJobLevel, QMasterJobLevel, MasterJobLevelId> {
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
}
export declare class PermissionRefService<in out ClientType extends ODataHttpClient> extends EntityTypeServiceV4<ClientType, PermissionRef, EditablePermissionRef, QPermissionRef> {
    private _Role?;
    private _Permission?;
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
    Role(): MasterRoleService<ClientType>;
    Permission(): MasterPermissionService<ClientType>;
}
export declare class PermissionRefCollectionService<in out ClientType extends ODataHttpClient> extends EntitySetServiceV4<ClientType, PermissionRef, EditablePermissionRef, QPermissionRef, PermissionRefId> {
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
}
export declare class MasterPermissionService<in out ClientType extends ODataHttpClient> extends EntityTypeServiceV4<ClientType, MasterPermission, EditableMasterPermission, QMasterPermission> {
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
}
export declare class MasterPermissionCollectionService<in out ClientType extends ODataHttpClient> extends EntitySetServiceV4<ClientType, MasterPermission, EditableMasterPermission, QMasterPermission, MasterPermissionId> {
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
}
export declare class AuthorService<in out ClientType extends ODataHttpClient> extends EntityTypeServiceV4<ClientType, Author, EditableAuthor, QAuthor> {
    private _BookAuthors?;
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
    BookAuthors(): CollectionServiceV4<ClientType, BookAuthor, QBookAuthor, EditableBookAuthor>;
}
export declare class AuthorCollectionService<in out ClientType extends ODataHttpClient> extends EntitySetServiceV4<ClientType, Author, EditableAuthor, QAuthor, AuthorId> {
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
}
export declare class BookService<in out ClientType extends ODataHttpClient> extends EntityTypeServiceV4<ClientType, Book, EditableBook, QBook> {
    private _BookAuthors?;
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
    BookAuthors(): CollectionServiceV4<ClientType, BookAuthor, QBookAuthor, EditableBookAuthor>;
}
export declare class BookCollectionService<in out ClientType extends ODataHttpClient> extends EntitySetServiceV4<ClientType, Book, EditableBook, QBook, BookId> {
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
}
export declare class DTO_FeatureService<in out ClientType extends ODataHttpClient> extends EntityTypeServiceV4<ClientType, DTO_Feature, EditableDTO_Feature, QDTO_Feature> {
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
}
export declare class DTO_FeatureCollectionService<in out ClientType extends ODataHttpClient> extends EntitySetServiceV4<ClientType, DTO_Feature, EditableDTO_Feature, QDTO_Feature, DTO_FeatureId> {
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
}
export declare class DTO_ApprovalConfigService<in out ClientType extends ODataHttpClient> extends EntityTypeServiceV4<ClientType, DTO_ApprovalConfig, EditableDTO_ApprovalConfig, QDTO_ApprovalConfig> {
    private _Feature?;
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
    Feature(): DTO_FeatureService<ClientType>;
}
export declare class DTO_ApprovalConfigCollectionService<in out ClientType extends ODataHttpClient> extends EntitySetServiceV4<ClientType, DTO_ApprovalConfig, EditableDTO_ApprovalConfig, QDTO_ApprovalConfig, DTO_ApprovalConfigId> {
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
}
export declare class DTO_ApprovalService<in out ClientType extends ODataHttpClient> extends EntityTypeServiceV4<ClientType, DTO_Approval, EditableDTO_Approval, QDTO_Approval> {
    private _UserId?;
    private _SubUserId?;
    private _Feature?;
    private _StepApproval?;
    private _MasterRole?;
    private _MasterUser?;
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
    UserId(): UserDtoService<ClientType>;
    SubUserId(): UserDtoService<ClientType>;
    Feature(): DTO_FeatureService<ClientType>;
    StepApproval(): DTO_StepApprovalService<ClientType>;
    MasterRole(): MasterRoleService<ClientType>;
    MasterUser(): DTO_MasterUserService<ClientType>;
}
export declare class DTO_ApprovalCollectionService<in out ClientType extends ODataHttpClient> extends EntitySetServiceV4<ClientType, DTO_Approval, EditableDTO_Approval, QDTO_Approval, DTO_ApprovalId> {
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
}
export declare class DTO_ApprovalConfigConditionService<in out ClientType extends ODataHttpClient> extends EntityTypeServiceV4<ClientType, DTO_ApprovalConfigCondition, EditableDTO_ApprovalConfigCondition, QDTO_ApprovalConfigCondition> {
    private _UserId?;
    private _ApprovalConfig?;
    private _MasterRole?;
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
    UserId(): UserDtoService<ClientType>;
    ApprovalConfig(): DTO_ApprovalConfigService<ClientType>;
    MasterRole(): DTO_MasterRoleService<ClientType>;
    StepApproval(): DTO_StepApprovalCollectionService<ClientType>;
    StepApproval(id: DTO_StepApprovalId): DTO_StepApprovalService<ClientType>;
}
export declare class DTO_ApprovalConfigConditionCollectionService<in out ClientType extends ODataHttpClient> extends EntitySetServiceV4<ClientType, DTO_ApprovalConfigCondition, EditableDTO_ApprovalConfigCondition, QDTO_ApprovalConfigCondition, DTO_ApprovalConfigConditionId> {
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
}
export declare class DTO_StepApprovalService<in out ClientType extends ODataHttpClient> extends EntityTypeServiceV4<ClientType, DTO_StepApproval, EditableDTO_StepApproval, QDTO_StepApproval> {
    private _UserId?;
    private _SubUserId?;
    private _MasterRole?;
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
    UserId(): UserDtoService<ClientType>;
    SubUserId(): UserDtoService<ClientType>;
    MasterRole(): DTO_MasterRoleService<ClientType>;
}
export declare class DTO_StepApprovalCollectionService<in out ClientType extends ODataHttpClient> extends EntitySetServiceV4<ClientType, DTO_StepApproval, EditableDTO_StepApproval, QDTO_StepApproval, DTO_StepApprovalId> {
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
}
export declare class DTO_AreaService<in out ClientType extends ODataHttpClient> extends EntityTypeServiceV4<ClientType, DTO_Area, EditableDTO_Area, QDTO_Area> {
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
}
export declare class DTO_AreaCollectionService<in out ClientType extends ODataHttpClient> extends EntitySetServiceV4<ClientType, DTO_Area, EditableDTO_Area, QDTO_Area, DTO_AreaId> {
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
}
export declare class DTO_BookWithAuthorsService<in out ClientType extends ODataHttpClient> extends EntityTypeServiceV4<ClientType, DTO_BookWithAuthors, EditableDTO_BookWithAuthors, QDTO_BookWithAuthors> {
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
    Authors(): AuthorCollectionService<ClientType>;
    Authors(id: AuthorId): AuthorService<ClientType>;
}
export declare class DTO_BookWithAuthorsCollectionService<in out ClientType extends ODataHttpClient> extends EntitySetServiceV4<ClientType, DTO_BookWithAuthors, EditableDTO_BookWithAuthors, QDTO_BookWithAuthors, DTO_BookWithAuthorsId> {
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
}
export declare class DTO_BrandService<in out ClientType extends ODataHttpClient> extends EntityTypeServiceV4<ClientType, DTO_Brand, EditableDTO_Brand, QDTO_Brand> {
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
}
export declare class DTO_BrandCollectionService<in out ClientType extends ODataHttpClient> extends EntitySetServiceV4<ClientType, DTO_Brand, EditableDTO_Brand, QDTO_Brand, DTO_BrandId> {
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
}
export declare class DTO_BudgetAlokasiDetailService<in out ClientType extends ODataHttpClient> extends EntityTypeServiceV4<ClientType, DTO_BudgetAlokasiDetail, EditableDTO_BudgetAlokasiDetail, QDTO_BudgetAlokasiDetail> {
    private _MasterBudget?;
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
    MasterBudget(): DTO_MasterBudgetService<ClientType>;
}
export declare class DTO_BudgetAlokasiDetailCollectionService<in out ClientType extends ODataHttpClient> extends EntitySetServiceV4<ClientType, DTO_BudgetAlokasiDetail, EditableDTO_BudgetAlokasiDetail, QDTO_BudgetAlokasiDetail, DTO_BudgetAlokasiDetailId> {
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
}
export declare class DTO_BudgetTopUpService<in out ClientType extends ODataHttpClient> extends EntityTypeServiceV4<ClientType, DTO_BudgetTopUp, EditableDTO_BudgetTopUp, QDTO_BudgetTopUp> {
    private _Feature?;
    private _HeaderProjekSumber?;
    private _HeaderProjekTujuan?;
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
    BudgetTransferDetail(): DTO_BudgetTopUpDetailCollectionService<ClientType>;
    BudgetTransferDetail(id: DTO_BudgetTopUpDetailId): DTO_BudgetTopUpDetailService<ClientType>;
    Approval(): DTO_ApprovalCollectionService<ClientType>;
    Approval(id: DTO_ApprovalId): DTO_ApprovalService<ClientType>;
    Feature(): DTO_FeatureService<ClientType>;
    HeaderProjekSumber(): DTO_HeaderProjekService<ClientType>;
    HeaderProjekTujuan(): DTO_HeaderProjekService<ClientType>;
}
export declare class DTO_BudgetTopUpCollectionService<in out ClientType extends ODataHttpClient> extends EntitySetServiceV4<ClientType, DTO_BudgetTopUp, EditableDTO_BudgetTopUp, QDTO_BudgetTopUp, DTO_BudgetTopUpId> {
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
}
export declare class DTO_BudgetTopUpDetailService<in out ClientType extends ODataHttpClient> extends EntityTypeServiceV4<ClientType, DTO_BudgetTopUpDetail, EditableDTO_BudgetTopUpDetail, QDTO_BudgetTopUpDetail> {
    private _BudgetAlokasiSumber?;
    private _BudgetAlokasiTujuan?;
    private _PostBudgetSumber?;
    private _PostBudgetTujuan?;
    private _BudgetAlokasiDetailSumber?;
    private _BudgetAlokasiDetailTujuan?;
    private _SkenarioBudgetSumber?;
    private _SkenarioBudgetTujuan?;
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
    BudgetAlokasiSumber(): DTO_BudgetAlokasiService<ClientType>;
    BudgetAlokasiTujuan(): DTO_BudgetAlokasiService<ClientType>;
    PostBudgetSumber(): DTO_PostBudgetService<ClientType>;
    PostBudgetTujuan(): DTO_PostBudgetService<ClientType>;
    BudgetAlokasiDetailSumber(): DTO_BudgetAlokasiDetailService<ClientType>;
    BudgetAlokasiDetailTujuan(): DTO_BudgetAlokasiDetailService<ClientType>;
    SkenarioBudgetSumber(): DTO_SkenarioBudgetService<ClientType>;
    SkenarioBudgetTujuan(): DTO_SkenarioBudgetService<ClientType>;
}
export declare class DTO_BudgetTopUpDetailCollectionService<in out ClientType extends ODataHttpClient> extends EntitySetServiceV4<ClientType, DTO_BudgetTopUpDetail, EditableDTO_BudgetTopUpDetail, QDTO_BudgetTopUpDetail, DTO_BudgetTopUpDetailId> {
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
}
export declare class DTO_BudgetTransferService<in out ClientType extends ODataHttpClient> extends EntityTypeServiceV4<ClientType, DTO_BudgetTransfer, EditableDTO_BudgetTransfer, QDTO_BudgetTransfer> {
    private _Feature?;
    private _HeaderProjekSumber?;
    private _HeaderProjekTujuan?;
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
    BudgetTransferDetail(): DTO_BudgetTransferDetailCollectionService<ClientType>;
    BudgetTransferDetail(id: DTO_BudgetTransferDetailId): DTO_BudgetTransferDetailService<ClientType>;
    Approval(): DTO_ApprovalCollectionService<ClientType>;
    Approval(id: DTO_ApprovalId): DTO_ApprovalService<ClientType>;
    Feature(): DTO_FeatureService<ClientType>;
    HeaderProjekSumber(): DTO_HeaderProjekService<ClientType>;
    HeaderProjekTujuan(): DTO_HeaderProjekService<ClientType>;
}
export declare class DTO_BudgetTransferCollectionService<in out ClientType extends ODataHttpClient> extends EntitySetServiceV4<ClientType, DTO_BudgetTransfer, EditableDTO_BudgetTransfer, QDTO_BudgetTransfer, DTO_BudgetTransferId> {
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
}
export declare class DTO_BudgetTransferDetailService<in out ClientType extends ODataHttpClient> extends EntityTypeServiceV4<ClientType, DTO_BudgetTransferDetail, EditableDTO_BudgetTransferDetail, QDTO_BudgetTransferDetail> {
    private _BudgetAlokasiSumber?;
    private _BudgetAlokasiTujuan?;
    private _PostBudgetSumber?;
    private _PostBudgetTujuan?;
    private _BudgetAlokasiDetailSumber?;
    private _BudgetAlokasiDetailTujuan?;
    private _SkenarioBudgetSumber?;
    private _SkenarioBudgetTujuan?;
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
    BudgetAlokasiSumber(): DTO_BudgetAlokasiService<ClientType>;
    BudgetAlokasiTujuan(): DTO_BudgetAlokasiService<ClientType>;
    PostBudgetSumber(): DTO_PostBudgetService<ClientType>;
    PostBudgetTujuan(): DTO_PostBudgetService<ClientType>;
    BudgetAlokasiDetailSumber(): DTO_BudgetAlokasiDetailService<ClientType>;
    BudgetAlokasiDetailTujuan(): DTO_BudgetAlokasiDetailService<ClientType>;
    SkenarioBudgetSumber(): DTO_SkenarioBudgetService<ClientType>;
    SkenarioBudgetTujuan(): DTO_SkenarioBudgetService<ClientType>;
}
export declare class DTO_BudgetTransferDetailCollectionService<in out ClientType extends ODataHttpClient> extends EntitySetServiceV4<ClientType, DTO_BudgetTransferDetail, EditableDTO_BudgetTransferDetail, QDTO_BudgetTransferDetail, DTO_BudgetTransferDetailId> {
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
}
export declare class DTO_CoaService<in out ClientType extends ODataHttpClient> extends EntityTypeServiceV4<ClientType, DTO_Coa, EditableDTO_Coa, QDTO_Coa> {
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
    PostBudget(): DTO_PostBudgetCollectionService<ClientType>;
    PostBudget(id: DTO_PostBudgetId): DTO_PostBudgetService<ClientType>;
}
export declare class DTO_CoaCollectionService<in out ClientType extends ODataHttpClient> extends EntitySetServiceV4<ClientType, DTO_Coa, EditableDTO_Coa, QDTO_Coa, DTO_CoaId> {
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
}
export declare class DTO_DepartmenService<in out ClientType extends ODataHttpClient> extends EntityTypeServiceV4<ClientType, DTO_Departmen, EditableDTO_Departmen, QDTO_Departmen> {
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
}
export declare class DTO_DepartmenCollectionService<in out ClientType extends ODataHttpClient> extends EntitySetServiceV4<ClientType, DTO_Departmen, EditableDTO_Departmen, QDTO_Departmen, DTO_DepartmenId> {
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
}
export declare class DTO_DistributorService<in out ClientType extends ODataHttpClient> extends EntityTypeServiceV4<ClientType, DTO_Distributor, EditableDTO_Distributor, QDTO_Distributor> {
    private _Area?;
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
    Area(): DTO_AreaService<ClientType>;
}
export declare class DTO_DistributorCollectionService<in out ClientType extends ODataHttpClient> extends EntitySetServiceV4<ClientType, DTO_Distributor, EditableDTO_Distributor, QDTO_Distributor, DTO_DistributorId> {
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
}
export declare class DTO_EmailTemplateService<in out ClientType extends ODataHttpClient> extends EntityTypeServiceV4<ClientType, DTO_EmailTemplate, EditableDTO_EmailTemplate, QDTO_EmailTemplate> {
    private _Feature?;
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
    Feature(): DTO_FeatureService<ClientType>;
}
export declare class DTO_EmailTemplateCollectionService<in out ClientType extends ODataHttpClient> extends EntitySetServiceV4<ClientType, DTO_EmailTemplate, EditableDTO_EmailTemplate, QDTO_EmailTemplate, DTO_EmailTemplateId> {
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
}
export declare class DTO_EstimasiHargaBrandingService<in out ClientType extends ODataHttpClient> extends EntityTypeServiceV4<ClientType, DTO_EstimasiHargaBranding, EditableDTO_EstimasiHargaBranding, QDTO_EstimasiHargaBranding> {
    private _Area?;
    private _JenisPpl?;
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
    Area(): DTO_AreaService<ClientType>;
    JenisPpl(): DTO_JenisPplService<ClientType>;
}
export declare class DTO_EstimasiHargaBrandingCollectionService<in out ClientType extends ODataHttpClient> extends EntitySetServiceV4<ClientType, DTO_EstimasiHargaBranding, EditableDTO_EstimasiHargaBranding, QDTO_EstimasiHargaBranding, DTO_EstimasiHargaBrandingId> {
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
}
export declare class DTO_EstimasiHargaBrandingListService<in out ClientType extends ODataHttpClient> extends EntityTypeServiceV4<ClientType, DTO_EstimasiHargaBrandingList, EditableDTO_EstimasiHargaBrandingList, QDTO_EstimasiHargaBrandingList> {
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
}
export declare class DTO_EstimasiHargaBrandingListCollectionService<in out ClientType extends ODataHttpClient> extends EntitySetServiceV4<ClientType, DTO_EstimasiHargaBrandingList, EditableDTO_EstimasiHargaBrandingList, QDTO_EstimasiHargaBrandingList, DTO_EstimasiHargaBrandingListId> {
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
}
export declare class DTO_HeaderPplService<in out ClientType extends ODataHttpClient> extends EntityTypeServiceV4<ClientType, DTO_HeaderPpl, EditableDTO_HeaderPpl, QDTO_HeaderPpl> {
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
    PplOutlet(): DTO_PplOutletCollectionService<ClientType>;
    PplOutlet(id: DTO_PplOutletId): DTO_PplOutletService<ClientType>;
    PplArea(): DTO_PplAreaCollectionService<ClientType>;
    PplArea(id: DTO_PplAreaId): DTO_PplAreaService<ClientType>;
    PplDetailProduk(): DTO_PplDetailProdukCollectionService<ClientType>;
    PplDetailProduk(id: DTO_PplDetailProdukId): DTO_PplDetailProdukService<ClientType>;
    PplDetails(): DTO_PplDetailsCollectionService<ClientType>;
    PplDetails(id: DTO_PplDetailsId): DTO_PplDetailsService<ClientType>;
    PplBudgetAlokasi(): DTO_PplBudgetAlokasiCollectionService<ClientType>;
    PplBudgetAlokasi(id: DTO_PplBudgetAlokasiId): DTO_PplBudgetAlokasiService<ClientType>;
    PplAttachment(): DTO_PplAttachmentCollectionService<ClientType>;
    PplAttachment(id: DTO_PplAttachmentId): DTO_PplAttachmentService<ClientType>;
}
export declare class DTO_HeaderPplCollectionService<in out ClientType extends ODataHttpClient> extends EntitySetServiceV4<ClientType, DTO_HeaderPpl, EditableDTO_HeaderPpl, QDTO_HeaderPpl, DTO_HeaderPplId> {
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
}
export declare class DTO_HeaderPplListService<in out ClientType extends ODataHttpClient> extends EntityTypeServiceV4<ClientType, DTO_HeaderPplList, EditableDTO_HeaderPplList, QDTO_HeaderPplList> {
    private _KategoriPpl?;
    private _JenisPpl?;
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
    KategoriPpl(): DTO_KategoriPplService<ClientType>;
    JenisPpl(): DTO_JenisPplService<ClientType>;
    PplOutlet(): DTO_PplOutletCollectionService<ClientType>;
    PplOutlet(id: DTO_PplOutletId): DTO_PplOutletService<ClientType>;
    PplArea(): DTO_PplAreaCollectionService<ClientType>;
    PplArea(id: DTO_PplAreaId): DTO_PplAreaService<ClientType>;
    PplDetailProduk(): DTO_PplDetailProdukCollectionService<ClientType>;
    PplDetailProduk(id: DTO_PplDetailProdukId): DTO_PplDetailProdukService<ClientType>;
    PplDetails(): DTO_PplDetailsCollectionService<ClientType>;
    PplDetails(id: DTO_PplDetailsId): DTO_PplDetailsService<ClientType>;
    PplBudgetAlokasi(): DTO_PplBudgetAlokasiCollectionService<ClientType>;
    PplBudgetAlokasi(id: DTO_PplBudgetAlokasiId): DTO_PplBudgetAlokasiService<ClientType>;
    PplAttachment(): DTO_PplAttachmentCollectionService<ClientType>;
    PplAttachment(id: DTO_PplAttachmentId): DTO_PplAttachmentService<ClientType>;
}
export declare class DTO_HeaderPplListCollectionService<in out ClientType extends ODataHttpClient> extends EntitySetServiceV4<ClientType, DTO_HeaderPplList, EditableDTO_HeaderPplList, QDTO_HeaderPplList, DTO_HeaderPplListId> {
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
}
export declare class DTO_HeaderProjekService<in out ClientType extends ODataHttpClient> extends EntityTypeServiceV4<ClientType, DTO_HeaderProjek, EditableDTO_HeaderProjek, QDTO_HeaderProjek> {
    private _Brand?;
    private _JenisProgram?;
    private _Departmen?;
    private _Region?;
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
    Brand(): DTO_BrandService<ClientType>;
    JenisProgram(): DTO_JenisProgramService<ClientType>;
    Departmen(): DTO_DepartmenService<ClientType>;
    Region(): DTO_RegionService<ClientType>;
    BudgetAlokasi(): DTO_BudgetAlokasiCollectionService<ClientType>;
    BudgetAlokasi(id: DTO_BudgetAlokasiId): DTO_BudgetAlokasiService<ClientType>;
    Approval(): DTO_ApprovalCollectionService<ClientType>;
    Approval(id: DTO_ApprovalId): DTO_ApprovalService<ClientType>;
    HeaderProjekBrand(): DTO_HeaderProjekBrandCollectionService<ClientType>;
    HeaderProjekBrand(id: DTO_HeaderProjekBrandId): DTO_HeaderProjekBrandService<ClientType>;
    HeaderProjekDepartemen(): DTO_HeaderProjekDepartemenCollectionService<ClientType>;
    HeaderProjekDepartemen(id: DTO_HeaderProjekDepartemenId): DTO_HeaderProjekDepartemenService<ClientType>;
}
export declare class DTO_HeaderProjekCollectionService<in out ClientType extends ODataHttpClient> extends EntitySetServiceV4<ClientType, DTO_HeaderProjek, EditableDTO_HeaderProjek, QDTO_HeaderProjek, DTO_HeaderProjekId> {
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
}
export declare class DTO_HeaderProjekListService<in out ClientType extends ODataHttpClient> extends EntityTypeServiceV4<ClientType, DTO_HeaderProjekList, EditableDTO_HeaderProjekList, QDTO_HeaderProjekList> {
    private _Brand?;
    private _JenisProgram?;
    private _Departmen?;
    private _Region?;
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
    Brand(): DTO_BrandService<ClientType>;
    JenisProgram(): DTO_JenisProgramService<ClientType>;
    Departmen(): DTO_DepartmenService<ClientType>;
    Region(): DTO_RegionService<ClientType>;
    BudgetAlokasi(): DTO_BudgetAlokasiCollectionService<ClientType>;
    BudgetAlokasi(id: DTO_BudgetAlokasiId): DTO_BudgetAlokasiService<ClientType>;
    HeaderProjekBrand(): DTO_HeaderProjekBrandCollectionService<ClientType>;
    HeaderProjekBrand(id: DTO_HeaderProjekBrandId): DTO_HeaderProjekBrandService<ClientType>;
    HeaderProjekDepartemen(): DTO_HeaderProjekDepartemenCollectionService<ClientType>;
    HeaderProjekDepartemen(id: DTO_HeaderProjekDepartemenId): DTO_HeaderProjekDepartemenService<ClientType>;
}
export declare class DTO_HeaderProjekListCollectionService<in out ClientType extends ODataHttpClient> extends EntitySetServiceV4<ClientType, DTO_HeaderProjekList, EditableDTO_HeaderProjekList, QDTO_HeaderProjekList, DTO_HeaderProjekListId> {
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
}
export declare class DTO_HeaderProjekBrandService<in out ClientType extends ODataHttpClient> extends EntityTypeServiceV4<ClientType, DTO_HeaderProjekBrand, EditableDTO_HeaderProjekBrand, QDTO_HeaderProjekBrand> {
    private _Brand?;
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
    Brand(): DTO_BrandService<ClientType>;
}
export declare class DTO_HeaderProjekBrandCollectionService<in out ClientType extends ODataHttpClient> extends EntitySetServiceV4<ClientType, DTO_HeaderProjekBrand, EditableDTO_HeaderProjekBrand, QDTO_HeaderProjekBrand, DTO_HeaderProjekBrandId> {
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
}
export declare class DTO_HeaderProjekDepartemenService<in out ClientType extends ODataHttpClient> extends EntityTypeServiceV4<ClientType, DTO_HeaderProjekDepartemen, EditableDTO_HeaderProjekDepartemen, QDTO_HeaderProjekDepartemen> {
    private _Departmen?;
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
    Departmen(): DTO_DepartmenService<ClientType>;
}
export declare class DTO_HeaderProjekDepartemenCollectionService<in out ClientType extends ODataHttpClient> extends EntitySetServiceV4<ClientType, DTO_HeaderProjekDepartemen, EditableDTO_HeaderProjekDepartemen, QDTO_HeaderProjekDepartemen, DTO_HeaderProjekDepartemenId> {
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
}
export declare class DTO_JenisPplService<in out ClientType extends ODataHttpClient> extends EntityTypeServiceV4<ClientType, DTO_JenisPpl, EditableDTO_JenisPpl, QDTO_JenisPpl> {
    private _KategoriPpl?;
    private _KodeKlaims?;
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
    KategoriPpl(): DTO_KategoriPplService<ClientType>;
    KodeKlaims(): DTO_KodeKlaimsService<ClientType>;
}
export declare class DTO_JenisPplCollectionService<in out ClientType extends ODataHttpClient> extends EntitySetServiceV4<ClientType, DTO_JenisPpl, EditableDTO_JenisPpl, QDTO_JenisPpl, DTO_JenisPplId> {
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
}
export declare class DTO_KodeKlaimsService<in out ClientType extends ODataHttpClient> extends EntityTypeServiceV4<ClientType, DTO_KodeKlaims, EditableDTO_KodeKlaims, QDTO_KodeKlaims> {
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
}
export declare class DTO_KodeKlaimsCollectionService<in out ClientType extends ODataHttpClient> extends EntitySetServiceV4<ClientType, DTO_KodeKlaims, EditableDTO_KodeKlaims, QDTO_KodeKlaims, DTO_KodeKlaimsId> {
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
}
export declare class DTO_JenisPplListService<in out ClientType extends ODataHttpClient> extends EntityTypeServiceV4<ClientType, DTO_JenisPplList, EditableDTO_JenisPplList, QDTO_JenisPplList> {
    private _KategoriPpl?;
    private _KodeKlaims?;
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
    KategoriPpl(): DTO_KategoriPplService<ClientType>;
    KodeKlaims(): DTO_KodeKlaimsService<ClientType>;
}
export declare class DTO_JenisPplListCollectionService<in out ClientType extends ODataHttpClient> extends EntitySetServiceV4<ClientType, DTO_JenisPplList, EditableDTO_JenisPplList, QDTO_JenisPplList, DTO_JenisPplListId> {
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
}
export declare class DTO_JenisProgramService<in out ClientType extends ODataHttpClient> extends EntityTypeServiceV4<ClientType, DTO_JenisProgram, EditableDTO_JenisProgram, QDTO_JenisProgram> {
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
    KategoriPpl(): DTO_KategoriPplCollectionService<ClientType>;
    KategoriPpl(id: DTO_KategoriPplId): DTO_KategoriPplService<ClientType>;
}
export declare class DTO_JenisProgramCollectionService<in out ClientType extends ODataHttpClient> extends EntitySetServiceV4<ClientType, DTO_JenisProgram, EditableDTO_JenisProgram, QDTO_JenisProgram, DTO_JenisProgramId> {
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
}
export declare class DTO_JurnalLedgerService<in out ClientType extends ODataHttpClient> extends EntityTypeServiceV4<ClientType, DTO_JurnalLedger, EditableDTO_JurnalLedger, QDTO_JurnalLedger> {
    private _MasterBudget?;
    private _BudgetSap?;
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
    MasterBudget(): DTO_MasterBudgetService<ClientType>;
    BudgetSap(): DTO_BudgetSapService<ClientType>;
}
export declare class DTO_JurnalLedgerCollectionService<in out ClientType extends ODataHttpClient> extends EntitySetServiceV4<ClientType, DTO_JurnalLedger, EditableDTO_JurnalLedger, QDTO_JurnalLedger, DTO_JurnalLedgerId> {
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
}
export declare class DTO_KategoriPplService<in out ClientType extends ODataHttpClient> extends EntityTypeServiceV4<ClientType, DTO_KategoriPpl, EditableDTO_KategoriPpl, QDTO_KategoriPpl> {
    private _JenisProgram?;
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
    JenisProgram(): DTO_JenisProgramService<ClientType>;
    JenisPpl(): DTO_JenisPplCollectionService<ClientType>;
    JenisPpl(id: DTO_JenisPplId): DTO_JenisPplService<ClientType>;
}
export declare class DTO_KategoriPplCollectionService<in out ClientType extends ODataHttpClient> extends EntitySetServiceV4<ClientType, DTO_KategoriPpl, EditableDTO_KategoriPpl, QDTO_KategoriPpl, DTO_KategoriPplId> {
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
}
export declare class DTO_MasterAccountService<in out ClientType extends ODataHttpClient> extends EntityTypeServiceV4<ClientType, DTO_MasterAccount, EditableDTO_MasterAccount, QDTO_MasterAccount> {
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
}
export declare class DTO_MasterAccountCollectionService<in out ClientType extends ODataHttpClient> extends EntitySetServiceV4<ClientType, DTO_MasterAccount, EditableDTO_MasterAccount, QDTO_MasterAccount, DTO_MasterAccountId> {
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
}
export declare class DTO_MasterJabatanService<in out ClientType extends ODataHttpClient> extends EntityTypeServiceV4<ClientType, DTO_MasterJabatan, EditableDTO_MasterJabatan, QDTO_MasterJabatan> {
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
}
export declare class DTO_MasterJabatanCollectionService<in out ClientType extends ODataHttpClient> extends EntitySetServiceV4<ClientType, DTO_MasterJabatan, EditableDTO_MasterJabatan, QDTO_MasterJabatan, DTO_MasterJabatanId> {
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
}
export declare class DTO_MasterKaryawanService<in out ClientType extends ODataHttpClient> extends EntityTypeServiceV4<ClientType, DTO_MasterKaryawan, EditableDTO_MasterKaryawan, QDTO_MasterKaryawan> {
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
}
export declare class DTO_MasterKaryawanCollectionService<in out ClientType extends ODataHttpClient> extends EntitySetServiceV4<ClientType, DTO_MasterKaryawan, EditableDTO_MasterKaryawan, QDTO_MasterKaryawan, DTO_MasterKaryawanId> {
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
}
export declare class DTO_MasterKlaimService<in out ClientType extends ODataHttpClient> extends EntityTypeServiceV4<ClientType, DTO_MasterKlaim, EditableDTO_MasterKlaim, QDTO_MasterKlaim> {
    private _KodeKlaims?;
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
    KodeKlaims(): DTO_KodeKlaimsService<ClientType>;
    MasterKlaimSyarat(): DTO_MasterKlaimSyaratCollectionService<ClientType>;
    MasterKlaimSyarat(id: DTO_MasterKlaimSyaratId): DTO_MasterKlaimSyaratService<ClientType>;
}
export declare class DTO_MasterKlaimCollectionService<in out ClientType extends ODataHttpClient> extends EntitySetServiceV4<ClientType, DTO_MasterKlaim, EditableDTO_MasterKlaim, QDTO_MasterKlaim, DTO_MasterKlaimId> {
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
}
export declare class DTO_MasterKlaimSyaratService<in out ClientType extends ODataHttpClient> extends EntityTypeServiceV4<ClientType, DTO_MasterKlaimSyarat, EditableDTO_MasterKlaimSyarat, QDTO_MasterKlaimSyarat> {
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
}
export declare class DTO_MasterKlaimSyaratCollectionService<in out ClientType extends ODataHttpClient> extends EntitySetServiceV4<ClientType, DTO_MasterKlaimSyarat, EditableDTO_MasterKlaimSyarat, QDTO_MasterKlaimSyarat, DTO_MasterKlaimSyaratId> {
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
}
export declare class DTO_MasterOrgService<in out ClientType extends ODataHttpClient> extends EntityTypeServiceV4<ClientType, DTO_MasterOrg, EditableDTO_MasterOrg, QDTO_MasterOrg> {
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
}
export declare class DTO_MasterOrgCollectionService<in out ClientType extends ODataHttpClient> extends EntitySetServiceV4<ClientType, DTO_MasterOrg, EditableDTO_MasterOrg, QDTO_MasterOrg, DTO_MasterOrgId> {
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
}
export declare class DTO_MasterJobPosService<in out ClientType extends ODataHttpClient> extends EntityTypeServiceV4<ClientType, DTO_MasterJobPos, EditableDTO_MasterJobPos, QDTO_MasterJobPos> {
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
}
export declare class DTO_MasterJobPosCollectionService<in out ClientType extends ODataHttpClient> extends EntitySetServiceV4<ClientType, DTO_MasterJobPos, EditableDTO_MasterJobPos, QDTO_MasterJobPos, DTO_MasterJobPosId> {
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
}
export declare class DTO_MasterJobLvlService<in out ClientType extends ODataHttpClient> extends EntityTypeServiceV4<ClientType, DTO_MasterJobLvl, EditableDTO_MasterJobLvl, QDTO_MasterJobLvl> {
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
}
export declare class DTO_MasterJobLvlCollectionService<in out ClientType extends ODataHttpClient> extends EntitySetServiceV4<ClientType, DTO_MasterJobLvl, EditableDTO_MasterJobLvl, QDTO_MasterJobLvl, DTO_MasterJobLvlId> {
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
}
export declare class DTO_MasterPermService<in out ClientType extends ODataHttpClient> extends EntityTypeServiceV4<ClientType, DTO_MasterPerm, EditableDTO_MasterPerm, QDTO_MasterPerm> {
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
}
export declare class DTO_MasterPermCollectionService<in out ClientType extends ODataHttpClient> extends EntitySetServiceV4<ClientType, DTO_MasterPerm, EditableDTO_MasterPerm, QDTO_MasterPerm, DTO_MasterPermId> {
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
}
export declare class DTO_MasterRoleService<in out ClientType extends ODataHttpClient> extends EntityTypeServiceV4<ClientType, DTO_MasterRole, EditableDTO_MasterRole, QDTO_MasterRole> {
    private _Organization?;
    private _JobPosition?;
    private _JobLevel?;
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
    Organization(): DTO_MasterOrgSlimService<ClientType>;
    JobPosition(): DTO_MasterJobPosService<ClientType>;
    JobLevel(): DTO_MasterJobLvlService<ClientType>;
    Permissions(): DTO_PermissionRefCollectionService<ClientType>;
    Permissions(id: DTO_PermissionRefId): DTO_PermissionRefService<ClientType>;
}
export declare class DTO_MasterRoleCollectionService<in out ClientType extends ODataHttpClient> extends EntitySetServiceV4<ClientType, DTO_MasterRole, EditableDTO_MasterRole, QDTO_MasterRole, DTO_MasterRoleId> {
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
}
export declare class DTO_PermissionRefService<in out ClientType extends ODataHttpClient> extends EntityTypeServiceV4<ClientType, DTO_PermissionRef, EditableDTO_PermissionRef, QDTO_PermissionRef> {
    private _Permission?;
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
    Permission(): DTO_MasterPermService<ClientType>;
}
export declare class DTO_PermissionRefCollectionService<in out ClientType extends ODataHttpClient> extends EntitySetServiceV4<ClientType, DTO_PermissionRef, EditableDTO_PermissionRef, QDTO_PermissionRef, DTO_PermissionRefId> {
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
}
export declare class DTO_MasterUserService<in out ClientType extends ODataHttpClient> extends EntityTypeServiceV4<ClientType, DTO_MasterUser, EditableDTO_MasterUser, QDTO_MasterUser> {
    private _Role?;
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
    Role(): DTO_MasterRoleService<ClientType>;
    UserArea(): DTO_UserAreaCollectionService<ClientType>;
    UserArea(id: DTO_UserAreaId): DTO_UserAreaService<ClientType>;
    UserDistributor(): DTO_UserDistributorCollectionService<ClientType>;
    UserDistributor(id: DTO_UserDistributorId): DTO_UserDistributorService<ClientType>;
    UsersAttachment(): DTO_UsersAttachmentCollectionService<ClientType>;
    UsersAttachment(id: DTO_UsersAttachmentId): DTO_UsersAttachmentService<ClientType>;
}
export declare class DTO_MasterUserCollectionService<in out ClientType extends ODataHttpClient> extends EntitySetServiceV4<ClientType, DTO_MasterUser, EditableDTO_MasterUser, QDTO_MasterUser, DTO_MasterUserId> {
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
}
export declare class DTO_UsersAttachmentService<in out ClientType extends ODataHttpClient> extends EntityTypeServiceV4<ClientType, DTO_UsersAttachment, EditableDTO_UsersAttachment, QDTO_UsersAttachment> {
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
}
export declare class DTO_UsersAttachmentCollectionService<in out ClientType extends ODataHttpClient> extends EntitySetServiceV4<ClientType, DTO_UsersAttachment, EditableDTO_UsersAttachment, QDTO_UsersAttachment, DTO_UsersAttachmentId> {
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
}
export declare class DTO_MasterProvinsiService<in out ClientType extends ODataHttpClient> extends EntityTypeServiceV4<ClientType, DTO_MasterProvinsi, EditableDTO_MasterProvinsi, QDTO_MasterProvinsi> {
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
    MasterKota(): DTO_MasterKotaCollectionService<ClientType>;
    MasterKota(id: DTO_MasterKotaId): DTO_MasterKotaService<ClientType>;
}
export declare class DTO_MasterProvinsiCollectionService<in out ClientType extends ODataHttpClient> extends EntitySetServiceV4<ClientType, DTO_MasterProvinsi, EditableDTO_MasterProvinsi, QDTO_MasterProvinsi, DTO_MasterProvinsiId> {
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
}
export declare class DTO_MasterKotaService<in out ClientType extends ODataHttpClient> extends EntityTypeServiceV4<ClientType, DTO_MasterKota, EditableDTO_MasterKota, QDTO_MasterKota> {
    private _MasterProvinsi?;
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
    MasterProvinsi(): DTO_MasterProvinsiService<ClientType>;
    MasterKecamatan(): DTO_MasterKecamatanCollectionService<ClientType>;
    MasterKecamatan(id: DTO_MasterKecamatanId): DTO_MasterKecamatanService<ClientType>;
}
export declare class DTO_MasterKotaCollectionService<in out ClientType extends ODataHttpClient> extends EntitySetServiceV4<ClientType, DTO_MasterKota, EditableDTO_MasterKota, QDTO_MasterKota, DTO_MasterKotaId> {
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
}
export declare class DTO_MasterKecamatanService<in out ClientType extends ODataHttpClient> extends EntityTypeServiceV4<ClientType, DTO_MasterKecamatan, EditableDTO_MasterKecamatan, QDTO_MasterKecamatan> {
    private _MasterProvinsi?;
    private _MasterKota?;
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
    MasterProvinsi(): DTO_MasterProvinsiService<ClientType>;
    MasterKota(): DTO_MasterKotaService<ClientType>;
    MasterKelurahan(): DTO_MasterKelurahanCollectionService<ClientType>;
    MasterKelurahan(id: DTO_MasterKelurahanId): DTO_MasterKelurahanService<ClientType>;
}
export declare class DTO_MasterKecamatanCollectionService<in out ClientType extends ODataHttpClient> extends EntitySetServiceV4<ClientType, DTO_MasterKecamatan, EditableDTO_MasterKecamatan, QDTO_MasterKecamatan, DTO_MasterKecamatanId> {
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
}
export declare class DTO_MasterKelurahanService<in out ClientType extends ODataHttpClient> extends EntityTypeServiceV4<ClientType, DTO_MasterKelurahan, EditableDTO_MasterKelurahan, QDTO_MasterKelurahan> {
    private _MasterProvinsi?;
    private _MasterKota?;
    private _MasterKecamatan?;
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
    MasterProvinsi(): DTO_MasterProvinsiService<ClientType>;
    MasterKota(): DTO_MasterKotaService<ClientType>;
    MasterKecamatan(): DTO_MasterKecamatanService<ClientType>;
}
export declare class DTO_MasterKelurahanCollectionService<in out ClientType extends ODataHttpClient> extends EntitySetServiceV4<ClientType, DTO_MasterKelurahan, EditableDTO_MasterKelurahan, QDTO_MasterKelurahan, DTO_MasterKelurahanId> {
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
}
export declare class DTO_OITMService<in out ClientType extends ODataHttpClient> extends EntityTypeServiceV4<ClientType, DTO_OITM, EditableDTO_OITM, QDTO_OITM> {
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
}
export declare class DTO_OITMCollectionService<in out ClientType extends ODataHttpClient> extends EntitySetServiceV4<ClientType, DTO_OITM, EditableDTO_OITM, QDTO_OITM, DTO_OITMId> {
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
}
export declare class DTO_OutletService<in out ClientType extends ODataHttpClient> extends EntityTypeServiceV4<ClientType, DTO_Outlet, EditableDTO_Outlet, QDTO_Outlet> {
    private _Area?;
    private _OutletGroup?;
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
    Area(): DTO_AreaService<ClientType>;
    OutletGroup(): DTO_OutletGroupService<ClientType>;
}
export declare class DTO_OutletCollectionService<in out ClientType extends ODataHttpClient> extends EntitySetServiceV4<ClientType, DTO_Outlet, EditableDTO_Outlet, QDTO_Outlet, DTO_OutletId> {
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
}
export declare class DTO_OutletGroupService<in out ClientType extends ODataHttpClient> extends EntityTypeServiceV4<ClientType, DTO_OutletGroup, EditableDTO_OutletGroup, QDTO_OutletGroup> {
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
    Outlet(): DTO_OutletCollectionService<ClientType>;
    Outlet(id: DTO_OutletId): DTO_OutletService<ClientType>;
}
export declare class DTO_OutletGroupCollectionService<in out ClientType extends ODataHttpClient> extends EntitySetServiceV4<ClientType, DTO_OutletGroup, EditableDTO_OutletGroup, QDTO_OutletGroup, DTO_OutletGroupId> {
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
}
export declare class DTO_PengajuanFormService<in out ClientType extends ODataHttpClient> extends EntityTypeServiceV4<ClientType, DTO_PengajuanForm, EditableDTO_PengajuanForm, QDTO_PengajuanForm> {
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
    PengajuanFormOutlet(): DTO_PengajuanFormOutletCollectionService<ClientType>;
    PengajuanFormOutlet(id: DTO_PengajuanFormOutletId): DTO_PengajuanFormOutletService<ClientType>;
    PengajuanFormAttachment(): DTO_PengajuanFormAttachmentCollectionService<ClientType>;
    PengajuanFormAttachment(id: DTO_PengajuanFormAttachmentId): DTO_PengajuanFormAttachmentService<ClientType>;
    PengajuanFormDetail(): DTO_PengajuanFormDetailCollectionService<ClientType>;
    PengajuanFormDetail(id: DTO_PengajuanFormDetailId): DTO_PengajuanFormDetailService<ClientType>;
    PengajuanFormProduk(): DTO_PengajuanFormProdukCollectionService<ClientType>;
    PengajuanFormProduk(id: DTO_PengajuanFormProdukId): DTO_PengajuanFormProdukService<ClientType>;
    Approval(): DTO_ApprovalCollectionService<ClientType>;
    Approval(id: DTO_ApprovalId): DTO_ApprovalService<ClientType>;
}
export declare class DTO_PengajuanFormCollectionService<in out ClientType extends ODataHttpClient> extends EntitySetServiceV4<ClientType, DTO_PengajuanForm, EditableDTO_PengajuanForm, QDTO_PengajuanForm, DTO_PengajuanFormId> {
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
}
export declare class DTO_PengajuanFormOutletService<in out ClientType extends ODataHttpClient> extends EntityTypeServiceV4<ClientType, DTO_PengajuanFormOutlet, EditableDTO_PengajuanFormOutlet, QDTO_PengajuanFormOutlet> {
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
}
export declare class DTO_PengajuanFormOutletCollectionService<in out ClientType extends ODataHttpClient> extends EntitySetServiceV4<ClientType, DTO_PengajuanFormOutlet, EditableDTO_PengajuanFormOutlet, QDTO_PengajuanFormOutlet, DTO_PengajuanFormOutletId> {
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
}
export declare class DTO_PengajuanFormAttachmentService<in out ClientType extends ODataHttpClient> extends EntityTypeServiceV4<ClientType, DTO_PengajuanFormAttachment, EditableDTO_PengajuanFormAttachment, QDTO_PengajuanFormAttachment> {
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
}
export declare class DTO_PengajuanFormAttachmentCollectionService<in out ClientType extends ODataHttpClient> extends EntitySetServiceV4<ClientType, DTO_PengajuanFormAttachment, EditableDTO_PengajuanFormAttachment, QDTO_PengajuanFormAttachment, DTO_PengajuanFormAttachmentId> {
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
}
export declare class DTO_PengajuanFormProdukService<in out ClientType extends ODataHttpClient> extends EntityTypeServiceV4<ClientType, DTO_PengajuanFormProduk, EditableDTO_PengajuanFormProduk, QDTO_PengajuanFormProduk> {
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
}
export declare class DTO_PengajuanFormProdukCollectionService<in out ClientType extends ODataHttpClient> extends EntitySetServiceV4<ClientType, DTO_PengajuanFormProduk, EditableDTO_PengajuanFormProduk, QDTO_PengajuanFormProduk, DTO_PengajuanFormProdukId> {
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
}
export declare class DTO_PengajuanFormDetailService<in out ClientType extends ODataHttpClient> extends EntityTypeServiceV4<ClientType, DTO_PengajuanFormDetail, EditableDTO_PengajuanFormDetail, QDTO_PengajuanFormDetail> {
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
}
export declare class DTO_PengajuanFormDetailCollectionService<in out ClientType extends ODataHttpClient> extends EntitySetServiceV4<ClientType, DTO_PengajuanFormDetail, EditableDTO_PengajuanFormDetail, QDTO_PengajuanFormDetail, DTO_PengajuanFormDetailId> {
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
}
export declare class DTO_PostBudgetService<in out ClientType extends ODataHttpClient> extends EntityTypeServiceV4<ClientType, DTO_PostBudget, EditableDTO_PostBudget, QDTO_PostBudget> {
    private _Departmen?;
    private _Coa?;
    private _Brand?;
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
    Departmen(): DTO_DepartmenService<ClientType>;
    Coa(): DTO_CoaService<ClientType>;
    Brand(): DTO_BrandService<ClientType>;
}
export declare class DTO_PostBudgetCollectionService<in out ClientType extends ODataHttpClient> extends EntitySetServiceV4<ClientType, DTO_PostBudget, EditableDTO_PostBudget, QDTO_PostBudget, DTO_PostBudgetId> {
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
}
export declare class DTO_ChannelService<in out ClientType extends ODataHttpClient> extends EntityTypeServiceV4<ClientType, DTO_Channel, EditableDTO_Channel, QDTO_Channel> {
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
}
export declare class DTO_ChannelCollectionService<in out ClientType extends ODataHttpClient> extends EntitySetServiceV4<ClientType, DTO_Channel, EditableDTO_Channel, QDTO_Channel, DTO_ChannelId> {
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
}
export declare class DTO_BudgetSapService<in out ClientType extends ODataHttpClient> extends EntityTypeServiceV4<ClientType, DTO_BudgetSap, EditableDTO_BudgetSap, QDTO_BudgetSap> {
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
    MasterBudget(): DTO_MasterBudgetCollectionService<ClientType>;
    MasterBudget(id: DTO_MasterBudgetId): DTO_MasterBudgetService<ClientType>;
}
export declare class DTO_BudgetSapCollectionService<in out ClientType extends ODataHttpClient> extends EntitySetServiceV4<ClientType, DTO_BudgetSap, EditableDTO_BudgetSap, QDTO_BudgetSap, DTO_BudgetSapId> {
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
}
export declare class DTO_MasterBudgetService<in out ClientType extends ODataHttpClient> extends EntityTypeServiceV4<ClientType, DTO_MasterBudget, EditableDTO_MasterBudget, QDTO_MasterBudget> {
    private _PostBudget?;
    private _Coa?;
    private _Brand?;
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
    PostBudget(): DTO_PostBudgetService<ClientType>;
    Coa(): DTO_CoaService<ClientType>;
    Brand(): DTO_BrandService<ClientType>;
}
export declare class DTO_MasterBudgetCollectionService<in out ClientType extends ODataHttpClient> extends EntitySetServiceV4<ClientType, DTO_MasterBudget, EditableDTO_MasterBudget, QDTO_MasterBudget, DTO_MasterBudgetId> {
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
}
export declare class DTO_PplAreaService<in out ClientType extends ODataHttpClient> extends EntityTypeServiceV4<ClientType, DTO_PplArea, EditableDTO_PplArea, QDTO_PplArea> {
    private _Area?;
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
    Area(): DTO_AreaService<ClientType>;
}
export declare class DTO_PplAreaCollectionService<in out ClientType extends ODataHttpClient> extends EntitySetServiceV4<ClientType, DTO_PplArea, EditableDTO_PplArea, QDTO_PplArea, DTO_PplAreaId> {
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
}
export declare class DTO_PplAttachmentService<in out ClientType extends ODataHttpClient> extends EntityTypeServiceV4<ClientType, DTO_PplAttachment, EditableDTO_PplAttachment, QDTO_PplAttachment> {
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
}
export declare class DTO_PplAttachmentCollectionService<in out ClientType extends ODataHttpClient> extends EntitySetServiceV4<ClientType, DTO_PplAttachment, EditableDTO_PplAttachment, QDTO_PplAttachment, DTO_PplAttachmentId> {
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
}
export declare class DTO_PplBudgetAlokasiService<in out ClientType extends ODataHttpClient> extends EntityTypeServiceV4<ClientType, DTO_PplBudgetAlokasi, EditableDTO_PplBudgetAlokasi, QDTO_PplBudgetAlokasi> {
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
}
export declare class DTO_PplBudgetAlokasiCollectionService<in out ClientType extends ODataHttpClient> extends EntitySetServiceV4<ClientType, DTO_PplBudgetAlokasi, EditableDTO_PplBudgetAlokasi, QDTO_PplBudgetAlokasi, DTO_PplBudgetAlokasiId> {
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
}
export declare class DTO_PplDetailProdukService<in out ClientType extends ODataHttpClient> extends EntityTypeServiceV4<ClientType, DTO_PplDetailProduk, EditableDTO_PplDetailProduk, QDTO_PplDetailProduk> {
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
}
export declare class DTO_PplDetailProdukCollectionService<in out ClientType extends ODataHttpClient> extends EntitySetServiceV4<ClientType, DTO_PplDetailProduk, EditableDTO_PplDetailProduk, QDTO_PplDetailProduk, DTO_PplDetailProdukId> {
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
}
export declare class DTO_PplDetailsService<in out ClientType extends ODataHttpClient> extends EntityTypeServiceV4<ClientType, DTO_PplDetails, EditableDTO_PplDetails, QDTO_PplDetails> {
    private _TargetSe?;
    private _Sosmed?;
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
    TargetSe(): TargetSeDtoService<ClientType>;
    Sosmed(): SosmedDtoService<ClientType>;
}
export declare class DTO_PplDetailsCollectionService<in out ClientType extends ODataHttpClient> extends EntitySetServiceV4<ClientType, DTO_PplDetails, EditableDTO_PplDetails, QDTO_PplDetails, DTO_PplDetailsId> {
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
}
export declare class DTO_PplOutletService<in out ClientType extends ODataHttpClient> extends EntityTypeServiceV4<ClientType, DTO_PplOutlet, EditableDTO_PplOutlet, QDTO_PplOutlet> {
    private _Outlet?;
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
    Outlet(): DTO_OutletService<ClientType>;
}
export declare class DTO_PplOutletCollectionService<in out ClientType extends ODataHttpClient> extends EntitySetServiceV4<ClientType, DTO_PplOutlet, EditableDTO_PplOutlet, QDTO_PplOutlet, DTO_PplOutletId> {
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
}
export declare class DTO_ProdukService<in out ClientType extends ODataHttpClient> extends EntityTypeServiceV4<ClientType, DTO_Produk, EditableDTO_Produk, QDTO_Produk> {
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
}
export declare class DTO_ProdukCollectionService<in out ClientType extends ODataHttpClient> extends EntitySetServiceV4<ClientType, DTO_Produk, EditableDTO_Produk, QDTO_Produk, DTO_ProdukId> {
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
}
export declare class DTO_ProdukCategoriService<in out ClientType extends ODataHttpClient> extends EntityTypeServiceV4<ClientType, DTO_ProdukCategori, EditableDTO_ProdukCategori, QDTO_ProdukCategori> {
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
}
export declare class DTO_ProdukCategoriCollectionService<in out ClientType extends ODataHttpClient> extends EntitySetServiceV4<ClientType, DTO_ProdukCategori, EditableDTO_ProdukCategori, QDTO_ProdukCategori, DTO_ProdukCategoriId> {
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
}
export declare class DTO_ProvinsiService<in out ClientType extends ODataHttpClient> extends EntityTypeServiceV4<ClientType, DTO_Provinsi, EditableDTO_Provinsi, QDTO_Provinsi> {
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
    Kotas(): DTO_KotaCollectionService<ClientType>;
    Kotas(id: DTO_KotaId): DTO_KotaService<ClientType>;
}
export declare class DTO_ProvinsiCollectionService<in out ClientType extends ODataHttpClient> extends EntitySetServiceV4<ClientType, DTO_Provinsi, EditableDTO_Provinsi, QDTO_Provinsi, DTO_ProvinsiId> {
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
}
export declare class DTO_KotaService<in out ClientType extends ODataHttpClient> extends EntityTypeServiceV4<ClientType, DTO_Kota, EditableDTO_Kota, QDTO_Kota> {
    private _Provinsi?;
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
    Provinsi(): DTO_ProvinsiService<ClientType>;
    Kecamatans(): DTO_KecamatanCollectionService<ClientType>;
    Kecamatans(id: DTO_KecamatanId): DTO_KecamatanService<ClientType>;
}
export declare class DTO_KotaCollectionService<in out ClientType extends ODataHttpClient> extends EntitySetServiceV4<ClientType, DTO_Kota, EditableDTO_Kota, QDTO_Kota, DTO_KotaId> {
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
}
export declare class DTO_KecamatanService<in out ClientType extends ODataHttpClient> extends EntityTypeServiceV4<ClientType, DTO_Kecamatan, EditableDTO_Kecamatan, QDTO_Kecamatan> {
    private _Provinsi?;
    private _Kota?;
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
    Provinsi(): DTO_ProvinsiService<ClientType>;
    Kota(): DTO_KotaService<ClientType>;
    Kelurahans(): DTO_KelurahanCollectionService<ClientType>;
    Kelurahans(id: DTO_KelurahanId): DTO_KelurahanService<ClientType>;
}
export declare class DTO_KecamatanCollectionService<in out ClientType extends ODataHttpClient> extends EntitySetServiceV4<ClientType, DTO_Kecamatan, EditableDTO_Kecamatan, QDTO_Kecamatan, DTO_KecamatanId> {
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
}
export declare class DTO_KelurahanService<in out ClientType extends ODataHttpClient> extends EntityTypeServiceV4<ClientType, DTO_Kelurahan, EditableDTO_Kelurahan, QDTO_Kelurahan> {
    private _Provinsi?;
    private _Kota?;
    private _Kecamatan?;
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
    Provinsi(): DTO_ProvinsiService<ClientType>;
    Kota(): DTO_KotaService<ClientType>;
    Kecamatan(): DTO_KecamatanService<ClientType>;
}
export declare class DTO_KelurahanCollectionService<in out ClientType extends ODataHttpClient> extends EntitySetServiceV4<ClientType, DTO_Kelurahan, EditableDTO_Kelurahan, QDTO_Kelurahan, DTO_KelurahanId> {
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
}
export declare class DTO_RegionService<in out ClientType extends ODataHttpClient> extends EntityTypeServiceV4<ClientType, DTO_Region, EditableDTO_Region, QDTO_Region> {
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
    Area(): DTO_AreaCollectionService<ClientType>;
    Area(id: DTO_AreaId): DTO_AreaService<ClientType>;
}
export declare class DTO_RegionCollectionService<in out ClientType extends ODataHttpClient> extends EntitySetServiceV4<ClientType, DTO_Region, EditableDTO_Region, QDTO_Region, DTO_RegionId> {
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
}
export declare class DTO_ResiService<in out ClientType extends ODataHttpClient> extends EntityTypeServiceV4<ClientType, DTO_Resi, EditableDTO_Resi, QDTO_Resi> {
    private _Syarat?;
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
    Syarat(): SyaratDtoService<ClientType>;
    ResiOutlet(): DTO_ResiOutletCollectionService<ClientType>;
    ResiOutlet(id: DTO_ResiOutletId): DTO_ResiOutletService<ClientType>;
    ResiDetailProduk(): DTO_ResiDetailProdukCollectionService<ClientType>;
    ResiDetailProduk(id: DTO_ResiDetailProdukId): DTO_ResiDetailProdukService<ClientType>;
    ResiPic(): DTO_ResiPicCollectionService<ClientType>;
    ResiPic(id: DTO_ResiPicId): DTO_ResiPicService<ClientType>;
    ResiAttachment(): DTO_ResiAttachmentCollectionService<ClientType>;
    ResiAttachment(id: DTO_ResiAttachmentId): DTO_ResiAttachmentService<ClientType>;
}
export declare class DTO_ResiCollectionService<in out ClientType extends ODataHttpClient> extends EntitySetServiceV4<ClientType, DTO_Resi, EditableDTO_Resi, QDTO_Resi, DTO_ResiId> {
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
}
export declare class DTO_ResiOutletService<in out ClientType extends ODataHttpClient> extends EntityTypeServiceV4<ClientType, DTO_ResiOutlet, EditableDTO_ResiOutlet, QDTO_ResiOutlet> {
    private _Outlet?;
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
    Outlet(): DTO_OutletService<ClientType>;
}
export declare class DTO_ResiOutletCollectionService<in out ClientType extends ODataHttpClient> extends EntitySetServiceV4<ClientType, DTO_ResiOutlet, EditableDTO_ResiOutlet, QDTO_ResiOutlet, DTO_ResiOutletId> {
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
}
export declare class DTO_SalesService<in out ClientType extends ODataHttpClient> extends EntityTypeServiceV4<ClientType, DTO_Sales, EditableDTO_Sales, QDTO_Sales> {
    private _Area?;
    private _Distributor?;
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
    Area(): DTO_AreaService<ClientType>;
    Distributor(): DTO_DistributorService<ClientType>;
}
export declare class DTO_SalesCollectionService<in out ClientType extends ODataHttpClient> extends EntitySetServiceV4<ClientType, DTO_Sales, EditableDTO_Sales, QDTO_Sales, DTO_SalesId> {
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
}
export declare class DTO_SalesmanService<in out ClientType extends ODataHttpClient> extends EntityTypeServiceV4<ClientType, DTO_Salesman, EditableDTO_Salesman, QDTO_Salesman> {
    private _Area?;
    private _Distributor?;
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
    Area(): DTO_AreaService<ClientType>;
    Distributor(): DTO_DistributorService<ClientType>;
}
export declare class DTO_SalesmanCollectionService<in out ClientType extends ODataHttpClient> extends EntitySetServiceV4<ClientType, DTO_Salesman, EditableDTO_Salesman, QDTO_Salesman, DTO_SalesmanId> {
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
}
export declare class DTO_SettingsService<in out ClientType extends ODataHttpClient> extends EntityTypeServiceV4<ClientType, DTO_Settings, EditableDTO_Settings, QDTO_Settings> {
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
}
export declare class DTO_SettingsCollectionService<in out ClientType extends ODataHttpClient> extends EntitySetServiceV4<ClientType, DTO_Settings, EditableDTO_Settings, QDTO_Settings, DTO_SettingsId> {
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
}
export declare class DTO_SkenarioBudgetService<in out ClientType extends ODataHttpClient> extends EntityTypeServiceV4<ClientType, DTO_SkenarioBudget, EditableDTO_SkenarioBudget, QDTO_SkenarioBudget> {
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
}
export declare class DTO_SkenarioBudgetCollectionService<in out ClientType extends ODataHttpClient> extends EntitySetServiceV4<ClientType, DTO_SkenarioBudget, EditableDTO_SkenarioBudget, QDTO_SkenarioBudget, DTO_SkenarioBudgetId> {
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
}
export declare class DTO_SkenarioBudgetListService<in out ClientType extends ODataHttpClient> extends EntityTypeServiceV4<ClientType, DTO_SkenarioBudgetList, EditableDTO_SkenarioBudgetList, QDTO_SkenarioBudgetList> {
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
}
export declare class DTO_SkenarioBudgetListCollectionService<in out ClientType extends ODataHttpClient> extends EntitySetServiceV4<ClientType, DTO_SkenarioBudgetList, EditableDTO_SkenarioBudgetList, QDTO_SkenarioBudgetList, DTO_SkenarioBudgetListId> {
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
}
export declare class DTO_MasterKeyVisualService<in out ClientType extends ODataHttpClient> extends EntityTypeServiceV4<ClientType, DTO_MasterKeyVisual, EditableDTO_MasterKeyVisual, QDTO_MasterKeyVisual> {
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
}
export declare class DTO_MasterKeyVisualCollectionService<in out ClientType extends ODataHttpClient> extends EntitySetServiceV4<ClientType, DTO_MasterKeyVisual, EditableDTO_MasterKeyVisual, QDTO_MasterKeyVisual, DTO_MasterKeyVisualId> {
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
}
export declare class DTO_MasterOrgSlimService<in out ClientType extends ODataHttpClient> extends EntityTypeServiceV4<ClientType, DTO_MasterOrgSlim, EditableDTO_MasterOrgSlim, QDTO_MasterOrgSlim> {
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
}
export declare class DTO_MasterOrgSlimCollectionService<in out ClientType extends ODataHttpClient> extends EntitySetServiceV4<ClientType, DTO_MasterOrgSlim, EditableDTO_MasterOrgSlim, QDTO_MasterOrgSlim, DTO_MasterOrgSlimId> {
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
}
export declare class DTO_UserAreaService<in out ClientType extends ODataHttpClient> extends EntityTypeServiceV4<ClientType, DTO_UserArea, EditableDTO_UserArea, QDTO_UserArea> {
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
}
export declare class DTO_UserAreaCollectionService<in out ClientType extends ODataHttpClient> extends EntitySetServiceV4<ClientType, DTO_UserArea, EditableDTO_UserArea, QDTO_UserArea, DTO_UserAreaId> {
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
}
export declare class DTO_UserDistributorService<in out ClientType extends ODataHttpClient> extends EntityTypeServiceV4<ClientType, DTO_UserDistributor, EditableDTO_UserDistributor, QDTO_UserDistributor> {
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
}
export declare class DTO_UserDistributorCollectionService<in out ClientType extends ODataHttpClient> extends EntitySetServiceV4<ClientType, DTO_UserDistributor, EditableDTO_UserDistributor, QDTO_UserDistributor, DTO_UserDistributorId> {
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
}
export declare class DTO_ResiDetailProdukService<in out ClientType extends ODataHttpClient> extends EntityTypeServiceV4<ClientType, DTO_ResiDetailProduk, EditableDTO_ResiDetailProduk, QDTO_ResiDetailProduk> {
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
}
export declare class DTO_ResiDetailProdukCollectionService<in out ClientType extends ODataHttpClient> extends EntitySetServiceV4<ClientType, DTO_ResiDetailProduk, EditableDTO_ResiDetailProduk, QDTO_ResiDetailProduk, DTO_ResiDetailProdukId> {
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
}
export declare class DTO_ResiPicService<in out ClientType extends ODataHttpClient> extends EntityTypeServiceV4<ClientType, DTO_ResiPic, EditableDTO_ResiPic, QDTO_ResiPic> {
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
}
export declare class DTO_ResiPicCollectionService<in out ClientType extends ODataHttpClient> extends EntitySetServiceV4<ClientType, DTO_ResiPic, EditableDTO_ResiPic, QDTO_ResiPic, DTO_ResiPicId> {
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
}
export declare class DTO_ResiAttachmentService<in out ClientType extends ODataHttpClient> extends EntityTypeServiceV4<ClientType, DTO_ResiAttachment, EditableDTO_ResiAttachment, QDTO_ResiAttachment> {
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
}
export declare class DTO_ResiAttachmentCollectionService<in out ClientType extends ODataHttpClient> extends EntitySetServiceV4<ClientType, DTO_ResiAttachment, EditableDTO_ResiAttachment, QDTO_ResiAttachment, DTO_ResiAttachmentId> {
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
}
export declare class DtoHistoryTransaksiEstimasiService<in out ClientType extends ODataHttpClient> extends EntityTypeServiceV4<ClientType, DtoHistoryTransaksiEstimasi, EditableDtoHistoryTransaksiEstimasi, QDtoHistoryTransaksiEstimasi> {
    private _BudgetAlokasi?;
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
    BudgetAlokasi(): DTO_BudgetAlokasiService<ClientType>;
}
export declare class DtoHistoryTransaksiEstimasiCollectionService<in out ClientType extends ODataHttpClient> extends EntitySetServiceV4<ClientType, DtoHistoryTransaksiEstimasi, EditableDtoHistoryTransaksiEstimasi, QDtoHistoryTransaksiEstimasi, DtoHistoryTransaksiEstimasiId> {
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
}
export declare class DtoHistoryTransaksiRealiasasiService<in out ClientType extends ODataHttpClient> extends EntityTypeServiceV4<ClientType, DtoHistoryTransaksiRealiasasi, EditableDtoHistoryTransaksiRealiasasi, QDtoHistoryTransaksiRealiasasi> {
    private _BudgetAlokasi?;
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
    BudgetAlokasi(): DTO_BudgetAlokasiService<ClientType>;
}
export declare class DtoHistoryTransaksiRealiasasiCollectionService<in out ClientType extends ODataHttpClient> extends EntitySetServiceV4<ClientType, DtoHistoryTransaksiRealiasasi, EditableDtoHistoryTransaksiRealiasasi, QDtoHistoryTransaksiRealiasasi, DtoHistoryTransaksiRealiasasiId> {
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
}
export declare class UserDtoService<in out ClientType extends ODataHttpClient> extends EntityTypeServiceV4<ClientType, UserDto, EditableUserDto, QUserDto> {
    private _Users?;
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
    Users(): CollectionServiceV4<ClientType, UserItem, QUserItem, EditableUserItem>;
}
export declare class UserItemService<in out ClientType extends ODataHttpClient> extends EntityTypeServiceV4<ClientType, UserItem, EditableUserItem, QUserItem> {
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
}
export declare class TargetSeDtoService<in out ClientType extends ODataHttpClient> extends EntityTypeServiceV4<ClientType, TargetSeDto, EditableTargetSeDto, QTargetSeDto> {
    private _TargetAo?;
    private _TargetValue?;
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
    TargetAo(): CollectionServiceV4<ClientType, TargetItem, QTargetItem, EditableTargetItem>;
    TargetValue(): CollectionServiceV4<ClientType, TargetItem, QTargetItem, EditableTargetItem>;
}
export declare class TargetItemService<in out ClientType extends ODataHttpClient> extends EntityTypeServiceV4<ClientType, TargetItem, EditableTargetItem, QTargetItem> {
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
}
export declare class SosmedDtoService<in out ClientType extends ODataHttpClient> extends EntityTypeServiceV4<ClientType, SosmedDto, EditableSosmedDto, QSosmedDto> {
    private _Tiktok?;
    private _Instagram?;
    private _Youtube?;
    private _Facebook?;
    private _Twitter?;
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
    Tiktok(): CollectionServiceV4<ClientType, PlatformItem, QPlatformItem, EditablePlatformItem>;
    Instagram(): CollectionServiceV4<ClientType, PlatformItem, QPlatformItem, EditablePlatformItem>;
    Youtube(): CollectionServiceV4<ClientType, PlatformItem, QPlatformItem, EditablePlatformItem>;
    Facebook(): CollectionServiceV4<ClientType, PlatformItem, QPlatformItem, EditablePlatformItem>;
    Twitter(): CollectionServiceV4<ClientType, PlatformItem, QPlatformItem, EditablePlatformItem>;
}
export declare class PlatformItemService<in out ClientType extends ODataHttpClient> extends EntityTypeServiceV4<ClientType, PlatformItem, EditablePlatformItem, QPlatformItem> {
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
}
export declare class BookAuthorService<in out ClientType extends ODataHttpClient> extends EntityTypeServiceV4<ClientType, BookAuthor, EditableBookAuthor, QBookAuthor> {
    private _Book?;
    private _Author?;
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
    Book(): BookService<ClientType>;
    Author(): AuthorService<ClientType>;
}
export declare class SyaratDtoService<in out ClientType extends ODataHttpClient> extends EntityTypeServiceV4<ClientType, SyaratDto, EditableSyaratDto, QSyaratDto> {
    private _Syarat?;
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
    Syarat(): CollectionServiceV4<ClientType, SyaratItem, QSyaratItem, EditableSyaratItem>;
}
export declare class SyaratItemService<in out ClientType extends ODataHttpClient> extends EntityTypeServiceV4<ClientType, SyaratItem, EditableSyaratItem, QSyaratItem> {
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
}
