


// const Container = (props) => {


    
//     return (
//         <div>
//             {
//                 props.children
//             }
//         </div>
//     )
// }


class Container extends React.PureComponent{
    constructor(props){
        super(props)


    }


    render(){
        console.log(this.props.children)
        return <div>
            {
                this.props.children
            }
        </div>
    }
}


export default Container