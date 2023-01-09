import React from "react";

interface Props{

}

interface States{

}

export default class Error extends React.Component<Props, States>{
    constructor(props: Props)
    {
        super(props);
        this.state = {
            
        };
    }

    render(): React.ReactNode {
        return (
            <div className="error-center">
                <p className="error-center-text">
                    Error 404: Page not found.
                </p>
            </div>
        )
    }
}
