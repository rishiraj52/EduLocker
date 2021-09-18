import { logging, PersistentMap, PersistentVector } from "near-sdk-as";
import { DayFees, Certificates } from "./model";

@nearBindgen
export class Contract {
  studentData: PersistentMap<string, PersistentVector<DayFees>>;
  studentCertificates: PersistentMap<
    string,
    PersistentVector<Certificates | null>
  >;

  getStudentPayFeesDate(studentID: string): DayFees | null {
    return this.studentData.get(studentID)![0];
  }
  getStudentCertificate(
    studentID: string
  ): PersistentVector<Certificates | null> | null {
    return this.studentCertificates.get(studentID);
  }

  @mutateState()
  createStudentID(studentID: string, dayFees: DayFees[]): bool {
    try {
      const data = new PersistentVector<DayFees>(studentID);
      for (let index = 0; index < dayFees.length; index++) {
        data.push(dayFees[index]);
      }
      this.studentData.set(studentID, data);
      this.setStudentCrtificateAsNull(studentID);
      return true;
    } catch (error) {
      logging.log(`error while creating studentID in contract ${error}`);
      return false;
    }
  }
  @mutateState()
  uploadStudentCertificate(studentID: string, certificate: Certificates): bool {
    try {
      const data = this.studentCertificates.get(studentID);
      data?.push(certificate);
      this.studentCertificates.set(studentID, data!);
      return true;
    } catch (error) {
      logging.log(`error while uploading certificate in contract ${error}`);
      return false;
    }
  }
  @mutateState()
  setStudentCrtificateAsNull(studentID: string) {
    const temp = new PersistentVector<Certificates | null>(studentID);
    temp.push(null);
    this.studentCertificates.set(studentID, temp);
  }
}
