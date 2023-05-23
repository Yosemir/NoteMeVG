export class NotasI {
    Curso: string;
    TECP1: string;
    TECP2: string;
    TECP3: string;
    TECP4: string;
    TECP5: string;
    TECP6: string;
    TECP7: string;

    [key: string]: any;

    constructor(nota: NotasI) {
      this.Curso = nota.Curso;
      this.TECP1 = nota.TECP1;
      this.TECP2 = nota.TECP2;
      this.TECP3 = nota.TECP3;
      this.TECP4 = nota.TECP4;
      this.TECP5 = nota.TECP5;
      this.TECP6 = nota.TECP6;
      this.TECP7 = nota.TECP7;
    }

  }
