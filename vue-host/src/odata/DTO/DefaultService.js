import { QNumberCollection } from "@odata2ts/odata-query-objects";
import { ODataService, EntityTypeServiceV4, EntitySetServiceV4, CollectionServiceV4 } from "@odata2ts/odata-service";
import { QDTO_BudgetAlokasiId, QDTO_BudgetAlokasiListId, QDTO_BudgetLedgerId, QDTO_BudgetAlokasiRemainingId, QDTO_BudgetId, QDTO_MasterBudgetsId, QDTO_PostBudgetListId, QDTO_BudgetDetailId, QDTO_BudgetsId, QDTO_TopUpDetailId, QDTO_ReportProgramId, QDtoHistoryBudgetId, QDtoProgramTransferId, QDtoKurangBudgetDetailsId, QDtoBudgetSapViewId, QDTO_BudgetMasterHistoryId, QDtoKurangBudgetId, QDtoKurangBudgetDetailId, QDTO_PPLHId, QDTO_PPLDId, QDTO_RETURId, QDTO_RETURDId, QDTO_RETURPId, QDTO_UserTypeId, QDTO_FeatureId, QDTO_ApprovalConfigId, QDTO_ApprovalId, QDTO_EstimasiVSRealisasiId, QDTO_ApprovalConfigConditionId, QDTO_StepApprovalId, QDTO_AreaId, QDTO_BookWithAuthorsId, QDTO_BrandId, QDTO_BudgetAlokasiDetailId, QDTO_BudgetTopUpId, QDTO_BudgetTopUpDetailId, QDTO_BudgetTransferId, QDTO_BudgetTransferDetailId, QDTO_CoaId, QDTO_DepartmenId, QDTO_DistributorId, QDTO_EmailTemplateId, QDTO_EstimasiHargaBrandingId, QDTO_EstimasiHargaBrandingListId, QDTO_HeaderPplId, QDTO_HeaderPplListId, QDTO_HeaderProjekId, QDTO_HeaderProjekListId, QDtoProjectListId, QDTO_HeaderProjekBrandId, QDTO_HeaderProjekDepartemenId, QDTO_JenisPplId, QDTO_KodeKlaimsId, QDTO_JenisPplListId, QDTO_JenisProgramId, QDTO_JurnalLedgerId, QDTO_KategoriPplId, QDTO_MasterAccountId, QDTO_MasterJabatanId, QDTO_MasterKaryawanId, QDTO_MasterKlaimId, QDTO_MasterKlaimSyaratId, QDTO_MasterOrgId, QDTO_MasterJobPosId, QDTO_MasterJobLvlId, QDTO_MasterPermId, QDTO_MasterRoleId, QDTO_PermissionRefId, QDTO_MasterUserId, QDTO_UsersAttachmentId, QDTO_MasterProvinsiId, QDTO_MasterKotaId, QDTO_MasterKecamatanId, QDTO_MasterKelurahanId, QDTO_OITMId, QDTO_OutletId, QDTO_OutletGroupId, QDTO_PengajuanFormId, QDTO_PengajuanFormOutletId, QDTO_PengajuanFormAttachmentId, QDTO_PengajuanFormProdukId, QDTO_PengajuanFormDetailId, QDTO_PostBudgetId, QDTO_PostBudgetProgramId, QDTO_ChannelId, QDTO_BudgetSapId, QDTO_MasterBudgetId, QDTO_PplAreaId, QDTO_PplAttachmentId, QDTO_PplBudgetAlokasiId, QDTO_PplDetailProdukId, QDTO_PplDetailsId, QDTO_PplOutletId, QDTO_ProdukId, QDTO_ProdukCategoriId, QDTO_ProvinsiId, QDTO_KotaId, QDTO_KecamatanId, QDTO_KelurahanId, QDTO_RegionId, QDTO_ResiId, QDTO_ResiOutletId, QDTO_SalesId, QDTO_SalesmanId, QDTO_SettingsId, QDTO_SkenarioBudgetId, QDTO_SkenarioBudgetListId, QDTO_TopUpBudgetId, QDTO_TopUpBudgetDetailId, QDTO_MasterKeyVisualId, QDtoHistoryTransaksiEstimasiId, QDtoHistoryTransaksiRealiasasiId, QDtoHistoryTransaksiEstimasiViewId, QDtoHistoryTransaksiRealiasasiViewId, QDtoMasterProdukId, qDTO_BudgetAlokasi, qDTO_BudgetAlokasiList, qDTO_BudgetLedger, qDTO_BudgetAlokasiRemaining, qDTO_Budget, qDTO_MasterBudgets, qDTO_PostBudgetList, qDTO_BudgetDetail, qDTO_Budgets, qDTO_TopUpDetail, qDTO_ReportProgram, qDtoHistoryBudget, qDtoProgramTransfer, qDtoKurangBudgetDetails, qDtoBudgetSapView, qDTO_BudgetMasterHistory, qDtoKurangBudget, qDtoKurangBudgetDetail, qDTO_PPLH, qDTO_PPLD, qDTO_RETUR, qDTO_RETURD, qDTO_RETURP, qDTO_UserType, qMasterRole, QPermissionRefId, QMasterRoleId, qMasterOrganization, QMasterOrganizationId, qMasterJobPosition, QMasterJobPositionId, qMasterJobLevel, QMasterJobLevelId, qPermissionRef, qMasterPermission, QMasterPermissionId, qAuthor, qBookAuthor, QAuthorId, qBook, QBookId, qApproval, QApprovalId, qFeature, QFeatureId, qStepApproval, QStepApprovalId, qApprovalConfigCondition, QApprovalConfigConditionId, qApprovalConfig, QApprovalConfigId, qHeaderProjek, QBudgetAlokasiId, QHeaderProjekBrandId, QHeaderProjekDepartemenId, QHeaderProjekId, qJenisProgram, QKategoriPplId, QJenisProgramId, qKategoriPpl, QJenisPplId, qJenisPpl, qKodeKlaims, QMasterKlaimId, QKodeKlaimsId, qMasterKlaim, QMasterKlaimSyaratId, qMasterKlaimSyarat, qRegion, QAreaId, QRegionId, qArea, QDistributorId, qDistributor, qBrand, QPostBudgetId, QBrandId, qPostBudget, QPostBudgetProgramId, qCoa, QCoaId, qDepartmen, QDepartmenId, qPostBudgetProgram, qBudgetAlokasi, QBudgetAlokasiDetailId, qSkenarioBudget, QSkenarioBudgetId, qBudgetAlokasiDetail, qMasterBudget, QMasterBudgetId, qBudgetSap, QBudgetSapId, qHeaderProjekBrand, qHeaderProjekDepartemen, qPengajuanForm, QPengajuanFormOutletId, QPengajuanFormAttachmentId, QPengajuanFormProdukId, QPengajuanFormDetailId, QPengajuanFormId, qPengajuanFormOutlet, qOutlet, QOutletId, qOutletGroup, QOutletGroupId, qPengajuanFormAttachment, qPengajuanFormProduk, qPengajuanFormDetail, qBudgetTransfer, QBudgetTransferDetailId, QBudgetTransferId, qBudgetTransferDetail, qKurangBudget, QKurangBudgetDetailId, QKurangBudgetId, qKurangBudgetDetail, qMasterUser, QUserDistributorId, QUserAreaId, QUsersAttachmentId, QUserBrandId, QMasterUserId, qUserDistributor, qUserArea, qUsersAttachment, qUserBrand, qTopUpBudget, QTopUpBudgetDetailId, QTopUpBudgetId, qTopUpBudgetDetail, qChannel, QChannelId, qEstimasiVSRealisasi, QEstimasiVSRealisasiId, qDTO_Feature, qDTO_ApprovalConfig, qDTO_Approval, qDTO_EstimasiVSRealisasi, qDTO_ApprovalConfigCondition, qDTO_StepApproval, qDTO_Area, qDTO_BookWithAuthors, qDTO_Brand, qDTO_BudgetAlokasiDetail, qDTO_BudgetTopUp, qDTO_BudgetTopUpDetail, qDTO_BudgetTransfer, qDTO_BudgetTransferDetail, qDTO_Coa, qDTO_Departmen, qDTO_Distributor, qDTO_EmailTemplate, qDTO_EstimasiHargaBranding, qDTO_EstimasiHargaBrandingList, qDTO_HeaderPpl, qDTO_HeaderPplList, qDTO_HeaderProjek, qDTO_HeaderProjekList, qDtoProjectList, qDTO_HeaderProjekBrand, qDTO_HeaderProjekDepartemen, qDTO_JenisPpl, qDTO_KodeKlaims, qDTO_JenisPplList, qDTO_JenisProgram, qDTO_JurnalLedger, qDTO_KategoriPpl, qDTO_MasterAccount, qDTO_MasterJabatan, qDTO_MasterKaryawan, qDTO_MasterKlaim, qDTO_MasterKlaimSyarat, qDTO_MasterOrg, qDTO_MasterJobPos, qDTO_MasterJobLvl, qDTO_MasterPerm, qDTO_MasterRole, qDTO_PermissionRef, qDTO_MasterUser, QDTO_UserAreaId, QDTO_UserDistributorId, QDTO_UserBrandId, qDTO_UsersAttachment, qDTO_MasterProvinsi, qDTO_MasterKota, qDTO_MasterKecamatan, qDTO_MasterKelurahan, qDTO_OITM, qDTO_Outlet, qDTO_OutletGroup, qDTO_PengajuanForm, qDTO_PengajuanFormOutlet, qDTO_PengajuanFormAttachment, qDTO_PengajuanFormProduk, qDTO_PengajuanFormDetail, qDTO_PostBudget, qDTO_PostBudgetProgram, qDTO_Channel, qDTO_BudgetSap, qDTO_MasterBudget, qDTO_PplArea, qDTO_PplAttachment, qDTO_PplBudgetAlokasi, qDTO_PplDetailProduk, qDTO_PplDetails, qDTO_PplOutlet, qDTO_Produk, qDTO_ProdukCategori, qDTO_Provinsi, qDTO_Kota, qDTO_Kecamatan, qDTO_Kelurahan, qDTO_Region, qDTO_Resi, QDTO_ResiDetailProdukId, QDTO_ResiPicId, QDTO_ResiAttachmentId, qDTO_ResiOutlet, qDTO_Sales, qDTO_Salesman, qDTO_Settings, qDTO_SkenarioBudget, qDTO_SkenarioBudgetList, qDTO_TopUpBudget, qDTO_TopUpBudgetDetail, qDTO_MasterKeyVisual, qDTO_MasterOrgSlim, QDTO_MasterOrgSlimId, qDTO_UserArea, qDTO_UserDistributor, qDTO_UserBrand, qDTO_ResiDetailProduk, qDTO_ResiPic, qDTO_ResiAttachment, qDtoHistoryTransaksiEstimasi, qDtoHistoryTransaksiRealiasasi, qDtoHistoryTransaksiEstimasiView, qDtoHistoryTransaksiRealiasasiView, qDtoMasterProduk, qUserDto, qUserItem, qTargetSeDto, qTargetItem, qSosmedDto, qPlatformItem, qSyaratDto, qSyaratItem, qSTATUS_ENUM } from "./QDefault";
export class DefaultService extends ODataService {
    DTO_BudgetAlokasi(id) {
        const fieldName = "DTO_BudgetAlokasi";
        const { client, path, options, isUrlNotEncoded } = this.__base;
        return typeof id === "undefined" || id === null
            ? new DTO_BudgetAlokasiCollectionService(client, path, fieldName, options)
            : new DTO_BudgetAlokasiService(client, path, new QDTO_BudgetAlokasiId(fieldName).buildUrl(id, isUrlNotEncoded()), options);
    }
    DTO_BudgetAlokasiList(id) {
        const fieldName = "DTO_BudgetAlokasiList";
        const { client, path, options, isUrlNotEncoded } = this.__base;
        return typeof id === "undefined" || id === null
            ? new DTO_BudgetAlokasiListCollectionService(client, path, fieldName, options)
            : new DTO_BudgetAlokasiListService(client, path, new QDTO_BudgetAlokasiListId(fieldName).buildUrl(id, isUrlNotEncoded()), options);
    }
    DTO_BudgetLedger(id) {
        const fieldName = "DTO_BudgetLedger";
        const { client, path, options, isUrlNotEncoded } = this.__base;
        return typeof id === "undefined" || id === null
            ? new DTO_BudgetLedgerCollectionService(client, path, fieldName, options)
            : new DTO_BudgetLedgerService(client, path, new QDTO_BudgetLedgerId(fieldName).buildUrl(id, isUrlNotEncoded()), options);
    }
    DTO_BudgetAlokasiRemaining(id) {
        const fieldName = "DTO_BudgetAlokasiRemaining";
        const { client, path, options, isUrlNotEncoded } = this.__base;
        return typeof id === "undefined" || id === null
            ? new DTO_BudgetAlokasiRemainingCollectionService(client, path, fieldName, options)
            : new DTO_BudgetAlokasiRemainingService(client, path, new QDTO_BudgetAlokasiRemainingId(fieldName).buildUrl(id, isUrlNotEncoded()), options);
    }
    DTO_Budget(id) {
        const fieldName = "DTO_Budget";
        const { client, path, options, isUrlNotEncoded } = this.__base;
        return typeof id === "undefined" || id === null
            ? new DTO_BudgetCollectionService(client, path, fieldName, options)
            : new DTO_BudgetService(client, path, new QDTO_BudgetId(fieldName).buildUrl(id, isUrlNotEncoded()), options);
    }
    DTO_MasterBudgets(id) {
        const fieldName = "DTO_MasterBudgets";
        const { client, path, options, isUrlNotEncoded } = this.__base;
        return typeof id === "undefined" || id === null
            ? new DTO_MasterBudgetsCollectionService(client, path, fieldName, options)
            : new DTO_MasterBudgetsService(client, path, new QDTO_MasterBudgetsId(fieldName).buildUrl(id, isUrlNotEncoded()), options);
    }
    DTO_PostBudgetList(id) {
        const fieldName = "DTO_PostBudgetList";
        const { client, path, options, isUrlNotEncoded } = this.__base;
        return typeof id === "undefined" || id === null
            ? new DTO_PostBudgetListCollectionService(client, path, fieldName, options)
            : new DTO_PostBudgetListService(client, path, new QDTO_PostBudgetListId(fieldName).buildUrl(id, isUrlNotEncoded()), options);
    }
    DTO_BudgetDetail(id) {
        const fieldName = "DTO_BudgetDetail";
        const { client, path, options, isUrlNotEncoded } = this.__base;
        return typeof id === "undefined" || id === null
            ? new DTO_BudgetDetailCollectionService(client, path, fieldName, options)
            : new DTO_BudgetDetailService(client, path, new QDTO_BudgetDetailId(fieldName).buildUrl(id, isUrlNotEncoded()), options);
    }
    DTO_Budgets(id) {
        const fieldName = "DTO_Budgets";
        const { client, path, options, isUrlNotEncoded } = this.__base;
        return typeof id === "undefined" || id === null
            ? new DTO_BudgetsCollectionService(client, path, fieldName, options)
            : new DTO_BudgetsService(client, path, new QDTO_BudgetsId(fieldName).buildUrl(id, isUrlNotEncoded()), options);
    }
    DTO_TopUpDetail(id) {
        const fieldName = "DTO_TopUpDetail";
        const { client, path, options, isUrlNotEncoded } = this.__base;
        return typeof id === "undefined" || id === null
            ? new DTO_TopUpDetailCollectionService(client, path, fieldName, options)
            : new DTO_TopUpDetailService(client, path, new QDTO_TopUpDetailId(fieldName).buildUrl(id, isUrlNotEncoded()), options);
    }
    DTO_ReportProgram(id) {
        const fieldName = "DTO_ReportProgram";
        const { client, path, options, isUrlNotEncoded } = this.__base;
        return typeof id === "undefined" || id === null
            ? new DTO_ReportProgramCollectionService(client, path, fieldName, options)
            : new DTO_ReportProgramService(client, path, new QDTO_ReportProgramId(fieldName).buildUrl(id, isUrlNotEncoded()), options);
    }
    DtoHistoryBudget(id) {
        const fieldName = "DtoHistoryBudget";
        const { client, path, options, isUrlNotEncoded } = this.__base;
        return typeof id === "undefined" || id === null
            ? new DtoHistoryBudgetCollectionService(client, path, fieldName, options)
            : new DtoHistoryBudgetService(client, path, new QDtoHistoryBudgetId(fieldName).buildUrl(id, isUrlNotEncoded()), options);
    }
    DtoProgramTransfer(id) {
        const fieldName = "DtoProgramTransfer";
        const { client, path, options, isUrlNotEncoded } = this.__base;
        return typeof id === "undefined" || id === null
            ? new DtoProgramTransferCollectionService(client, path, fieldName, options)
            : new DtoProgramTransferService(client, path, new QDtoProgramTransferId(fieldName).buildUrl(id, isUrlNotEncoded()), options);
    }
    DtoKurangBudgetDetails(id) {
        const fieldName = "DtoKurangBudgetDetails";
        const { client, path, options, isUrlNotEncoded } = this.__base;
        return typeof id === "undefined" || id === null
            ? new DtoKurangBudgetDetailsCollectionService(client, path, fieldName, options)
            : new DtoKurangBudgetDetailsService(client, path, new QDtoKurangBudgetDetailsId(fieldName).buildUrl(id, isUrlNotEncoded()), options);
    }
    DtoBudgetSapView(id) {
        const fieldName = "DtoBudgetSapView";
        const { client, path, options, isUrlNotEncoded } = this.__base;
        return typeof id === "undefined" || id === null
            ? new DtoBudgetSapViewCollectionService(client, path, fieldName, options)
            : new DtoBudgetSapViewService(client, path, new QDtoBudgetSapViewId(fieldName).buildUrl(id, isUrlNotEncoded()), options);
    }
    DTO_BudgetMasterHistory(id) {
        const fieldName = "DTO_BudgetMasterHistory";
        const { client, path, options, isUrlNotEncoded } = this.__base;
        return typeof id === "undefined" || id === null
            ? new DTO_BudgetMasterHistoryCollectionService(client, path, fieldName, options)
            : new DTO_BudgetMasterHistoryService(client, path, new QDTO_BudgetMasterHistoryId(fieldName).buildUrl(id, isUrlNotEncoded()), options);
    }
    DtoKurangBudget(id) {
        const fieldName = "DtoKurangBudget";
        const { client, path, options, isUrlNotEncoded } = this.__base;
        return typeof id === "undefined" || id === null
            ? new DtoKurangBudgetCollectionService(client, path, fieldName, options)
            : new DtoKurangBudgetService(client, path, new QDtoKurangBudgetId(fieldName).buildUrl(id, isUrlNotEncoded()), options);
    }
    DtoKurangBudgetDetail(id) {
        const fieldName = "DtoKurangBudgetDetail";
        const { client, path, options, isUrlNotEncoded } = this.__base;
        return typeof id === "undefined" || id === null
            ? new DtoKurangBudgetDetailCollectionService(client, path, fieldName, options)
            : new DtoKurangBudgetDetailService(client, path, new QDtoKurangBudgetDetailId(fieldName).buildUrl(id, isUrlNotEncoded()), options);
    }
    DTO_PPLH(id) {
        const fieldName = "DTO_PPLH";
        const { client, path, options, isUrlNotEncoded } = this.__base;
        return typeof id === "undefined" || id === null
            ? new DTO_PPLHCollectionService(client, path, fieldName, options)
            : new DTO_PPLHService(client, path, new QDTO_PPLHId(fieldName).buildUrl(id, isUrlNotEncoded()), options);
    }
    DTO_PPLD(id) {
        const fieldName = "DTO_PPLD";
        const { client, path, options, isUrlNotEncoded } = this.__base;
        return typeof id === "undefined" || id === null
            ? new DTO_PPLDCollectionService(client, path, fieldName, options)
            : new DTO_PPLDService(client, path, new QDTO_PPLDId(fieldName).buildUrl(id, isUrlNotEncoded()), options);
    }
    DTO_RETUR(id) {
        const fieldName = "DTO_RETUR";
        const { client, path, options, isUrlNotEncoded } = this.__base;
        return typeof id === "undefined" || id === null
            ? new DTO_RETURCollectionService(client, path, fieldName, options)
            : new DTO_RETURService(client, path, new QDTO_RETURId(fieldName).buildUrl(id, isUrlNotEncoded()), options);
    }
    DTO_RETURD(id) {
        const fieldName = "DTO_RETURD";
        const { client, path, options, isUrlNotEncoded } = this.__base;
        return typeof id === "undefined" || id === null
            ? new DTO_RETURDCollectionService(client, path, fieldName, options)
            : new DTO_RETURDService(client, path, new QDTO_RETURDId(fieldName).buildUrl(id, isUrlNotEncoded()), options);
    }
    DTO_RETURP(id) {
        const fieldName = "DTO_RETURP";
        const { client, path, options, isUrlNotEncoded } = this.__base;
        return typeof id === "undefined" || id === null
            ? new DTO_RETURPCollectionService(client, path, fieldName, options)
            : new DTO_RETURPService(client, path, new QDTO_RETURPId(fieldName).buildUrl(id, isUrlNotEncoded()), options);
    }
    DTO_UserType(id) {
        const fieldName = "DTO_UserType";
        const { client, path, options, isUrlNotEncoded } = this.__base;
        return typeof id === "undefined" || id === null
            ? new DTO_UserTypeCollectionService(client, path, fieldName, options)
            : new DTO_UserTypeService(client, path, new QDTO_UserTypeId(fieldName).buildUrl(id, isUrlNotEncoded()), options);
    }
    DTO_Feature(id) {
        const fieldName = "DTO_Feature";
        const { client, path, options, isUrlNotEncoded } = this.__base;
        return typeof id === "undefined" || id === null
            ? new DTO_FeatureCollectionService(client, path, fieldName, options)
            : new DTO_FeatureService(client, path, new QDTO_FeatureId(fieldName).buildUrl(id, isUrlNotEncoded()), options);
    }
    DTO_ApprovalConfig(id) {
        const fieldName = "DTO_ApprovalConfig";
        const { client, path, options, isUrlNotEncoded } = this.__base;
        return typeof id === "undefined" || id === null
            ? new DTO_ApprovalConfigCollectionService(client, path, fieldName, options)
            : new DTO_ApprovalConfigService(client, path, new QDTO_ApprovalConfigId(fieldName).buildUrl(id, isUrlNotEncoded()), options);
    }
    DTO_Approval(id) {
        const fieldName = "DTO_Approval";
        const { client, path, options, isUrlNotEncoded } = this.__base;
        return typeof id === "undefined" || id === null
            ? new DTO_ApprovalCollectionService(client, path, fieldName, options)
            : new DTO_ApprovalService(client, path, new QDTO_ApprovalId(fieldName).buildUrl(id, isUrlNotEncoded()), options);
    }
    DTO_EstimasiVSRealisasi(id) {
        const fieldName = "DTO_EstimasiVSRealisasi";
        const { client, path, options, isUrlNotEncoded } = this.__base;
        return typeof id === "undefined" || id === null
            ? new DTO_EstimasiVSRealisasiCollectionService(client, path, fieldName, options)
            : new DTO_EstimasiVSRealisasiService(client, path, new QDTO_EstimasiVSRealisasiId(fieldName).buildUrl(id, isUrlNotEncoded()), options);
    }
    DTO_ApprovalConfigCondition(id) {
        const fieldName = "DTO_ApprovalConfigCondition";
        const { client, path, options, isUrlNotEncoded } = this.__base;
        return typeof id === "undefined" || id === null
            ? new DTO_ApprovalConfigConditionCollectionService(client, path, fieldName, options)
            : new DTO_ApprovalConfigConditionService(client, path, new QDTO_ApprovalConfigConditionId(fieldName).buildUrl(id, isUrlNotEncoded()), options);
    }
    DTO_StepApproval(id) {
        const fieldName = "DTO_StepApproval";
        const { client, path, options, isUrlNotEncoded } = this.__base;
        return typeof id === "undefined" || id === null
            ? new DTO_StepApprovalCollectionService(client, path, fieldName, options)
            : new DTO_StepApprovalService(client, path, new QDTO_StepApprovalId(fieldName).buildUrl(id, isUrlNotEncoded()), options);
    }
    DTO_Area(id) {
        const fieldName = "DTO_Area";
        const { client, path, options, isUrlNotEncoded } = this.__base;
        return typeof id === "undefined" || id === null
            ? new DTO_AreaCollectionService(client, path, fieldName, options)
            : new DTO_AreaService(client, path, new QDTO_AreaId(fieldName).buildUrl(id, isUrlNotEncoded()), options);
    }
    DTO_BookWithAuthors(id) {
        const fieldName = "DTO_BookWithAuthors";
        const { client, path, options, isUrlNotEncoded } = this.__base;
        return typeof id === "undefined" || id === null
            ? new DTO_BookWithAuthorsCollectionService(client, path, fieldName, options)
            : new DTO_BookWithAuthorsService(client, path, new QDTO_BookWithAuthorsId(fieldName).buildUrl(id, isUrlNotEncoded()), options);
    }
    DTO_Brand(id) {
        const fieldName = "DTO_Brand";
        const { client, path, options, isUrlNotEncoded } = this.__base;
        return typeof id === "undefined" || id === null
            ? new DTO_BrandCollectionService(client, path, fieldName, options)
            : new DTO_BrandService(client, path, new QDTO_BrandId(fieldName).buildUrl(id, isUrlNotEncoded()), options);
    }
    DTO_BudgetAlokasiDetail(id) {
        const fieldName = "DTO_BudgetAlokasiDetail";
        const { client, path, options, isUrlNotEncoded } = this.__base;
        return typeof id === "undefined" || id === null
            ? new DTO_BudgetAlokasiDetailCollectionService(client, path, fieldName, options)
            : new DTO_BudgetAlokasiDetailService(client, path, new QDTO_BudgetAlokasiDetailId(fieldName).buildUrl(id, isUrlNotEncoded()), options);
    }
    DTO_BudgetTopUp(id) {
        const fieldName = "DTO_BudgetTopUp";
        const { client, path, options, isUrlNotEncoded } = this.__base;
        return typeof id === "undefined" || id === null
            ? new DTO_BudgetTopUpCollectionService(client, path, fieldName, options)
            : new DTO_BudgetTopUpService(client, path, new QDTO_BudgetTopUpId(fieldName).buildUrl(id, isUrlNotEncoded()), options);
    }
    DTO_BudgetTopUpDetail(id) {
        const fieldName = "DTO_BudgetTopUpDetail";
        const { client, path, options, isUrlNotEncoded } = this.__base;
        return typeof id === "undefined" || id === null
            ? new DTO_BudgetTopUpDetailCollectionService(client, path, fieldName, options)
            : new DTO_BudgetTopUpDetailService(client, path, new QDTO_BudgetTopUpDetailId(fieldName).buildUrl(id, isUrlNotEncoded()), options);
    }
    DTO_BudgetTransfer(id) {
        const fieldName = "DTO_BudgetTransfer";
        const { client, path, options, isUrlNotEncoded } = this.__base;
        return typeof id === "undefined" || id === null
            ? new DTO_BudgetTransferCollectionService(client, path, fieldName, options)
            : new DTO_BudgetTransferService(client, path, new QDTO_BudgetTransferId(fieldName).buildUrl(id, isUrlNotEncoded()), options);
    }
    DTO_BudgetTransferDetail(id) {
        const fieldName = "DTO_BudgetTransferDetail";
        const { client, path, options, isUrlNotEncoded } = this.__base;
        return typeof id === "undefined" || id === null
            ? new DTO_BudgetTransferDetailCollectionService(client, path, fieldName, options)
            : new DTO_BudgetTransferDetailService(client, path, new QDTO_BudgetTransferDetailId(fieldName).buildUrl(id, isUrlNotEncoded()), options);
    }
    DTO_Coa(id) {
        const fieldName = "DTO_Coa";
        const { client, path, options, isUrlNotEncoded } = this.__base;
        return typeof id === "undefined" || id === null
            ? new DTO_CoaCollectionService(client, path, fieldName, options)
            : new DTO_CoaService(client, path, new QDTO_CoaId(fieldName).buildUrl(id, isUrlNotEncoded()), options);
    }
    DTO_Departmen(id) {
        const fieldName = "DTO_Departmen";
        const { client, path, options, isUrlNotEncoded } = this.__base;
        return typeof id === "undefined" || id === null
            ? new DTO_DepartmenCollectionService(client, path, fieldName, options)
            : new DTO_DepartmenService(client, path, new QDTO_DepartmenId(fieldName).buildUrl(id, isUrlNotEncoded()), options);
    }
    DTO_Distributor(id) {
        const fieldName = "DTO_Distributor";
        const { client, path, options, isUrlNotEncoded } = this.__base;
        return typeof id === "undefined" || id === null
            ? new DTO_DistributorCollectionService(client, path, fieldName, options)
            : new DTO_DistributorService(client, path, new QDTO_DistributorId(fieldName).buildUrl(id, isUrlNotEncoded()), options);
    }
    DTO_EmailTemplate(id) {
        const fieldName = "DTO_EmailTemplate";
        const { client, path, options, isUrlNotEncoded } = this.__base;
        return typeof id === "undefined" || id === null
            ? new DTO_EmailTemplateCollectionService(client, path, fieldName, options)
            : new DTO_EmailTemplateService(client, path, new QDTO_EmailTemplateId(fieldName).buildUrl(id, isUrlNotEncoded()), options);
    }
    DTO_EstimasiHargaBranding(id) {
        const fieldName = "DTO_EstimasiHargaBranding";
        const { client, path, options, isUrlNotEncoded } = this.__base;
        return typeof id === "undefined" || id === null
            ? new DTO_EstimasiHargaBrandingCollectionService(client, path, fieldName, options)
            : new DTO_EstimasiHargaBrandingService(client, path, new QDTO_EstimasiHargaBrandingId(fieldName).buildUrl(id, isUrlNotEncoded()), options);
    }
    DTO_EstimasiHargaBrandingList(id) {
        const fieldName = "DTO_EstimasiHargaBrandingList";
        const { client, path, options, isUrlNotEncoded } = this.__base;
        return typeof id === "undefined" || id === null
            ? new DTO_EstimasiHargaBrandingListCollectionService(client, path, fieldName, options)
            : new DTO_EstimasiHargaBrandingListService(client, path, new QDTO_EstimasiHargaBrandingListId(fieldName).buildUrl(id, isUrlNotEncoded()), options);
    }
    DTO_HeaderPpl(id) {
        const fieldName = "DTO_HeaderPpl";
        const { client, path, options, isUrlNotEncoded } = this.__base;
        return typeof id === "undefined" || id === null
            ? new DTO_HeaderPplCollectionService(client, path, fieldName, options)
            : new DTO_HeaderPplService(client, path, new QDTO_HeaderPplId(fieldName).buildUrl(id, isUrlNotEncoded()), options);
    }
    DTO_HeaderPplList(id) {
        const fieldName = "DTO_HeaderPplList";
        const { client, path, options, isUrlNotEncoded } = this.__base;
        return typeof id === "undefined" || id === null
            ? new DTO_HeaderPplListCollectionService(client, path, fieldName, options)
            : new DTO_HeaderPplListService(client, path, new QDTO_HeaderPplListId(fieldName).buildUrl(id, isUrlNotEncoded()), options);
    }
    DTO_HeaderProjek(id) {
        const fieldName = "DTO_HeaderProjek";
        const { client, path, options, isUrlNotEncoded } = this.__base;
        return typeof id === "undefined" || id === null
            ? new DTO_HeaderProjekCollectionService(client, path, fieldName, options)
            : new DTO_HeaderProjekService(client, path, new QDTO_HeaderProjekId(fieldName).buildUrl(id, isUrlNotEncoded()), options);
    }
    DTO_HeaderProjekList(id) {
        const fieldName = "DTO_HeaderProjekList";
        const { client, path, options, isUrlNotEncoded } = this.__base;
        return typeof id === "undefined" || id === null
            ? new DTO_HeaderProjekListCollectionService(client, path, fieldName, options)
            : new DTO_HeaderProjekListService(client, path, new QDTO_HeaderProjekListId(fieldName).buildUrl(id, isUrlNotEncoded()), options);
    }
    DtoProjectList(id) {
        const fieldName = "DtoProjectList";
        const { client, path, options, isUrlNotEncoded } = this.__base;
        return typeof id === "undefined" || id === null
            ? new DtoProjectListCollectionService(client, path, fieldName, options)
            : new DtoProjectListService(client, path, new QDtoProjectListId(fieldName).buildUrl(id, isUrlNotEncoded()), options);
    }
    DTO_HeaderProjekBrand(id) {
        const fieldName = "DTO_HeaderProjekBrand";
        const { client, path, options, isUrlNotEncoded } = this.__base;
        return typeof id === "undefined" || id === null
            ? new DTO_HeaderProjekBrandCollectionService(client, path, fieldName, options)
            : new DTO_HeaderProjekBrandService(client, path, new QDTO_HeaderProjekBrandId(fieldName).buildUrl(id, isUrlNotEncoded()), options);
    }
    DTO_HeaderProjekDepartemen(id) {
        const fieldName = "DTO_HeaderProjekDepartemen";
        const { client, path, options, isUrlNotEncoded } = this.__base;
        return typeof id === "undefined" || id === null
            ? new DTO_HeaderProjekDepartemenCollectionService(client, path, fieldName, options)
            : new DTO_HeaderProjekDepartemenService(client, path, new QDTO_HeaderProjekDepartemenId(fieldName).buildUrl(id, isUrlNotEncoded()), options);
    }
    DTO_JenisPpl(id) {
        const fieldName = "DTO_JenisPpl";
        const { client, path, options, isUrlNotEncoded } = this.__base;
        return typeof id === "undefined" || id === null
            ? new DTO_JenisPplCollectionService(client, path, fieldName, options)
            : new DTO_JenisPplService(client, path, new QDTO_JenisPplId(fieldName).buildUrl(id, isUrlNotEncoded()), options);
    }
    DTO_KodeKlaims(id) {
        const fieldName = "DTO_KodeKlaims";
        const { client, path, options, isUrlNotEncoded } = this.__base;
        return typeof id === "undefined" || id === null
            ? new DTO_KodeKlaimsCollectionService(client, path, fieldName, options)
            : new DTO_KodeKlaimsService(client, path, new QDTO_KodeKlaimsId(fieldName).buildUrl(id, isUrlNotEncoded()), options);
    }
    DTO_JenisPplList(id) {
        const fieldName = "DTO_JenisPplList";
        const { client, path, options, isUrlNotEncoded } = this.__base;
        return typeof id === "undefined" || id === null
            ? new DTO_JenisPplListCollectionService(client, path, fieldName, options)
            : new DTO_JenisPplListService(client, path, new QDTO_JenisPplListId(fieldName).buildUrl(id, isUrlNotEncoded()), options);
    }
    DTO_JenisProgram(id) {
        const fieldName = "DTO_JenisProgram";
        const { client, path, options, isUrlNotEncoded } = this.__base;
        return typeof id === "undefined" || id === null
            ? new DTO_JenisProgramCollectionService(client, path, fieldName, options)
            : new DTO_JenisProgramService(client, path, new QDTO_JenisProgramId(fieldName).buildUrl(id, isUrlNotEncoded()), options);
    }
    DTO_JurnalLedger(id) {
        const fieldName = "DTO_JurnalLedger";
        const { client, path, options, isUrlNotEncoded } = this.__base;
        return typeof id === "undefined" || id === null
            ? new DTO_JurnalLedgerCollectionService(client, path, fieldName, options)
            : new DTO_JurnalLedgerService(client, path, new QDTO_JurnalLedgerId(fieldName).buildUrl(id, isUrlNotEncoded()), options);
    }
    DTO_KategoriPpl(id) {
        const fieldName = "DTO_KategoriPpl";
        const { client, path, options, isUrlNotEncoded } = this.__base;
        return typeof id === "undefined" || id === null
            ? new DTO_KategoriPplCollectionService(client, path, fieldName, options)
            : new DTO_KategoriPplService(client, path, new QDTO_KategoriPplId(fieldName).buildUrl(id, isUrlNotEncoded()), options);
    }
    DTO_MasterAccount(id) {
        const fieldName = "DTO_MasterAccount";
        const { client, path, options, isUrlNotEncoded } = this.__base;
        return typeof id === "undefined" || id === null
            ? new DTO_MasterAccountCollectionService(client, path, fieldName, options)
            : new DTO_MasterAccountService(client, path, new QDTO_MasterAccountId(fieldName).buildUrl(id, isUrlNotEncoded()), options);
    }
    DTO_MasterJabatan(id) {
        const fieldName = "DTO_MasterJabatan";
        const { client, path, options, isUrlNotEncoded } = this.__base;
        return typeof id === "undefined" || id === null
            ? new DTO_MasterJabatanCollectionService(client, path, fieldName, options)
            : new DTO_MasterJabatanService(client, path, new QDTO_MasterJabatanId(fieldName).buildUrl(id, isUrlNotEncoded()), options);
    }
    DTO_MasterKaryawan(id) {
        const fieldName = "DTO_MasterKaryawan";
        const { client, path, options, isUrlNotEncoded } = this.__base;
        return typeof id === "undefined" || id === null
            ? new DTO_MasterKaryawanCollectionService(client, path, fieldName, options)
            : new DTO_MasterKaryawanService(client, path, new QDTO_MasterKaryawanId(fieldName).buildUrl(id, isUrlNotEncoded()), options);
    }
    DTO_MasterKlaim(id) {
        const fieldName = "DTO_MasterKlaim";
        const { client, path, options, isUrlNotEncoded } = this.__base;
        return typeof id === "undefined" || id === null
            ? new DTO_MasterKlaimCollectionService(client, path, fieldName, options)
            : new DTO_MasterKlaimService(client, path, new QDTO_MasterKlaimId(fieldName).buildUrl(id, isUrlNotEncoded()), options);
    }
    DTO_MasterKlaimSyarat(id) {
        const fieldName = "DTO_MasterKlaimSyarat";
        const { client, path, options, isUrlNotEncoded } = this.__base;
        return typeof id === "undefined" || id === null
            ? new DTO_MasterKlaimSyaratCollectionService(client, path, fieldName, options)
            : new DTO_MasterKlaimSyaratService(client, path, new QDTO_MasterKlaimSyaratId(fieldName).buildUrl(id, isUrlNotEncoded()), options);
    }
    DTO_MasterOrg(id) {
        const fieldName = "DTO_MasterOrg";
        const { client, path, options, isUrlNotEncoded } = this.__base;
        return typeof id === "undefined" || id === null
            ? new DTO_MasterOrgCollectionService(client, path, fieldName, options)
            : new DTO_MasterOrgService(client, path, new QDTO_MasterOrgId(fieldName).buildUrl(id, isUrlNotEncoded()), options);
    }
    DTO_MasterJobPos(id) {
        const fieldName = "DTO_MasterJobPos";
        const { client, path, options, isUrlNotEncoded } = this.__base;
        return typeof id === "undefined" || id === null
            ? new DTO_MasterJobPosCollectionService(client, path, fieldName, options)
            : new DTO_MasterJobPosService(client, path, new QDTO_MasterJobPosId(fieldName).buildUrl(id, isUrlNotEncoded()), options);
    }
    DTO_MasterJobLvl(id) {
        const fieldName = "DTO_MasterJobLvl";
        const { client, path, options, isUrlNotEncoded } = this.__base;
        return typeof id === "undefined" || id === null
            ? new DTO_MasterJobLvlCollectionService(client, path, fieldName, options)
            : new DTO_MasterJobLvlService(client, path, new QDTO_MasterJobLvlId(fieldName).buildUrl(id, isUrlNotEncoded()), options);
    }
    DTO_MasterPerm(id) {
        const fieldName = "DTO_MasterPerm";
        const { client, path, options, isUrlNotEncoded } = this.__base;
        return typeof id === "undefined" || id === null
            ? new DTO_MasterPermCollectionService(client, path, fieldName, options)
            : new DTO_MasterPermService(client, path, new QDTO_MasterPermId(fieldName).buildUrl(id, isUrlNotEncoded()), options);
    }
    DTO_MasterRole(id) {
        const fieldName = "DTO_MasterRole";
        const { client, path, options, isUrlNotEncoded } = this.__base;
        return typeof id === "undefined" || id === null
            ? new DTO_MasterRoleCollectionService(client, path, fieldName, options)
            : new DTO_MasterRoleService(client, path, new QDTO_MasterRoleId(fieldName).buildUrl(id, isUrlNotEncoded()), options);
    }
    DTO_PermissionRef(id) {
        const fieldName = "DTO_PermissionRef";
        const { client, path, options, isUrlNotEncoded } = this.__base;
        return typeof id === "undefined" || id === null
            ? new DTO_PermissionRefCollectionService(client, path, fieldName, options)
            : new DTO_PermissionRefService(client, path, new QDTO_PermissionRefId(fieldName).buildUrl(id, isUrlNotEncoded()), options);
    }
    DTO_MasterUser(id) {
        const fieldName = "DTO_MasterUser";
        const { client, path, options, isUrlNotEncoded } = this.__base;
        return typeof id === "undefined" || id === null
            ? new DTO_MasterUserCollectionService(client, path, fieldName, options)
            : new DTO_MasterUserService(client, path, new QDTO_MasterUserId(fieldName).buildUrl(id, isUrlNotEncoded()), options);
    }
    DTO_UsersAttachment(id) {
        const fieldName = "DTO_UsersAttachment";
        const { client, path, options, isUrlNotEncoded } = this.__base;
        return typeof id === "undefined" || id === null
            ? new DTO_UsersAttachmentCollectionService(client, path, fieldName, options)
            : new DTO_UsersAttachmentService(client, path, new QDTO_UsersAttachmentId(fieldName).buildUrl(id, isUrlNotEncoded()), options);
    }
    DTO_MasterProvinsi(id) {
        const fieldName = "DTO_MasterProvinsi";
        const { client, path, options, isUrlNotEncoded } = this.__base;
        return typeof id === "undefined" || id === null
            ? new DTO_MasterProvinsiCollectionService(client, path, fieldName, options)
            : new DTO_MasterProvinsiService(client, path, new QDTO_MasterProvinsiId(fieldName).buildUrl(id, isUrlNotEncoded()), options);
    }
    DTO_MasterKota(id) {
        const fieldName = "DTO_MasterKota";
        const { client, path, options, isUrlNotEncoded } = this.__base;
        return typeof id === "undefined" || id === null
            ? new DTO_MasterKotaCollectionService(client, path, fieldName, options)
            : new DTO_MasterKotaService(client, path, new QDTO_MasterKotaId(fieldName).buildUrl(id, isUrlNotEncoded()), options);
    }
    DTO_MasterKecamatan(id) {
        const fieldName = "DTO_MasterKecamatan";
        const { client, path, options, isUrlNotEncoded } = this.__base;
        return typeof id === "undefined" || id === null
            ? new DTO_MasterKecamatanCollectionService(client, path, fieldName, options)
            : new DTO_MasterKecamatanService(client, path, new QDTO_MasterKecamatanId(fieldName).buildUrl(id, isUrlNotEncoded()), options);
    }
    DTO_MasterKelurahan(id) {
        const fieldName = "DTO_MasterKelurahan";
        const { client, path, options, isUrlNotEncoded } = this.__base;
        return typeof id === "undefined" || id === null
            ? new DTO_MasterKelurahanCollectionService(client, path, fieldName, options)
            : new DTO_MasterKelurahanService(client, path, new QDTO_MasterKelurahanId(fieldName).buildUrl(id, isUrlNotEncoded()), options);
    }
    DTO_OITM(id) {
        const fieldName = "DTO_OITM";
        const { client, path, options, isUrlNotEncoded } = this.__base;
        return typeof id === "undefined" || id === null
            ? new DTO_OITMCollectionService(client, path, fieldName, options)
            : new DTO_OITMService(client, path, new QDTO_OITMId(fieldName).buildUrl(id, isUrlNotEncoded()), options);
    }
    DTO_Outlet(id) {
        const fieldName = "DTO_Outlet";
        const { client, path, options, isUrlNotEncoded } = this.__base;
        return typeof id === "undefined" || id === null
            ? new DTO_OutletCollectionService(client, path, fieldName, options)
            : new DTO_OutletService(client, path, new QDTO_OutletId(fieldName).buildUrl(id, isUrlNotEncoded()), options);
    }
    DTO_OutletGroup(id) {
        const fieldName = "DTO_OutletGroup";
        const { client, path, options, isUrlNotEncoded } = this.__base;
        return typeof id === "undefined" || id === null
            ? new DTO_OutletGroupCollectionService(client, path, fieldName, options)
            : new DTO_OutletGroupService(client, path, new QDTO_OutletGroupId(fieldName).buildUrl(id, isUrlNotEncoded()), options);
    }
    DTO_PengajuanForm(id) {
        const fieldName = "DTO_PengajuanForm";
        const { client, path, options, isUrlNotEncoded } = this.__base;
        return typeof id === "undefined" || id === null
            ? new DTO_PengajuanFormCollectionService(client, path, fieldName, options)
            : new DTO_PengajuanFormService(client, path, new QDTO_PengajuanFormId(fieldName).buildUrl(id, isUrlNotEncoded()), options);
    }
    DTO_PengajuanFormOutlet(id) {
        const fieldName = "DTO_PengajuanFormOutlet";
        const { client, path, options, isUrlNotEncoded } = this.__base;
        return typeof id === "undefined" || id === null
            ? new DTO_PengajuanFormOutletCollectionService(client, path, fieldName, options)
            : new DTO_PengajuanFormOutletService(client, path, new QDTO_PengajuanFormOutletId(fieldName).buildUrl(id, isUrlNotEncoded()), options);
    }
    DTO_PengajuanFormAttachment(id) {
        const fieldName = "DTO_PengajuanFormAttachment";
        const { client, path, options, isUrlNotEncoded } = this.__base;
        return typeof id === "undefined" || id === null
            ? new DTO_PengajuanFormAttachmentCollectionService(client, path, fieldName, options)
            : new DTO_PengajuanFormAttachmentService(client, path, new QDTO_PengajuanFormAttachmentId(fieldName).buildUrl(id, isUrlNotEncoded()), options);
    }
    DTO_PengajuanFormProduk(id) {
        const fieldName = "DTO_PengajuanFormProduk";
        const { client, path, options, isUrlNotEncoded } = this.__base;
        return typeof id === "undefined" || id === null
            ? new DTO_PengajuanFormProdukCollectionService(client, path, fieldName, options)
            : new DTO_PengajuanFormProdukService(client, path, new QDTO_PengajuanFormProdukId(fieldName).buildUrl(id, isUrlNotEncoded()), options);
    }
    DTO_PengajuanFormDetail(id) {
        const fieldName = "DTO_PengajuanFormDetail";
        const { client, path, options, isUrlNotEncoded } = this.__base;
        return typeof id === "undefined" || id === null
            ? new DTO_PengajuanFormDetailCollectionService(client, path, fieldName, options)
            : new DTO_PengajuanFormDetailService(client, path, new QDTO_PengajuanFormDetailId(fieldName).buildUrl(id, isUrlNotEncoded()), options);
    }
    DTO_PostBudget(id) {
        const fieldName = "DTO_PostBudget";
        const { client, path, options, isUrlNotEncoded } = this.__base;
        return typeof id === "undefined" || id === null
            ? new DTO_PostBudgetCollectionService(client, path, fieldName, options)
            : new DTO_PostBudgetService(client, path, new QDTO_PostBudgetId(fieldName).buildUrl(id, isUrlNotEncoded()), options);
    }
    DTO_PostBudgetProgram(id) {
        const fieldName = "DTO_PostBudgetProgram";
        const { client, path, options, isUrlNotEncoded } = this.__base;
        return typeof id === "undefined" || id === null
            ? new DTO_PostBudgetProgramCollectionService(client, path, fieldName, options)
            : new DTO_PostBudgetProgramService(client, path, new QDTO_PostBudgetProgramId(fieldName).buildUrl(id, isUrlNotEncoded()), options);
    }
    DTO_Channel(id) {
        const fieldName = "DTO_Channel";
        const { client, path, options, isUrlNotEncoded } = this.__base;
        return typeof id === "undefined" || id === null
            ? new DTO_ChannelCollectionService(client, path, fieldName, options)
            : new DTO_ChannelService(client, path, new QDTO_ChannelId(fieldName).buildUrl(id, isUrlNotEncoded()), options);
    }
    DTO_BudgetSap(id) {
        const fieldName = "DTO_BudgetSap";
        const { client, path, options, isUrlNotEncoded } = this.__base;
        return typeof id === "undefined" || id === null
            ? new DTO_BudgetSapCollectionService(client, path, fieldName, options)
            : new DTO_BudgetSapService(client, path, new QDTO_BudgetSapId(fieldName).buildUrl(id, isUrlNotEncoded()), options);
    }
    DTO_MasterBudget(id) {
        const fieldName = "DTO_MasterBudget";
        const { client, path, options, isUrlNotEncoded } = this.__base;
        return typeof id === "undefined" || id === null
            ? new DTO_MasterBudgetCollectionService(client, path, fieldName, options)
            : new DTO_MasterBudgetService(client, path, new QDTO_MasterBudgetId(fieldName).buildUrl(id, isUrlNotEncoded()), options);
    }
    DTO_PplArea(id) {
        const fieldName = "DTO_PplArea";
        const { client, path, options, isUrlNotEncoded } = this.__base;
        return typeof id === "undefined" || id === null
            ? new DTO_PplAreaCollectionService(client, path, fieldName, options)
            : new DTO_PplAreaService(client, path, new QDTO_PplAreaId(fieldName).buildUrl(id, isUrlNotEncoded()), options);
    }
    DTO_PplAttachment(id) {
        const fieldName = "DTO_PplAttachment";
        const { client, path, options, isUrlNotEncoded } = this.__base;
        return typeof id === "undefined" || id === null
            ? new DTO_PplAttachmentCollectionService(client, path, fieldName, options)
            : new DTO_PplAttachmentService(client, path, new QDTO_PplAttachmentId(fieldName).buildUrl(id, isUrlNotEncoded()), options);
    }
    DTO_PplBudgetAlokasi(id) {
        const fieldName = "DTO_PplBudgetAlokasi";
        const { client, path, options, isUrlNotEncoded } = this.__base;
        return typeof id === "undefined" || id === null
            ? new DTO_PplBudgetAlokasiCollectionService(client, path, fieldName, options)
            : new DTO_PplBudgetAlokasiService(client, path, new QDTO_PplBudgetAlokasiId(fieldName).buildUrl(id, isUrlNotEncoded()), options);
    }
    DTO_PplDetailProduk(id) {
        const fieldName = "DTO_PplDetailProduk";
        const { client, path, options, isUrlNotEncoded } = this.__base;
        return typeof id === "undefined" || id === null
            ? new DTO_PplDetailProdukCollectionService(client, path, fieldName, options)
            : new DTO_PplDetailProdukService(client, path, new QDTO_PplDetailProdukId(fieldName).buildUrl(id, isUrlNotEncoded()), options);
    }
    DTO_PplDetails(id) {
        const fieldName = "DTO_PplDetails";
        const { client, path, options, isUrlNotEncoded } = this.__base;
        return typeof id === "undefined" || id === null
            ? new DTO_PplDetailsCollectionService(client, path, fieldName, options)
            : new DTO_PplDetailsService(client, path, new QDTO_PplDetailsId(fieldName).buildUrl(id, isUrlNotEncoded()), options);
    }
    DTO_PplOutlet(id) {
        const fieldName = "DTO_PplOutlet";
        const { client, path, options, isUrlNotEncoded } = this.__base;
        return typeof id === "undefined" || id === null
            ? new DTO_PplOutletCollectionService(client, path, fieldName, options)
            : new DTO_PplOutletService(client, path, new QDTO_PplOutletId(fieldName).buildUrl(id, isUrlNotEncoded()), options);
    }
    DTO_Produk(id) {
        const fieldName = "DTO_Produk";
        const { client, path, options, isUrlNotEncoded } = this.__base;
        return typeof id === "undefined" || id === null
            ? new DTO_ProdukCollectionService(client, path, fieldName, options)
            : new DTO_ProdukService(client, path, new QDTO_ProdukId(fieldName).buildUrl(id, isUrlNotEncoded()), options);
    }
    DTO_ProdukCategori(id) {
        const fieldName = "DTO_ProdukCategori";
        const { client, path, options, isUrlNotEncoded } = this.__base;
        return typeof id === "undefined" || id === null
            ? new DTO_ProdukCategoriCollectionService(client, path, fieldName, options)
            : new DTO_ProdukCategoriService(client, path, new QDTO_ProdukCategoriId(fieldName).buildUrl(id, isUrlNotEncoded()), options);
    }
    DTO_Provinsi(id) {
        const fieldName = "DTO_Provinsi";
        const { client, path, options, isUrlNotEncoded } = this.__base;
        return typeof id === "undefined" || id === null
            ? new DTO_ProvinsiCollectionService(client, path, fieldName, options)
            : new DTO_ProvinsiService(client, path, new QDTO_ProvinsiId(fieldName).buildUrl(id, isUrlNotEncoded()), options);
    }
    DTO_Kota(id) {
        const fieldName = "DTO_Kota";
        const { client, path, options, isUrlNotEncoded } = this.__base;
        return typeof id === "undefined" || id === null
            ? new DTO_KotaCollectionService(client, path, fieldName, options)
            : new DTO_KotaService(client, path, new QDTO_KotaId(fieldName).buildUrl(id, isUrlNotEncoded()), options);
    }
    DTO_Kecamatan(id) {
        const fieldName = "DTO_Kecamatan";
        const { client, path, options, isUrlNotEncoded } = this.__base;
        return typeof id === "undefined" || id === null
            ? new DTO_KecamatanCollectionService(client, path, fieldName, options)
            : new DTO_KecamatanService(client, path, new QDTO_KecamatanId(fieldName).buildUrl(id, isUrlNotEncoded()), options);
    }
    DTO_Kelurahan(id) {
        const fieldName = "DTO_Kelurahan";
        const { client, path, options, isUrlNotEncoded } = this.__base;
        return typeof id === "undefined" || id === null
            ? new DTO_KelurahanCollectionService(client, path, fieldName, options)
            : new DTO_KelurahanService(client, path, new QDTO_KelurahanId(fieldName).buildUrl(id, isUrlNotEncoded()), options);
    }
    DTO_Region(id) {
        const fieldName = "DTO_Region";
        const { client, path, options, isUrlNotEncoded } = this.__base;
        return typeof id === "undefined" || id === null
            ? new DTO_RegionCollectionService(client, path, fieldName, options)
            : new DTO_RegionService(client, path, new QDTO_RegionId(fieldName).buildUrl(id, isUrlNotEncoded()), options);
    }
    DTO_Resi(id) {
        const fieldName = "DTO_Resi";
        const { client, path, options, isUrlNotEncoded } = this.__base;
        return typeof id === "undefined" || id === null
            ? new DTO_ResiCollectionService(client, path, fieldName, options)
            : new DTO_ResiService(client, path, new QDTO_ResiId(fieldName).buildUrl(id, isUrlNotEncoded()), options);
    }
    DTO_ResiOutlet(id) {
        const fieldName = "DTO_ResiOutlet";
        const { client, path, options, isUrlNotEncoded } = this.__base;
        return typeof id === "undefined" || id === null
            ? new DTO_ResiOutletCollectionService(client, path, fieldName, options)
            : new DTO_ResiOutletService(client, path, new QDTO_ResiOutletId(fieldName).buildUrl(id, isUrlNotEncoded()), options);
    }
    DTO_Sales(id) {
        const fieldName = "DTO_Sales";
        const { client, path, options, isUrlNotEncoded } = this.__base;
        return typeof id === "undefined" || id === null
            ? new DTO_SalesCollectionService(client, path, fieldName, options)
            : new DTO_SalesService(client, path, new QDTO_SalesId(fieldName).buildUrl(id, isUrlNotEncoded()), options);
    }
    DTO_Salesman(id) {
        const fieldName = "DTO_Salesman";
        const { client, path, options, isUrlNotEncoded } = this.__base;
        return typeof id === "undefined" || id === null
            ? new DTO_SalesmanCollectionService(client, path, fieldName, options)
            : new DTO_SalesmanService(client, path, new QDTO_SalesmanId(fieldName).buildUrl(id, isUrlNotEncoded()), options);
    }
    DTO_Settings(id) {
        const fieldName = "DTO_Settings";
        const { client, path, options, isUrlNotEncoded } = this.__base;
        return typeof id === "undefined" || id === null
            ? new DTO_SettingsCollectionService(client, path, fieldName, options)
            : new DTO_SettingsService(client, path, new QDTO_SettingsId(fieldName).buildUrl(id, isUrlNotEncoded()), options);
    }
    DTO_SkenarioBudget(id) {
        const fieldName = "DTO_SkenarioBudget";
        const { client, path, options, isUrlNotEncoded } = this.__base;
        return typeof id === "undefined" || id === null
            ? new DTO_SkenarioBudgetCollectionService(client, path, fieldName, options)
            : new DTO_SkenarioBudgetService(client, path, new QDTO_SkenarioBudgetId(fieldName).buildUrl(id, isUrlNotEncoded()), options);
    }
    DTO_SkenarioBudgetList(id) {
        const fieldName = "DTO_SkenarioBudgetList";
        const { client, path, options, isUrlNotEncoded } = this.__base;
        return typeof id === "undefined" || id === null
            ? new DTO_SkenarioBudgetListCollectionService(client, path, fieldName, options)
            : new DTO_SkenarioBudgetListService(client, path, new QDTO_SkenarioBudgetListId(fieldName).buildUrl(id, isUrlNotEncoded()), options);
    }
    DTO_TopUpBudget(id) {
        const fieldName = "DTO_TopUpBudget";
        const { client, path, options, isUrlNotEncoded } = this.__base;
        return typeof id === "undefined" || id === null
            ? new DTO_TopUpBudgetCollectionService(client, path, fieldName, options)
            : new DTO_TopUpBudgetService(client, path, new QDTO_TopUpBudgetId(fieldName).buildUrl(id, isUrlNotEncoded()), options);
    }
    DTO_TopUpBudgetDetail(id) {
        const fieldName = "DTO_TopUpBudgetDetail";
        const { client, path, options, isUrlNotEncoded } = this.__base;
        return typeof id === "undefined" || id === null
            ? new DTO_TopUpBudgetDetailCollectionService(client, path, fieldName, options)
            : new DTO_TopUpBudgetDetailService(client, path, new QDTO_TopUpBudgetDetailId(fieldName).buildUrl(id, isUrlNotEncoded()), options);
    }
    DTO_MasterKeyVisual(id) {
        const fieldName = "DTO_MasterKeyVisual";
        const { client, path, options, isUrlNotEncoded } = this.__base;
        return typeof id === "undefined" || id === null
            ? new DTO_MasterKeyVisualCollectionService(client, path, fieldName, options)
            : new DTO_MasterKeyVisualService(client, path, new QDTO_MasterKeyVisualId(fieldName).buildUrl(id, isUrlNotEncoded()), options);
    }
    DtoHistoryTransaksiEstimasi(id) {
        const fieldName = "DtoHistoryTransaksiEstimasi";
        const { client, path, options, isUrlNotEncoded } = this.__base;
        return typeof id === "undefined" || id === null
            ? new DtoHistoryTransaksiEstimasiCollectionService(client, path, fieldName, options)
            : new DtoHistoryTransaksiEstimasiService(client, path, new QDtoHistoryTransaksiEstimasiId(fieldName).buildUrl(id, isUrlNotEncoded()), options);
    }
    DtoHistoryTransaksiRealiasasi(id) {
        const fieldName = "DtoHistoryTransaksiRealiasasi";
        const { client, path, options, isUrlNotEncoded } = this.__base;
        return typeof id === "undefined" || id === null
            ? new DtoHistoryTransaksiRealiasasiCollectionService(client, path, fieldName, options)
            : new DtoHistoryTransaksiRealiasasiService(client, path, new QDtoHistoryTransaksiRealiasasiId(fieldName).buildUrl(id, isUrlNotEncoded()), options);
    }
    DtoHistoryTransaksiEstimasiView(id) {
        const fieldName = "DtoHistoryTransaksiEstimasiView";
        const { client, path, options, isUrlNotEncoded } = this.__base;
        return typeof id === "undefined" || id === null
            ? new DtoHistoryTransaksiEstimasiViewCollectionService(client, path, fieldName, options)
            : new DtoHistoryTransaksiEstimasiViewService(client, path, new QDtoHistoryTransaksiEstimasiViewId(fieldName).buildUrl(id, isUrlNotEncoded()), options);
    }
    DtoHistoryTransaksiRealiasasiView(id) {
        const fieldName = "DtoHistoryTransaksiRealiasasiView";
        const { client, path, options, isUrlNotEncoded } = this.__base;
        return typeof id === "undefined" || id === null
            ? new DtoHistoryTransaksiRealiasasiViewCollectionService(client, path, fieldName, options)
            : new DtoHistoryTransaksiRealiasasiViewService(client, path, new QDtoHistoryTransaksiRealiasasiViewId(fieldName).buildUrl(id, isUrlNotEncoded()), options);
    }
    DtoMasterProduk(id) {
        const fieldName = "DtoMasterProduk";
        const { client, path, options, isUrlNotEncoded } = this.__base;
        return typeof id === "undefined" || id === null
            ? new DtoMasterProdukCollectionService(client, path, fieldName, options)
            : new DtoMasterProdukService(client, path, new QDtoMasterProdukId(fieldName).buildUrl(id, isUrlNotEncoded()), options);
    }
}
export class DTO_BudgetAlokasiService extends EntityTypeServiceV4 {
    _PostBudget;
    _SkenarioBudget;
    _JenisPpl;
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qDTO_BudgetAlokasi, options);
    }
    PostBudget() {
        if (!this._PostBudget) {
            const { client, path, options } = this.__base;
            this._PostBudget = new DTO_PostBudgetService(client, path, "PostBudget", options);
        }
        return this._PostBudget;
    }
    SkenarioBudget() {
        if (!this._SkenarioBudget) {
            const { client, path, options } = this.__base;
            this._SkenarioBudget = new DTO_SkenarioBudgetService(client, path, "SkenarioBudget", options);
        }
        return this._SkenarioBudget;
    }
    JenisPpl() {
        if (!this._JenisPpl) {
            const { client, path, options } = this.__base;
            this._JenisPpl = new DTO_JenisPplService(client, path, "JenisPpl", options);
        }
        return this._JenisPpl;
    }
    BudgetAlokasiDetail(id) {
        const fieldName = "BudgetAlokasiDetail";
        const { client, path, options, isUrlNotEncoded } = this.__base;
        return typeof id === "undefined" || id === null
            ? new DTO_BudgetAlokasiDetailCollectionService(client, path, fieldName, options)
            : new DTO_BudgetAlokasiDetailService(client, path, new QDTO_BudgetAlokasiDetailId(fieldName).buildUrl(id, isUrlNotEncoded()), options);
    }
}
export class DTO_BudgetAlokasiCollectionService extends EntitySetServiceV4 {
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qDTO_BudgetAlokasi, new QDTO_BudgetAlokasiId(name), options);
    }
}
export class DTO_BudgetAlokasiListService extends EntityTypeServiceV4 {
    _PostBudget;
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qDTO_BudgetAlokasiList, options);
    }
    PostBudget() {
        if (!this._PostBudget) {
            const { client, path, options } = this.__base;
            this._PostBudget = new DTO_PostBudgetService(client, path, "PostBudget", options);
        }
        return this._PostBudget;
    }
    BudgetAlokasiDetail(id) {
        const fieldName = "BudgetAlokasiDetail";
        const { client, path, options, isUrlNotEncoded } = this.__base;
        return typeof id === "undefined" || id === null
            ? new DTO_BudgetAlokasiDetailCollectionService(client, path, fieldName, options)
            : new DTO_BudgetAlokasiDetailService(client, path, new QDTO_BudgetAlokasiDetailId(fieldName).buildUrl(id, isUrlNotEncoded()), options);
    }
}
export class DTO_BudgetAlokasiListCollectionService extends EntitySetServiceV4 {
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qDTO_BudgetAlokasiList, new QDTO_BudgetAlokasiListId(name), options);
    }
}
export class DTO_BudgetLedgerService extends EntityTypeServiceV4 {
    _SkenarioBudget;
    _HeaderProjek;
    _BudgetAlokasi;
    _HeaderPpl;
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qDTO_BudgetLedger, options);
    }
    SkenarioBudget() {
        if (!this._SkenarioBudget) {
            const { client, path, options } = this.__base;
            this._SkenarioBudget = new DTO_SkenarioBudgetService(client, path, "SkenarioBudget", options);
        }
        return this._SkenarioBudget;
    }
    HeaderProjek() {
        if (!this._HeaderProjek) {
            const { client, path, options } = this.__base;
            this._HeaderProjek = new DTO_HeaderProjekService(client, path, "HeaderProjek", options);
        }
        return this._HeaderProjek;
    }
    BudgetAlokasi() {
        if (!this._BudgetAlokasi) {
            const { client, path, options } = this.__base;
            this._BudgetAlokasi = new DTO_BudgetAlokasiService(client, path, "BudgetAlokasi", options);
        }
        return this._BudgetAlokasi;
    }
    HeaderPpl() {
        if (!this._HeaderPpl) {
            const { client, path, options } = this.__base;
            this._HeaderPpl = new DTO_HeaderPplService(client, path, "HeaderPpl", options);
        }
        return this._HeaderPpl;
    }
}
export class DTO_BudgetLedgerCollectionService extends EntitySetServiceV4 {
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qDTO_BudgetLedger, new QDTO_BudgetLedgerId(name), options);
    }
}
export class DTO_BudgetAlokasiRemainingService extends EntityTypeServiceV4 {
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qDTO_BudgetAlokasiRemaining, options);
    }
}
export class DTO_BudgetAlokasiRemainingCollectionService extends EntitySetServiceV4 {
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qDTO_BudgetAlokasiRemaining, new QDTO_BudgetAlokasiRemainingId(name), options);
    }
}
export class DTO_BudgetService extends EntityTypeServiceV4 {
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qDTO_Budget, options);
    }
    Details(id) {
        const fieldName = "Details";
        const { client, path, options, isUrlNotEncoded } = this.__base;
        return typeof id === "undefined" || id === null
            ? new DTO_BudgetDetailCollectionService(client, path, fieldName, options)
            : new DTO_BudgetDetailService(client, path, new QDTO_BudgetDetailId(fieldName).buildUrl(id, isUrlNotEncoded()), options);
    }
    PostBudgetList(id) {
        const fieldName = "PostBudgetList";
        const { client, path, options, isUrlNotEncoded } = this.__base;
        return typeof id === "undefined" || id === null
            ? new DTO_PostBudgetListCollectionService(client, path, fieldName, options)
            : new DTO_PostBudgetListService(client, path, new QDTO_PostBudgetListId(fieldName).buildUrl(id, isUrlNotEncoded()), options);
    }
}
export class DTO_BudgetCollectionService extends EntitySetServiceV4 {
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qDTO_Budget, new QDTO_BudgetId(name), options);
    }
}
export class DTO_MasterBudgetsService extends EntityTypeServiceV4 {
    _MasterBudgetIdList;
    _JenisPplIdList;
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qDTO_MasterBudgets, options);
    }
    MasterBudgetIdList() {
        if (!this._MasterBudgetIdList) {
            const { client, path, options } = this.__base;
            this._MasterBudgetIdList = new CollectionServiceV4(client, path, "MasterBudgetIdList", new QNumberCollection(), options);
        }
        return this._MasterBudgetIdList;
    }
    JenisPplIdList() {
        if (!this._JenisPplIdList) {
            const { client, path, options } = this.__base;
            this._JenisPplIdList = new CollectionServiceV4(client, path, "JenisPplIdList", new QNumberCollection(), options);
        }
        return this._JenisPplIdList;
    }
}
export class DTO_MasterBudgetsCollectionService extends EntitySetServiceV4 {
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qDTO_MasterBudgets, new QDTO_MasterBudgetsId(name), options);
    }
}
export class DTO_PostBudgetListService extends EntityTypeServiceV4 {
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qDTO_PostBudgetList, options);
    }
}
export class DTO_PostBudgetListCollectionService extends EntitySetServiceV4 {
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qDTO_PostBudgetList, new QDTO_PostBudgetListId(name), options);
    }
}
export class DTO_BudgetDetailService extends EntityTypeServiceV4 {
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qDTO_BudgetDetail, options);
    }
}
export class DTO_BudgetDetailCollectionService extends EntitySetServiceV4 {
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qDTO_BudgetDetail, new QDTO_BudgetDetailId(name), options);
    }
}
export class DTO_BudgetsService extends EntityTypeServiceV4 {
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qDTO_Budgets, options);
    }
}
export class DTO_BudgetsCollectionService extends EntitySetServiceV4 {
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qDTO_Budgets, new QDTO_BudgetsId(name), options);
    }
}
export class DTO_TopUpDetailService extends EntityTypeServiceV4 {
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qDTO_TopUpDetail, options);
    }
}
export class DTO_TopUpDetailCollectionService extends EntitySetServiceV4 {
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qDTO_TopUpDetail, new QDTO_TopUpDetailId(name), options);
    }
}
export class DTO_ReportProgramService extends EntityTypeServiceV4 {
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qDTO_ReportProgram, options);
    }
}
export class DTO_ReportProgramCollectionService extends EntitySetServiceV4 {
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qDTO_ReportProgram, new QDTO_ReportProgramId(name), options);
    }
}
export class DtoHistoryBudgetService extends EntityTypeServiceV4 {
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qDtoHistoryBudget, options);
    }
}
export class DtoHistoryBudgetCollectionService extends EntitySetServiceV4 {
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qDtoHistoryBudget, new QDtoHistoryBudgetId(name), options);
    }
}
export class DtoProgramTransferService extends EntityTypeServiceV4 {
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qDtoProgramTransfer, options);
    }
}
export class DtoProgramTransferCollectionService extends EntitySetServiceV4 {
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qDtoProgramTransfer, new QDtoProgramTransferId(name), options);
    }
}
export class DtoKurangBudgetDetailsService extends EntityTypeServiceV4 {
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qDtoKurangBudgetDetails, options);
    }
}
export class DtoKurangBudgetDetailsCollectionService extends EntitySetServiceV4 {
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qDtoKurangBudgetDetails, new QDtoKurangBudgetDetailsId(name), options);
    }
}
export class DtoBudgetSapViewService extends EntityTypeServiceV4 {
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qDtoBudgetSapView, options);
    }
}
export class DtoBudgetSapViewCollectionService extends EntitySetServiceV4 {
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qDtoBudgetSapView, new QDtoBudgetSapViewId(name), options);
    }
}
export class DTO_BudgetMasterHistoryService extends EntityTypeServiceV4 {
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qDTO_BudgetMasterHistory, options);
    }
}
export class DTO_BudgetMasterHistoryCollectionService extends EntitySetServiceV4 {
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qDTO_BudgetMasterHistory, new QDTO_BudgetMasterHistoryId(name), options);
    }
}
export class DtoKurangBudgetService extends EntityTypeServiceV4 {
    _MasterUser;
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qDtoKurangBudget, options);
    }
    MasterUser() {
        if (!this._MasterUser) {
            const { client, path, options } = this.__base;
            this._MasterUser = new DTO_MasterUserService(client, path, "MasterUser", options);
        }
        return this._MasterUser;
    }
    Approval(id) {
        const fieldName = "Approval";
        const { client, path, options, isUrlNotEncoded } = this.__base;
        return typeof id === "undefined" || id === null
            ? new DTO_ApprovalCollectionService(client, path, fieldName, options)
            : new DTO_ApprovalService(client, path, new QDTO_ApprovalId(fieldName).buildUrl(id, isUrlNotEncoded()), options);
    }
    KurangBudgetDetail(id) {
        const fieldName = "KurangBudgetDetail";
        const { client, path, options, isUrlNotEncoded } = this.__base;
        return typeof id === "undefined" || id === null
            ? new DtoKurangBudgetDetailCollectionService(client, path, fieldName, options)
            : new DtoKurangBudgetDetailService(client, path, new QDtoKurangBudgetDetailId(fieldName).buildUrl(id, isUrlNotEncoded()), options);
    }
}
export class DtoKurangBudgetCollectionService extends EntitySetServiceV4 {
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qDtoKurangBudget, new QDtoKurangBudgetId(name), options);
    }
}
export class DtoKurangBudgetDetailService extends EntityTypeServiceV4 {
    _BudgetAlokasi;
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qDtoKurangBudgetDetail, options);
    }
    BudgetAlokasi() {
        if (!this._BudgetAlokasi) {
            const { client, path, options } = this.__base;
            this._BudgetAlokasi = new DTO_BudgetAlokasiService(client, path, "BudgetAlokasi", options);
        }
        return this._BudgetAlokasi;
    }
}
export class DtoKurangBudgetDetailCollectionService extends EntitySetServiceV4 {
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qDtoKurangBudgetDetail, new QDtoKurangBudgetDetailId(name), options);
    }
}
export class DTO_PPLHService extends EntityTypeServiceV4 {
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qDTO_PPLH, options);
    }
    PplDetails(id) {
        const fieldName = "PplDetails";
        const { client, path, options, isUrlNotEncoded } = this.__base;
        return typeof id === "undefined" || id === null
            ? new DTO_PPLDCollectionService(client, path, fieldName, options)
            : new DTO_PPLDService(client, path, new QDTO_PPLDId(fieldName).buildUrl(id, isUrlNotEncoded()), options);
    }
}
export class DTO_PPLHCollectionService extends EntitySetServiceV4 {
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qDTO_PPLH, new QDTO_PPLHId(name), options);
    }
}
export class DTO_PPLDService extends EntityTypeServiceV4 {
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qDTO_PPLD, options);
    }
}
export class DTO_PPLDCollectionService extends EntitySetServiceV4 {
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qDTO_PPLD, new QDTO_PPLDId(name), options);
    }
}
export class DTO_RETURService extends EntityTypeServiceV4 {
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qDTO_RETUR, options);
    }
    ReturDetail(id) {
        const fieldName = "ReturDetail";
        const { client, path, options, isUrlNotEncoded } = this.__base;
        return typeof id === "undefined" || id === null
            ? new DTO_RETURDCollectionService(client, path, fieldName, options)
            : new DTO_RETURDService(client, path, new QDTO_RETURDId(fieldName).buildUrl(id, isUrlNotEncoded()), options);
    }
    ReturProduct(id) {
        const fieldName = "ReturProduct";
        const { client, path, options, isUrlNotEncoded } = this.__base;
        return typeof id === "undefined" || id === null
            ? new DTO_RETURPCollectionService(client, path, fieldName, options)
            : new DTO_RETURPService(client, path, new QDTO_RETURPId(fieldName).buildUrl(id, isUrlNotEncoded()), options);
    }
}
export class DTO_RETURCollectionService extends EntitySetServiceV4 {
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qDTO_RETUR, new QDTO_RETURId(name), options);
    }
}
export class DTO_RETURDService extends EntityTypeServiceV4 {
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qDTO_RETURD, options);
    }
}
export class DTO_RETURDCollectionService extends EntitySetServiceV4 {
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qDTO_RETURD, new QDTO_RETURDId(name), options);
    }
}
export class DTO_RETURPService extends EntityTypeServiceV4 {
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qDTO_RETURP, options);
    }
}
export class DTO_RETURPCollectionService extends EntitySetServiceV4 {
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qDTO_RETURP, new QDTO_RETURPId(name), options);
    }
}
export class DTO_UserTypeService extends EntityTypeServiceV4 {
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qDTO_UserType, options);
    }
}
export class DTO_UserTypeCollectionService extends EntitySetServiceV4 {
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qDTO_UserType, new QDTO_UserTypeId(name), options);
    }
}
export class MasterRoleService extends EntityTypeServiceV4 {
    _Organization;
    _JobPosition;
    _JobLevel;
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qMasterRole, options);
    }
    Organization() {
        if (!this._Organization) {
            const { client, path, options } = this.__base;
            this._Organization = new MasterOrganizationService(client, path, "Organization", options);
        }
        return this._Organization;
    }
    JobPosition() {
        if (!this._JobPosition) {
            const { client, path, options } = this.__base;
            this._JobPosition = new MasterJobPositionService(client, path, "JobPosition", options);
        }
        return this._JobPosition;
    }
    JobLevel() {
        if (!this._JobLevel) {
            const { client, path, options } = this.__base;
            this._JobLevel = new MasterJobLevelService(client, path, "JobLevel", options);
        }
        return this._JobLevel;
    }
    Permissions(id) {
        const fieldName = "Permissions";
        const { client, path, options, isUrlNotEncoded } = this.__base;
        return typeof id === "undefined" || id === null
            ? new PermissionRefCollectionService(client, path, fieldName, options)
            : new PermissionRefService(client, path, new QPermissionRefId(fieldName).buildUrl(id, isUrlNotEncoded()), options);
    }
}
export class MasterRoleCollectionService extends EntitySetServiceV4 {
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qMasterRole, new QMasterRoleId(name), options);
    }
}
export class MasterOrganizationService extends EntityTypeServiceV4 {
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qMasterOrganization, options);
    }
}
export class MasterOrganizationCollectionService extends EntitySetServiceV4 {
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qMasterOrganization, new QMasterOrganizationId(name), options);
    }
}
export class MasterJobPositionService extends EntityTypeServiceV4 {
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qMasterJobPosition, options);
    }
}
export class MasterJobPositionCollectionService extends EntitySetServiceV4 {
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qMasterJobPosition, new QMasterJobPositionId(name), options);
    }
}
export class MasterJobLevelService extends EntityTypeServiceV4 {
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qMasterJobLevel, options);
    }
}
export class MasterJobLevelCollectionService extends EntitySetServiceV4 {
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qMasterJobLevel, new QMasterJobLevelId(name), options);
    }
}
export class PermissionRefService extends EntityTypeServiceV4 {
    _Role;
    _Permission;
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qPermissionRef, options);
    }
    Role() {
        if (!this._Role) {
            const { client, path, options } = this.__base;
            this._Role = new MasterRoleService(client, path, "Role", options);
        }
        return this._Role;
    }
    Permission() {
        if (!this._Permission) {
            const { client, path, options } = this.__base;
            this._Permission = new MasterPermissionService(client, path, "Permission", options);
        }
        return this._Permission;
    }
}
export class PermissionRefCollectionService extends EntitySetServiceV4 {
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qPermissionRef, new QPermissionRefId(name), options);
    }
}
export class MasterPermissionService extends EntityTypeServiceV4 {
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qMasterPermission, options);
    }
}
export class MasterPermissionCollectionService extends EntitySetServiceV4 {
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qMasterPermission, new QMasterPermissionId(name), options);
    }
}
export class AuthorService extends EntityTypeServiceV4 {
    _BookAuthors;
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qAuthor, options);
    }
    BookAuthors() {
        if (!this._BookAuthors) {
            const { client, path, options } = this.__base;
            this._BookAuthors = new CollectionServiceV4(client, path, "BookAuthors", qBookAuthor, options);
        }
        return this._BookAuthors;
    }
}
export class AuthorCollectionService extends EntitySetServiceV4 {
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qAuthor, new QAuthorId(name), options);
    }
}
export class BookService extends EntityTypeServiceV4 {
    _BookAuthors;
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qBook, options);
    }
    BookAuthors() {
        if (!this._BookAuthors) {
            const { client, path, options } = this.__base;
            this._BookAuthors = new CollectionServiceV4(client, path, "BookAuthors", qBookAuthor, options);
        }
        return this._BookAuthors;
    }
}
export class BookCollectionService extends EntitySetServiceV4 {
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qBook, new QBookId(name), options);
    }
}
export class ApprovalService extends EntityTypeServiceV4 {
    _UserId;
    _SubUserId;
    _Feature;
    _StepApproval;
    _MasterRole;
    _HeaderProjek;
    _PengajuanForm;
    _BudgetTransfer;
    _MasterUser;
    _TopUpBudget;
    _KurangBudget;
    _EstimasiVSRealisasi;
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qApproval, options);
    }
    UserId() {
        if (!this._UserId) {
            const { client, path, options } = this.__base;
            this._UserId = new UserDtoService(client, path, "UserId", options);
        }
        return this._UserId;
    }
    SubUserId() {
        if (!this._SubUserId) {
            const { client, path, options } = this.__base;
            this._SubUserId = new UserDtoService(client, path, "SubUserId", options);
        }
        return this._SubUserId;
    }
    Feature() {
        if (!this._Feature) {
            const { client, path, options } = this.__base;
            this._Feature = new FeatureService(client, path, "Feature", options);
        }
        return this._Feature;
    }
    StepApproval() {
        if (!this._StepApproval) {
            const { client, path, options } = this.__base;
            this._StepApproval = new StepApprovalService(client, path, "StepApproval", options);
        }
        return this._StepApproval;
    }
    MasterRole() {
        if (!this._MasterRole) {
            const { client, path, options } = this.__base;
            this._MasterRole = new MasterRoleService(client, path, "MasterRole", options);
        }
        return this._MasterRole;
    }
    HeaderProjek() {
        if (!this._HeaderProjek) {
            const { client, path, options } = this.__base;
            this._HeaderProjek = new HeaderProjekService(client, path, "HeaderProjek", options);
        }
        return this._HeaderProjek;
    }
    PengajuanForm() {
        if (!this._PengajuanForm) {
            const { client, path, options } = this.__base;
            this._PengajuanForm = new PengajuanFormService(client, path, "PengajuanForm", options);
        }
        return this._PengajuanForm;
    }
    BudgetTransfer() {
        if (!this._BudgetTransfer) {
            const { client, path, options } = this.__base;
            this._BudgetTransfer = new BudgetTransferService(client, path, "BudgetTransfer", options);
        }
        return this._BudgetTransfer;
    }
    MasterUser() {
        if (!this._MasterUser) {
            const { client, path, options } = this.__base;
            this._MasterUser = new MasterUserService(client, path, "MasterUser", options);
        }
        return this._MasterUser;
    }
    TopUpBudget() {
        if (!this._TopUpBudget) {
            const { client, path, options } = this.__base;
            this._TopUpBudget = new TopUpBudgetService(client, path, "TopUpBudget", options);
        }
        return this._TopUpBudget;
    }
    KurangBudget() {
        if (!this._KurangBudget) {
            const { client, path, options } = this.__base;
            this._KurangBudget = new KurangBudgetService(client, path, "KurangBudget", options);
        }
        return this._KurangBudget;
    }
    EstimasiVSRealisasi() {
        if (!this._EstimasiVSRealisasi) {
            const { client, path, options } = this.__base;
            this._EstimasiVSRealisasi = new EstimasiVSRealisasiService(client, path, "EstimasiVSRealisasi", options);
        }
        return this._EstimasiVSRealisasi;
    }
}
export class ApprovalCollectionService extends EntitySetServiceV4 {
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qApproval, new QApprovalId(name), options);
    }
}
export class FeatureService extends EntityTypeServiceV4 {
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qFeature, options);
    }
}
export class FeatureCollectionService extends EntitySetServiceV4 {
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qFeature, new QFeatureId(name), options);
    }
}
export class StepApprovalService extends EntityTypeServiceV4 {
    _UserId;
    _SubUserId;
    _MasterRole;
    _ApprovalConfigCondition;
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qStepApproval, options);
    }
    UserId() {
        if (!this._UserId) {
            const { client, path, options } = this.__base;
            this._UserId = new UserDtoService(client, path, "UserId", options);
        }
        return this._UserId;
    }
    SubUserId() {
        if (!this._SubUserId) {
            const { client, path, options } = this.__base;
            this._SubUserId = new UserDtoService(client, path, "SubUserId", options);
        }
        return this._SubUserId;
    }
    MasterRole() {
        if (!this._MasterRole) {
            const { client, path, options } = this.__base;
            this._MasterRole = new MasterRoleService(client, path, "MasterRole", options);
        }
        return this._MasterRole;
    }
    ApprovalConfigCondition() {
        if (!this._ApprovalConfigCondition) {
            const { client, path, options } = this.__base;
            this._ApprovalConfigCondition = new ApprovalConfigConditionService(client, path, "ApprovalConfigCondition", options);
        }
        return this._ApprovalConfigCondition;
    }
}
export class StepApprovalCollectionService extends EntitySetServiceV4 {
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qStepApproval, new QStepApprovalId(name), options);
    }
}
export class ApprovalConfigConditionService extends EntityTypeServiceV4 {
    _UserId;
    _ApprovalConfig;
    _MasterRole;
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qApprovalConfigCondition, options);
    }
    UserId() {
        if (!this._UserId) {
            const { client, path, options } = this.__base;
            this._UserId = new UserDtoService(client, path, "UserId", options);
        }
        return this._UserId;
    }
    ApprovalConfig() {
        if (!this._ApprovalConfig) {
            const { client, path, options } = this.__base;
            this._ApprovalConfig = new ApprovalConfigService(client, path, "ApprovalConfig", options);
        }
        return this._ApprovalConfig;
    }
    MasterRole() {
        if (!this._MasterRole) {
            const { client, path, options } = this.__base;
            this._MasterRole = new MasterRoleService(client, path, "MasterRole", options);
        }
        return this._MasterRole;
    }
    StepApproval(id) {
        const fieldName = "StepApproval";
        const { client, path, options, isUrlNotEncoded } = this.__base;
        return typeof id === "undefined" || id === null
            ? new StepApprovalCollectionService(client, path, fieldName, options)
            : new StepApprovalService(client, path, new QStepApprovalId(fieldName).buildUrl(id, isUrlNotEncoded()), options);
    }
}
export class ApprovalConfigConditionCollectionService extends EntitySetServiceV4 {
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qApprovalConfigCondition, new QApprovalConfigConditionId(name), options);
    }
}
export class ApprovalConfigService extends EntityTypeServiceV4 {
    _Feature;
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qApprovalConfig, options);
    }
    Feature() {
        if (!this._Feature) {
            const { client, path, options } = this.__base;
            this._Feature = new FeatureService(client, path, "Feature", options);
        }
        return this._Feature;
    }
}
export class ApprovalConfigCollectionService extends EntitySetServiceV4 {
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qApprovalConfig, new QApprovalConfigId(name), options);
    }
}
export class HeaderProjekService extends EntityTypeServiceV4 {
    _Status;
    _JenisProgram;
    _Region;
    _Brand;
    _Departmen;
    _MasterOrganization;
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qHeaderProjek, options);
    }
    Status() {
        if (!this._Status) {
            const { client, path, options } = this.__base;
            this._Status = new STATUS_ENUMService(client, path, "Status", options);
        }
        return this._Status;
    }
    JenisProgram() {
        if (!this._JenisProgram) {
            const { client, path, options } = this.__base;
            this._JenisProgram = new JenisProgramService(client, path, "JenisProgram", options);
        }
        return this._JenisProgram;
    }
    Region() {
        if (!this._Region) {
            const { client, path, options } = this.__base;
            this._Region = new RegionService(client, path, "Region", options);
        }
        return this._Region;
    }
    Brand() {
        if (!this._Brand) {
            const { client, path, options } = this.__base;
            this._Brand = new BrandService(client, path, "Brand", options);
        }
        return this._Brand;
    }
    Departmen() {
        if (!this._Departmen) {
            const { client, path, options } = this.__base;
            this._Departmen = new DepartmenService(client, path, "Departmen", options);
        }
        return this._Departmen;
    }
    MasterOrganization() {
        if (!this._MasterOrganization) {
            const { client, path, options } = this.__base;
            this._MasterOrganization = new MasterOrganizationService(client, path, "MasterOrganization", options);
        }
        return this._MasterOrganization;
    }
    BudgetAlokasi(id) {
        const fieldName = "BudgetAlokasi";
        const { client, path, options, isUrlNotEncoded } = this.__base;
        return typeof id === "undefined" || id === null
            ? new BudgetAlokasiCollectionService(client, path, fieldName, options)
            : new BudgetAlokasiService(client, path, new QBudgetAlokasiId(fieldName).buildUrl(id, isUrlNotEncoded()), options);
    }
    HeaderProjekBrand(id) {
        const fieldName = "HeaderProjekBrand";
        const { client, path, options, isUrlNotEncoded } = this.__base;
        return typeof id === "undefined" || id === null
            ? new HeaderProjekBrandCollectionService(client, path, fieldName, options)
            : new HeaderProjekBrandService(client, path, new QHeaderProjekBrandId(fieldName).buildUrl(id, isUrlNotEncoded()), options);
    }
    HeaderProjekDepartemen(id) {
        const fieldName = "HeaderProjekDepartemen";
        const { client, path, options, isUrlNotEncoded } = this.__base;
        return typeof id === "undefined" || id === null
            ? new HeaderProjekDepartemenCollectionService(client, path, fieldName, options)
            : new HeaderProjekDepartemenService(client, path, new QHeaderProjekDepartemenId(fieldName).buildUrl(id, isUrlNotEncoded()), options);
    }
    Approval(id) {
        const fieldName = "Approval";
        const { client, path, options, isUrlNotEncoded } = this.__base;
        return typeof id === "undefined" || id === null
            ? new ApprovalCollectionService(client, path, fieldName, options)
            : new ApprovalService(client, path, new QApprovalId(fieldName).buildUrl(id, isUrlNotEncoded()), options);
    }
}
export class HeaderProjekCollectionService extends EntitySetServiceV4 {
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qHeaderProjek, new QHeaderProjekId(name), options);
    }
}
export class JenisProgramService extends EntityTypeServiceV4 {
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qJenisProgram, options);
    }
    KategoriPpl(id) {
        const fieldName = "KategoriPpl";
        const { client, path, options, isUrlNotEncoded } = this.__base;
        return typeof id === "undefined" || id === null
            ? new KategoriPplCollectionService(client, path, fieldName, options)
            : new KategoriPplService(client, path, new QKategoriPplId(fieldName).buildUrl(id, isUrlNotEncoded()), options);
    }
}
export class JenisProgramCollectionService extends EntitySetServiceV4 {
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qJenisProgram, new QJenisProgramId(name), options);
    }
}
export class KategoriPplService extends EntityTypeServiceV4 {
    _JenisProgram;
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qKategoriPpl, options);
    }
    JenisProgram() {
        if (!this._JenisProgram) {
            const { client, path, options } = this.__base;
            this._JenisProgram = new JenisProgramService(client, path, "JenisProgram", options);
        }
        return this._JenisProgram;
    }
    JenisPpl(id) {
        const fieldName = "JenisPpl";
        const { client, path, options, isUrlNotEncoded } = this.__base;
        return typeof id === "undefined" || id === null
            ? new JenisPplCollectionService(client, path, fieldName, options)
            : new JenisPplService(client, path, new QJenisPplId(fieldName).buildUrl(id, isUrlNotEncoded()), options);
    }
}
export class KategoriPplCollectionService extends EntitySetServiceV4 {
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qKategoriPpl, new QKategoriPplId(name), options);
    }
}
export class JenisPplService extends EntityTypeServiceV4 {
    _KodeKlaims;
    _KategoriPpl;
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qJenisPpl, options);
    }
    KodeKlaims() {
        if (!this._KodeKlaims) {
            const { client, path, options } = this.__base;
            this._KodeKlaims = new KodeKlaimsService(client, path, "KodeKlaims", options);
        }
        return this._KodeKlaims;
    }
    KategoriPpl() {
        if (!this._KategoriPpl) {
            const { client, path, options } = this.__base;
            this._KategoriPpl = new KategoriPplService(client, path, "KategoriPpl", options);
        }
        return this._KategoriPpl;
    }
}
export class JenisPplCollectionService extends EntitySetServiceV4 {
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qJenisPpl, new QJenisPplId(name), options);
    }
}
export class KodeKlaimsService extends EntityTypeServiceV4 {
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qKodeKlaims, options);
    }
    MasterKlaim(id) {
        const fieldName = "MasterKlaim";
        const { client, path, options, isUrlNotEncoded } = this.__base;
        return typeof id === "undefined" || id === null
            ? new MasterKlaimCollectionService(client, path, fieldName, options)
            : new MasterKlaimService(client, path, new QMasterKlaimId(fieldName).buildUrl(id, isUrlNotEncoded()), options);
    }
}
export class KodeKlaimsCollectionService extends EntitySetServiceV4 {
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qKodeKlaims, new QKodeKlaimsId(name), options);
    }
}
export class MasterKlaimService extends EntityTypeServiceV4 {
    _KodeKlaims;
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qMasterKlaim, options);
    }
    KodeKlaims() {
        if (!this._KodeKlaims) {
            const { client, path, options } = this.__base;
            this._KodeKlaims = new KodeKlaimsService(client, path, "KodeKlaims", options);
        }
        return this._KodeKlaims;
    }
    MasterKlaimSyarat(id) {
        const fieldName = "MasterKlaimSyarat";
        const { client, path, options, isUrlNotEncoded } = this.__base;
        return typeof id === "undefined" || id === null
            ? new MasterKlaimSyaratCollectionService(client, path, fieldName, options)
            : new MasterKlaimSyaratService(client, path, new QMasterKlaimSyaratId(fieldName).buildUrl(id, isUrlNotEncoded()), options);
    }
}
export class MasterKlaimCollectionService extends EntitySetServiceV4 {
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qMasterKlaim, new QMasterKlaimId(name), options);
    }
}
export class MasterKlaimSyaratService extends EntityTypeServiceV4 {
    _MasterKlaim;
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qMasterKlaimSyarat, options);
    }
    MasterKlaim() {
        if (!this._MasterKlaim) {
            const { client, path, options } = this.__base;
            this._MasterKlaim = new MasterKlaimService(client, path, "MasterKlaim", options);
        }
        return this._MasterKlaim;
    }
}
export class MasterKlaimSyaratCollectionService extends EntitySetServiceV4 {
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qMasterKlaimSyarat, new QMasterKlaimSyaratId(name), options);
    }
}
export class RegionService extends EntityTypeServiceV4 {
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qRegion, options);
    }
    Area(id) {
        const fieldName = "Area";
        const { client, path, options, isUrlNotEncoded } = this.__base;
        return typeof id === "undefined" || id === null
            ? new AreaCollectionService(client, path, fieldName, options)
            : new AreaService(client, path, new QAreaId(fieldName).buildUrl(id, isUrlNotEncoded()), options);
    }
}
export class RegionCollectionService extends EntitySetServiceV4 {
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qRegion, new QRegionId(name), options);
    }
}
export class AreaService extends EntityTypeServiceV4 {
    _Region;
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qArea, options);
    }
    Region() {
        if (!this._Region) {
            const { client, path, options } = this.__base;
            this._Region = new RegionService(client, path, "Region", options);
        }
        return this._Region;
    }
    Distributor(id) {
        const fieldName = "Distributor";
        const { client, path, options, isUrlNotEncoded } = this.__base;
        return typeof id === "undefined" || id === null
            ? new DistributorCollectionService(client, path, fieldName, options)
            : new DistributorService(client, path, new QDistributorId(fieldName).buildUrl(id, isUrlNotEncoded()), options);
    }
}
export class AreaCollectionService extends EntitySetServiceV4 {
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qArea, new QAreaId(name), options);
    }
}
export class DistributorService extends EntityTypeServiceV4 {
    _Area;
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qDistributor, options);
    }
    Area() {
        if (!this._Area) {
            const { client, path, options } = this.__base;
            this._Area = new AreaService(client, path, "Area", options);
        }
        return this._Area;
    }
}
export class DistributorCollectionService extends EntitySetServiceV4 {
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qDistributor, new QDistributorId(name), options);
    }
}
export class BrandService extends EntityTypeServiceV4 {
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qBrand, options);
    }
    PostBudget(id) {
        const fieldName = "PostBudget";
        const { client, path, options, isUrlNotEncoded } = this.__base;
        return typeof id === "undefined" || id === null
            ? new PostBudgetCollectionService(client, path, fieldName, options)
            : new PostBudgetService(client, path, new QPostBudgetId(fieldName).buildUrl(id, isUrlNotEncoded()), options);
    }
}
export class BrandCollectionService extends EntitySetServiceV4 {
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qBrand, new QBrandId(name), options);
    }
}
export class PostBudgetService extends EntityTypeServiceV4 {
    _Coa;
    _Departmen;
    _Brand;
    _Parent;
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qPostBudget, options);
    }
    Coa() {
        if (!this._Coa) {
            const { client, path, options } = this.__base;
            this._Coa = new CoaService(client, path, "Coa", options);
        }
        return this._Coa;
    }
    Departmen() {
        if (!this._Departmen) {
            const { client, path, options } = this.__base;
            this._Departmen = new DepartmenService(client, path, "Departmen", options);
        }
        return this._Departmen;
    }
    Brand() {
        if (!this._Brand) {
            const { client, path, options } = this.__base;
            this._Brand = new BrandService(client, path, "Brand", options);
        }
        return this._Brand;
    }
    Parent() {
        if (!this._Parent) {
            const { client, path, options } = this.__base;
            this._Parent = new PostBudgetService(client, path, "Parent", options);
        }
        return this._Parent;
    }
    PostBudgetProgram(id) {
        const fieldName = "PostBudgetProgram";
        const { client, path, options, isUrlNotEncoded } = this.__base;
        return typeof id === "undefined" || id === null
            ? new PostBudgetProgramCollectionService(client, path, fieldName, options)
            : new PostBudgetProgramService(client, path, new QPostBudgetProgramId(fieldName).buildUrl(id, isUrlNotEncoded()), options);
    }
}
export class PostBudgetCollectionService extends EntitySetServiceV4 {
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qPostBudget, new QPostBudgetId(name), options);
    }
}
export class CoaService extends EntityTypeServiceV4 {
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qCoa, options);
    }
    PostBudget(id) {
        const fieldName = "PostBudget";
        const { client, path, options, isUrlNotEncoded } = this.__base;
        return typeof id === "undefined" || id === null
            ? new PostBudgetCollectionService(client, path, fieldName, options)
            : new PostBudgetService(client, path, new QPostBudgetId(fieldName).buildUrl(id, isUrlNotEncoded()), options);
    }
}
export class CoaCollectionService extends EntitySetServiceV4 {
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qCoa, new QCoaId(name), options);
    }
}
export class DepartmenService extends EntityTypeServiceV4 {
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qDepartmen, options);
    }
}
export class DepartmenCollectionService extends EntitySetServiceV4 {
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qDepartmen, new QDepartmenId(name), options);
    }
}
export class PostBudgetProgramService extends EntityTypeServiceV4 {
    _PostBudget;
    _JenisPpl;
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qPostBudgetProgram, options);
    }
    PostBudget() {
        if (!this._PostBudget) {
            const { client, path, options } = this.__base;
            this._PostBudget = new PostBudgetService(client, path, "PostBudget", options);
        }
        return this._PostBudget;
    }
    JenisPpl() {
        if (!this._JenisPpl) {
            const { client, path, options } = this.__base;
            this._JenisPpl = new JenisPplService(client, path, "JenisPpl", options);
        }
        return this._JenisPpl;
    }
}
export class PostBudgetProgramCollectionService extends EntitySetServiceV4 {
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qPostBudgetProgram, new QPostBudgetProgramId(name), options);
    }
}
export class BudgetAlokasiService extends EntityTypeServiceV4 {
    _PostBudget;
    _JenisPpl;
    _SkenarioBudget;
    _HeaderProjek;
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qBudgetAlokasi, options);
    }
    PostBudget() {
        if (!this._PostBudget) {
            const { client, path, options } = this.__base;
            this._PostBudget = new PostBudgetService(client, path, "PostBudget", options);
        }
        return this._PostBudget;
    }
    JenisPpl() {
        if (!this._JenisPpl) {
            const { client, path, options } = this.__base;
            this._JenisPpl = new JenisPplService(client, path, "JenisPpl", options);
        }
        return this._JenisPpl;
    }
    SkenarioBudget() {
        if (!this._SkenarioBudget) {
            const { client, path, options } = this.__base;
            this._SkenarioBudget = new SkenarioBudgetService(client, path, "SkenarioBudget", options);
        }
        return this._SkenarioBudget;
    }
    HeaderProjek() {
        if (!this._HeaderProjek) {
            const { client, path, options } = this.__base;
            this._HeaderProjek = new HeaderProjekService(client, path, "HeaderProjek", options);
        }
        return this._HeaderProjek;
    }
    BudgetAlokasiDetail(id) {
        const fieldName = "BudgetAlokasiDetail";
        const { client, path, options, isUrlNotEncoded } = this.__base;
        return typeof id === "undefined" || id === null
            ? new BudgetAlokasiDetailCollectionService(client, path, fieldName, options)
            : new BudgetAlokasiDetailService(client, path, new QBudgetAlokasiDetailId(fieldName).buildUrl(id, isUrlNotEncoded()), options);
    }
}
export class BudgetAlokasiCollectionService extends EntitySetServiceV4 {
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qBudgetAlokasi, new QBudgetAlokasiId(name), options);
    }
}
export class SkenarioBudgetService extends EntityTypeServiceV4 {
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qSkenarioBudget, options);
    }
}
export class SkenarioBudgetCollectionService extends EntitySetServiceV4 {
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qSkenarioBudget, new QSkenarioBudgetId(name), options);
    }
}
export class BudgetAlokasiDetailService extends EntityTypeServiceV4 {
    _BudgetAlokasi;
    _MasterBudget;
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qBudgetAlokasiDetail, options);
    }
    BudgetAlokasi() {
        if (!this._BudgetAlokasi) {
            const { client, path, options } = this.__base;
            this._BudgetAlokasi = new BudgetAlokasiService(client, path, "BudgetAlokasi", options);
        }
        return this._BudgetAlokasi;
    }
    MasterBudget() {
        if (!this._MasterBudget) {
            const { client, path, options } = this.__base;
            this._MasterBudget = new MasterBudgetService(client, path, "MasterBudget", options);
        }
        return this._MasterBudget;
    }
}
export class BudgetAlokasiDetailCollectionService extends EntitySetServiceV4 {
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qBudgetAlokasiDetail, new QBudgetAlokasiDetailId(name), options);
    }
}
export class MasterBudgetService extends EntityTypeServiceV4 {
    _BudgetSap;
    _PostBudget;
    _Coa;
    _Brand;
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qMasterBudget, options);
    }
    BudgetSap() {
        if (!this._BudgetSap) {
            const { client, path, options } = this.__base;
            this._BudgetSap = new BudgetSapService(client, path, "BudgetSap", options);
        }
        return this._BudgetSap;
    }
    PostBudget() {
        if (!this._PostBudget) {
            const { client, path, options } = this.__base;
            this._PostBudget = new PostBudgetService(client, path, "PostBudget", options);
        }
        return this._PostBudget;
    }
    Coa() {
        if (!this._Coa) {
            const { client, path, options } = this.__base;
            this._Coa = new CoaService(client, path, "Coa", options);
        }
        return this._Coa;
    }
    Brand() {
        if (!this._Brand) {
            const { client, path, options } = this.__base;
            this._Brand = new BrandService(client, path, "Brand", options);
        }
        return this._Brand;
    }
}
export class MasterBudgetCollectionService extends EntitySetServiceV4 {
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qMasterBudget, new QMasterBudgetId(name), options);
    }
}
export class BudgetSapService extends EntityTypeServiceV4 {
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qBudgetSap, options);
    }
    MasterBudget(id) {
        const fieldName = "MasterBudget";
        const { client, path, options, isUrlNotEncoded } = this.__base;
        return typeof id === "undefined" || id === null
            ? new MasterBudgetCollectionService(client, path, fieldName, options)
            : new MasterBudgetService(client, path, new QMasterBudgetId(fieldName).buildUrl(id, isUrlNotEncoded()), options);
    }
}
export class BudgetSapCollectionService extends EntitySetServiceV4 {
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qBudgetSap, new QBudgetSapId(name), options);
    }
}
export class HeaderProjekBrandService extends EntityTypeServiceV4 {
    _Brand;
    _HeaderProjek;
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qHeaderProjekBrand, options);
    }
    Brand() {
        if (!this._Brand) {
            const { client, path, options } = this.__base;
            this._Brand = new BrandService(client, path, "Brand", options);
        }
        return this._Brand;
    }
    HeaderProjek() {
        if (!this._HeaderProjek) {
            const { client, path, options } = this.__base;
            this._HeaderProjek = new HeaderProjekService(client, path, "HeaderProjek", options);
        }
        return this._HeaderProjek;
    }
}
export class HeaderProjekBrandCollectionService extends EntitySetServiceV4 {
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qHeaderProjekBrand, new QHeaderProjekBrandId(name), options);
    }
}
export class HeaderProjekDepartemenService extends EntityTypeServiceV4 {
    _Departmen;
    _HeaderProjek;
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qHeaderProjekDepartemen, options);
    }
    Departmen() {
        if (!this._Departmen) {
            const { client, path, options } = this.__base;
            this._Departmen = new DepartmenService(client, path, "Departmen", options);
        }
        return this._Departmen;
    }
    HeaderProjek() {
        if (!this._HeaderProjek) {
            const { client, path, options } = this.__base;
            this._HeaderProjek = new HeaderProjekService(client, path, "HeaderProjek", options);
        }
        return this._HeaderProjek;
    }
}
export class HeaderProjekDepartemenCollectionService extends EntitySetServiceV4 {
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qHeaderProjekDepartemen, new QHeaderProjekDepartemenId(name), options);
    }
}
export class PengajuanFormService extends EntityTypeServiceV4 {
    _Status;
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qPengajuanForm, options);
    }
    Status() {
        if (!this._Status) {
            const { client, path, options } = this.__base;
            this._Status = new STATUS_ENUMService(client, path, "Status", options);
        }
        return this._Status;
    }
    PengajuanFormOutlet(id) {
        const fieldName = "PengajuanFormOutlet";
        const { client, path, options, isUrlNotEncoded } = this.__base;
        return typeof id === "undefined" || id === null
            ? new PengajuanFormOutletCollectionService(client, path, fieldName, options)
            : new PengajuanFormOutletService(client, path, new QPengajuanFormOutletId(fieldName).buildUrl(id, isUrlNotEncoded()), options);
    }
    PengajuanFormAttachment(id) {
        const fieldName = "PengajuanFormAttachment";
        const { client, path, options, isUrlNotEncoded } = this.__base;
        return typeof id === "undefined" || id === null
            ? new PengajuanFormAttachmentCollectionService(client, path, fieldName, options)
            : new PengajuanFormAttachmentService(client, path, new QPengajuanFormAttachmentId(fieldName).buildUrl(id, isUrlNotEncoded()), options);
    }
    PengajuanFormProduk(id) {
        const fieldName = "PengajuanFormProduk";
        const { client, path, options, isUrlNotEncoded } = this.__base;
        return typeof id === "undefined" || id === null
            ? new PengajuanFormProdukCollectionService(client, path, fieldName, options)
            : new PengajuanFormProdukService(client, path, new QPengajuanFormProdukId(fieldName).buildUrl(id, isUrlNotEncoded()), options);
    }
    PengajuanFormDetail(id) {
        const fieldName = "PengajuanFormDetail";
        const { client, path, options, isUrlNotEncoded } = this.__base;
        return typeof id === "undefined" || id === null
            ? new PengajuanFormDetailCollectionService(client, path, fieldName, options)
            : new PengajuanFormDetailService(client, path, new QPengajuanFormDetailId(fieldName).buildUrl(id, isUrlNotEncoded()), options);
    }
    Approval(id) {
        const fieldName = "Approval";
        const { client, path, options, isUrlNotEncoded } = this.__base;
        return typeof id === "undefined" || id === null
            ? new ApprovalCollectionService(client, path, fieldName, options)
            : new ApprovalService(client, path, new QApprovalId(fieldName).buildUrl(id, isUrlNotEncoded()), options);
    }
}
export class PengajuanFormCollectionService extends EntitySetServiceV4 {
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qPengajuanForm, new QPengajuanFormId(name), options);
    }
}
export class PengajuanFormOutletService extends EntityTypeServiceV4 {
    _Outlet;
    _PengajuanForm;
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qPengajuanFormOutlet, options);
    }
    Outlet() {
        if (!this._Outlet) {
            const { client, path, options } = this.__base;
            this._Outlet = new OutletService(client, path, "Outlet", options);
        }
        return this._Outlet;
    }
    PengajuanForm() {
        if (!this._PengajuanForm) {
            const { client, path, options } = this.__base;
            this._PengajuanForm = new PengajuanFormService(client, path, "PengajuanForm", options);
        }
        return this._PengajuanForm;
    }
}
export class PengajuanFormOutletCollectionService extends EntitySetServiceV4 {
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qPengajuanFormOutlet, new QPengajuanFormOutletId(name), options);
    }
}
export class OutletService extends EntityTypeServiceV4 {
    _Area;
    _OutletGroup;
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qOutlet, options);
    }
    Area() {
        if (!this._Area) {
            const { client, path, options } = this.__base;
            this._Area = new AreaService(client, path, "Area", options);
        }
        return this._Area;
    }
    OutletGroup() {
        if (!this._OutletGroup) {
            const { client, path, options } = this.__base;
            this._OutletGroup = new OutletGroupService(client, path, "OutletGroup", options);
        }
        return this._OutletGroup;
    }
}
export class OutletCollectionService extends EntitySetServiceV4 {
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qOutlet, new QOutletId(name), options);
    }
}
export class OutletGroupService extends EntityTypeServiceV4 {
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qOutletGroup, options);
    }
    Outlet(id) {
        const fieldName = "Outlet";
        const { client, path, options, isUrlNotEncoded } = this.__base;
        return typeof id === "undefined" || id === null
            ? new OutletCollectionService(client, path, fieldName, options)
            : new OutletService(client, path, new QOutletId(fieldName).buildUrl(id, isUrlNotEncoded()), options);
    }
}
export class OutletGroupCollectionService extends EntitySetServiceV4 {
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qOutletGroup, new QOutletGroupId(name), options);
    }
}
export class PengajuanFormAttachmentService extends EntityTypeServiceV4 {
    _PengajuanForm;
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qPengajuanFormAttachment, options);
    }
    PengajuanForm() {
        if (!this._PengajuanForm) {
            const { client, path, options } = this.__base;
            this._PengajuanForm = new PengajuanFormService(client, path, "PengajuanForm", options);
        }
        return this._PengajuanForm;
    }
}
export class PengajuanFormAttachmentCollectionService extends EntitySetServiceV4 {
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qPengajuanFormAttachment, new QPengajuanFormAttachmentId(name), options);
    }
}
export class PengajuanFormProdukService extends EntityTypeServiceV4 {
    _PengajuanForm;
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qPengajuanFormProduk, options);
    }
    PengajuanForm() {
        if (!this._PengajuanForm) {
            const { client, path, options } = this.__base;
            this._PengajuanForm = new PengajuanFormService(client, path, "PengajuanForm", options);
        }
        return this._PengajuanForm;
    }
}
export class PengajuanFormProdukCollectionService extends EntitySetServiceV4 {
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qPengajuanFormProduk, new QPengajuanFormProdukId(name), options);
    }
}
export class PengajuanFormDetailService extends EntityTypeServiceV4 {
    _PengajuanForm;
    _PostBudget;
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qPengajuanFormDetail, options);
    }
    PengajuanForm() {
        if (!this._PengajuanForm) {
            const { client, path, options } = this.__base;
            this._PengajuanForm = new PengajuanFormService(client, path, "PengajuanForm", options);
        }
        return this._PengajuanForm;
    }
    PostBudget() {
        if (!this._PostBudget) {
            const { client, path, options } = this.__base;
            this._PostBudget = new PostBudgetService(client, path, "PostBudget", options);
        }
        return this._PostBudget;
    }
}
export class PengajuanFormDetailCollectionService extends EntitySetServiceV4 {
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qPengajuanFormDetail, new QPengajuanFormDetailId(name), options);
    }
}
export class BudgetTransferService extends EntityTypeServiceV4 {
    _Status;
    _Feature;
    _KurangBudget;
    _HeaderProjekSumber;
    _HeaderProjekTujuan;
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qBudgetTransfer, options);
    }
    Status() {
        if (!this._Status) {
            const { client, path, options } = this.__base;
            this._Status = new STATUS_ENUMService(client, path, "Status", options);
        }
        return this._Status;
    }
    BudgetTransferDetail(id) {
        const fieldName = "BudgetTransferDetail";
        const { client, path, options, isUrlNotEncoded } = this.__base;
        return typeof id === "undefined" || id === null
            ? new BudgetTransferDetailCollectionService(client, path, fieldName, options)
            : new BudgetTransferDetailService(client, path, new QBudgetTransferDetailId(fieldName).buildUrl(id, isUrlNotEncoded()), options);
    }
    Approval(id) {
        const fieldName = "Approval";
        const { client, path, options, isUrlNotEncoded } = this.__base;
        return typeof id === "undefined" || id === null
            ? new ApprovalCollectionService(client, path, fieldName, options)
            : new ApprovalService(client, path, new QApprovalId(fieldName).buildUrl(id, isUrlNotEncoded()), options);
    }
    Feature() {
        if (!this._Feature) {
            const { client, path, options } = this.__base;
            this._Feature = new FeatureService(client, path, "Feature", options);
        }
        return this._Feature;
    }
    KurangBudget() {
        if (!this._KurangBudget) {
            const { client, path, options } = this.__base;
            this._KurangBudget = new KurangBudgetService(client, path, "KurangBudget", options);
        }
        return this._KurangBudget;
    }
    HeaderProjekSumber() {
        if (!this._HeaderProjekSumber) {
            const { client, path, options } = this.__base;
            this._HeaderProjekSumber = new HeaderProjekService(client, path, "HeaderProjekSumber", options);
        }
        return this._HeaderProjekSumber;
    }
    HeaderProjekTujuan() {
        if (!this._HeaderProjekTujuan) {
            const { client, path, options } = this.__base;
            this._HeaderProjekTujuan = new HeaderProjekService(client, path, "HeaderProjekTujuan", options);
        }
        return this._HeaderProjekTujuan;
    }
}
export class BudgetTransferCollectionService extends EntitySetServiceV4 {
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qBudgetTransfer, new QBudgetTransferId(name), options);
    }
}
export class BudgetTransferDetailService extends EntityTypeServiceV4 {
    _BudgetTransfer;
    _BudgetAlokasiSumber;
    _BudgetAlokasiTujuan;
    _BudgetAlokasiDetailSumber;
    _BudgetAlokasiDetailTujuan;
    _SkenarioBudgetSumber;
    _SkenarioBudgetTujuan;
    _PostBudgetSumber;
    _PostBudgetTujuan;
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qBudgetTransferDetail, options);
    }
    BudgetTransfer() {
        if (!this._BudgetTransfer) {
            const { client, path, options } = this.__base;
            this._BudgetTransfer = new BudgetTransferService(client, path, "BudgetTransfer", options);
        }
        return this._BudgetTransfer;
    }
    BudgetAlokasiSumber() {
        if (!this._BudgetAlokasiSumber) {
            const { client, path, options } = this.__base;
            this._BudgetAlokasiSumber = new BudgetAlokasiService(client, path, "BudgetAlokasiSumber", options);
        }
        return this._BudgetAlokasiSumber;
    }
    BudgetAlokasiTujuan() {
        if (!this._BudgetAlokasiTujuan) {
            const { client, path, options } = this.__base;
            this._BudgetAlokasiTujuan = new BudgetAlokasiService(client, path, "BudgetAlokasiTujuan", options);
        }
        return this._BudgetAlokasiTujuan;
    }
    BudgetAlokasiDetailSumber() {
        if (!this._BudgetAlokasiDetailSumber) {
            const { client, path, options } = this.__base;
            this._BudgetAlokasiDetailSumber = new BudgetAlokasiDetailService(client, path, "BudgetAlokasiDetailSumber", options);
        }
        return this._BudgetAlokasiDetailSumber;
    }
    BudgetAlokasiDetailTujuan() {
        if (!this._BudgetAlokasiDetailTujuan) {
            const { client, path, options } = this.__base;
            this._BudgetAlokasiDetailTujuan = new BudgetAlokasiDetailService(client, path, "BudgetAlokasiDetailTujuan", options);
        }
        return this._BudgetAlokasiDetailTujuan;
    }
    SkenarioBudgetSumber() {
        if (!this._SkenarioBudgetSumber) {
            const { client, path, options } = this.__base;
            this._SkenarioBudgetSumber = new SkenarioBudgetService(client, path, "SkenarioBudgetSumber", options);
        }
        return this._SkenarioBudgetSumber;
    }
    SkenarioBudgetTujuan() {
        if (!this._SkenarioBudgetTujuan) {
            const { client, path, options } = this.__base;
            this._SkenarioBudgetTujuan = new SkenarioBudgetService(client, path, "SkenarioBudgetTujuan", options);
        }
        return this._SkenarioBudgetTujuan;
    }
    PostBudgetSumber() {
        if (!this._PostBudgetSumber) {
            const { client, path, options } = this.__base;
            this._PostBudgetSumber = new PostBudgetService(client, path, "PostBudgetSumber", options);
        }
        return this._PostBudgetSumber;
    }
    PostBudgetTujuan() {
        if (!this._PostBudgetTujuan) {
            const { client, path, options } = this.__base;
            this._PostBudgetTujuan = new PostBudgetService(client, path, "PostBudgetTujuan", options);
        }
        return this._PostBudgetTujuan;
    }
}
export class BudgetTransferDetailCollectionService extends EntitySetServiceV4 {
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qBudgetTransferDetail, new QBudgetTransferDetailId(name), options);
    }
}
export class KurangBudgetService extends EntityTypeServiceV4 {
    _Status;
    _MasterUser;
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qKurangBudget, options);
    }
    Status() {
        if (!this._Status) {
            const { client, path, options } = this.__base;
            this._Status = new STATUS_ENUMService(client, path, "Status", options);
        }
        return this._Status;
    }
    KurangBudgetDetail(id) {
        const fieldName = "KurangBudgetDetail";
        const { client, path, options, isUrlNotEncoded } = this.__base;
        return typeof id === "undefined" || id === null
            ? new KurangBudgetDetailCollectionService(client, path, fieldName, options)
            : new KurangBudgetDetailService(client, path, new QKurangBudgetDetailId(fieldName).buildUrl(id, isUrlNotEncoded()), options);
    }
    MasterUser() {
        if (!this._MasterUser) {
            const { client, path, options } = this.__base;
            this._MasterUser = new MasterUserService(client, path, "MasterUser", options);
        }
        return this._MasterUser;
    }
    Approval(id) {
        const fieldName = "Approval";
        const { client, path, options, isUrlNotEncoded } = this.__base;
        return typeof id === "undefined" || id === null
            ? new ApprovalCollectionService(client, path, fieldName, options)
            : new ApprovalService(client, path, new QApprovalId(fieldName).buildUrl(id, isUrlNotEncoded()), options);
    }
}
export class KurangBudgetCollectionService extends EntitySetServiceV4 {
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qKurangBudget, new QKurangBudgetId(name), options);
    }
}
export class KurangBudgetDetailService extends EntityTypeServiceV4 {
    _KurangBudget;
    _BudgetAlokasi;
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qKurangBudgetDetail, options);
    }
    KurangBudget() {
        if (!this._KurangBudget) {
            const { client, path, options } = this.__base;
            this._KurangBudget = new KurangBudgetService(client, path, "KurangBudget", options);
        }
        return this._KurangBudget;
    }
    BudgetAlokasi() {
        if (!this._BudgetAlokasi) {
            const { client, path, options } = this.__base;
            this._BudgetAlokasi = new BudgetAlokasiService(client, path, "BudgetAlokasi", options);
        }
        return this._BudgetAlokasi;
    }
}
export class KurangBudgetDetailCollectionService extends EntitySetServiceV4 {
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qKurangBudgetDetail, new QKurangBudgetDetailId(name), options);
    }
}
export class MasterUserService extends EntityTypeServiceV4 {
    _Role;
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qMasterUser, options);
    }
    Role() {
        if (!this._Role) {
            const { client, path, options } = this.__base;
            this._Role = new MasterRoleService(client, path, "Role", options);
        }
        return this._Role;
    }
    UserDistributor(id) {
        const fieldName = "UserDistributor";
        const { client, path, options, isUrlNotEncoded } = this.__base;
        return typeof id === "undefined" || id === null
            ? new UserDistributorCollectionService(client, path, fieldName, options)
            : new UserDistributorService(client, path, new QUserDistributorId(fieldName).buildUrl(id, isUrlNotEncoded()), options);
    }
    UserArea(id) {
        const fieldName = "UserArea";
        const { client, path, options, isUrlNotEncoded } = this.__base;
        return typeof id === "undefined" || id === null
            ? new UserAreaCollectionService(client, path, fieldName, options)
            : new UserAreaService(client, path, new QUserAreaId(fieldName).buildUrl(id, isUrlNotEncoded()), options);
    }
    UsersAttachment(id) {
        const fieldName = "UsersAttachment";
        const { client, path, options, isUrlNotEncoded } = this.__base;
        return typeof id === "undefined" || id === null
            ? new UsersAttachmentCollectionService(client, path, fieldName, options)
            : new UsersAttachmentService(client, path, new QUsersAttachmentId(fieldName).buildUrl(id, isUrlNotEncoded()), options);
    }
    UserBrand(id) {
        const fieldName = "UserBrand";
        const { client, path, options, isUrlNotEncoded } = this.__base;
        return typeof id === "undefined" || id === null
            ? new UserBrandCollectionService(client, path, fieldName, options)
            : new UserBrandService(client, path, new QUserBrandId(fieldName).buildUrl(id, isUrlNotEncoded()), options);
    }
}
export class MasterUserCollectionService extends EntitySetServiceV4 {
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qMasterUser, new QMasterUserId(name), options);
    }
}
export class UserDistributorService extends EntityTypeServiceV4 {
    _MasterUser;
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qUserDistributor, options);
    }
    MasterUser() {
        if (!this._MasterUser) {
            const { client, path, options } = this.__base;
            this._MasterUser = new MasterUserService(client, path, "MasterUser", options);
        }
        return this._MasterUser;
    }
}
export class UserDistributorCollectionService extends EntitySetServiceV4 {
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qUserDistributor, new QUserDistributorId(name), options);
    }
}
export class UserAreaService extends EntityTypeServiceV4 {
    _MasterUser;
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qUserArea, options);
    }
    MasterUser() {
        if (!this._MasterUser) {
            const { client, path, options } = this.__base;
            this._MasterUser = new MasterUserService(client, path, "MasterUser", options);
        }
        return this._MasterUser;
    }
}
export class UserAreaCollectionService extends EntitySetServiceV4 {
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qUserArea, new QUserAreaId(name), options);
    }
}
export class UsersAttachmentService extends EntityTypeServiceV4 {
    _MasterUser;
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qUsersAttachment, options);
    }
    MasterUser() {
        if (!this._MasterUser) {
            const { client, path, options } = this.__base;
            this._MasterUser = new MasterUserService(client, path, "MasterUser", options);
        }
        return this._MasterUser;
    }
}
export class UsersAttachmentCollectionService extends EntitySetServiceV4 {
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qUsersAttachment, new QUsersAttachmentId(name), options);
    }
}
export class UserBrandService extends EntityTypeServiceV4 {
    _MasterUser;
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qUserBrand, options);
    }
    MasterUser() {
        if (!this._MasterUser) {
            const { client, path, options } = this.__base;
            this._MasterUser = new MasterUserService(client, path, "MasterUser", options);
        }
        return this._MasterUser;
    }
}
export class UserBrandCollectionService extends EntitySetServiceV4 {
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qUserBrand, new QUserBrandId(name), options);
    }
}
export class TopUpBudgetService extends EntityTypeServiceV4 {
    _Status;
    _Brand;
    _Channel;
    _Departmen;
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qTopUpBudget, options);
    }
    Status() {
        if (!this._Status) {
            const { client, path, options } = this.__base;
            this._Status = new STATUS_ENUMService(client, path, "Status", options);
        }
        return this._Status;
    }
    TopUpBudgetDetail(id) {
        const fieldName = "TopUpBudgetDetail";
        const { client, path, options, isUrlNotEncoded } = this.__base;
        return typeof id === "undefined" || id === null
            ? new TopUpBudgetDetailCollectionService(client, path, fieldName, options)
            : new TopUpBudgetDetailService(client, path, new QTopUpBudgetDetailId(fieldName).buildUrl(id, isUrlNotEncoded()), options);
    }
    Approval(id) {
        const fieldName = "Approval";
        const { client, path, options, isUrlNotEncoded } = this.__base;
        return typeof id === "undefined" || id === null
            ? new ApprovalCollectionService(client, path, fieldName, options)
            : new ApprovalService(client, path, new QApprovalId(fieldName).buildUrl(id, isUrlNotEncoded()), options);
    }
    Brand() {
        if (!this._Brand) {
            const { client, path, options } = this.__base;
            this._Brand = new BrandService(client, path, "Brand", options);
        }
        return this._Brand;
    }
    Channel() {
        if (!this._Channel) {
            const { client, path, options } = this.__base;
            this._Channel = new ChannelService(client, path, "Channel", options);
        }
        return this._Channel;
    }
    Departmen() {
        if (!this._Departmen) {
            const { client, path, options } = this.__base;
            this._Departmen = new DepartmenService(client, path, "Departmen", options);
        }
        return this._Departmen;
    }
}
export class TopUpBudgetCollectionService extends EntitySetServiceV4 {
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qTopUpBudget, new QTopUpBudgetId(name), options);
    }
}
export class TopUpBudgetDetailService extends EntityTypeServiceV4 {
    _TopUpBudget;
    _PostBudget;
    _BudgetSap;
    _MasterBudget;
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qTopUpBudgetDetail, options);
    }
    TopUpBudget() {
        if (!this._TopUpBudget) {
            const { client, path, options } = this.__base;
            this._TopUpBudget = new TopUpBudgetService(client, path, "TopUpBudget", options);
        }
        return this._TopUpBudget;
    }
    PostBudget() {
        if (!this._PostBudget) {
            const { client, path, options } = this.__base;
            this._PostBudget = new PostBudgetService(client, path, "PostBudget", options);
        }
        return this._PostBudget;
    }
    BudgetSap() {
        if (!this._BudgetSap) {
            const { client, path, options } = this.__base;
            this._BudgetSap = new BudgetSapService(client, path, "BudgetSap", options);
        }
        return this._BudgetSap;
    }
    MasterBudget() {
        if (!this._MasterBudget) {
            const { client, path, options } = this.__base;
            this._MasterBudget = new MasterBudgetService(client, path, "MasterBudget", options);
        }
        return this._MasterBudget;
    }
}
export class TopUpBudgetDetailCollectionService extends EntitySetServiceV4 {
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qTopUpBudgetDetail, new QTopUpBudgetDetailId(name), options);
    }
}
export class ChannelService extends EntityTypeServiceV4 {
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qChannel, options);
    }
}
export class ChannelCollectionService extends EntitySetServiceV4 {
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qChannel, new QChannelId(name), options);
    }
}
export class EstimasiVSRealisasiService extends EntityTypeServiceV4 {
    _MasterUser;
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qEstimasiVSRealisasi, options);
    }
    MasterUser() {
        if (!this._MasterUser) {
            const { client, path, options } = this.__base;
            this._MasterUser = new MasterUserService(client, path, "MasterUser", options);
        }
        return this._MasterUser;
    }
    Approval(id) {
        const fieldName = "Approval";
        const { client, path, options, isUrlNotEncoded } = this.__base;
        return typeof id === "undefined" || id === null
            ? new ApprovalCollectionService(client, path, fieldName, options)
            : new ApprovalService(client, path, new QApprovalId(fieldName).buildUrl(id, isUrlNotEncoded()), options);
    }
}
export class EstimasiVSRealisasiCollectionService extends EntitySetServiceV4 {
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qEstimasiVSRealisasi, new QEstimasiVSRealisasiId(name), options);
    }
}
export class DTO_FeatureService extends EntityTypeServiceV4 {
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qDTO_Feature, options);
    }
}
export class DTO_FeatureCollectionService extends EntitySetServiceV4 {
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qDTO_Feature, new QDTO_FeatureId(name), options);
    }
}
export class DTO_ApprovalConfigService extends EntityTypeServiceV4 {
    _Feature;
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qDTO_ApprovalConfig, options);
    }
    Feature() {
        if (!this._Feature) {
            const { client, path, options } = this.__base;
            this._Feature = new DTO_FeatureService(client, path, "Feature", options);
        }
        return this._Feature;
    }
}
export class DTO_ApprovalConfigCollectionService extends EntitySetServiceV4 {
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qDTO_ApprovalConfig, new QDTO_ApprovalConfigId(name), options);
    }
}
export class DTO_ApprovalService extends EntityTypeServiceV4 {
    _UserId;
    _SubUserId;
    _Feature;
    _StepApproval;
    _MasterRole;
    _MasterUser;
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qDTO_Approval, options);
    }
    UserId() {
        if (!this._UserId) {
            const { client, path, options } = this.__base;
            this._UserId = new UserDtoService(client, path, "UserId", options);
        }
        return this._UserId;
    }
    SubUserId() {
        if (!this._SubUserId) {
            const { client, path, options } = this.__base;
            this._SubUserId = new UserDtoService(client, path, "SubUserId", options);
        }
        return this._SubUserId;
    }
    Feature() {
        if (!this._Feature) {
            const { client, path, options } = this.__base;
            this._Feature = new DTO_FeatureService(client, path, "Feature", options);
        }
        return this._Feature;
    }
    StepApproval() {
        if (!this._StepApproval) {
            const { client, path, options } = this.__base;
            this._StepApproval = new DTO_StepApprovalService(client, path, "StepApproval", options);
        }
        return this._StepApproval;
    }
    MasterRole() {
        if (!this._MasterRole) {
            const { client, path, options } = this.__base;
            this._MasterRole = new MasterRoleService(client, path, "MasterRole", options);
        }
        return this._MasterRole;
    }
    MasterUser() {
        if (!this._MasterUser) {
            const { client, path, options } = this.__base;
            this._MasterUser = new DTO_MasterUserService(client, path, "MasterUser", options);
        }
        return this._MasterUser;
    }
}
export class DTO_ApprovalCollectionService extends EntitySetServiceV4 {
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qDTO_Approval, new QDTO_ApprovalId(name), options);
    }
}
export class DTO_EstimasiVSRealisasiService extends EntityTypeServiceV4 {
    _MasterUser;
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qDTO_EstimasiVSRealisasi, options);
    }
    MasterUser() {
        if (!this._MasterUser) {
            const { client, path, options } = this.__base;
            this._MasterUser = new DTO_MasterUserService(client, path, "MasterUser", options);
        }
        return this._MasterUser;
    }
    Approval(id) {
        const fieldName = "Approval";
        const { client, path, options, isUrlNotEncoded } = this.__base;
        return typeof id === "undefined" || id === null
            ? new DTO_ApprovalCollectionService(client, path, fieldName, options)
            : new DTO_ApprovalService(client, path, new QDTO_ApprovalId(fieldName).buildUrl(id, isUrlNotEncoded()), options);
    }
}
export class DTO_EstimasiVSRealisasiCollectionService extends EntitySetServiceV4 {
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qDTO_EstimasiVSRealisasi, new QDTO_EstimasiVSRealisasiId(name), options);
    }
}
export class DTO_ApprovalConfigConditionService extends EntityTypeServiceV4 {
    _UserId;
    _ApprovalConfig;
    _MasterRole;
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qDTO_ApprovalConfigCondition, options);
    }
    UserId() {
        if (!this._UserId) {
            const { client, path, options } = this.__base;
            this._UserId = new UserDtoService(client, path, "UserId", options);
        }
        return this._UserId;
    }
    ApprovalConfig() {
        if (!this._ApprovalConfig) {
            const { client, path, options } = this.__base;
            this._ApprovalConfig = new DTO_ApprovalConfigService(client, path, "ApprovalConfig", options);
        }
        return this._ApprovalConfig;
    }
    MasterRole() {
        if (!this._MasterRole) {
            const { client, path, options } = this.__base;
            this._MasterRole = new DTO_MasterRoleService(client, path, "MasterRole", options);
        }
        return this._MasterRole;
    }
    StepApproval(id) {
        const fieldName = "StepApproval";
        const { client, path, options, isUrlNotEncoded } = this.__base;
        return typeof id === "undefined" || id === null
            ? new DTO_StepApprovalCollectionService(client, path, fieldName, options)
            : new DTO_StepApprovalService(client, path, new QDTO_StepApprovalId(fieldName).buildUrl(id, isUrlNotEncoded()), options);
    }
}
export class DTO_ApprovalConfigConditionCollectionService extends EntitySetServiceV4 {
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qDTO_ApprovalConfigCondition, new QDTO_ApprovalConfigConditionId(name), options);
    }
}
export class DTO_StepApprovalService extends EntityTypeServiceV4 {
    _UserId;
    _SubUserId;
    _MasterRole;
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qDTO_StepApproval, options);
    }
    UserId() {
        if (!this._UserId) {
            const { client, path, options } = this.__base;
            this._UserId = new UserDtoService(client, path, "UserId", options);
        }
        return this._UserId;
    }
    SubUserId() {
        if (!this._SubUserId) {
            const { client, path, options } = this.__base;
            this._SubUserId = new UserDtoService(client, path, "SubUserId", options);
        }
        return this._SubUserId;
    }
    MasterRole() {
        if (!this._MasterRole) {
            const { client, path, options } = this.__base;
            this._MasterRole = new DTO_MasterRoleService(client, path, "MasterRole", options);
        }
        return this._MasterRole;
    }
}
export class DTO_StepApprovalCollectionService extends EntitySetServiceV4 {
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qDTO_StepApproval, new QDTO_StepApprovalId(name), options);
    }
}
export class DTO_AreaService extends EntityTypeServiceV4 {
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qDTO_Area, options);
    }
}
export class DTO_AreaCollectionService extends EntitySetServiceV4 {
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qDTO_Area, new QDTO_AreaId(name), options);
    }
}
export class DTO_BookWithAuthorsService extends EntityTypeServiceV4 {
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qDTO_BookWithAuthors, options);
    }
    Authors(id) {
        const fieldName = "Authors";
        const { client, path, options, isUrlNotEncoded } = this.__base;
        return typeof id === "undefined" || id === null
            ? new AuthorCollectionService(client, path, fieldName, options)
            : new AuthorService(client, path, new QAuthorId(fieldName).buildUrl(id, isUrlNotEncoded()), options);
    }
}
export class DTO_BookWithAuthorsCollectionService extends EntitySetServiceV4 {
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qDTO_BookWithAuthors, new QDTO_BookWithAuthorsId(name), options);
    }
}
export class DTO_BrandService extends EntityTypeServiceV4 {
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qDTO_Brand, options);
    }
}
export class DTO_BrandCollectionService extends EntitySetServiceV4 {
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qDTO_Brand, new QDTO_BrandId(name), options);
    }
}
export class DTO_BudgetAlokasiDetailService extends EntityTypeServiceV4 {
    _MasterBudget;
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qDTO_BudgetAlokasiDetail, options);
    }
    MasterBudget() {
        if (!this._MasterBudget) {
            const { client, path, options } = this.__base;
            this._MasterBudget = new DTO_MasterBudgetService(client, path, "MasterBudget", options);
        }
        return this._MasterBudget;
    }
}
export class DTO_BudgetAlokasiDetailCollectionService extends EntitySetServiceV4 {
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qDTO_BudgetAlokasiDetail, new QDTO_BudgetAlokasiDetailId(name), options);
    }
}
export class DTO_BudgetTopUpService extends EntityTypeServiceV4 {
    _Feature;
    _HeaderProjekSumber;
    _HeaderProjekTujuan;
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qDTO_BudgetTopUp, options);
    }
    BudgetTransferDetail(id) {
        const fieldName = "BudgetTransferDetail";
        const { client, path, options, isUrlNotEncoded } = this.__base;
        return typeof id === "undefined" || id === null
            ? new DTO_BudgetTopUpDetailCollectionService(client, path, fieldName, options)
            : new DTO_BudgetTopUpDetailService(client, path, new QDTO_BudgetTopUpDetailId(fieldName).buildUrl(id, isUrlNotEncoded()), options);
    }
    Approval(id) {
        const fieldName = "Approval";
        const { client, path, options, isUrlNotEncoded } = this.__base;
        return typeof id === "undefined" || id === null
            ? new DTO_ApprovalCollectionService(client, path, fieldName, options)
            : new DTO_ApprovalService(client, path, new QDTO_ApprovalId(fieldName).buildUrl(id, isUrlNotEncoded()), options);
    }
    Feature() {
        if (!this._Feature) {
            const { client, path, options } = this.__base;
            this._Feature = new DTO_FeatureService(client, path, "Feature", options);
        }
        return this._Feature;
    }
    HeaderProjekSumber() {
        if (!this._HeaderProjekSumber) {
            const { client, path, options } = this.__base;
            this._HeaderProjekSumber = new DTO_HeaderProjekService(client, path, "HeaderProjekSumber", options);
        }
        return this._HeaderProjekSumber;
    }
    HeaderProjekTujuan() {
        if (!this._HeaderProjekTujuan) {
            const { client, path, options } = this.__base;
            this._HeaderProjekTujuan = new DTO_HeaderProjekService(client, path, "HeaderProjekTujuan", options);
        }
        return this._HeaderProjekTujuan;
    }
}
export class DTO_BudgetTopUpCollectionService extends EntitySetServiceV4 {
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qDTO_BudgetTopUp, new QDTO_BudgetTopUpId(name), options);
    }
}
export class DTO_BudgetTopUpDetailService extends EntityTypeServiceV4 {
    _BudgetAlokasiSumber;
    _BudgetAlokasiTujuan;
    _PostBudgetSumber;
    _PostBudgetTujuan;
    _BudgetAlokasiDetailSumber;
    _BudgetAlokasiDetailTujuan;
    _SkenarioBudgetSumber;
    _SkenarioBudgetTujuan;
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qDTO_BudgetTopUpDetail, options);
    }
    BudgetAlokasiSumber() {
        if (!this._BudgetAlokasiSumber) {
            const { client, path, options } = this.__base;
            this._BudgetAlokasiSumber = new DTO_BudgetAlokasiService(client, path, "BudgetAlokasiSumber", options);
        }
        return this._BudgetAlokasiSumber;
    }
    BudgetAlokasiTujuan() {
        if (!this._BudgetAlokasiTujuan) {
            const { client, path, options } = this.__base;
            this._BudgetAlokasiTujuan = new DTO_BudgetAlokasiService(client, path, "BudgetAlokasiTujuan", options);
        }
        return this._BudgetAlokasiTujuan;
    }
    PostBudgetSumber() {
        if (!this._PostBudgetSumber) {
            const { client, path, options } = this.__base;
            this._PostBudgetSumber = new DTO_PostBudgetService(client, path, "PostBudgetSumber", options);
        }
        return this._PostBudgetSumber;
    }
    PostBudgetTujuan() {
        if (!this._PostBudgetTujuan) {
            const { client, path, options } = this.__base;
            this._PostBudgetTujuan = new DTO_PostBudgetService(client, path, "PostBudgetTujuan", options);
        }
        return this._PostBudgetTujuan;
    }
    BudgetAlokasiDetailSumber() {
        if (!this._BudgetAlokasiDetailSumber) {
            const { client, path, options } = this.__base;
            this._BudgetAlokasiDetailSumber = new DTO_BudgetAlokasiDetailService(client, path, "BudgetAlokasiDetailSumber", options);
        }
        return this._BudgetAlokasiDetailSumber;
    }
    BudgetAlokasiDetailTujuan() {
        if (!this._BudgetAlokasiDetailTujuan) {
            const { client, path, options } = this.__base;
            this._BudgetAlokasiDetailTujuan = new DTO_BudgetAlokasiDetailService(client, path, "BudgetAlokasiDetailTujuan", options);
        }
        return this._BudgetAlokasiDetailTujuan;
    }
    SkenarioBudgetSumber() {
        if (!this._SkenarioBudgetSumber) {
            const { client, path, options } = this.__base;
            this._SkenarioBudgetSumber = new DTO_SkenarioBudgetService(client, path, "SkenarioBudgetSumber", options);
        }
        return this._SkenarioBudgetSumber;
    }
    SkenarioBudgetTujuan() {
        if (!this._SkenarioBudgetTujuan) {
            const { client, path, options } = this.__base;
            this._SkenarioBudgetTujuan = new DTO_SkenarioBudgetService(client, path, "SkenarioBudgetTujuan", options);
        }
        return this._SkenarioBudgetTujuan;
    }
}
export class DTO_BudgetTopUpDetailCollectionService extends EntitySetServiceV4 {
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qDTO_BudgetTopUpDetail, new QDTO_BudgetTopUpDetailId(name), options);
    }
}
export class DTO_BudgetTransferService extends EntityTypeServiceV4 {
    _Feature;
    _HeaderProjekSumber;
    _HeaderProjekTujuan;
    _KurangBudget;
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qDTO_BudgetTransfer, options);
    }
    BudgetTransferDetail(id) {
        const fieldName = "BudgetTransferDetail";
        const { client, path, options, isUrlNotEncoded } = this.__base;
        return typeof id === "undefined" || id === null
            ? new DTO_BudgetTransferDetailCollectionService(client, path, fieldName, options)
            : new DTO_BudgetTransferDetailService(client, path, new QDTO_BudgetTransferDetailId(fieldName).buildUrl(id, isUrlNotEncoded()), options);
    }
    Approval(id) {
        const fieldName = "Approval";
        const { client, path, options, isUrlNotEncoded } = this.__base;
        return typeof id === "undefined" || id === null
            ? new DTO_ApprovalCollectionService(client, path, fieldName, options)
            : new DTO_ApprovalService(client, path, new QDTO_ApprovalId(fieldName).buildUrl(id, isUrlNotEncoded()), options);
    }
    Feature() {
        if (!this._Feature) {
            const { client, path, options } = this.__base;
            this._Feature = new DTO_FeatureService(client, path, "Feature", options);
        }
        return this._Feature;
    }
    HeaderProjekSumber() {
        if (!this._HeaderProjekSumber) {
            const { client, path, options } = this.__base;
            this._HeaderProjekSumber = new DTO_HeaderProjekService(client, path, "HeaderProjekSumber", options);
        }
        return this._HeaderProjekSumber;
    }
    HeaderProjekTujuan() {
        if (!this._HeaderProjekTujuan) {
            const { client, path, options } = this.__base;
            this._HeaderProjekTujuan = new DTO_HeaderProjekService(client, path, "HeaderProjekTujuan", options);
        }
        return this._HeaderProjekTujuan;
    }
    KurangBudget() {
        if (!this._KurangBudget) {
            const { client, path, options } = this.__base;
            this._KurangBudget = new DtoKurangBudgetService(client, path, "KurangBudget", options);
        }
        return this._KurangBudget;
    }
}
export class DTO_BudgetTransferCollectionService extends EntitySetServiceV4 {
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qDTO_BudgetTransfer, new QDTO_BudgetTransferId(name), options);
    }
}
export class DTO_BudgetTransferDetailService extends EntityTypeServiceV4 {
    _BudgetAlokasiSumber;
    _BudgetAlokasiTujuan;
    _PostBudgetSumber;
    _PostBudgetTujuan;
    _BudgetAlokasiDetailSumber;
    _BudgetAlokasiDetailTujuan;
    _SkenarioBudgetSumber;
    _SkenarioBudgetTujuan;
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qDTO_BudgetTransferDetail, options);
    }
    BudgetAlokasiSumber() {
        if (!this._BudgetAlokasiSumber) {
            const { client, path, options } = this.__base;
            this._BudgetAlokasiSumber = new DTO_BudgetAlokasiService(client, path, "BudgetAlokasiSumber", options);
        }
        return this._BudgetAlokasiSumber;
    }
    BudgetAlokasiTujuan() {
        if (!this._BudgetAlokasiTujuan) {
            const { client, path, options } = this.__base;
            this._BudgetAlokasiTujuan = new DTO_BudgetAlokasiService(client, path, "BudgetAlokasiTujuan", options);
        }
        return this._BudgetAlokasiTujuan;
    }
    PostBudgetSumber() {
        if (!this._PostBudgetSumber) {
            const { client, path, options } = this.__base;
            this._PostBudgetSumber = new DTO_PostBudgetService(client, path, "PostBudgetSumber", options);
        }
        return this._PostBudgetSumber;
    }
    PostBudgetTujuan() {
        if (!this._PostBudgetTujuan) {
            const { client, path, options } = this.__base;
            this._PostBudgetTujuan = new DTO_PostBudgetService(client, path, "PostBudgetTujuan", options);
        }
        return this._PostBudgetTujuan;
    }
    BudgetAlokasiDetailSumber() {
        if (!this._BudgetAlokasiDetailSumber) {
            const { client, path, options } = this.__base;
            this._BudgetAlokasiDetailSumber = new DTO_BudgetAlokasiDetailService(client, path, "BudgetAlokasiDetailSumber", options);
        }
        return this._BudgetAlokasiDetailSumber;
    }
    BudgetAlokasiDetailTujuan() {
        if (!this._BudgetAlokasiDetailTujuan) {
            const { client, path, options } = this.__base;
            this._BudgetAlokasiDetailTujuan = new DTO_BudgetAlokasiDetailService(client, path, "BudgetAlokasiDetailTujuan", options);
        }
        return this._BudgetAlokasiDetailTujuan;
    }
    SkenarioBudgetSumber() {
        if (!this._SkenarioBudgetSumber) {
            const { client, path, options } = this.__base;
            this._SkenarioBudgetSumber = new DTO_SkenarioBudgetService(client, path, "SkenarioBudgetSumber", options);
        }
        return this._SkenarioBudgetSumber;
    }
    SkenarioBudgetTujuan() {
        if (!this._SkenarioBudgetTujuan) {
            const { client, path, options } = this.__base;
            this._SkenarioBudgetTujuan = new DTO_SkenarioBudgetService(client, path, "SkenarioBudgetTujuan", options);
        }
        return this._SkenarioBudgetTujuan;
    }
}
export class DTO_BudgetTransferDetailCollectionService extends EntitySetServiceV4 {
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qDTO_BudgetTransferDetail, new QDTO_BudgetTransferDetailId(name), options);
    }
}
export class DTO_CoaService extends EntityTypeServiceV4 {
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qDTO_Coa, options);
    }
    PostBudget(id) {
        const fieldName = "PostBudget";
        const { client, path, options, isUrlNotEncoded } = this.__base;
        return typeof id === "undefined" || id === null
            ? new DTO_PostBudgetCollectionService(client, path, fieldName, options)
            : new DTO_PostBudgetService(client, path, new QDTO_PostBudgetId(fieldName).buildUrl(id, isUrlNotEncoded()), options);
    }
}
export class DTO_CoaCollectionService extends EntitySetServiceV4 {
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qDTO_Coa, new QDTO_CoaId(name), options);
    }
}
export class DTO_DepartmenService extends EntityTypeServiceV4 {
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qDTO_Departmen, options);
    }
}
export class DTO_DepartmenCollectionService extends EntitySetServiceV4 {
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qDTO_Departmen, new QDTO_DepartmenId(name), options);
    }
}
export class DTO_DistributorService extends EntityTypeServiceV4 {
    _Area;
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qDTO_Distributor, options);
    }
    Area() {
        if (!this._Area) {
            const { client, path, options } = this.__base;
            this._Area = new DTO_AreaService(client, path, "Area", options);
        }
        return this._Area;
    }
}
export class DTO_DistributorCollectionService extends EntitySetServiceV4 {
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qDTO_Distributor, new QDTO_DistributorId(name), options);
    }
}
export class DTO_EmailTemplateService extends EntityTypeServiceV4 {
    _Feature;
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qDTO_EmailTemplate, options);
    }
    Feature() {
        if (!this._Feature) {
            const { client, path, options } = this.__base;
            this._Feature = new DTO_FeatureService(client, path, "Feature", options);
        }
        return this._Feature;
    }
}
export class DTO_EmailTemplateCollectionService extends EntitySetServiceV4 {
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qDTO_EmailTemplate, new QDTO_EmailTemplateId(name), options);
    }
}
export class DTO_EstimasiHargaBrandingService extends EntityTypeServiceV4 {
    _Area;
    _JenisPpl;
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qDTO_EstimasiHargaBranding, options);
    }
    Area() {
        if (!this._Area) {
            const { client, path, options } = this.__base;
            this._Area = new DTO_AreaService(client, path, "Area", options);
        }
        return this._Area;
    }
    JenisPpl() {
        if (!this._JenisPpl) {
            const { client, path, options } = this.__base;
            this._JenisPpl = new DTO_JenisPplService(client, path, "JenisPpl", options);
        }
        return this._JenisPpl;
    }
}
export class DTO_EstimasiHargaBrandingCollectionService extends EntitySetServiceV4 {
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qDTO_EstimasiHargaBranding, new QDTO_EstimasiHargaBrandingId(name), options);
    }
}
export class DTO_EstimasiHargaBrandingListService extends EntityTypeServiceV4 {
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qDTO_EstimasiHargaBrandingList, options);
    }
}
export class DTO_EstimasiHargaBrandingListCollectionService extends EntitySetServiceV4 {
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qDTO_EstimasiHargaBrandingList, new QDTO_EstimasiHargaBrandingListId(name), options);
    }
}
export class DTO_HeaderPplService extends EntityTypeServiceV4 {
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qDTO_HeaderPpl, options);
    }
    PplOutlet(id) {
        const fieldName = "PplOutlet";
        const { client, path, options, isUrlNotEncoded } = this.__base;
        return typeof id === "undefined" || id === null
            ? new DTO_PplOutletCollectionService(client, path, fieldName, options)
            : new DTO_PplOutletService(client, path, new QDTO_PplOutletId(fieldName).buildUrl(id, isUrlNotEncoded()), options);
    }
    PplArea(id) {
        const fieldName = "PplArea";
        const { client, path, options, isUrlNotEncoded } = this.__base;
        return typeof id === "undefined" || id === null
            ? new DTO_PplAreaCollectionService(client, path, fieldName, options)
            : new DTO_PplAreaService(client, path, new QDTO_PplAreaId(fieldName).buildUrl(id, isUrlNotEncoded()), options);
    }
    PplDetailProduk(id) {
        const fieldName = "PplDetailProduk";
        const { client, path, options, isUrlNotEncoded } = this.__base;
        return typeof id === "undefined" || id === null
            ? new DTO_PplDetailProdukCollectionService(client, path, fieldName, options)
            : new DTO_PplDetailProdukService(client, path, new QDTO_PplDetailProdukId(fieldName).buildUrl(id, isUrlNotEncoded()), options);
    }
    PplDetails(id) {
        const fieldName = "PplDetails";
        const { client, path, options, isUrlNotEncoded } = this.__base;
        return typeof id === "undefined" || id === null
            ? new DTO_PplDetailsCollectionService(client, path, fieldName, options)
            : new DTO_PplDetailsService(client, path, new QDTO_PplDetailsId(fieldName).buildUrl(id, isUrlNotEncoded()), options);
    }
    PplBudgetAlokasi(id) {
        const fieldName = "PplBudgetAlokasi";
        const { client, path, options, isUrlNotEncoded } = this.__base;
        return typeof id === "undefined" || id === null
            ? new DTO_PplBudgetAlokasiCollectionService(client, path, fieldName, options)
            : new DTO_PplBudgetAlokasiService(client, path, new QDTO_PplBudgetAlokasiId(fieldName).buildUrl(id, isUrlNotEncoded()), options);
    }
    PplAttachment(id) {
        const fieldName = "PplAttachment";
        const { client, path, options, isUrlNotEncoded } = this.__base;
        return typeof id === "undefined" || id === null
            ? new DTO_PplAttachmentCollectionService(client, path, fieldName, options)
            : new DTO_PplAttachmentService(client, path, new QDTO_PplAttachmentId(fieldName).buildUrl(id, isUrlNotEncoded()), options);
    }
}
export class DTO_HeaderPplCollectionService extends EntitySetServiceV4 {
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qDTO_HeaderPpl, new QDTO_HeaderPplId(name), options);
    }
}
export class DTO_HeaderPplListService extends EntityTypeServiceV4 {
    _KategoriPpl;
    _JenisPpl;
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qDTO_HeaderPplList, options);
    }
    KategoriPpl() {
        if (!this._KategoriPpl) {
            const { client, path, options } = this.__base;
            this._KategoriPpl = new DTO_KategoriPplService(client, path, "KategoriPpl", options);
        }
        return this._KategoriPpl;
    }
    JenisPpl() {
        if (!this._JenisPpl) {
            const { client, path, options } = this.__base;
            this._JenisPpl = new DTO_JenisPplService(client, path, "JenisPpl", options);
        }
        return this._JenisPpl;
    }
    PplOutlet(id) {
        const fieldName = "PplOutlet";
        const { client, path, options, isUrlNotEncoded } = this.__base;
        return typeof id === "undefined" || id === null
            ? new DTO_PplOutletCollectionService(client, path, fieldName, options)
            : new DTO_PplOutletService(client, path, new QDTO_PplOutletId(fieldName).buildUrl(id, isUrlNotEncoded()), options);
    }
    PplArea(id) {
        const fieldName = "PplArea";
        const { client, path, options, isUrlNotEncoded } = this.__base;
        return typeof id === "undefined" || id === null
            ? new DTO_PplAreaCollectionService(client, path, fieldName, options)
            : new DTO_PplAreaService(client, path, new QDTO_PplAreaId(fieldName).buildUrl(id, isUrlNotEncoded()), options);
    }
    PplDetailProduk(id) {
        const fieldName = "PplDetailProduk";
        const { client, path, options, isUrlNotEncoded } = this.__base;
        return typeof id === "undefined" || id === null
            ? new DTO_PplDetailProdukCollectionService(client, path, fieldName, options)
            : new DTO_PplDetailProdukService(client, path, new QDTO_PplDetailProdukId(fieldName).buildUrl(id, isUrlNotEncoded()), options);
    }
    PplDetails(id) {
        const fieldName = "PplDetails";
        const { client, path, options, isUrlNotEncoded } = this.__base;
        return typeof id === "undefined" || id === null
            ? new DTO_PplDetailsCollectionService(client, path, fieldName, options)
            : new DTO_PplDetailsService(client, path, new QDTO_PplDetailsId(fieldName).buildUrl(id, isUrlNotEncoded()), options);
    }
    PplBudgetAlokasi(id) {
        const fieldName = "PplBudgetAlokasi";
        const { client, path, options, isUrlNotEncoded } = this.__base;
        return typeof id === "undefined" || id === null
            ? new DTO_PplBudgetAlokasiCollectionService(client, path, fieldName, options)
            : new DTO_PplBudgetAlokasiService(client, path, new QDTO_PplBudgetAlokasiId(fieldName).buildUrl(id, isUrlNotEncoded()), options);
    }
    PplAttachment(id) {
        const fieldName = "PplAttachment";
        const { client, path, options, isUrlNotEncoded } = this.__base;
        return typeof id === "undefined" || id === null
            ? new DTO_PplAttachmentCollectionService(client, path, fieldName, options)
            : new DTO_PplAttachmentService(client, path, new QDTO_PplAttachmentId(fieldName).buildUrl(id, isUrlNotEncoded()), options);
    }
}
export class DTO_HeaderPplListCollectionService extends EntitySetServiceV4 {
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qDTO_HeaderPplList, new QDTO_HeaderPplListId(name), options);
    }
}
export class DTO_HeaderProjekService extends EntityTypeServiceV4 {
    _Brand;
    _JenisProgram;
    _Departmen;
    _Region;
    _MasterOrganization;
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qDTO_HeaderProjek, options);
    }
    Brand() {
        if (!this._Brand) {
            const { client, path, options } = this.__base;
            this._Brand = new DTO_BrandService(client, path, "Brand", options);
        }
        return this._Brand;
    }
    JenisProgram() {
        if (!this._JenisProgram) {
            const { client, path, options } = this.__base;
            this._JenisProgram = new DTO_JenisProgramService(client, path, "JenisProgram", options);
        }
        return this._JenisProgram;
    }
    Departmen() {
        if (!this._Departmen) {
            const { client, path, options } = this.__base;
            this._Departmen = new DTO_DepartmenService(client, path, "Departmen", options);
        }
        return this._Departmen;
    }
    Region() {
        if (!this._Region) {
            const { client, path, options } = this.__base;
            this._Region = new DTO_RegionService(client, path, "Region", options);
        }
        return this._Region;
    }
    MasterOrganization() {
        if (!this._MasterOrganization) {
            const { client, path, options } = this.__base;
            this._MasterOrganization = new DTO_MasterOrgService(client, path, "MasterOrganization", options);
        }
        return this._MasterOrganization;
    }
    BudgetAlokasi(id) {
        const fieldName = "BudgetAlokasi";
        const { client, path, options, isUrlNotEncoded } = this.__base;
        return typeof id === "undefined" || id === null
            ? new DTO_BudgetAlokasiCollectionService(client, path, fieldName, options)
            : new DTO_BudgetAlokasiService(client, path, new QDTO_BudgetAlokasiId(fieldName).buildUrl(id, isUrlNotEncoded()), options);
    }
    Approval(id) {
        const fieldName = "Approval";
        const { client, path, options, isUrlNotEncoded } = this.__base;
        return typeof id === "undefined" || id === null
            ? new DTO_ApprovalCollectionService(client, path, fieldName, options)
            : new DTO_ApprovalService(client, path, new QDTO_ApprovalId(fieldName).buildUrl(id, isUrlNotEncoded()), options);
    }
    HeaderProjekBrand(id) {
        const fieldName = "HeaderProjekBrand";
        const { client, path, options, isUrlNotEncoded } = this.__base;
        return typeof id === "undefined" || id === null
            ? new DTO_HeaderProjekBrandCollectionService(client, path, fieldName, options)
            : new DTO_HeaderProjekBrandService(client, path, new QDTO_HeaderProjekBrandId(fieldName).buildUrl(id, isUrlNotEncoded()), options);
    }
    HeaderProjekDepartemen(id) {
        const fieldName = "HeaderProjekDepartemen";
        const { client, path, options, isUrlNotEncoded } = this.__base;
        return typeof id === "undefined" || id === null
            ? new DTO_HeaderProjekDepartemenCollectionService(client, path, fieldName, options)
            : new DTO_HeaderProjekDepartemenService(client, path, new QDTO_HeaderProjekDepartemenId(fieldName).buildUrl(id, isUrlNotEncoded()), options);
    }
}
export class DTO_HeaderProjekCollectionService extends EntitySetServiceV4 {
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qDTO_HeaderProjek, new QDTO_HeaderProjekId(name), options);
    }
}
export class DTO_HeaderProjekListService extends EntityTypeServiceV4 {
    _Brand;
    _JenisProgram;
    _Departmen;
    _Region;
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qDTO_HeaderProjekList, options);
    }
    Brand() {
        if (!this._Brand) {
            const { client, path, options } = this.__base;
            this._Brand = new DTO_BrandService(client, path, "Brand", options);
        }
        return this._Brand;
    }
    JenisProgram() {
        if (!this._JenisProgram) {
            const { client, path, options } = this.__base;
            this._JenisProgram = new DTO_JenisProgramService(client, path, "JenisProgram", options);
        }
        return this._JenisProgram;
    }
    Departmen() {
        if (!this._Departmen) {
            const { client, path, options } = this.__base;
            this._Departmen = new DTO_DepartmenService(client, path, "Departmen", options);
        }
        return this._Departmen;
    }
    Region() {
        if (!this._Region) {
            const { client, path, options } = this.__base;
            this._Region = new DTO_RegionService(client, path, "Region", options);
        }
        return this._Region;
    }
    BudgetAlokasi(id) {
        const fieldName = "BudgetAlokasi";
        const { client, path, options, isUrlNotEncoded } = this.__base;
        return typeof id === "undefined" || id === null
            ? new DTO_BudgetAlokasiCollectionService(client, path, fieldName, options)
            : new DTO_BudgetAlokasiService(client, path, new QDTO_BudgetAlokasiId(fieldName).buildUrl(id, isUrlNotEncoded()), options);
    }
    HeaderProjekBrand(id) {
        const fieldName = "HeaderProjekBrand";
        const { client, path, options, isUrlNotEncoded } = this.__base;
        return typeof id === "undefined" || id === null
            ? new DTO_HeaderProjekBrandCollectionService(client, path, fieldName, options)
            : new DTO_HeaderProjekBrandService(client, path, new QDTO_HeaderProjekBrandId(fieldName).buildUrl(id, isUrlNotEncoded()), options);
    }
    HeaderProjekDepartemen(id) {
        const fieldName = "HeaderProjekDepartemen";
        const { client, path, options, isUrlNotEncoded } = this.__base;
        return typeof id === "undefined" || id === null
            ? new DTO_HeaderProjekDepartemenCollectionService(client, path, fieldName, options)
            : new DTO_HeaderProjekDepartemenService(client, path, new QDTO_HeaderProjekDepartemenId(fieldName).buildUrl(id, isUrlNotEncoded()), options);
    }
}
export class DTO_HeaderProjekListCollectionService extends EntitySetServiceV4 {
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qDTO_HeaderProjekList, new QDTO_HeaderProjekListId(name), options);
    }
}
export class DtoProjectListService extends EntityTypeServiceV4 {
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qDtoProjectList, options);
    }
}
export class DtoProjectListCollectionService extends EntitySetServiceV4 {
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qDtoProjectList, new QDtoProjectListId(name), options);
    }
}
export class DTO_HeaderProjekBrandService extends EntityTypeServiceV4 {
    _Brand;
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qDTO_HeaderProjekBrand, options);
    }
    Brand() {
        if (!this._Brand) {
            const { client, path, options } = this.__base;
            this._Brand = new DTO_BrandService(client, path, "Brand", options);
        }
        return this._Brand;
    }
}
export class DTO_HeaderProjekBrandCollectionService extends EntitySetServiceV4 {
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qDTO_HeaderProjekBrand, new QDTO_HeaderProjekBrandId(name), options);
    }
}
export class DTO_HeaderProjekDepartemenService extends EntityTypeServiceV4 {
    _Departmen;
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qDTO_HeaderProjekDepartemen, options);
    }
    Departmen() {
        if (!this._Departmen) {
            const { client, path, options } = this.__base;
            this._Departmen = new DTO_DepartmenService(client, path, "Departmen", options);
        }
        return this._Departmen;
    }
}
export class DTO_HeaderProjekDepartemenCollectionService extends EntitySetServiceV4 {
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qDTO_HeaderProjekDepartemen, new QDTO_HeaderProjekDepartemenId(name), options);
    }
}
export class DTO_JenisPplService extends EntityTypeServiceV4 {
    _KategoriPpl;
    _KodeKlaims;
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qDTO_JenisPpl, options);
    }
    KategoriPpl() {
        if (!this._KategoriPpl) {
            const { client, path, options } = this.__base;
            this._KategoriPpl = new DTO_KategoriPplService(client, path, "KategoriPpl", options);
        }
        return this._KategoriPpl;
    }
    KodeKlaims() {
        if (!this._KodeKlaims) {
            const { client, path, options } = this.__base;
            this._KodeKlaims = new DTO_KodeKlaimsService(client, path, "KodeKlaims", options);
        }
        return this._KodeKlaims;
    }
}
export class DTO_JenisPplCollectionService extends EntitySetServiceV4 {
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qDTO_JenisPpl, new QDTO_JenisPplId(name), options);
    }
}
export class DTO_KodeKlaimsService extends EntityTypeServiceV4 {
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qDTO_KodeKlaims, options);
    }
}
export class DTO_KodeKlaimsCollectionService extends EntitySetServiceV4 {
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qDTO_KodeKlaims, new QDTO_KodeKlaimsId(name), options);
    }
}
export class DTO_JenisPplListService extends EntityTypeServiceV4 {
    _KategoriPpl;
    _KodeKlaims;
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qDTO_JenisPplList, options);
    }
    KategoriPpl() {
        if (!this._KategoriPpl) {
            const { client, path, options } = this.__base;
            this._KategoriPpl = new DTO_KategoriPplService(client, path, "KategoriPpl", options);
        }
        return this._KategoriPpl;
    }
    KodeKlaims() {
        if (!this._KodeKlaims) {
            const { client, path, options } = this.__base;
            this._KodeKlaims = new DTO_KodeKlaimsService(client, path, "KodeKlaims", options);
        }
        return this._KodeKlaims;
    }
}
export class DTO_JenisPplListCollectionService extends EntitySetServiceV4 {
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qDTO_JenisPplList, new QDTO_JenisPplListId(name), options);
    }
}
export class DTO_JenisProgramService extends EntityTypeServiceV4 {
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qDTO_JenisProgram, options);
    }
    KategoriPpl(id) {
        const fieldName = "KategoriPpl";
        const { client, path, options, isUrlNotEncoded } = this.__base;
        return typeof id === "undefined" || id === null
            ? new DTO_KategoriPplCollectionService(client, path, fieldName, options)
            : new DTO_KategoriPplService(client, path, new QDTO_KategoriPplId(fieldName).buildUrl(id, isUrlNotEncoded()), options);
    }
}
export class DTO_JenisProgramCollectionService extends EntitySetServiceV4 {
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qDTO_JenisProgram, new QDTO_JenisProgramId(name), options);
    }
}
export class DTO_JurnalLedgerService extends EntityTypeServiceV4 {
    _MasterBudget;
    _BudgetSap;
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qDTO_JurnalLedger, options);
    }
    MasterBudget() {
        if (!this._MasterBudget) {
            const { client, path, options } = this.__base;
            this._MasterBudget = new DTO_MasterBudgetService(client, path, "MasterBudget", options);
        }
        return this._MasterBudget;
    }
    BudgetSap() {
        if (!this._BudgetSap) {
            const { client, path, options } = this.__base;
            this._BudgetSap = new DTO_BudgetSapService(client, path, "BudgetSap", options);
        }
        return this._BudgetSap;
    }
}
export class DTO_JurnalLedgerCollectionService extends EntitySetServiceV4 {
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qDTO_JurnalLedger, new QDTO_JurnalLedgerId(name), options);
    }
}
export class DTO_KategoriPplService extends EntityTypeServiceV4 {
    _JenisProgram;
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qDTO_KategoriPpl, options);
    }
    JenisProgram() {
        if (!this._JenisProgram) {
            const { client, path, options } = this.__base;
            this._JenisProgram = new DTO_JenisProgramService(client, path, "JenisProgram", options);
        }
        return this._JenisProgram;
    }
    JenisPpl(id) {
        const fieldName = "JenisPpl";
        const { client, path, options, isUrlNotEncoded } = this.__base;
        return typeof id === "undefined" || id === null
            ? new DTO_JenisPplCollectionService(client, path, fieldName, options)
            : new DTO_JenisPplService(client, path, new QDTO_JenisPplId(fieldName).buildUrl(id, isUrlNotEncoded()), options);
    }
}
export class DTO_KategoriPplCollectionService extends EntitySetServiceV4 {
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qDTO_KategoriPpl, new QDTO_KategoriPplId(name), options);
    }
}
export class DTO_MasterAccountService extends EntityTypeServiceV4 {
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qDTO_MasterAccount, options);
    }
}
export class DTO_MasterAccountCollectionService extends EntitySetServiceV4 {
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qDTO_MasterAccount, new QDTO_MasterAccountId(name), options);
    }
}
export class DTO_MasterJabatanService extends EntityTypeServiceV4 {
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qDTO_MasterJabatan, options);
    }
}
export class DTO_MasterJabatanCollectionService extends EntitySetServiceV4 {
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qDTO_MasterJabatan, new QDTO_MasterJabatanId(name), options);
    }
}
export class DTO_MasterKaryawanService extends EntityTypeServiceV4 {
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qDTO_MasterKaryawan, options);
    }
}
export class DTO_MasterKaryawanCollectionService extends EntitySetServiceV4 {
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qDTO_MasterKaryawan, new QDTO_MasterKaryawanId(name), options);
    }
}
export class DTO_MasterKlaimService extends EntityTypeServiceV4 {
    _KodeKlaims;
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qDTO_MasterKlaim, options);
    }
    KodeKlaims() {
        if (!this._KodeKlaims) {
            const { client, path, options } = this.__base;
            this._KodeKlaims = new DTO_KodeKlaimsService(client, path, "KodeKlaims", options);
        }
        return this._KodeKlaims;
    }
    MasterKlaimSyarat(id) {
        const fieldName = "MasterKlaimSyarat";
        const { client, path, options, isUrlNotEncoded } = this.__base;
        return typeof id === "undefined" || id === null
            ? new DTO_MasterKlaimSyaratCollectionService(client, path, fieldName, options)
            : new DTO_MasterKlaimSyaratService(client, path, new QDTO_MasterKlaimSyaratId(fieldName).buildUrl(id, isUrlNotEncoded()), options);
    }
}
export class DTO_MasterKlaimCollectionService extends EntitySetServiceV4 {
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qDTO_MasterKlaim, new QDTO_MasterKlaimId(name), options);
    }
}
export class DTO_MasterKlaimSyaratService extends EntityTypeServiceV4 {
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qDTO_MasterKlaimSyarat, options);
    }
}
export class DTO_MasterKlaimSyaratCollectionService extends EntitySetServiceV4 {
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qDTO_MasterKlaimSyarat, new QDTO_MasterKlaimSyaratId(name), options);
    }
}
export class DTO_MasterOrgService extends EntityTypeServiceV4 {
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qDTO_MasterOrg, options);
    }
}
export class DTO_MasterOrgCollectionService extends EntitySetServiceV4 {
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qDTO_MasterOrg, new QDTO_MasterOrgId(name), options);
    }
}
export class DTO_MasterJobPosService extends EntityTypeServiceV4 {
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qDTO_MasterJobPos, options);
    }
}
export class DTO_MasterJobPosCollectionService extends EntitySetServiceV4 {
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qDTO_MasterJobPos, new QDTO_MasterJobPosId(name), options);
    }
}
export class DTO_MasterJobLvlService extends EntityTypeServiceV4 {
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qDTO_MasterJobLvl, options);
    }
}
export class DTO_MasterJobLvlCollectionService extends EntitySetServiceV4 {
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qDTO_MasterJobLvl, new QDTO_MasterJobLvlId(name), options);
    }
}
export class DTO_MasterPermService extends EntityTypeServiceV4 {
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qDTO_MasterPerm, options);
    }
}
export class DTO_MasterPermCollectionService extends EntitySetServiceV4 {
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qDTO_MasterPerm, new QDTO_MasterPermId(name), options);
    }
}
export class DTO_MasterRoleService extends EntityTypeServiceV4 {
    _Organization;
    _JobPosition;
    _JobLevel;
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qDTO_MasterRole, options);
    }
    Organization() {
        if (!this._Organization) {
            const { client, path, options } = this.__base;
            this._Organization = new DTO_MasterOrgSlimService(client, path, "Organization", options);
        }
        return this._Organization;
    }
    JobPosition() {
        if (!this._JobPosition) {
            const { client, path, options } = this.__base;
            this._JobPosition = new DTO_MasterJobPosService(client, path, "JobPosition", options);
        }
        return this._JobPosition;
    }
    JobLevel() {
        if (!this._JobLevel) {
            const { client, path, options } = this.__base;
            this._JobLevel = new DTO_MasterJobLvlService(client, path, "JobLevel", options);
        }
        return this._JobLevel;
    }
    Permissions(id) {
        const fieldName = "Permissions";
        const { client, path, options, isUrlNotEncoded } = this.__base;
        return typeof id === "undefined" || id === null
            ? new DTO_PermissionRefCollectionService(client, path, fieldName, options)
            : new DTO_PermissionRefService(client, path, new QDTO_PermissionRefId(fieldName).buildUrl(id, isUrlNotEncoded()), options);
    }
}
export class DTO_MasterRoleCollectionService extends EntitySetServiceV4 {
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qDTO_MasterRole, new QDTO_MasterRoleId(name), options);
    }
}
export class DTO_PermissionRefService extends EntityTypeServiceV4 {
    _Permission;
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qDTO_PermissionRef, options);
    }
    Permission() {
        if (!this._Permission) {
            const { client, path, options } = this.__base;
            this._Permission = new DTO_MasterPermService(client, path, "Permission", options);
        }
        return this._Permission;
    }
}
export class DTO_PermissionRefCollectionService extends EntitySetServiceV4 {
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qDTO_PermissionRef, new QDTO_PermissionRefId(name), options);
    }
}
export class DTO_MasterUserService extends EntityTypeServiceV4 {
    _Role;
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qDTO_MasterUser, options);
    }
    Role() {
        if (!this._Role) {
            const { client, path, options } = this.__base;
            this._Role = new DTO_MasterRoleService(client, path, "Role", options);
        }
        return this._Role;
    }
    UserArea(id) {
        const fieldName = "UserArea";
        const { client, path, options, isUrlNotEncoded } = this.__base;
        return typeof id === "undefined" || id === null
            ? new DTO_UserAreaCollectionService(client, path, fieldName, options)
            : new DTO_UserAreaService(client, path, new QDTO_UserAreaId(fieldName).buildUrl(id, isUrlNotEncoded()), options);
    }
    UserDistributor(id) {
        const fieldName = "UserDistributor";
        const { client, path, options, isUrlNotEncoded } = this.__base;
        return typeof id === "undefined" || id === null
            ? new DTO_UserDistributorCollectionService(client, path, fieldName, options)
            : new DTO_UserDistributorService(client, path, new QDTO_UserDistributorId(fieldName).buildUrl(id, isUrlNotEncoded()), options);
    }
    UserBrand(id) {
        const fieldName = "UserBrand";
        const { client, path, options, isUrlNotEncoded } = this.__base;
        return typeof id === "undefined" || id === null
            ? new DTO_UserBrandCollectionService(client, path, fieldName, options)
            : new DTO_UserBrandService(client, path, new QDTO_UserBrandId(fieldName).buildUrl(id, isUrlNotEncoded()), options);
    }
    UsersAttachment(id) {
        const fieldName = "UsersAttachment";
        const { client, path, options, isUrlNotEncoded } = this.__base;
        return typeof id === "undefined" || id === null
            ? new DTO_UsersAttachmentCollectionService(client, path, fieldName, options)
            : new DTO_UsersAttachmentService(client, path, new QDTO_UsersAttachmentId(fieldName).buildUrl(id, isUrlNotEncoded()), options);
    }
}
export class DTO_MasterUserCollectionService extends EntitySetServiceV4 {
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qDTO_MasterUser, new QDTO_MasterUserId(name), options);
    }
}
export class DTO_UsersAttachmentService extends EntityTypeServiceV4 {
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qDTO_UsersAttachment, options);
    }
}
export class DTO_UsersAttachmentCollectionService extends EntitySetServiceV4 {
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qDTO_UsersAttachment, new QDTO_UsersAttachmentId(name), options);
    }
}
export class DTO_MasterProvinsiService extends EntityTypeServiceV4 {
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qDTO_MasterProvinsi, options);
    }
    MasterKota(id) {
        const fieldName = "MasterKota";
        const { client, path, options, isUrlNotEncoded } = this.__base;
        return typeof id === "undefined" || id === null
            ? new DTO_MasterKotaCollectionService(client, path, fieldName, options)
            : new DTO_MasterKotaService(client, path, new QDTO_MasterKotaId(fieldName).buildUrl(id, isUrlNotEncoded()), options);
    }
}
export class DTO_MasterProvinsiCollectionService extends EntitySetServiceV4 {
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qDTO_MasterProvinsi, new QDTO_MasterProvinsiId(name), options);
    }
}
export class DTO_MasterKotaService extends EntityTypeServiceV4 {
    _MasterProvinsi;
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qDTO_MasterKota, options);
    }
    MasterProvinsi() {
        if (!this._MasterProvinsi) {
            const { client, path, options } = this.__base;
            this._MasterProvinsi = new DTO_MasterProvinsiService(client, path, "MasterProvinsi", options);
        }
        return this._MasterProvinsi;
    }
    MasterKecamatan(id) {
        const fieldName = "MasterKecamatan";
        const { client, path, options, isUrlNotEncoded } = this.__base;
        return typeof id === "undefined" || id === null
            ? new DTO_MasterKecamatanCollectionService(client, path, fieldName, options)
            : new DTO_MasterKecamatanService(client, path, new QDTO_MasterKecamatanId(fieldName).buildUrl(id, isUrlNotEncoded()), options);
    }
}
export class DTO_MasterKotaCollectionService extends EntitySetServiceV4 {
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qDTO_MasterKota, new QDTO_MasterKotaId(name), options);
    }
}
export class DTO_MasterKecamatanService extends EntityTypeServiceV4 {
    _MasterProvinsi;
    _MasterKota;
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qDTO_MasterKecamatan, options);
    }
    MasterProvinsi() {
        if (!this._MasterProvinsi) {
            const { client, path, options } = this.__base;
            this._MasterProvinsi = new DTO_MasterProvinsiService(client, path, "MasterProvinsi", options);
        }
        return this._MasterProvinsi;
    }
    MasterKota() {
        if (!this._MasterKota) {
            const { client, path, options } = this.__base;
            this._MasterKota = new DTO_MasterKotaService(client, path, "MasterKota", options);
        }
        return this._MasterKota;
    }
    MasterKelurahan(id) {
        const fieldName = "MasterKelurahan";
        const { client, path, options, isUrlNotEncoded } = this.__base;
        return typeof id === "undefined" || id === null
            ? new DTO_MasterKelurahanCollectionService(client, path, fieldName, options)
            : new DTO_MasterKelurahanService(client, path, new QDTO_MasterKelurahanId(fieldName).buildUrl(id, isUrlNotEncoded()), options);
    }
}
export class DTO_MasterKecamatanCollectionService extends EntitySetServiceV4 {
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qDTO_MasterKecamatan, new QDTO_MasterKecamatanId(name), options);
    }
}
export class DTO_MasterKelurahanService extends EntityTypeServiceV4 {
    _MasterProvinsi;
    _MasterKota;
    _MasterKecamatan;
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qDTO_MasterKelurahan, options);
    }
    MasterProvinsi() {
        if (!this._MasterProvinsi) {
            const { client, path, options } = this.__base;
            this._MasterProvinsi = new DTO_MasterProvinsiService(client, path, "MasterProvinsi", options);
        }
        return this._MasterProvinsi;
    }
    MasterKota() {
        if (!this._MasterKota) {
            const { client, path, options } = this.__base;
            this._MasterKota = new DTO_MasterKotaService(client, path, "MasterKota", options);
        }
        return this._MasterKota;
    }
    MasterKecamatan() {
        if (!this._MasterKecamatan) {
            const { client, path, options } = this.__base;
            this._MasterKecamatan = new DTO_MasterKecamatanService(client, path, "MasterKecamatan", options);
        }
        return this._MasterKecamatan;
    }
}
export class DTO_MasterKelurahanCollectionService extends EntitySetServiceV4 {
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qDTO_MasterKelurahan, new QDTO_MasterKelurahanId(name), options);
    }
}
export class DTO_OITMService extends EntityTypeServiceV4 {
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qDTO_OITM, options);
    }
}
export class DTO_OITMCollectionService extends EntitySetServiceV4 {
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qDTO_OITM, new QDTO_OITMId(name), options);
    }
}
export class DTO_OutletService extends EntityTypeServiceV4 {
    _Area;
    _OutletGroup;
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qDTO_Outlet, options);
    }
    Area() {
        if (!this._Area) {
            const { client, path, options } = this.__base;
            this._Area = new DTO_AreaService(client, path, "Area", options);
        }
        return this._Area;
    }
    OutletGroup() {
        if (!this._OutletGroup) {
            const { client, path, options } = this.__base;
            this._OutletGroup = new DTO_OutletGroupService(client, path, "OutletGroup", options);
        }
        return this._OutletGroup;
    }
}
export class DTO_OutletCollectionService extends EntitySetServiceV4 {
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qDTO_Outlet, new QDTO_OutletId(name), options);
    }
}
export class DTO_OutletGroupService extends EntityTypeServiceV4 {
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qDTO_OutletGroup, options);
    }
    Outlet(id) {
        const fieldName = "Outlet";
        const { client, path, options, isUrlNotEncoded } = this.__base;
        return typeof id === "undefined" || id === null
            ? new DTO_OutletCollectionService(client, path, fieldName, options)
            : new DTO_OutletService(client, path, new QDTO_OutletId(fieldName).buildUrl(id, isUrlNotEncoded()), options);
    }
}
export class DTO_OutletGroupCollectionService extends EntitySetServiceV4 {
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qDTO_OutletGroup, new QDTO_OutletGroupId(name), options);
    }
}
export class DTO_PengajuanFormService extends EntityTypeServiceV4 {
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qDTO_PengajuanForm, options);
    }
    PengajuanFormOutlet(id) {
        const fieldName = "PengajuanFormOutlet";
        const { client, path, options, isUrlNotEncoded } = this.__base;
        return typeof id === "undefined" || id === null
            ? new DTO_PengajuanFormOutletCollectionService(client, path, fieldName, options)
            : new DTO_PengajuanFormOutletService(client, path, new QDTO_PengajuanFormOutletId(fieldName).buildUrl(id, isUrlNotEncoded()), options);
    }
    PengajuanFormAttachment(id) {
        const fieldName = "PengajuanFormAttachment";
        const { client, path, options, isUrlNotEncoded } = this.__base;
        return typeof id === "undefined" || id === null
            ? new DTO_PengajuanFormAttachmentCollectionService(client, path, fieldName, options)
            : new DTO_PengajuanFormAttachmentService(client, path, new QDTO_PengajuanFormAttachmentId(fieldName).buildUrl(id, isUrlNotEncoded()), options);
    }
    PengajuanFormDetail(id) {
        const fieldName = "PengajuanFormDetail";
        const { client, path, options, isUrlNotEncoded } = this.__base;
        return typeof id === "undefined" || id === null
            ? new DTO_PengajuanFormDetailCollectionService(client, path, fieldName, options)
            : new DTO_PengajuanFormDetailService(client, path, new QDTO_PengajuanFormDetailId(fieldName).buildUrl(id, isUrlNotEncoded()), options);
    }
    PengajuanFormProduk(id) {
        const fieldName = "PengajuanFormProduk";
        const { client, path, options, isUrlNotEncoded } = this.__base;
        return typeof id === "undefined" || id === null
            ? new DTO_PengajuanFormProdukCollectionService(client, path, fieldName, options)
            : new DTO_PengajuanFormProdukService(client, path, new QDTO_PengajuanFormProdukId(fieldName).buildUrl(id, isUrlNotEncoded()), options);
    }
    Approval(id) {
        const fieldName = "Approval";
        const { client, path, options, isUrlNotEncoded } = this.__base;
        return typeof id === "undefined" || id === null
            ? new DTO_ApprovalCollectionService(client, path, fieldName, options)
            : new DTO_ApprovalService(client, path, new QDTO_ApprovalId(fieldName).buildUrl(id, isUrlNotEncoded()), options);
    }
}
export class DTO_PengajuanFormCollectionService extends EntitySetServiceV4 {
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qDTO_PengajuanForm, new QDTO_PengajuanFormId(name), options);
    }
}
export class DTO_PengajuanFormOutletService extends EntityTypeServiceV4 {
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qDTO_PengajuanFormOutlet, options);
    }
}
export class DTO_PengajuanFormOutletCollectionService extends EntitySetServiceV4 {
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qDTO_PengajuanFormOutlet, new QDTO_PengajuanFormOutletId(name), options);
    }
}
export class DTO_PengajuanFormAttachmentService extends EntityTypeServiceV4 {
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qDTO_PengajuanFormAttachment, options);
    }
}
export class DTO_PengajuanFormAttachmentCollectionService extends EntitySetServiceV4 {
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qDTO_PengajuanFormAttachment, new QDTO_PengajuanFormAttachmentId(name), options);
    }
}
export class DTO_PengajuanFormProdukService extends EntityTypeServiceV4 {
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qDTO_PengajuanFormProduk, options);
    }
}
export class DTO_PengajuanFormProdukCollectionService extends EntitySetServiceV4 {
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qDTO_PengajuanFormProduk, new QDTO_PengajuanFormProdukId(name), options);
    }
}
export class DTO_PengajuanFormDetailService extends EntityTypeServiceV4 {
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qDTO_PengajuanFormDetail, options);
    }
}
export class DTO_PengajuanFormDetailCollectionService extends EntitySetServiceV4 {
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qDTO_PengajuanFormDetail, new QDTO_PengajuanFormDetailId(name), options);
    }
}
export class DTO_PostBudgetService extends EntityTypeServiceV4 {
    _Departmen;
    _Coa;
    _Brand;
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qDTO_PostBudget, options);
    }
    Departmen() {
        if (!this._Departmen) {
            const { client, path, options } = this.__base;
            this._Departmen = new DTO_DepartmenService(client, path, "Departmen", options);
        }
        return this._Departmen;
    }
    Coa() {
        if (!this._Coa) {
            const { client, path, options } = this.__base;
            this._Coa = new DTO_CoaService(client, path, "Coa", options);
        }
        return this._Coa;
    }
    Brand() {
        if (!this._Brand) {
            const { client, path, options } = this.__base;
            this._Brand = new DTO_BrandService(client, path, "Brand", options);
        }
        return this._Brand;
    }
    PostBudgetProgram(id) {
        const fieldName = "PostBudgetProgram";
        const { client, path, options, isUrlNotEncoded } = this.__base;
        return typeof id === "undefined" || id === null
            ? new DTO_PostBudgetProgramCollectionService(client, path, fieldName, options)
            : new DTO_PostBudgetProgramService(client, path, new QDTO_PostBudgetProgramId(fieldName).buildUrl(id, isUrlNotEncoded()), options);
    }
}
export class DTO_PostBudgetCollectionService extends EntitySetServiceV4 {
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qDTO_PostBudget, new QDTO_PostBudgetId(name), options);
    }
}
export class DTO_PostBudgetProgramService extends EntityTypeServiceV4 {
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qDTO_PostBudgetProgram, options);
    }
}
export class DTO_PostBudgetProgramCollectionService extends EntitySetServiceV4 {
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qDTO_PostBudgetProgram, new QDTO_PostBudgetProgramId(name), options);
    }
}
export class DTO_ChannelService extends EntityTypeServiceV4 {
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qDTO_Channel, options);
    }
}
export class DTO_ChannelCollectionService extends EntitySetServiceV4 {
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qDTO_Channel, new QDTO_ChannelId(name), options);
    }
}
export class DTO_BudgetSapService extends EntityTypeServiceV4 {
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qDTO_BudgetSap, options);
    }
    MasterBudget(id) {
        const fieldName = "MasterBudget";
        const { client, path, options, isUrlNotEncoded } = this.__base;
        return typeof id === "undefined" || id === null
            ? new DTO_MasterBudgetCollectionService(client, path, fieldName, options)
            : new DTO_MasterBudgetService(client, path, new QDTO_MasterBudgetId(fieldName).buildUrl(id, isUrlNotEncoded()), options);
    }
}
export class DTO_BudgetSapCollectionService extends EntitySetServiceV4 {
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qDTO_BudgetSap, new QDTO_BudgetSapId(name), options);
    }
}
export class DTO_MasterBudgetService extends EntityTypeServiceV4 {
    _PostBudget;
    _Coa;
    _Brand;
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qDTO_MasterBudget, options);
    }
    PostBudget() {
        if (!this._PostBudget) {
            const { client, path, options } = this.__base;
            this._PostBudget = new DTO_PostBudgetService(client, path, "PostBudget", options);
        }
        return this._PostBudget;
    }
    Coa() {
        if (!this._Coa) {
            const { client, path, options } = this.__base;
            this._Coa = new DTO_CoaService(client, path, "Coa", options);
        }
        return this._Coa;
    }
    Brand() {
        if (!this._Brand) {
            const { client, path, options } = this.__base;
            this._Brand = new DTO_BrandService(client, path, "Brand", options);
        }
        return this._Brand;
    }
}
export class DTO_MasterBudgetCollectionService extends EntitySetServiceV4 {
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qDTO_MasterBudget, new QDTO_MasterBudgetId(name), options);
    }
}
export class DTO_PplAreaService extends EntityTypeServiceV4 {
    _Area;
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qDTO_PplArea, options);
    }
    Area() {
        if (!this._Area) {
            const { client, path, options } = this.__base;
            this._Area = new DTO_AreaService(client, path, "Area", options);
        }
        return this._Area;
    }
}
export class DTO_PplAreaCollectionService extends EntitySetServiceV4 {
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qDTO_PplArea, new QDTO_PplAreaId(name), options);
    }
}
export class DTO_PplAttachmentService extends EntityTypeServiceV4 {
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qDTO_PplAttachment, options);
    }
}
export class DTO_PplAttachmentCollectionService extends EntitySetServiceV4 {
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qDTO_PplAttachment, new QDTO_PplAttachmentId(name), options);
    }
}
export class DTO_PplBudgetAlokasiService extends EntityTypeServiceV4 {
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qDTO_PplBudgetAlokasi, options);
    }
}
export class DTO_PplBudgetAlokasiCollectionService extends EntitySetServiceV4 {
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qDTO_PplBudgetAlokasi, new QDTO_PplBudgetAlokasiId(name), options);
    }
}
export class DTO_PplDetailProdukService extends EntityTypeServiceV4 {
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qDTO_PplDetailProduk, options);
    }
}
export class DTO_PplDetailProdukCollectionService extends EntitySetServiceV4 {
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qDTO_PplDetailProduk, new QDTO_PplDetailProdukId(name), options);
    }
}
export class DTO_PplDetailsService extends EntityTypeServiceV4 {
    _TargetSe;
    _Sosmed;
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qDTO_PplDetails, options);
    }
    TargetSe() {
        if (!this._TargetSe) {
            const { client, path, options } = this.__base;
            this._TargetSe = new TargetSeDtoService(client, path, "TargetSe", options);
        }
        return this._TargetSe;
    }
    Sosmed() {
        if (!this._Sosmed) {
            const { client, path, options } = this.__base;
            this._Sosmed = new SosmedDtoService(client, path, "Sosmed", options);
        }
        return this._Sosmed;
    }
}
export class DTO_PplDetailsCollectionService extends EntitySetServiceV4 {
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qDTO_PplDetails, new QDTO_PplDetailsId(name), options);
    }
}
export class DTO_PplOutletService extends EntityTypeServiceV4 {
    _Outlet;
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qDTO_PplOutlet, options);
    }
    Outlet() {
        if (!this._Outlet) {
            const { client, path, options } = this.__base;
            this._Outlet = new DTO_OutletService(client, path, "Outlet", options);
        }
        return this._Outlet;
    }
}
export class DTO_PplOutletCollectionService extends EntitySetServiceV4 {
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qDTO_PplOutlet, new QDTO_PplOutletId(name), options);
    }
}
export class DTO_ProdukService extends EntityTypeServiceV4 {
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qDTO_Produk, options);
    }
}
export class DTO_ProdukCollectionService extends EntitySetServiceV4 {
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qDTO_Produk, new QDTO_ProdukId(name), options);
    }
}
export class DTO_ProdukCategoriService extends EntityTypeServiceV4 {
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qDTO_ProdukCategori, options);
    }
}
export class DTO_ProdukCategoriCollectionService extends EntitySetServiceV4 {
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qDTO_ProdukCategori, new QDTO_ProdukCategoriId(name), options);
    }
}
export class DTO_ProvinsiService extends EntityTypeServiceV4 {
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qDTO_Provinsi, options);
    }
    Kotas(id) {
        const fieldName = "Kotas";
        const { client, path, options, isUrlNotEncoded } = this.__base;
        return typeof id === "undefined" || id === null
            ? new DTO_KotaCollectionService(client, path, fieldName, options)
            : new DTO_KotaService(client, path, new QDTO_KotaId(fieldName).buildUrl(id, isUrlNotEncoded()), options);
    }
}
export class DTO_ProvinsiCollectionService extends EntitySetServiceV4 {
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qDTO_Provinsi, new QDTO_ProvinsiId(name), options);
    }
}
export class DTO_KotaService extends EntityTypeServiceV4 {
    _Provinsi;
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qDTO_Kota, options);
    }
    Provinsi() {
        if (!this._Provinsi) {
            const { client, path, options } = this.__base;
            this._Provinsi = new DTO_ProvinsiService(client, path, "Provinsi", options);
        }
        return this._Provinsi;
    }
    Kecamatans(id) {
        const fieldName = "Kecamatans";
        const { client, path, options, isUrlNotEncoded } = this.__base;
        return typeof id === "undefined" || id === null
            ? new DTO_KecamatanCollectionService(client, path, fieldName, options)
            : new DTO_KecamatanService(client, path, new QDTO_KecamatanId(fieldName).buildUrl(id, isUrlNotEncoded()), options);
    }
}
export class DTO_KotaCollectionService extends EntitySetServiceV4 {
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qDTO_Kota, new QDTO_KotaId(name), options);
    }
}
export class DTO_KecamatanService extends EntityTypeServiceV4 {
    _Provinsi;
    _Kota;
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qDTO_Kecamatan, options);
    }
    Provinsi() {
        if (!this._Provinsi) {
            const { client, path, options } = this.__base;
            this._Provinsi = new DTO_ProvinsiService(client, path, "Provinsi", options);
        }
        return this._Provinsi;
    }
    Kota() {
        if (!this._Kota) {
            const { client, path, options } = this.__base;
            this._Kota = new DTO_KotaService(client, path, "Kota", options);
        }
        return this._Kota;
    }
    Kelurahans(id) {
        const fieldName = "Kelurahans";
        const { client, path, options, isUrlNotEncoded } = this.__base;
        return typeof id === "undefined" || id === null
            ? new DTO_KelurahanCollectionService(client, path, fieldName, options)
            : new DTO_KelurahanService(client, path, new QDTO_KelurahanId(fieldName).buildUrl(id, isUrlNotEncoded()), options);
    }
}
export class DTO_KecamatanCollectionService extends EntitySetServiceV4 {
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qDTO_Kecamatan, new QDTO_KecamatanId(name), options);
    }
}
export class DTO_KelurahanService extends EntityTypeServiceV4 {
    _Provinsi;
    _Kota;
    _Kecamatan;
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qDTO_Kelurahan, options);
    }
    Provinsi() {
        if (!this._Provinsi) {
            const { client, path, options } = this.__base;
            this._Provinsi = new DTO_ProvinsiService(client, path, "Provinsi", options);
        }
        return this._Provinsi;
    }
    Kota() {
        if (!this._Kota) {
            const { client, path, options } = this.__base;
            this._Kota = new DTO_KotaService(client, path, "Kota", options);
        }
        return this._Kota;
    }
    Kecamatan() {
        if (!this._Kecamatan) {
            const { client, path, options } = this.__base;
            this._Kecamatan = new DTO_KecamatanService(client, path, "Kecamatan", options);
        }
        return this._Kecamatan;
    }
}
export class DTO_KelurahanCollectionService extends EntitySetServiceV4 {
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qDTO_Kelurahan, new QDTO_KelurahanId(name), options);
    }
}
export class DTO_RegionService extends EntityTypeServiceV4 {
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qDTO_Region, options);
    }
    Area(id) {
        const fieldName = "Area";
        const { client, path, options, isUrlNotEncoded } = this.__base;
        return typeof id === "undefined" || id === null
            ? new DTO_AreaCollectionService(client, path, fieldName, options)
            : new DTO_AreaService(client, path, new QDTO_AreaId(fieldName).buildUrl(id, isUrlNotEncoded()), options);
    }
}
export class DTO_RegionCollectionService extends EntitySetServiceV4 {
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qDTO_Region, new QDTO_RegionId(name), options);
    }
}
export class DTO_ResiService extends EntityTypeServiceV4 {
    _Syarat;
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qDTO_Resi, options);
    }
    Syarat() {
        if (!this._Syarat) {
            const { client, path, options } = this.__base;
            this._Syarat = new SyaratDtoService(client, path, "Syarat", options);
        }
        return this._Syarat;
    }
    ResiOutlet(id) {
        const fieldName = "ResiOutlet";
        const { client, path, options, isUrlNotEncoded } = this.__base;
        return typeof id === "undefined" || id === null
            ? new DTO_ResiOutletCollectionService(client, path, fieldName, options)
            : new DTO_ResiOutletService(client, path, new QDTO_ResiOutletId(fieldName).buildUrl(id, isUrlNotEncoded()), options);
    }
    ResiDetailProduk(id) {
        const fieldName = "ResiDetailProduk";
        const { client, path, options, isUrlNotEncoded } = this.__base;
        return typeof id === "undefined" || id === null
            ? new DTO_ResiDetailProdukCollectionService(client, path, fieldName, options)
            : new DTO_ResiDetailProdukService(client, path, new QDTO_ResiDetailProdukId(fieldName).buildUrl(id, isUrlNotEncoded()), options);
    }
    ResiPic(id) {
        const fieldName = "ResiPic";
        const { client, path, options, isUrlNotEncoded } = this.__base;
        return typeof id === "undefined" || id === null
            ? new DTO_ResiPicCollectionService(client, path, fieldName, options)
            : new DTO_ResiPicService(client, path, new QDTO_ResiPicId(fieldName).buildUrl(id, isUrlNotEncoded()), options);
    }
    ResiAttachment(id) {
        const fieldName = "ResiAttachment";
        const { client, path, options, isUrlNotEncoded } = this.__base;
        return typeof id === "undefined" || id === null
            ? new DTO_ResiAttachmentCollectionService(client, path, fieldName, options)
            : new DTO_ResiAttachmentService(client, path, new QDTO_ResiAttachmentId(fieldName).buildUrl(id, isUrlNotEncoded()), options);
    }
}
export class DTO_ResiCollectionService extends EntitySetServiceV4 {
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qDTO_Resi, new QDTO_ResiId(name), options);
    }
}
export class DTO_ResiOutletService extends EntityTypeServiceV4 {
    _Outlet;
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qDTO_ResiOutlet, options);
    }
    Outlet() {
        if (!this._Outlet) {
            const { client, path, options } = this.__base;
            this._Outlet = new DTO_OutletService(client, path, "Outlet", options);
        }
        return this._Outlet;
    }
}
export class DTO_ResiOutletCollectionService extends EntitySetServiceV4 {
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qDTO_ResiOutlet, new QDTO_ResiOutletId(name), options);
    }
}
export class DTO_SalesService extends EntityTypeServiceV4 {
    _Area;
    _Distributor;
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qDTO_Sales, options);
    }
    Area() {
        if (!this._Area) {
            const { client, path, options } = this.__base;
            this._Area = new DTO_AreaService(client, path, "Area", options);
        }
        return this._Area;
    }
    Distributor() {
        if (!this._Distributor) {
            const { client, path, options } = this.__base;
            this._Distributor = new DTO_DistributorService(client, path, "Distributor", options);
        }
        return this._Distributor;
    }
}
export class DTO_SalesCollectionService extends EntitySetServiceV4 {
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qDTO_Sales, new QDTO_SalesId(name), options);
    }
}
export class DTO_SalesmanService extends EntityTypeServiceV4 {
    _Area;
    _Distributor;
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qDTO_Salesman, options);
    }
    Area() {
        if (!this._Area) {
            const { client, path, options } = this.__base;
            this._Area = new DTO_AreaService(client, path, "Area", options);
        }
        return this._Area;
    }
    Distributor() {
        if (!this._Distributor) {
            const { client, path, options } = this.__base;
            this._Distributor = new DTO_DistributorService(client, path, "Distributor", options);
        }
        return this._Distributor;
    }
}
export class DTO_SalesmanCollectionService extends EntitySetServiceV4 {
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qDTO_Salesman, new QDTO_SalesmanId(name), options);
    }
}
export class DTO_SettingsService extends EntityTypeServiceV4 {
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qDTO_Settings, options);
    }
}
export class DTO_SettingsCollectionService extends EntitySetServiceV4 {
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qDTO_Settings, new QDTO_SettingsId(name), options);
    }
}
export class DTO_SkenarioBudgetService extends EntityTypeServiceV4 {
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qDTO_SkenarioBudget, options);
    }
}
export class DTO_SkenarioBudgetCollectionService extends EntitySetServiceV4 {
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qDTO_SkenarioBudget, new QDTO_SkenarioBudgetId(name), options);
    }
}
export class DTO_SkenarioBudgetListService extends EntityTypeServiceV4 {
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qDTO_SkenarioBudgetList, options);
    }
}
export class DTO_SkenarioBudgetListCollectionService extends EntitySetServiceV4 {
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qDTO_SkenarioBudgetList, new QDTO_SkenarioBudgetListId(name), options);
    }
}
export class DTO_TopUpBudgetService extends EntityTypeServiceV4 {
    _Brand;
    _Departmen;
    _Channel;
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qDTO_TopUpBudget, options);
    }
    TopUpBudgetDetail(id) {
        const fieldName = "TopUpBudgetDetail";
        const { client, path, options, isUrlNotEncoded } = this.__base;
        return typeof id === "undefined" || id === null
            ? new DTO_TopUpBudgetDetailCollectionService(client, path, fieldName, options)
            : new DTO_TopUpBudgetDetailService(client, path, new QDTO_TopUpBudgetDetailId(fieldName).buildUrl(id, isUrlNotEncoded()), options);
    }
    Approval(id) {
        const fieldName = "Approval";
        const { client, path, options, isUrlNotEncoded } = this.__base;
        return typeof id === "undefined" || id === null
            ? new ApprovalCollectionService(client, path, fieldName, options)
            : new ApprovalService(client, path, new QApprovalId(fieldName).buildUrl(id, isUrlNotEncoded()), options);
    }
    Brand() {
        if (!this._Brand) {
            const { client, path, options } = this.__base;
            this._Brand = new DTO_BrandService(client, path, "Brand", options);
        }
        return this._Brand;
    }
    Departmen() {
        if (!this._Departmen) {
            const { client, path, options } = this.__base;
            this._Departmen = new DTO_DepartmenService(client, path, "Departmen", options);
        }
        return this._Departmen;
    }
    Channel() {
        if (!this._Channel) {
            const { client, path, options } = this.__base;
            this._Channel = new DTO_ChannelService(client, path, "Channel", options);
        }
        return this._Channel;
    }
}
export class DTO_TopUpBudgetCollectionService extends EntitySetServiceV4 {
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qDTO_TopUpBudget, new QDTO_TopUpBudgetId(name), options);
    }
}
export class DTO_TopUpBudgetDetailService extends EntityTypeServiceV4 {
    _PostBudget;
    _BudgetSap;
    _MasterBudget;
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qDTO_TopUpBudgetDetail, options);
    }
    PostBudget() {
        if (!this._PostBudget) {
            const { client, path, options } = this.__base;
            this._PostBudget = new DTO_PostBudgetService(client, path, "PostBudget", options);
        }
        return this._PostBudget;
    }
    BudgetSap() {
        if (!this._BudgetSap) {
            const { client, path, options } = this.__base;
            this._BudgetSap = new DTO_BudgetSapService(client, path, "BudgetSap", options);
        }
        return this._BudgetSap;
    }
    MasterBudget() {
        if (!this._MasterBudget) {
            const { client, path, options } = this.__base;
            this._MasterBudget = new DTO_MasterBudgetService(client, path, "MasterBudget", options);
        }
        return this._MasterBudget;
    }
}
export class DTO_TopUpBudgetDetailCollectionService extends EntitySetServiceV4 {
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qDTO_TopUpBudgetDetail, new QDTO_TopUpBudgetDetailId(name), options);
    }
}
export class DTO_MasterKeyVisualService extends EntityTypeServiceV4 {
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qDTO_MasterKeyVisual, options);
    }
}
export class DTO_MasterKeyVisualCollectionService extends EntitySetServiceV4 {
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qDTO_MasterKeyVisual, new QDTO_MasterKeyVisualId(name), options);
    }
}
export class DTO_MasterOrgSlimService extends EntityTypeServiceV4 {
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qDTO_MasterOrgSlim, options);
    }
}
export class DTO_MasterOrgSlimCollectionService extends EntitySetServiceV4 {
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qDTO_MasterOrgSlim, new QDTO_MasterOrgSlimId(name), options);
    }
}
export class DTO_UserAreaService extends EntityTypeServiceV4 {
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qDTO_UserArea, options);
    }
}
export class DTO_UserAreaCollectionService extends EntitySetServiceV4 {
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qDTO_UserArea, new QDTO_UserAreaId(name), options);
    }
}
export class DTO_UserDistributorService extends EntityTypeServiceV4 {
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qDTO_UserDistributor, options);
    }
}
export class DTO_UserDistributorCollectionService extends EntitySetServiceV4 {
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qDTO_UserDistributor, new QDTO_UserDistributorId(name), options);
    }
}
export class DTO_UserBrandService extends EntityTypeServiceV4 {
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qDTO_UserBrand, options);
    }
}
export class DTO_UserBrandCollectionService extends EntitySetServiceV4 {
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qDTO_UserBrand, new QDTO_UserBrandId(name), options);
    }
}
export class DTO_ResiDetailProdukService extends EntityTypeServiceV4 {
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qDTO_ResiDetailProduk, options);
    }
}
export class DTO_ResiDetailProdukCollectionService extends EntitySetServiceV4 {
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qDTO_ResiDetailProduk, new QDTO_ResiDetailProdukId(name), options);
    }
}
export class DTO_ResiPicService extends EntityTypeServiceV4 {
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qDTO_ResiPic, options);
    }
}
export class DTO_ResiPicCollectionService extends EntitySetServiceV4 {
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qDTO_ResiPic, new QDTO_ResiPicId(name), options);
    }
}
export class DTO_ResiAttachmentService extends EntityTypeServiceV4 {
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qDTO_ResiAttachment, options);
    }
}
export class DTO_ResiAttachmentCollectionService extends EntitySetServiceV4 {
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qDTO_ResiAttachment, new QDTO_ResiAttachmentId(name), options);
    }
}
export class DtoHistoryTransaksiEstimasiService extends EntityTypeServiceV4 {
    _BudgetAlokasi;
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qDtoHistoryTransaksiEstimasi, options);
    }
    BudgetAlokasi() {
        if (!this._BudgetAlokasi) {
            const { client, path, options } = this.__base;
            this._BudgetAlokasi = new DTO_BudgetAlokasiService(client, path, "BudgetAlokasi", options);
        }
        return this._BudgetAlokasi;
    }
}
export class DtoHistoryTransaksiEstimasiCollectionService extends EntitySetServiceV4 {
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qDtoHistoryTransaksiEstimasi, new QDtoHistoryTransaksiEstimasiId(name), options);
    }
}
export class DtoHistoryTransaksiRealiasasiService extends EntityTypeServiceV4 {
    _BudgetAlokasi;
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qDtoHistoryTransaksiRealiasasi, options);
    }
    BudgetAlokasi() {
        if (!this._BudgetAlokasi) {
            const { client, path, options } = this.__base;
            this._BudgetAlokasi = new DTO_BudgetAlokasiService(client, path, "BudgetAlokasi", options);
        }
        return this._BudgetAlokasi;
    }
}
export class DtoHistoryTransaksiRealiasasiCollectionService extends EntitySetServiceV4 {
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qDtoHistoryTransaksiRealiasasi, new QDtoHistoryTransaksiRealiasasiId(name), options);
    }
}
export class DtoHistoryTransaksiEstimasiViewService extends EntityTypeServiceV4 {
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qDtoHistoryTransaksiEstimasiView, options);
    }
}
export class DtoHistoryTransaksiEstimasiViewCollectionService extends EntitySetServiceV4 {
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qDtoHistoryTransaksiEstimasiView, new QDtoHistoryTransaksiEstimasiViewId(name), options);
    }
}
export class DtoHistoryTransaksiRealiasasiViewService extends EntityTypeServiceV4 {
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qDtoHistoryTransaksiRealiasasiView, options);
    }
}
export class DtoHistoryTransaksiRealiasasiViewCollectionService extends EntitySetServiceV4 {
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qDtoHistoryTransaksiRealiasasiView, new QDtoHistoryTransaksiRealiasasiViewId(name), options);
    }
}
export class DtoMasterProdukService extends EntityTypeServiceV4 {
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qDtoMasterProduk, options);
    }
}
export class DtoMasterProdukCollectionService extends EntitySetServiceV4 {
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qDtoMasterProduk, new QDtoMasterProdukId(name), options);
    }
}
export class UserDtoService extends EntityTypeServiceV4 {
    _Users;
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qUserDto, options);
    }
    Users() {
        if (!this._Users) {
            const { client, path, options } = this.__base;
            this._Users = new CollectionServiceV4(client, path, "Users", qUserItem, options);
        }
        return this._Users;
    }
}
export class UserItemService extends EntityTypeServiceV4 {
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qUserItem, options);
    }
}
export class TargetSeDtoService extends EntityTypeServiceV4 {
    _TargetAo;
    _TargetValue;
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qTargetSeDto, options);
    }
    TargetAo() {
        if (!this._TargetAo) {
            const { client, path, options } = this.__base;
            this._TargetAo = new CollectionServiceV4(client, path, "TargetAo", qTargetItem, options);
        }
        return this._TargetAo;
    }
    TargetValue() {
        if (!this._TargetValue) {
            const { client, path, options } = this.__base;
            this._TargetValue = new CollectionServiceV4(client, path, "TargetValue", qTargetItem, options);
        }
        return this._TargetValue;
    }
}
export class TargetItemService extends EntityTypeServiceV4 {
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qTargetItem, options);
    }
}
export class SosmedDtoService extends EntityTypeServiceV4 {
    _Tiktok;
    _Instagram;
    _Youtube;
    _Facebook;
    _Twitter;
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qSosmedDto, options);
    }
    Tiktok() {
        if (!this._Tiktok) {
            const { client, path, options } = this.__base;
            this._Tiktok = new CollectionServiceV4(client, path, "Tiktok", qPlatformItem, options);
        }
        return this._Tiktok;
    }
    Instagram() {
        if (!this._Instagram) {
            const { client, path, options } = this.__base;
            this._Instagram = new CollectionServiceV4(client, path, "Instagram", qPlatformItem, options);
        }
        return this._Instagram;
    }
    Youtube() {
        if (!this._Youtube) {
            const { client, path, options } = this.__base;
            this._Youtube = new CollectionServiceV4(client, path, "Youtube", qPlatformItem, options);
        }
        return this._Youtube;
    }
    Facebook() {
        if (!this._Facebook) {
            const { client, path, options } = this.__base;
            this._Facebook = new CollectionServiceV4(client, path, "Facebook", qPlatformItem, options);
        }
        return this._Facebook;
    }
    Twitter() {
        if (!this._Twitter) {
            const { client, path, options } = this.__base;
            this._Twitter = new CollectionServiceV4(client, path, "Twitter", qPlatformItem, options);
        }
        return this._Twitter;
    }
}
export class PlatformItemService extends EntityTypeServiceV4 {
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qPlatformItem, options);
    }
}
export class BookAuthorService extends EntityTypeServiceV4 {
    _Book;
    _Author;
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qBookAuthor, options);
    }
    Book() {
        if (!this._Book) {
            const { client, path, options } = this.__base;
            this._Book = new BookService(client, path, "Book", options);
        }
        return this._Book;
    }
    Author() {
        if (!this._Author) {
            const { client, path, options } = this.__base;
            this._Author = new AuthorService(client, path, "Author", options);
        }
        return this._Author;
    }
}
export class SyaratDtoService extends EntityTypeServiceV4 {
    _Syarat;
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qSyaratDto, options);
    }
    Syarat() {
        if (!this._Syarat) {
            const { client, path, options } = this.__base;
            this._Syarat = new CollectionServiceV4(client, path, "Syarat", qSyaratItem, options);
        }
        return this._Syarat;
    }
}
export class SyaratItemService extends EntityTypeServiceV4 {
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qSyaratItem, options);
    }
}
export class STATUS_ENUMService extends EntityTypeServiceV4 {
    constructor(client, basePath, name, options) {
        super(client, basePath, name, qSTATUS_ENUM, options);
    }
}
