import { logging, PersistentMap, PersistentVector } from "near-sdk-as";
import { DayFees, Certificates } from "./model";

export function getStudentPayFeesDate(studentId: string): DayFees | null {
  const data = new PersistentMap<string, PersistentVector<DayFees>>("mD");
  return data.get(studentId)![0];
}
export function getStudentCertificate(studentId: string): PersistentVector<Certificates | null> | null {
  const data = new PersistentMap<string, PersistentVector<Certificates | null>>(
    "mC"
  );
  return data.get(studentId);
}
export function createStudentID(studentId: string, dayFees: DayFees[]): bool {
  const data = new PersistentVector<DayFees>("vD");
    for (let index = 0; index < dayFees.length; index++) {
      data.push(dayFees[index]);
    }
    const studentData = new PersistentMap<string, PersistentVector<DayFees>>(
      "mD"
    );
    studentData.set(studentId, data);
    // setStudentCrtificateAsNull(studentId);
    return true;
  // try {
  //   const data = new PersistentVector<DayFees>("m");
  //   for (let index = 0; index < dayFees.length; index++) {
  //     data.push(dayFees[index]);
  //   }
  //   const studentData = new PersistentMap<string, PersistentVector<DayFees>>(
  //     "m"
  //   );
  //   studentData.set(studentId, data);
  //   // setStudentCrtificateAsNull(studentId);
  //   return true;
  // } catch (error) {
  //   logging.log(`error while creating studentID in contract ${error}`);
  //   return false;
  // }
}

export function uploadStudentCertificate(studentId:string,certificate: Certificates): bool {
  const studentCertificates = new PersistentMap<string,PersistentVector<Certificates | null>>('mC');
  const data = studentCertificates.getSome(studentId);
  if(data !==null){
    data.push(certificate);
  }
  studentCertificates.set(studentId, data!);
  return true;
  
  // try {
  // } catch (error) {
  //   logging.log(`error while uploading certificate in contract ${error}`);
  //   return false;
  // }
}
// export function test(studentId:string):string {
//   return "hello"
// }




// @nearBindgen
// export class Contract {
//   private studentData: PersistentMap<string, PersistentVector<DayFees>>;
//   private studentCertificates: PersistentMap<
//     string,
//     PersistentVector<Certificates | null>
//   >;

//   getStudentPayFeesDate(studentID: string): DayFees | null {
//     return this.studentData.get(studentID)![0];
//   }
//   getStudentCertificate(
//     studentID: string
//   ): PersistentVector<Certificates | null> | null {
//     return this.studentCertificates.get(studentID);
//   }

//   @mutateState()
//   createStudentID(studentID: string, dayFees: DayFees[]): bool {
//     try {
//       const data = new PersistentVector<DayFees>(studentID);
//       for (let index = 0; index < dayFees.length; index++) {
//         data.push(dayFees[index]);
//       }
//       this.studentData.set(studentID, data);
//       this.setStudentCrtificateAsNull(studentID);
//       return true;
//     } catch (error) {
//       logging.log(`error while creating studentID in contract ${error}`);
//       return false;
//     }
//   }
//   @mutateState()
//   uploadStudentCertificate(studentID: string, certificate: Certificates): bool {
//     try {
//       const data = this.studentCertificates.get(studentID);
//       data?.push(certificate);
//       this.studentCertificates.set(studentID, data!);
//       return true;
//     } catch (error) {
//       logging.log(`error while uploading certificate in contract ${error}`);
//       return false;
//     }
//   }
//   @mutateState()
//   setStudentCrtificateAsNull(studentID: string) {
//     const temp = new PersistentVector<Certificates | null>(studentID);
//     temp.push(null);
//     this.studentCertificates.set(studentID, temp);
//   }
// }
