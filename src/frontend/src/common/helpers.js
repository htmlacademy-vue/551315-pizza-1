export const normalizeDataItem = (generalItem, extraPropsArr, mapByKey) => {
  const extraProps = extraPropsArr.find(
    (item) => item[mapByKey] === generalItem[mapByKey]
  );
  if (extraProps) {
    return {
      ...generalItem,
      ...extraProps,
    };
  }
  return generalItem;
};
