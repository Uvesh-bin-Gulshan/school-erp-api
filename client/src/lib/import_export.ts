import * as XLSX from "xlsx";
import { getAdmissionList } from "./services";

export const exportToExcel = (
  data: any,
  filename = "data",
  sheetName = "Sheet1"
) => {
  const plainData = data.map((item: any) => ({ ...item }));

  // Convert the data to a worksheet
  const worksheet = XLSX.utils.json_to_sheet(plainData);
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, sheetName);
  XLSX.writeFile(workbook, `${filename}.xlsx`);
};

export const exportAdmissions = async () => {
  const admissionsData = await getAdmissionList();
  exportToExcel(admissionsData, "admission_list", "Admissions");
};
