export const convertMaskPercent = (value: string) => {
  return (parseInt(value.replace(/[^0-9]/g, "")) * 0.01).toLocaleString(
    "pt-BR",
    { style: "percent" }
  );
};
