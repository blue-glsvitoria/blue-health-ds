interface IMaskProps {
  type: MasksType;
  data: string;
}

export type MasksType =
  | "cpf"
  | "cnpj"
  | "phone"
  | "date"
  | "cep"
  | "currency"
  | "code";

export const masks = ({ type, data }: IMaskProps) => {
  switch (type) {
    case "cpf":
      return data
        .replace(/\D/g, "")
        .replace(/(\d{3})(\d)/, "$1.$2")
        .replace(/(\d{3})(\d)/, "$1.$2")
        .replace(/(\d{3})(\d{1,2})$/, "$1-$2");
    case "cnpj":
      return data
        .replace(/\D/g, "")
        .replace(/(\d{2})(\d)/, "$1.$2")
        .replace(/(\d{3})(\d)/, "$1.$2")
        .replace(/(\d{3})(\d)/, "$1/$2")
        .replace(/(\d{4})(\d)/, "$1-$2")
        .replace(/(-\d{2})\d+?$/, "$1");
    case "cep":
      return data
        .replace(/\D/g, "")
        .replace(/(\d{5})(\d)/, "$1-$2")
        .replace(/(-\d{3})\d+?$/, "$1");
    case "phone":
      return data
        .replace(/\D/g, "")
        .replace(/(\d{2})(\d)/, "($1) $2")
        .replace(/(\d{5})(\d)/, "$1-$2")
        .replace(/(-\d{4})(\d)/, "$1");
    case "date":
      return data
        .replace(/\D/g, "")
        .replace(/(\d{2})(\d)/, "$1/$2")
        .replace(/(\d{2})(\d)/, "$1/$2")
        .replace(/(\d{4})\d+?$/, "$1");
    case "currency":
      return data
        .replace(/\D/g, "")
        .replace(/(\d{1,})(\d{2})$/, "$1,$2")
        .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
    case "code":
      return data.replace(/\D/g, "").slice(0, 6);
    default:
      return data;
  }
};
