import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { getFunName } from "../helpers";

class StorePicker extends React.PureComponent {
    static propTypes = {
        history: PropTypes.object
    };
    constructor() {
        super();
        this.goToStore = this.goToStore.bind(this);
    }

    myInput = React.createRef();

    goToStore = event => {
        // 1. Stop the form from submitting
        event.preventDefault();
        // 2. get the text from that input
        const storeName = this.myInput.value.value;
        // 3. Change the page to /store/whatever-they-entered
        this.props.history.push(`/store/${storeName}`); // Prop "history" es creado por React Routing para todos los componentes hijos suyos
    };

    render() {
        return (
            <form
                action=""
                className="store-selector"
                onSubmit={this.goToStore}
            >
                {/* Comment */}
                <h2>Please enter a store</h2>
                <input
                    type="text"
                    ref={this.myInput}
                    required
                    placeholder="Store Name"
                    defaultValue={getFunName()}
                />
                <button type="submit">Visit Store →</button>
            </form>
        );
    }
}

export default StorePicker;
