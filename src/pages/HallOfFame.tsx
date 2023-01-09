import React from "react";

interface Props{

}

interface States{

}

export default class HallOfFame extends React.Component<Props, States>{
    constructor(props: Props)
    {
        super(props);
        this.state = {
            
        };
    }

    render(): React.ReactNode {
        return (
            <div>
                HallOfFame
            </div>
        )
    }
}
