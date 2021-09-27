import React from 'react';

//hooks
import useLocalStorage from '../hooks/useLocalStorage';

function Documents() {
  renderDocumentPage;
  return (
    <div>
      <h1>Documents</h1>
    </div>
  );
}
const renderDocumentPage = () => {
  const [priviousPage, setPriviousPage] = useLocalStorage('previousPage', 0);
  setPriviousPage(props.whitePaper.page);
};

export default Documents;
