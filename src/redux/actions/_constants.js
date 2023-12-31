/*****************
 * isLading
 *****************/
export const LOADING = {
  IS_LOADING: "IS_LOADING",
};

/****************
      TOKEN
*****************/
export const TOKEN = {
  GET: "GET_TOKEN",
};

export const HEADERS = {
  // URL: atob(document.getElementById("hellyeah").value),
   URL: "http://ptnetindo.com:6694/",
  // URL: "http://192.168.100.17:6692/",
  //URL: "http://localhost:6692/",
  TOKEN:
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIwY2RiN2M5OC0wNWNmLTQ4NDgtOGM3Yy0yZTFiYTczZGUwNmYiLCJpYXQiOjE1NzAxNzM0ODYsImV4cCI6MTU3MDc3ODI4Nn0.1NiWtt2luG83am8FJSvWpL5p35Oxd8GSJJTwhFmAdgw",
  USERNAME: "netindo",
  PASSWORD: "$2b$08$hLMU6rEvNILCMaQbthARK.iCmDRO7jNbUB8CcvyRStqsHD4UQxjDO",
  PERPAGE: 10,
};

export const EXTENSION = {
  CSV: "csv",
  XLXS: "xlsx",
  PDF: "pdf",
};

export const CONFIG_HIDE = {
  HIDE_HRG_BELI: "admin-cabang",
};

/****************
      PASSWORD MODAL ADD LOCATION
*****************/
export const LOC_VERIF = {
  password: "bmV0aW4xMjM0YSE=",
};

/****************
      MODAL
*****************/
export const MODALS = {
  IS_MODAL_OPEN: "IS_MODAL_OPEN",
  MODAL_TYPE: "MODAL_TYPE",
};
/****************
      PENJUALAN_MANUAL
*****************/
export const PENJUALAN_MANUAL = {
  CREATE: "CREATE",
  LOADING_CREATE: "LOADING_CREATE",
  GET: "GET",
  LOADING_GET: "LOADING_GET",
  GET_REPORT: "GET_REPORT",
  GET_DETAIL_REPORT: "GET_DETAIL_REPORT",
};
/****************
      AUTH
*****************/
export const AUTH = {
  FETCH_DATAS: "FETCH_DATAS",
  GET_ERRORS: "GET_ERRORS",
  TEST_DISPATCH: "TEST_DISPATCH",
  SET_CURRENT_USER: "SET_CURRENT_USER",
  SET_LOGGED_USER: "SET_LOGGED_USER",
  SET_OTORISASI_ID: "SET_OTORISASI_ID",
};
export const REGISTER = {
  PROCESS: "SET_REGISTER_PROCESS",
  SUCCESS: "SET_REGISTER_SUCCESS",
  FAILED: "SET_REGISTER_FAILED",
  SETEMAIL: "SET_EMAIL",
};
/****************
 COMPANY
 *****************/
export const COMPANY = {
  LOADING_GET: "SET_COMPANY_LOADING_GET",
  SUCCESS_GET: "SUCCESS_COMPANY_GET",
  FAILED_GET: "FAILED_COMPANY_GET",
  LOADING_POST: "SET_COMPANY_LOADING_POST",
  SUCCESS_POST: "SUCCESS_COMPANY_POST",
  FAILED_POST: "FAILED_COMPANY_POST",
};
/****************
    USERS
*****************/
export const USER_LIST = {
  LOADING: "SET_USER_LIST_LOADING",
  SUCCESS: "SUCCESS_USER_LIST",
  FAILED: "FAILED_USER_LIST",
  DETAIL: "DETAIL_USER_LIST",
  EDIT: "EDIT_USER_LIST",
};

/****************
 USERS LEVEL
 *****************/
export const USER_LEVEL = {
  LOADING: "SET_USER_LEVEL_LOADING",
  SUCCESS: "SUCCESS_USER_LEVEL",
  FAILED: "FAILED_USER_LEVEL",
  DETAIL: "DETAIL_USER_LEVEL",
};
/****************
 LOCATION CATEGORY
 *****************/
export const LOCATION_CATEGORY = {
  LOADING: "SET_LOCATION_CATEGORY_LOADING",
  SUCCESS: "SUCCESS_LOCATION_CATEGORY",
  FAILED: "FAILED_LOCATION_CATEGORY",
  DETAIL: "DETAIL_LOCATION_CATEGORY",
};
/****************
 LOCATION
 *****************/
export const LOCATION = {
  LOADING: "SET_LOCATION_LOADING",
  SUCCESS: "SUCCESS_LOCATION",
  FAILED: "FAILED_LOCATION",
  DETAIL: "DETAIL_LOCATION",
  ALL: "ALL_LOCATION",
  EDIT: "EDIT_LOCATION",
};

/****************
 CASH
 *****************/
export const CASH = {
  LOADING: "SET_CASH_LOADING",
  UPDATE: "UPDATE_CASH",
  SUCCESS: "SUCCESS_CASH",
  TRX_SUCCESS: "SUCCESS_CASH_TRX",
  FAILED: "FAILED_CASH",
  DETAIL: "DETAIL_CASH",
  LOADING_REPORT: "SET_CASH_LOADING_REPORT",
  SUCCESS_REPORT: "SUCCESS_CASH_REPORT",
  FAILED_REPORT: "FAILED_CASH_REPORT",
  DETAIL_REPORT: "DETAIL_CASH_REPORT",
  EXCEL_REPORT: "SUCCESS_CASH_EXCEL_REPORT",
  DATA_GET_KARTU_KAS: "DATA_GET_KARTU_KAS",
};

/****************
 BANK
 *****************/
export const BANK = {
  LOADING: "SET_BANK_LOADING",
  SUCCESS: "SUCCESS_BANK",
  FAILED: "FAILED_BANK",
  DETAIL: "DETAIL_BANK",
};

/****************
 RAK
 *****************/
export const RAK = {
  LOADING: "SET_RAK_LOADING",
  SUCCESS: "SUCCESS_RAK",
  FAILED: "FAILED_RAK",
  DETAIL: "DETAIL_RAK",
};

/****************
 PROMO
 *****************/
export const PROMO = {
  LOADING: "SET_PROMO_LOADING",
  SUCCESS: "SUCCESS_PROMO",
  SUCCESS_BRG1: "SUCCESS_PROMO_BRG1",
  SUCCESS_BRG2: "SUCCESS_PROMO_BRG2",
  SUCCESS_KATEGORI: "SUCCESS_PROMO_KATEGORI",
  FAILED: "FAILED_PROMO",
  DETAIL: "DETAIL_PROMO",
};

/****************
 PRODUCT
 *****************/
export const PRODUCT = {
  LOADING: "SET_PRODUCT_LOADING",
  SUCCESS: "SUCCESS_PRODUCT",
  SUCCESS_PERSEN: "SUCCESS_PERSEN",
  FAILED: "FAILED_PRODUCT",
  DETAIL: "DETAIL_PRODUCT",
  LOADING_BRG: "SET_BRG_LOADING",
  LOADING_BRG_ALL: "SET_BRG_LOADING",
  LOADING_BRG_SALE: "SET_LOADING_BRG_SALE",
  SUCCESS_BRG: "SET_BRG_SUCCESS",
  SUCCESS_BRG_ALL: "SET_BRG_SUCCESS",
  SUCCESS_BRG_SALE: "SET_SUCCESS_BRG_SALE",
  EDIT_PRODUCT: "SET_EDIT_PRODUCT",
  CODE_PRODUCT: "SET_CODE_PRODUCT",

  DATA_PRODUCT_TRX: "DATA_PRODUCT_TRX",
  LOADING_DATA_PRODUCT_TRX: "LOADING_DATA_PRODUCT_TRX",
};

/****************
 PRICE PRODUCT
 *****************/
export const PRICE_PRODUCT = {
  LOADING: "SET_PRICE_PRODUCT_LOADING",
  SUCCESS: "SUCCESS_PRICE_PRODUCT",
  FAILED: "FAILED_PRICE_PRODUCT",
  DETAIL: "DETAIL_PRICE_PRODUCT",
};

/****************
 GROUP PRODUCT
 *****************/
export const GROUP_PRODUCT = {
  LOADING: "SET_GROUP_PRODUCT_LOADING",
  SUCCESS: "SUCCESS_GROUP_PRODUCT",
  FAILED: "FAILED_GROUP_PRODUCT",
  DETAIL: "DETAIL_GROUP_PRODUCT",
};
/****************
 CUSTOMER
 *****************/
export const CUSTOMER = {
  LOADING: "SET_CUSTOMER_LOADING",
  SUCCESS: "SET_CUSTOMER_SUCCESS",
  ALL: "SET_CUSTOMER_ALL",
  FAILED: "SET_CUSTOMER_FAILED",
  DETAIL: "SET_CUSTOMER_DETAIL",
  LIST_PRICE: "SET_CUSTOMER_LIST_PRICE",
  SAVE_LIST_PRICE: "SET_CUSTOMER_SAVE_LIST_PRICE",
  EDIT: "SET_CUSTOMER_EDIT",
  POST_LOADING: "SET_CUSTOMER_POST_LOADING",
};
/****************
 CUSTOMER TYPE
 *****************/
export const CUSTOMER_TYPE = {
  LOADING: "SET_CUSTOMER_TYPE_LOADING",
  SUCCESS: "SET_CUSTOMER_TYPE_SUCCESS",
  FAILED: "SET_CUSTOMER_TYPE_FAILED",
  DETAIL: "SET_CUSTOMER_TYPE_DETAIL",
  ALL: "SET_CUSTOMER_TYPE_ALL",
  POST_LOADING: "SET_CUSTOMER_TYPE_POST_LOADING",
};
/****************
 DEPT
 *****************/
export const DEPT = {
  LOADING: "SET_DEPT_LOADING",
  SUCCESS: "SET_DEPT_SUCCESS",
  FAILED: "SET_DEPT_FAILED",
  DETAIL: "SET_DEPT_DETAIL",
  POST_LOADING: "SET_DEPT_POST_LOADING",
  ALL: "SET_ALL_DEPT_SUCCESS",
};
/****************
 SUB DEPT
 *****************/
export const SUB_DEPT = {
  LOADING: "SET_SUB_DEPT_LOADING",
  SUCCESS: "SET_SUB_DEPT_SUCCESS",
  FAILED: "SET_SUB_DEPT_FAILED",
  DETAIL: "SET_SUB_DEPT_DETAIL",
  ALL: "SET_SUB_DEPT_ALL",
  POST_LOADING: "SET_SUB_DEPT_POST_LOADING",
};
/****************
 MEJA
 *****************/
export const MEJA = {
  LOADING: "SET_MEJA_LOADING",
  SUCCESS: "SET_MEJA_SUCCESS",
  FAILED: "SET_MEJA_FAILED",
  DETAIL: "SET_MEJA_DETAIL",
  ALL: "SET_MEJA_ALL",
  POST_LOADING: "SET_MEJA_POST_LOADING",
};
/****************
 AREA
 *****************/
export const AREA = {
  LOADING: "SET_AREA_LOADING",
  SUCCESS: "SET_AREA_SUCCESS",
  FAILED: "SET_AREA_FAILED",
  DETAIL: "SET_AREA_DETAIL",
  ALL: "SET_AREA_ALL",
  POST_LOADING: "SET_AREA_POST_LOADING",
};
/****************
 SUPPLIER
 *****************/
export const SUPPLIER = {
  LOADING: "SET_SUPPLIER_LOADING",
  SUCCESS: "SET_SUPPLIER_SUCCESS",
  FAILED: "SET_SUPPLIER_FAILED",
  DETAIL: "SET_SUPPLIER_DETAIL",
  ALL: "SET_SUPPLIER_ALL",
  POST_LOADING: "SET_SUPPLIER_POST_LOADING",
};
/****************
 ADJUSTMENT
 *****************/
export const ADJUSTMENT = {
  DOWNLOAD: "SET_ADJUSTMENT_DOWNLOAD",
  LOADING: "SET_ADJUSTMENT_LOADING",
  SUCCESS: "SET_ADJUSTMENT_SUCCESS",
  FAILED: "SET_ADJUSTMENT_FAILED",
  DETAIL: "SET_ADJUSTMENT_DETAIL",
  ALL: "SET_ADJUSTMENT_ALL",
  EXCEL: "SET_ADJUSTMENT_EXCEL",
  POST_LOADING: "SET_ADJUSTMENT_POST_LOADING",
  DETAIL_TRANSAKSI: "SET_ADJUSTMENT_DETAIL_TRANSAKSI",
  GET_CODE: "SET_CODE_ADJUSMENT",
};

/****************
 SCAN RESI
 *****************/
export const SCAN_RESI = {
  DOWNLOAD: "SET_SCAN_RESI_DOWNLOAD",
  LOADING: "SET_SCAN_RESI_LOADING",
  SUCCESS: "SET_OSCAN_RESI_SUCCESS",
  FAILED: "SET_SCAN_RESI_FAILED",
  REPORT_SUCCESS_EXCEL: "SET_SCAN_RESI__REPORT_SUCCESS_EXCEL",
  REPORT_SUCCESS: "SET_SCAN_RESI__REPORT_SUCCESS",
  REPORT_FAILED: "SET_SCAN_RESI__REPORT_FAILED",
  REPORT_LOADING: "SET_SCAN_RESI__REPORT_LOADING",
  REPORT_DETAIL_SUCCESS: "SET_SCAN_RESI__REPORT_DETAIL_SUCCESS",
};

/****************
 SCAN RESI REPORT
 *****************/
export const SCAN_RESI_REPORT = {
  DOWNLOAD: "SET_SCAN_RESI_REPORT_DOWNLOAD",
  SUCCESS: "SET_SCAN_RESI_REPORT_SUCCESS",
  GET_DETAIL_REPORT: "GET_DETAIL_REPORT",
  EXPORT: "SET_SCAN_RESI_REPORT_EXPORT",
};
/****************
 OPNAME
 *****************/
export const OPNAME = {
  DOWNLOAD: "SET_OPNAME_DOWNLOAD",
  LOADING: "SET_OPNAME_LOADING",
  SUCCESS: "SET_OPNAME_SUCCESS",
  SUCCESS_EXCEL: "SET_OPNAME_SUCCESS_EXCEL",
  FAILED: "SET_OPNAME_FAILED",
  DATA_POSTING: "SET_DATA_POSTING",
  FAILED_POSING: "SET_FAILED_POSTING",
};
/****************
 LOG_ACT
 *****************/
export const LOG_ACT = {
  LOADING: "SET_LOG_ACT_LOADING",
  SUCCESS: "SET_LOG_ACT_SUCCESS",
  SUCCESS_EXCEL: "SET_LOG_ACT_SUCCESS_EXCEL",
  FAILED: "SET_LOG_ACT_FAILED",
  DATA_POSTING: "SET_DATA_POSTING",
  FAILED_POSING: "SET_FAILED_POSTING",
  SUCCESS_TRX: "SET_LOG_ACT_SUCCESS_TRX",
};
/****************
 LOG_TRX
 *****************/
export const LOG_TRX = {
  LOADING: "SET_LOG_TRX_LOADING",
  SUCCESS: "SET_LOG_TRX_SUCCESS",
  SUCCESS_EXCEL: "SET_LOG_TRX_SUCCESS_EXCEL",
  FAILED: "SET_LOG_TRX_FAILED",
  DATA_POSTING: "SET_DATA_POSTING",
  FAILED_POSING: "SET_FAILED_POSTING",
  SUCCESS_TRX: "SET_LOG_TRX_SUCCESS_TRX",
};
/****************
 EXPEDISI
 *****************/
export const EXPEDISI = {
  DOWNLOAD: "SET_EXPEDISI_DOWNLOAD",
  LOADING: "SET_EXPEDISI_LOADING",
  SUCCESS: "SET_EXPEDISI_SUCCESS",
  SUCCESS_EXCEL: "SET_EXPEDISI_SUCCESS_EXCEL",
  FAILED: "SET_EXPEDISI_FAILED",
  DATA_POSTING: "SET_DATA_POSTING",
  FAILED_POSING: "SET_FAILED_POSTING",
  SUCCESS_TRX: "SET_EXPEDISI_SUCCESS_TRX",
};
/****************
 SALES
 *****************/
export const SALES = {
  LOADING: "SET_SALES_LOADING",
  SUCCESS: "SET_SALES_SUCCESS",
  FAILED: "SET_SALES_FAILED",
  DETAIL: "SET_SALES_DETAIL",
  ALL: "SET_SALES_ALL",
  POST_LOADING: "SET_SALES_POST_LOADING",
};
/****************
    DASHBOARD
*****************/
/****************
 STOCK REPORT
 *****************/
export const STOCK_REPORT = {
  DOWNLOAD: "SET_STOCK_REPORT_DOWNLOAD",
  LOADING: "SET_STOCK_REPORT_LOADING",
  LOADING_DETAIL_SATUAN: "SET_STOCK_REPORT_DETAIL_SATUAN_LOADING",
  SUCCESS: "SET_STOCK_REPORT_SUCCESS",
  SUCCESS_EXCEL: "SET_STOCK_REPORT_SUCCESS_EXCEL",
  FAILED: "SET_STOCK_REPORT_FAILED",
  DETAIL_SATUAN: "SET_STOCK_REPORT_DETAIL_SATUAN",
  DETAIL_TRANSAKSI: "SET_STOCK_REPORT_DETAIL_TRANSAKSI",
  POST_LOADING: "SET_STOCK_REPORT_POST_LOADING",
};
/****************
NILAI PERSEDIAAN
 *****************/
export const NILAI_PERSEDIAAN_REPORT = {
  DOWNLOAD: "SET_NILAI_PERSEDIAAN_REPORT_DOWNLOAD",
  LOADING: "SET_NILAI_PERSEDIAAN_REPORT_LOADING",
  LOADING_DETAIL_SATUAN: "SET_NILAI_PERSEDIAAN_REPORT_DETAIL_SATUAN_LOADING",
  SUCCESS: "SET_NILAI_PERSEDIAAN_REPORT_SUCCESS",
  SUCCESS_EXCEL: "SET_NILAI_PERSEDIAAN_REPORT_SUCCESS_EXCEL",
  FAILED: "SET_NILAI_PERSEDIAAN_REPORT_FAILED",
  DETAIL_SATUAN: "SET_NILAI_PERSEDIAAN_REPORT_DETAIL_SATUAN",
  DETAIL_TRANSAKSI: "SET_NILAI_PERSEDIAAN_REPORT_DETAIL_TRANSAKSI",
  POST_LOADING: "SET_NILAI_PERSEDIAAN_REPORT_POST_LOADING",
};
/****************
 LABA_RUGI REPORT
 *****************/
export const LABA_RUGI_REPORT = {
  LOADING: "SET_LABA_RUGI_REPORT_LOADING",
  LOADING_DETAIL_SATUAN: "SET_LABA_RUGI_REPORT_DETAIL_SATUAN_LOADING",
  SUCCESS: "SET_LABA_RUGI_REPORT_SUCCESS",
  SUCCESS_EXCEL: "SET_LABA_RUGI_REPORT_SUCCESS_EXCEL",
  FAILED: "SET_LABA_RUGI_REPORT_FAILED",
  DETAIL_SATUAN: "SET_LABA_RUGI_REPORT_DETAIL_SATUAN",
  DETAIL_TRANSAKSI: "SET_LABA_RUGI_REPORT_DETAIL_TRANSAKSI",
  POST_LOADING: "SET_LABA_RUGI_REPORT_POST_LOADING",
};
/****************
 DASHBOARD
 *****************/
export const DASHBOARD = {
  LOADING: "SET_DASHBOARD_LOADING",
  SUCCESS: "SET_DASHBOARD_SUCCESS",
  SUCCESS_NEWEST: "SET_DASHBOARD_SUCCESS_NEWEST",
  FAILED: "SET_DASHBOARD_FAILED",
  DETAIL: "SET_DASHBOARD_DETAIL",
  POST_LOADING: "SET_DASHBOARD_POST_LOADING",
};

/****************
 PURCHSE ORDER
 *****************/
export const PO = {
  DOWNLOAD_PO_SUPPLIER: "SET_PO_DOWNLOAD_PO_SUPPLIER",
  LOADING: "SET_PO_LOADING",
  LOADING_DETAIL: "SET_PO_LOADING_DETAIL",
  SUCCESS: "SET_PO_SUCCESS",
  SUCCESS_EXCEL: "SET_PO_SUCCESS_EXCEL",
  SUCCESS_BY_SUPPLIER: "SET_PO_SUCCESS_BY_SUPPLIER",
  SUCCESS_BY_SUPPLIER_EXCEL: "SET_PO_SUCCESS_BY_SUPPLIER_EXCEL",
  FAILED: "SET_PO_FAILED",
  DETAIL: "SET_PO_DETAIL",
  SUCCESS_CODE: "SET_PO_SUCCESS_CODE",
  REPORT_SUCCESS: "SET_PO_REPORT_SUCCESS",
  PO_DATA: "SET_PO_DATA_SUCCESS",
  PO_REPORT_DETAIL: "SET_PO_REPORT_DETAIL_SUCCESS",
};

/****************
 PURCHSE ORDER
 *****************/
export const RETUR_TANPA_NOTA = {
  LOADING: "SET_RETUR_TANPA_NOTA_LOADING",
  SUCCESS_CODE: "SET_RETUR_TANPA_NOTA_SUCCESS_CODE",
  GET_REPORT: "SET_RETUR_REPORT",
  GET_REPORT_DETAIL: "SET_RETUR_REPORT_DETAIL",
  GET_REPORT_EXPORT: "SET_RETUR_REPORT_EXPORT",
};

export const RECEIVE = {
  DOWNLOAD: "SET_RECEIVE_DOWNLOAD",
  LOADING: "SET_RECEIVE_LOADING",
  SUCCESS: "SET_RECEIVE_SUCCESS",
  FAILED: "SET_RECEIVE_FAILED",
  DETAIL: "SET_RECEIVE_DETAIL",
  SUCCESS_CODE: "SET_RECEIVE_SUCCESS_CODE",
  SUCCESS_PERSEN: "SET_RECEIVE_SUCCESS_PERSEN",
  SUCCESS_REPORT: "SET_RECEIVE_SUCCESS_REPORT",
  RECEIVE_DATA: "SET_RECEIVE_DATA_SUCCESS",
  RECEIVE_REPORT_DETAIL: "SET_RECEIVE_REPORT_DETAIL_SUCCESS",
  RECEIVE_REPORT_EXCEL: "SET_RECEIVE_REPORT_EXCEL_SUCCESS",
  LOADING_REPORT_DETAIL: "SET_RECEIVE_LOADING",
};

/****************
 APPROVAL MUTATION
 *****************/
export const MUTATION = {
  APPROVAL_MUTATION_SAVE: "SET_APPROVAL_MUTATION_SAVE",
  APPROVAL_MUTATION_LOADING: "SET_APPROVAL_MUTATION_LOADING",
  APPROVAL_MUTATION_LOADING_DETAIL: "SET_APPROVAL_MUTATION_LOADING_DETAIL",
  APPROVAL_MUTATION_FAILED: "SET_APPROVAL_MUTATION_FAILED",
  APPROVAL_MUTATION_DATA: "SET_APPROVAL_MUTATION_DATA_SUCCESS",
  APPROVAL_TUTATION_DATA_DETAIL: "SET_APPROVAL_MUTATION_DATA_DETAIL",
  SUCCESS: "SET_MUTATION_SUCCESS",
  SUCCESS_EXCEL: "SET_MUTATION_SUCCESS_EXCEL",
  SUCCESS_DATA: "SET_MUTATION_SUCCESS_DATA",
  DOWNLOAD: "SET_MUTATION_DOWNLOAD",
};

/****************
 APPROVAL TRANSACTION
 *****************/
export const TRANSACTION = {
  APPROVAL_TRANSACTION_DOWNLAOD: "SET_APPROVAL_TRANSACTION_DOWNLAOD",
  APPROVAL_TRANSACTION_LOADING: "SET_APPROVAL_TRANSACTION_LOADING",
  APPROVAL_TRANSACTION_FAILED: "SET_APPROVAL_TRANSACTION_FAILED",
  APPROVAL_TRANSACTION_DATA: "SET_APPROVAL_TRANSACTION_DATA_SUCCESS",
  APPROVAL_TUTATION_DATA_DETAIL: "SET_APPROVAL_TRANSACTION_DATA_DETAIL",
  SUCCESS: "SET_TRANSACTION_SUCCESS",
  SUCCESS_EXCEL: "SET_TRANSACTION_SUCCESS_EXCEL",
  SUCCESS_DATA: "SET_TRANSACTION_SUCCESS_DATA",
};
/****************
 CREATE SALES ORDER
 *****************/
export const SALES_ORDER = {
  GET_SO_DATA: "GET_SO_DATA",
  GET_DATA_DETAIL_SO: "GET_DATA_DETAIL_SO",
  GET_SO_CODE: "GET_SO_CODE",
  APPROVAL_SO_GET: "APPROVAL_SO_GET",
  LOADING_APPROVAL_SO_POST: "LOADING_APPROVAL_SO_POST",
  LOADING_CREATE_SO_POST: "LOADING_CREATE_SO_POST",
};

/****************
 SALE
 *****************/
export const SALE = {
  EDIT_TRX: "SET_SALE_EDIT_TRX",
  DOWNLOAD: "SET_SALE_DOWNLOAD",
  LOADING: "SET_SALE_LOADING",
  LOADING_DETAIL: "SET_SALE_LOADING_DETAIL",
  SUCCESS: "SET_SALE_SUCCESS",
  FAILED: "SET_SALE_FAILED",
  DETAIL: "SET_SALE_DETAIL",
  SUCCESS_CODE: "SET_SALE_SUCCESS_CODE",
  SALE_DATA: "SET_SALE_DATA_SUCCESS",
  REPORT_SUCCESS_EXCEL: "SET_SALE_REPORT_SUCCESS_EXCEL",
  REPORT_SUCCESS: "SET_SALE_REPORT_SUCCESS",
  REPORT_FAILED: "SET_SALE_REPORT_FAILED",
  REPORT_LOADING: "SET_SALE_REPORT_LOADING",
  REPORT_DETAIL_SUCCESS: "SET_SALE_REPORT_DETAIL_SUCCESS",
  SUCCESS_SALE_RETUR: "SET_SUCCESS_SALE_RETUR",
  SUCCESS_SALE_RETUR_EXCEL: "SET_SUCCESS_SALE_RETUR_EXCEL",
};

/****************
 SALE_BY_PRODUCT
 *****************/
export const SALE_BY_PRODUCT = {
  DOWNLOAD: "SET_SALE_BY_PRODUCT_DOWNLOAD",
  DOWNLOAD_DETAIL: "SET_SALE_BY_PRODUCT_DOWNLOAD_DETAIL",
  LOADING: "SET_SALE_BY_PRODUCT_LOADING",
  LOADING_DETAIL: "SET_SALE_BY_PRODUCT_LOADING_DETAIL",
  SUCCESS: "SET_SALE_BY_PRODUCT_SUCCESS",
  FAILED: "SET_SALE_BY_PRODUCT_FAILED",
  DETAIL: "SET_SALE_BY_PRODUCT_DETAIL",
  SUCCESS_CODE: "SET_SALE_BY_PRODUCT_SUCCESS_CODE",
  SALE_BY_PRODUCT_DATA: "SET_SALE_BY_PRODUCT_DATA_SUCCESS",
  REPORT_SUCCESS_EXCEL: "SET_SALE_BY_PRODUCT_REPORT_SUCCESS_EXCEL",
  REPORT_SUCCESS: "SET_SALE_BY_PRODUCT_REPORT_SUCCESS",
  REPORT_FAILED: "SET_SALE_BY_PRODUCT_REPORT_FAILED",
  REPORT_LOADING: "SET_SALE_BY_PRODUCT_REPORT_LOADING",
  REPORT_DETAIL_SUCCESS: "SET_SALE_BY_PRODUCT_REPORT_DETAIL_SUCCESS",
  REPORT_DETAIL_EXCEL: "SET_SALE_BY_PRODUCT_REPORT_DETAIL_EXCEL",
};

/****************
 SALE_BY_CUST
 *****************/
export const SALE_BY_GROUP_PRODUCT = {
  DOWNLOAD: "SET_SALE_BY_GROUP_PRODUCT_DOWNLOAD",
  SUCCESS: "SET_SALE_BY_GROUP_PRODUCT_SUCCESS",
  DETAIL: "SET_SALE_BY_GROUP_PRODUCT_DETAIL",
  EXPORT: "SET_SALE_BY_GROUP_PRODUCT_EXPORT",
};

/****************
 SALE_BY_CUST
 *****************/
export const SALE_BY_CUST = {
  DOWNLOAD: "SET_SALE_BY_CUST_DOWNLOAD",
  LOADING: "SET_SALE_BY_CUST_LOADING",
  LOADING_DETAIL: "SET_SALE_BY_CUST_LOADING_DETAIL",
  SUCCESS: "SET_SALE_BY_CUST_SUCCESS",
  FAILED: "SET_SALE_BY_CUST_FAILED",
  DETAIL: "SET_SALE_BY_CUST_DETAIL",
  SUCCESS_CODE: "SET_SALE_BY_CUST_SUCCESS_CODE",
  SALE_BY_CUST_DATA: "SET_SALE_BY_CUST_DATA_SUCCESS",
  REPORT_SUCCESS_EXCEL: "SET_SALE_BY_CUST_REPORT_SUCCESS_EXCEL",
  REPORT_SUCCESS: "SET_SALE_BY_CUST_REPORT_SUCCESS",
  REPORT_FAILED: "SET_SALE_BY_CUST_REPORT_FAILED",
  REPORT_LOADING: "SET_SALE_BY_CUST_REPORT_LOADING",
  REPORT_DETAIL_SUCCESS: "SET_SALE_BY_CUST_REPORT_DETAIL_SUCCESS",
};
/****************
 SALE_BY_SALES
 *****************/
export const SALE_BY_SALES = {
  LOADING: "SET_SALE_BY_SALES_LOADING",
  LOADING_DETAIL: "SET_SALE_BY_SALES_LOADING_DETAIL",
  SUCCESS: "SET_SALE_BY_SALES_SUCCESS",
  FAILED: "SET_SALE_BY_SALES_FAILED",
  DETAIL: "SET_SALE_BY_SALES_DETAIL",
  SUCCESS_CODE: "SET_SALE_BY_SALES_SUCCESS_CODE",
  SALE_BY_SALES_DATA: "SET_SALE_BY_SALES_DATA_SUCCESS",
  REPORT_SUCCESS_EXCEL: "SET_SALE_BY_SALES_REPORT_SUCCESS_EXCEL",
  REPORT_SUCCESS: "SET_SALE_BY_SALES_REPORT_SUCCESS",
  REPORT_FAILED: "SET_SALE_BY_SALES_REPORT_FAILED",
  REPORT_LOADING: "SET_SALE_BY_SALES_REPORT_LOADING",
  REPORT_DETAIL_SUCCESS: "SET_SALE_BY_SALES_REPORT_DETAIL_SUCCESS",
};
/****************
 SALE_OMSET
 *****************/
export const SALE_OMSET = {
  DOWNLOAD: "SET_SALE_OMSET_DOWNLOAD",
  LOADING: "SET_SALE_OMSET_LOADING",
  LOADING_DETAIL: "SET_SALE_OMSET_LOADING_DETAIL",
  SUCCESS: "SET_SALE_OMSET_SUCCESS",
  FAILED: "SET_SALE_OMSET_FAILED",
  DETAIL: "SET_SALE_OMSET_DETAIL",
  SUCCESS_CODE: "SET_SALE_OMSET_SUCCESS_CODE",
  SALE_OMSET_DATA: "SET_SALE_OMSET_DATA_SUCCESS",
  REPORT_SUCCESS_EXCEL: "SET_SALE_OMSET_REPORT_SUCCESS_EXCEL",
  REPORT_SUCCESS: "SET_SALE_OMSET_REPORT_SUCCESS",
  REPORT_FAILED: "SET_SALE_OMSET_REPORT_FAILED",
  REPORT_LOADING: "SET_SALE_OMSET_REPORT_LOADING",
  REPORT_DETAIL_SUCCESS: "SET_SALE_OMSET_REPORT_DETAIL_SUCCESS",
};
/****************
 SALE_OMSET_PERIODE
 *****************/
export const SALE_OMSET_PERIODE = {
  LOADING: "SET_SALE_OMSET_PERIODE_LOADING",
  LOADING_DETAIL: "SET_SALE_OMSET_PERIODE_LOADING_DETAIL",
  SUCCESS: "SET_SALE_OMSET_PERIODE_SUCCESS",
  FAILED: "SET_SALE_OMSET_PERIODE_FAILED",
  DETAIL: "SET_SALE_OMSET_PERIODE_DETAIL",
  SUCCESS_CODE: "SET_SALE_OMSET_PERIODE_SUCCESS_CODE",
  SALE_OMSET_PERIODE_DATA: "SET_SALE_OMSET_PERIODE_DATA_SUCCESS",
  REPORT_SUCCESS_EXCEL: "SET_SALE_OMSET_PERIODE_REPORT_SUCCESS_EXCEL",
  REPORT_SUCCESS: "SET_SALE_OMSET_PERIODE_REPORT_SUCCESS",
  REPORT_FAILED: "SET_SALE_OMSET_PERIODE_REPORT_FAILED",
  REPORT_LOADING: "SET_SALE_OMSET_PERIODE_REPORT_LOADING",
  REPORT_DETAIL_SUCCESS: "SET_SALE_OMSET_PERIODE_REPORT_DETAIL_SUCCESS",
};
/****************
 SITE SECTION
 *****************/
export const SITE = {
  LOADING: "SET_SITE_LOADING",
  SUCCESS: "SET_SITE_SUCCESS",
  SUCCESS_LIST: "SET_SITE_SUCCESS_LIST",
  SUCCESS_FOLDER: "SET_SITE_SUCCESS_FOLDER",
  SUCCESS_TABLES: "SET_SITE_SUCCESS_TABLES",
  FAILED: "SET_SITE_FAILED",
  DETAIL: "SET_SITE_DETAIL",
  SUCCESS_CHECK: "SET_SITE_SUCCESS_CHECK",
  TRIGGER_ECAPS: "SET_TRIGGER_ECAPS",
  DOWNLOAD_TXT: "SET_DOWNLOAD_TXT",
  TRIGGER_MOBILE_ECAPS: "SET_TRIGGER_MOBILE_ECAPS",
};

/****************
 INVENTORY SECTION
 *****************/
export const DN = {
  DOWNLOAD: "SET_DN_DOWNLOAD",
  LOADING: "SET_DN_LOADING",
  SUCCESS: "SET_DN_SUCCESS",
  FAILED: "SET_DN_FAILED",
  DETAIL: "SET_DN_DETAIL",
  SUCCESS_CODE: "SET_DN_SUCCESS_CODE",
  REPORT_SUCCESS: "SET_DN_REPORT_SUCCESS",
  REPORT_SUCCESS_EXCEL: "SET_DN_REPORT_SUCCESS_EXCEL",
  DN_DATA: "SET_DN_DATA_SUCCESS",
  DN_DETAIL: "SET_DN_DETAIL_SUCCESS",
};

export const ALOKASI = {
  DOWNLOAD: "SET_ALOKASI_DOWNLOAD",
  LOADING: "SET_ALOKASI_LOADING",
  LOADING_DETAIL: "SET_STOCK_REPORT_DETAIL_LOADING",
  SUCCESS: "SET_ALOKASI_SUCCESS",
  SUCCESS_EXCEL: "SET_ALOKASI_SUCCESS_EXCEL",
  FAILED: "SET_ALOKASI_FAILED",
  DETAIL: "SET_ALOKASI_DETAIL",
  SUCCESS_CODE: "SET_ALOKASI_SUCCESS_CODE",
  REPORT_SUCCESS: "SET_ALOKASI_REPORT_SUCCESS",
  ALOKASI_DATA: "SET_ALOKASI_DATA_SUCCESS",
};

export const CLOSING = {
  LOADING: "SET_CLOSING_LOADING",
  LOADING_DETAIL: "SET_STOCK_REPORT_DETAIL_LOADING",
  SUCCESS: "SET_CLOSING_SUCCESS",
  FAILED: "SET_CLOSING_FAILED",
  DETAIL: "SET_CLOSING_DETAIL",
  SUCCESS_CODE: "SET_CLOSING_SUCCESS_CODE",
  REPORT_SUCCESS: "SET_CLOSING_REPORT_SUCCESS",
  CLOSING_DATA: "SET_CLOSING_DATA_SUCCESS",
};

/****************
 PIUTANG
 *****************/
export const PIUTANG = {
  DOWNLOAD: "SET_PIUTANG_DOWNLOAD",
  LOADING: "SET_PIUTANG_LOADING",
  SUCCESS: "SET_PIUTANG_SUCCESS",
  FAILED: "SET_PIUTANG_FAILED",
  SUCCESS_CODE: "SET_PIUTANG_SUCCESS_CODE",
  LOADING_POST: "SET_PIUTANG_LOADING_POST",
  SUCCESS_REPORT: "SET_PIUTANG_SUCCESS_REPORT",
  SUCCESS_REPORT_DETAIL: "SET_PIUTANG_SUCCESS_REPORT_DETAIL",
  SUCCESS_KARTU_PIUTANG: "SET_PIUTANG_SUCCESS_KARTU_PIUTANG",
  SUCCESS_EXCEL: "SET_PIUTANG_SUCCESS_EXCEL",
};

/****************
 HUTANG
 *****************/
export const HUTANG = {
  DOWNLOAD: "SET_HUTANG_DOWNLOAD",
  LOADING: "SET_HUTANG_LOADING",
  SUCCESS: "SET_HUTANG_SUCCESS",
  FAILED: "SET_HUTANG_FAILED",
  SUCCESS_CODE: "SET_HUTANG_SUCCESS_CODE",
  LOADING_POST: "SET_HUTANG_LOADING_POST",
  SUCCESS_REPORT: "SET_HUTANG_SUCCESS_REPORT",
  SUCCESS_REPORT_DETAIL: "SET_HUTANG_SUCCESS_REPORT_DETAIL",
  SUCCESS_KARTU_HUTANG: "SET_HUTANG_SUCCESS_KARTU_PIUTANG",
  SUCCESS_EXCEL: "SET_HUTANG_SUCCESS_EXCEL",
};

/****************
 MUTASI JUAL BELI
 *****************/
export const MUTASI_JUAL_BELI = {
  LOADING: "SET_MUTASI_JUAL_BELI_LOADING",
  SUCCESS_DATA_BAYAR: "SET_BAYAR_MUTASI_JUAL_BELI_SUCCESS_DATA",
  FAILED_DATA_BAYAR: "SET_BAYAR_MUTASI_JUAL_BELI_FAILED_DATA",
  SUCCESS_CODE_BAYAR: "SET_BAYAR_MUTASI_JUAL_BELI_SUCCESS_CODE",
  SUCCESS_KARTU: "SET_BAYAR_MUTASI_JUAL_BELI_SUCCESS_KARTU",
};

/****************
 PRODUKSI
 *****************/
export const PRODUKSI = {
  DOWNLOAD: "SET_PRODUKSI_DOWNLOAD",
  LOADING: "SET_PRODUKSI_LOADING",
  SUCCESS_BAHAN: "SET_PRODUKSI_SUCCESS_BAHAN",
  SUCCESS_PAKET: "SET_PRODUKSI_SUCCESS_PAKET",
  FAILED: "SET_PRODUKSI_FAILED",
  DETAIL: "SET_PRODUKSI_DETAIL",
  GET_CODE: "SET_CODE_PRODUKSI",
  SUCCESS: "SET_PRODUCTION_SUCCESS",
  SUCCESS_EXCEL: "SET_PRODUCTION_SUCCESS_EXCEL",
  SUCCESS_DATA: "SET_PRODUCTION_SUCCESS_DATA",
};

/****************
 PACKING
 *****************/
export const PACKING = {
  DOWNLOAD: "SET_PACKING_DOWNLOAD",
  LOADING: "SET_PACKING_LOADING",
  GET_BARANG_SUCCESS: "SET_BARANG_PACKING_SUCCESS",
  GET_BARANG_FAILED: "SET_BARANG_PACKING_FAILED",
  GET_CODE: "SET_CODE_PACKING",
  GET_BARANG_SUCCESS_TRX: "SET_BARANG_PACKING_SUCCESS_TRX",
  SUCCESS: "SET_PACKING_SUCCESS_DATA",
  SUCCESS_EXCEL: "SET_PACKING_SUCCESS_EXCEL",
  SUCCESS_DETAIL: "SET_PACKING_SUCCESS_DETAIL",
};
export const PRINTER = {
  GET_PRINTER_SUCCESS: "SET_PRINTER_SUCCESS",
  TEST_PRINTER_SUCCESS: "TEST_PRINTER_SUCCESS",
  GET_PRINTER_FAILED: "SET_PRINTER_FAILED",
};

export const NOTIF = {
  GET_NOTIF: "GET_NOTIF",
  LODAING_GET_NOTIF: "LODAING_GET_NOTIF",
};
/****************
 RESET PROPS
 *****************/
export const RESET_PROPS = {
  status: "",
  msg: "",
  result: {},
};
/****************
 RESET PROPS
 *****************/
export const RESET_PROPS_ARR = {
  status: "",
  msg: "",
  result: [],
};
