import ReactLoading from 'react-loading';
import { Wrapper } from './styled';
const Loading=()=>{
  return (
    <Wrapper>
      <ReactLoading type={"bubbles"} color={"white"} height={60} width={100} />
    </Wrapper>
  )
}

export default Loading