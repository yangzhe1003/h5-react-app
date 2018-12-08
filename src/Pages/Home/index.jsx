
import styled from "styled-components"



class Home extends React.PureComponent {
    constructor(props){
        super(props)
    }

    componentDidMount(){
    }

    getData = () => {
        fetch("http://localhost:3999/api/getData").then((res)=>{
            console.log(res)
        })
    }

    render(){
        return <Container>
            <Button onClick={this.getData}>点我请求借口数据</Button>
            <Button onClick={()=>{this.props.history.push("/error")}}>点我跳转</Button>
        </Container>
    }
}

export default Home  

const Container = styled.div`
    width: 100%;
    overflow: hidden;
`

const Button = styled.div`
    width: 335px;
    height: 60px;
    margin: 0 auto;
    font-size: 20px;
    text-align: center;
    line-height: 60px;
    background-color: #555555;
    border-radius: 8px;
    margin-top: 20px;
`