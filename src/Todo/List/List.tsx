import * as React from 'react';
import { List as MList, ListItem } from 'material-ui/List';

export interface TodoListProperty {
    items: IItem[],
    clickItem(item: IItem): void
}
export interface IItem {
    value: string,
    created: Date
}


export class List extends React.Component <TodoListProperty, void> {
    constructor(props: TodoListProperty) {
        super(props);
    }

    render() {
        return (
            <MList>
                {
                    this.props.items.map((item, index) => {
                        return <ListItem key={index.toString()} onClick={event => this.props.clickItem(item)} primaryText={item.value} />
                    })
                }
            </MList>
        );
    }
}