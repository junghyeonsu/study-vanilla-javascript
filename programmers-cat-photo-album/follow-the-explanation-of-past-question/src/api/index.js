const API_END_POINT = 'https://zl3m4qq0l9.execute-api.ap-northeast-2.amazonaws.com/dev';

export const getNodesFromServer = async nodeId => {
  const requestURL = `${API_END_POINT}${nodeId ? '/' + nodeId : ''}`;

  try {
    const response = await fetch(requestURL, { method: 'GET' });

    if (!response.ok) throw new Error('서버의 상태가 이상합니다.');

    return await response.json();
  } catch (error) {
    throw new Error(`무언가 잘못됐군요? ${error.message}`);
  }
};
