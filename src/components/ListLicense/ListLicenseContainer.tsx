import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { saveAs } from 'file-saver';
import pagination, { PagingType } from '../../utils/pagination';
import ListLicensePresenter from './ListLicensePresenter';
import title_data from '../../mock/list-table-title';
import useUserInfoContext from '../../global/UserInfoContext';
import listApi from '../../api/listApi';
import mockData from '../../mock/license-list.json';
import reissueApi from '../../api/reissue';
import createLicense from '../../utils/createLicense';

const ListLicenseContainer = () => {
  const [requestMenuClicked, setRequestMenuClicked] = useState<boolean>(false);
  const [listMenuClicked, setListMenuClicked] = useState<boolean>(true);
  const title: Array<String> = title_data;
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [paging, setPaging] = useState<PagingType>();
  const [pageNumber, setPageNumber] = useState<Array<number>>([]);
  const [listData, setListData] = useState(mockData);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [modalText, setModalText] = useState<String>('');
  const { name, setName, setEmail } = useUserInfoContext();
  const navigate = useNavigate();

  const reIssue = (index: number) => {
    reissueApi(listData.data[index]).then((response) => {
      const json = JSON.stringify(response.data, null, '\t');
      const data = new File([json], 'license.json', { type: 'application/json;charset=utf-8' });
      saveAs(data);
    });
  };

  const redirectingForReissue = (data: any) => {
    navigate('/request-license', { state: data });
  };

  const logout = () => {
    setName('');
    setEmail('');
    localStorage.clear();
    setCurrentPage(1);
  };

  const pageList = (data?: PagingType) => {
    let tempNumber: Array<number> = [];
    if (data) {
      for (let i = data.first; i <= data.last; i += 1) {
        tempNumber = [...tempNumber, i];
      }
      setPageNumber([...tempNumber]);
    }
  };

  const changePage = (page: number, userName: String) => {
    listApi(userName, page).then(({ data }) => {
      // console.log(data);
      setCurrentPage(page);
      setPaging(pagination(data.totalData, page));
      // 표 5칸 채우기
      if (data.data.length !== 5) {
        while (data.data.length !== 5) {
          data.data.push({});
        }
      }
      setListData(data);
      pageList(pagination(data.totalData, page));
    });
  };

  const checkJson = (jsonData: any) => {
    setIsOpen(true);
    setModalText(createLicense(jsonData));
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    setRequestMenuClicked(false);
    setListMenuClicked(true);

    const tempName: any = localStorage.getItem('name');
    const tempEmail: any = localStorage.getItem('email');

    if (name === '' && localStorage.length >= 2) {
      setName(tempName);
      setEmail(tempEmail);
      changePage(currentPage, tempName);
    } else {
      changePage(currentPage, name);
    }
  }, []);

  return (
    <ListLicensePresenter
      requestMenuClicked={requestMenuClicked}
      listMenuClicked={listMenuClicked}
      title={title}
      paging={paging}
      pageNumber={pageNumber}
      tableData={listData.data}
      reIssue={reIssue}
      logout={logout}
      name={name}
      changePage={changePage}
      currentPage={currentPage}
      checkJson={checkJson}
      isOpen={isOpen}
      closeModal={closeModal}
      modalText={modalText}
      redirectingForReissue={redirectingForReissue}
    />
  );
};

export default ListLicenseContainer;
