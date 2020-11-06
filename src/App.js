import './styles/app.scss';
import { SegmentedControl } from './SegmentedControl';

function App() {
    return (
        <div className="app">
            <div className="card">
                <div className="top">
                    <h1>Prototype</h1>
                </div>
                <div className="side">
                    <h2>TODAY</h2>
                    <br />
                    <h3>Segmented Control</h3>
                    <br />
                    <SegmentedControl title="Normal" />
                    <br />
                    <SegmentedControl title="Hover" styleClass="hover" />
                    <br />
                    <SegmentedControl title="Focus" styleClass="focus" />
                    <br />
                    <SegmentedControl
                        title="Hover Focus"
                        styleClass="hover focus"
                    />
                    <br />
                    <SegmentedControl title="Select" styleClass="selected" />
                    <br />
                    <SegmentedControl
                        title="Hover Select"
                        styleClass="hover selected"
                    />
                    <br />
                    <SegmentedControl
                        title="Focus Select"
                        styleClass="focus selected"
                    />
                    <br />
                    <SegmentedControl
                        title="Hover Focus Select"
                        styleClass="hover focus selected"
                    />
                    <br />
                    <SegmentedControl title="Disable" styleClass="disabled" />
                </div>
                <div className="side">
                    <h2>TOMORROW</h2>
                    <br />
                    <h3>Segmented Control</h3>
                    <br />
                    <SegmentedControl title="Normal" styleClass="new" />
                    <br />
                    <SegmentedControl title="Hover" styleClass="new hover" />
                    <br />
                    <SegmentedControl title="Focus" styleClass="new focus" />
                    <br />
                    <SegmentedControl
                        title="Hover Focus"
                        styleClass="new hover focus"
                    />
                    <br />
                    <SegmentedControl
                        title="Select"
                        styleClass="new selected"
                    />
                    <br />
                    <SegmentedControl
                        title="Hover Select"
                        styleClass="new hover selected"
                    />
                    <br />
                    <SegmentedControl
                        title="Focus Select"
                        styleClass="new focus selected"
                    />
                    <br />
                    <SegmentedControl
                        title="Hover Focus Select"
                        styleClass="new hover focus selected"
                    />
                    <br />
                    <SegmentedControl
                        title="Disable"
                        styleClass="new disabled"
                    />
                </div>
            </div>
        </div>
    );
}

export default App;
