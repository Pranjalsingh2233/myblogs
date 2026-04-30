export const formatDate = (date) => {
  return new Date(date).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
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
