import React from "react";
// import {db} from "../../../firebase";
export const MessagesList = () =>{

}
export class Detail extends React.Component{
    listener = null;
    state = {
        messages: [],

    }
    componentDidMount(){
        this.listener = db.collection(`cscd`).where(`id`,`==`, this.props.activeCon.id).onSnapshot((querrySnapshot)=>{
            const newMessgae = []
            querrySnapshot.docChanges().forEach((change)=>{
                newMessgae.push({
                    id: change.doc.id,
                    ...change.doc.data(),
                })
            })
            this.setState({
                messages: [...this.state.messages, ... newMessgae]
            })
        })
    }
    componentDidUpdate(prevProps){
        if(prevProps.activeCon.id !== this.props.activeCon.id){
            this.setState({messages: []});
            this.listener();
        }
    }
    render(){
        const {messages} = this.state;
        return(
            <div>
                <ul>
        {messages.map(msg =><li key={msg.id}>{msg.content}</li>)}
                </ul>
            </div>
        )
    }
}
