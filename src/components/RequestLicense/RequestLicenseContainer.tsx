import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { saveAs } from 'file-saver';
import { RequestDataProps } from '../../@types/RequestLicenseTypes';
import RequestLicensePresenter from './RequestLicensePresenter';
import useUserInfoContext from '../../global/UserInfoContext';
import requestApi from '../../api/requestApi';
import dts from '../../utils/dateToString';

const RequestLicenseContainer = () => {
  const [requestMenuClicked, setRequestMenuClicked] = useState<boolean>(true);
  const [listMenuClicked, setListMenuClicked] = useState<boolean>(false);
  const [requestData, setRequestData] = useState<RequestDataProps>({});
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [productClicked, setProductClicked] = useState<boolean>(false);
  const [product, setProduct] = useState<String>();
  const [typeClicked, setTypeClicked] = useState<boolean>(false);
  const [type, setType] = useState<String>();
  const [versionClicked, setVersionClicked] = useState<boolean>(false);
  const [version, setVersion] = useState<String>();
  const [date, setDate] = useState<Date>(new Date());
  const location = useLocation();
  const {
    name, email, setName, setEmail,
  } = useUserInfoContext();

  const handleValue = (e: any) => {
    setRequestData({
      ...requestData, [e.target.name]: e.target.value,
    });
  };

  const handleDate = (getDate: Date) => {
    setDate(getDate);
    setRequestData({
      ...requestData, expire_date: dts(getDate),
    });
  };

  const handleSelectValue = (target: HTMLDivElement, kind: string) => {
    switch (kind) {
      case 'product':
        setProduct(target.innerHTML);
        break;
      case 'type':
        setType(target.innerHTML);
        break;
      case 'version':
        setVersion(target.innerHTML);
        break;
      default:
        break;
    }
    setRequestData({
      ...requestData, [kind]: target.innerHTML,
    });
  };

  const onSubmit = () => {
    if (requestData.agent && requestData.allowed_number && requestData.expire_date
        && requestData.product && requestData.type && requestData.version && email.length > 11) {
      console.log(requestData);
      requestApi(requestData).then((response) => {
        const json = JSON.stringify(response.data, null, '\t');
        const data = new File([json], 'license.json', { type: 'application/json;charset=utf-8' });
        saveAs(data);
      });
    } else {
      setIsOpen(true);
    }
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const logout = () => {
    setName('');
    setEmail('');
    localStorage.clear();
    setRequestData({});
  };

  const selectBoxClick = (whatBox: String) => {
    switch (whatBox) {
      case 'product':
        setProductClicked(!productClicked);
        break;
      case 'type':
        setTypeClicked(!typeClicked);
        break;
      case 'version':
        setVersionClicked(!versionClicked);
        break;
      default:
        break;
    }
  };

  const handleEmail = (e: any) => {
    setEmail(`${e.target.value}@sgacorp.kr`);
    setRequestData({
      ...requestData, email: `${e.target.value}@sgacorp.kr`, name,
    });
  };

  useEffect(() => {
    setRequestMenuClicked(true);
    setListMenuClicked(false);

    const tempName: any = localStorage.getItem('name');
    const tempEmail: any = localStorage.getItem('email');

    if (name === '' && localStorage.length >= 2) {
      setName(tempName);
      setEmail(tempEmail);
      setRequestData({
        ...requestData, name: tempName, email: tempEmail, note: '',
      });
    } else {
      setRequestData({
        ...requestData, name, email, note: '',
      });
    }

    if (location.state) {
      const temp: any = location.state;

      setRequestData({
        ...requestData,
        name,
        email,
        agent: temp.agent,
        product: temp.product,
        allowed_number: temp.allowedNumber,
        expire_date: temp.expireDate.slice(0, 10),
        type: temp.type,
        version: temp.version,
        note: '',
      });
      setProduct(temp.product);
      setType(temp.type);
      setVersion(temp.version);
      setDate(new Date(temp.expireDate.slice(0, 10)));
    } else {
      setProduct('enterprisecastle');
      setType('regular');
      setVersion('1.0.0.2');
      const today = new Date();
      const year = today.getFullYear() + 10;
      const month = today.getMonth();
      const day = today.getDate();
      setDate(new Date(year, month, day));

      setEmail(tempEmail);
      setName(tempName);

      setRequestData({
        ...requestData,
        name: tempName,
        email: tempEmail,
        product: 'enterprisecastle',
        allowed_number: '1000',
        expire_date: dts(new Date(year, month, day)),
        type: 'regular',
        version: '1.0.0.2',
        note: '',
      });
    }
  }, []);

  return (
    <RequestLicensePresenter
      requestMenuClicked={requestMenuClicked}
      listMenuClicked={listMenuClicked}
      handleValue={handleValue}
      onSubmit={onSubmit}
      closeModal={closeModal}
      isOpen={isOpen}
      logout={logout}
      name={name}
      selectBoxClick={selectBoxClick}
      productClicked={productClicked}
      typeClicked={typeClicked}
      versionClicked={versionClicked}
      handleSelectValue={handleSelectValue}
      product={product}
      type={type}
      version={version}
      date={date}
      handleDate={handleDate}
      requestData={requestData}
      email={email}
      handleEmail={handleEmail}
    />
  );
};

export default RequestLicenseContainer;
