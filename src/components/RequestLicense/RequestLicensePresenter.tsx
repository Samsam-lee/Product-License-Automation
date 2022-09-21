import { ko } from 'date-fns/esm/locale';
import RequestLicenseFrame, {
  Bottom, BottomButton, EmailInput, Middle, MiddleImage, MiddleLeft,
  MiddleLeftFrame, MiddleRight, MiddleTitle, SGAEmail, Top, TopLeft, TopRight,
} from './RequestLicense.style';
import USER from '../../assets/images/user.svg';
import EDIT from '../../assets/images/edit.svg';
import EDITGREY from '../../assets/images/edit-grey.svg';
import LIST from '../../assets/images/list.svg';
import LISTGREY from '../../assets/images/list-grey.svg';
import LOGOUT from '../../assets/images/logout.svg';
import LICENSE from '../../assets/images/license.svg';
import ARROW_DOWN from '../../assets/images/arrow_down.svg';
import NameImage, {
  Box, ContentsText, InputBox, Menu, MenuFrame, MenuImage, Name, SelectBox,
  SelectBoxArrow, SelectBoxContents, SelectBoxVisualBox,
} from '../Common/Common.style';
import { PRODUCT, TYPE, VERSION } from '../../global/global-conf';
import RequestLicenseProps from '../../@types/RequestLicenseTypes';
import { DEEP_BLUE, GREY } from '../../global/global-color';
import RequestModalContainer from '../Modal/RequestModal/RequestModalContainer';
import 'react-datepicker/dist/react-datepicker.css';
import CustomDatePicker from '../DatePicker/DatePicker.style';

const RequestLicensePresenter: React.FC<RequestLicenseProps> = ({
  requestMenuClicked, listMenuClicked, handleValue, onSubmit, isOpen,
  closeModal, logout, name, selectBoxClick, productClicked, typeClicked, versionClicked,
  product, handleSelectValue, type, version, date, handleDate, requestData, email, handleEmail,
}) => (
  <>
    <RequestLicenseFrame>
      <Top>
        <TopLeft>
          <NameImage src={USER} />
          <Name>{name}</Name>
          {localStorage.getItem('isAdmin')
            ? <>
              <EmailInput
                placeholder={email.slice(0, -11)}
                onChange={handleEmail}
                size={email.slice(0, -11).length} />
              <SGAEmail>@sgacorp.kr</SGAEmail>
            </>
            : <></>
          }

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
            <MenuImage src={LOGOUT} />
            <Menu color={GREY}>로그아웃</Menu>
          </MenuFrame>
        </TopRight>
      </Top>

      <Middle>
        <MiddleLeft>
          <MiddleLeftFrame>
            <MiddleTitle>고객사</MiddleTitle>
            <Box>
              <InputBox onChange={handleValue} name='agent' defaultValue={requestData.agent || undefined} />
            </Box>
          </MiddleLeftFrame>
          <MiddleLeftFrame>
            <MiddleTitle>제품</MiddleTitle>
            <Box isClickBox={true} onClick={() => selectBoxClick('product')}>
              <SelectBoxVisualBox>
                <div>{product}</div>
                <SelectBoxArrow src={ARROW_DOWN}/>
              </SelectBoxVisualBox>
              <SelectBox isClick={productClicked}>
                {PRODUCT.map((value, index) => (
                  <SelectBoxContents key={index} onClick={
                    (e) => handleSelectValue(e.target as HTMLDivElement, 'product')
                  } isClick={productClicked} line={index === 0}>
                    <ContentsText>{value}</ContentsText>
                  </SelectBoxContents>
                ))}
              </SelectBox>
            </Box>
          </MiddleLeftFrame>
          <MiddleLeftFrame>
            <MiddleTitle>허용 에이전트</MiddleTitle>
            <Box>
              <InputBox onChange={handleValue} name='allowed_number' type='number' min='1' defaultValue={requestData.allowed_number || undefined} />
            </Box>
          </MiddleLeftFrame>
          <MiddleLeftFrame>
            <MiddleTitle>라이선스 기한</MiddleTitle>
            <Box>
              <CustomDatePicker selected={date} onChange={(d) => handleDate(d)} locale={ko} dateFormat='yyyy-MM-dd' />
            </Box>
          </MiddleLeftFrame>
          <MiddleLeftFrame>
            <MiddleTitle>타입</MiddleTitle>
            <Box isClickBox={true} onClick={() => selectBoxClick('type')}>
              <SelectBoxVisualBox>
                <div>{type}</div>
                <SelectBoxArrow src={ARROW_DOWN}/>
              </SelectBoxVisualBox>
              <SelectBox isClick={typeClicked}>
              {TYPE.map((value, index) => (
                <SelectBoxContents key={index} onClick={
                  (e) => handleSelectValue(e.target as HTMLDivElement, 'type')
                } isClick={productClicked} line={index === 0}>
                  <ContentsText>{value}</ContentsText>
                </SelectBoxContents>
              ))}
              </SelectBox>
            </Box>
          </MiddleLeftFrame>
          <MiddleLeftFrame>
            <MiddleTitle>버전</MiddleTitle>
            <Box isClickBox={true} onClick={() => selectBoxClick('version')}>
              <SelectBoxVisualBox>
                <div>{version}</div>
                <SelectBoxArrow src={ARROW_DOWN}/>
              </SelectBoxVisualBox>
              <SelectBox isClick={versionClicked}>
              {VERSION.map((value, index) => (
                <SelectBoxContents key={index} onClick={
                  (e) => handleSelectValue(e.target as HTMLDivElement, 'version')
                } isClick={productClicked} line={index === 0}>
                  <ContentsText>{value}</ContentsText>
                </SelectBoxContents>
              ))}
              </SelectBox>
            </Box>
          </MiddleLeftFrame>
          <MiddleLeftFrame>
            <MiddleTitle>비고</MiddleTitle>
            <Box>
              <InputBox onChange={handleValue} name='note' />
            </Box>
          </MiddleLeftFrame>
        </MiddleLeft>
        <MiddleRight>
          <MiddleImage src={LICENSE}/>
        </MiddleRight>
      </Middle>

      <Bottom>
        <BottomButton onClick={onSubmit}>
          신청하기
        </BottomButton>
      </Bottom>
    </RequestLicenseFrame>

    <RequestModalContainer isOpen={isOpen} onRequestClose={closeModal} text='' />
  </>
);

export default RequestLicensePresenter;
