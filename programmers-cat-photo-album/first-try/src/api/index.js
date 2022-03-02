export const getRootNodesFromServer = async () => {
  const result = await fetch(
    "https://zl3m4qq0l9.execute-api.ap-northeast-2.amazonaws.com/dev",
    {
      method: "GET",
    }
  );
  return result.json();
};

export const getFolderNodesFromServer = async (nodeId) => {
  const result = await fetch(
    `https://zl3m4qq0l9.execute-api.ap-northeast-2.amazonaws.com/dev/${nodeId}`,
    {
      method: "GET",
    }
  );
  return result.json();
};
