import NameImage, {
  Menu, MenuFrame, MenuImage, Name,
} from '../Common/Common.style';
import USER from '../../assets/images/user.svg';
import EDIT from '../../assets/images/edit.svg';
import EDITGREY from '../../assets/images/edit-grey.svg';
import LIST from '../../assets/images/list.svg';
import LISTGREY from '../../assets/images/list-grey.svg';
import LOGOUT from '../../assets/images/logout.svg';
import ListLicenseProps from '../../@types/ListLicenseTypes';
import ListLicenseFrame, {
  Bottom, Middle, Top, TopLeft, TopRight,
} from './ListLicense.style';
import { DEEP_BLUE, GREY } from '../../global/global-color';
import TableFrame, {
  Page, PageFrame, ReIssueButton, TableField, TableRow,
} from '../Table/Table.style';
import cutTextIfLong from '../../utils/cutString';
import LicenseModalContainer from '../Modal/LicenseModal/LicenseModalContainer';

const ListLicensePresenter: React.FC<ListLicenseProps> = ({
  requestMenuClicked, listMenuClicked, title, paging, pageNumber, tableData,
  // reIssue,
  logout, name, currentPage, changePage, checkJson, isOpen,
  closeModal, modalText, redirectingForReissue,
}) => (
  <>
    <ListLicenseFrame>
      <Top>
        <TopLeft>
          <NameImage src={USER} />
          <Name>{name}</Name>
        </TopLeft>
        <TopRight>
          <MenuFrame to='/request-license'>
            <MenuImage src={requestMenuClicked ? EDIT : EDITGREY} />
            <Menu color={requestMenuClicked ? DEEP_BLUE : GREY}>라이선스 발급 신청</Menu>
          </MenuFrame>
          <MenuFrame to='/list-license'>
            <MenuImage src={listMenuClicked ? LIST : LISTGREY} />
            <Menu color={listMenuClicked ? DEEP_BLUE : GREY}>라이선스 발급 목록</Menu>
          </MenuFrame>
          <MenuFrame to='/' onClick={logout}>
            <MenuImage src={LOGOUT}/>
            <Menu color={GREY}>로그아웃</Menu>
          </MenuFrame>
        </TopRight>
      </Top>
      <Middle>
        <TableFrame>
          <TableRow isTitle={'true'}>
            {title?.map((value, index) => (<TableField key={index}>{value}</TableField>))}
          </TableRow>
          {tableData?.map((v, i) => (
            <TableRow key={i} onClick={() => checkJson(v)}>
              <TableField>{v.name}</TableField>
              <TableField>{v.email?.slice(0, -11)}</TableField>
              <TableField>{cutTextIfLong(v.agent, 20)}</TableField>
              <TableField fontSize={15}>{v.product}</TableField>
              <TableField>{v.allowedNumber}</TableField>
              <TableField fontSize={13}>{v.activatedDate?.slice(0, 10)}</TableField>
              <TableField fontSize={13}>{v.expireDate?.slice(0, 10)}</TableField>
              <TableField>{v.type}</TableField>
              <TableField>{v.version}</TableField>
              <TableField>{cutTextIfLong(v.note, 30)}</TableField>
              <TableField>
                {v.id === undefined
                  ? <></>
                  : <ReIssueButton onClick={() => redirectingForReissue(v)}>재발급</ReIssueButton>}
              </TableField>
            </TableRow>
          ))}
        </TableFrame>
      </Middle>
      <Bottom>
        <PageFrame>
          {paging && paging.first > 5
            ? <Page onClick={() => changePage(paging.prev, name)}> &lt; </Page>
            : <></>}
          {paging && pageNumber && pageNumber.map((value, index) => (
            <Page
              key={index}
              currentPage={currentPage === value ? 'true' : 'false'}
              onClick={() => changePage(value, name)}
            >
              {value}
            </Page>
          ))}
          {paging && paging.next > 5 && paging.next < paging.totalPage
            ? <Page onClick={() => changePage(paging.next, name)}> &gt; </Page>
            : <></>}
        </PageFrame>
      </Bottom>
    </ListLicenseFrame>

    <LicenseModalContainer isOpen={isOpen} onRequestClose={closeModal} text={modalText} />
  </>
);

export default ListLicensePresenter;
