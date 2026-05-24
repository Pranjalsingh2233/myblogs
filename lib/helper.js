export const formatDate = (date) => {
  return new Date(date).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
};

export const excerptLength = (text, maxLength) => {
  if (!text) return "";
  return text.length > maxLength ? text.substring(0, maxLength) + "..." : text;
};

export const components = {
  types: {
    image: ({ value }) => {
      return (
        <img
          src={value.asset.url}
          alt={value.alt || ""}
          className="rounded-lg my-6 w-full"
        />
      );
    },
  },
};
