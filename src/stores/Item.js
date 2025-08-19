import { observable, makeObservable } from 'mobx'

export class Item {

    constructor(name) {
        this.name = name
        this.completed = false
        this.location = "Super Sell"

        makeObservable(this, {
            name: observable,
            completed: observable
        })
    }


}class Item extends Component {
    // other methods
    render() {
        let item = this.props.item
         return (
            <div className = {item.completed ? "crossed": null}>
            <input type="checkbox"
                value={item.name}/> 
                {item.name} 
            </div>)
    }
}

export default observer(Item)