import "../css/Folio.css"

function FolioPanel() {
    return (
        <div>
            <div className="folio-section">
                <h2>Projects</h2>
                <div className="folio-box">
                    <h3>Project 1</h3>
                    <ul>
                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                        <li>Nullam accumsan nunc ut purus ullamcorper.</li>
                        <li>At aliquam arcu tincidunt.</li>
                    </ul>
                    <a href="#" className="btn">Learn More</a>
                </div>

                <div className="folio-box">
                    <h3>Project 2</h3>
                    <ul>
                        <li>Curabitur nec magna sit amet est pulvinar placerat vitae ac felis.</li>
                        <li>Morbi rutrum est non erat tempus, vitae auctor elit interdum.</li>
                    </ul>
                    <a href="#" className="btn">Learn More</a>
                </div>

                <div className="folio-box">
                    <h3>Project 3</h3>
                    <ul>
                        <li>Fusce finibus, lorem vitae pellentesque congue.</li>
                        <li>Mi est sodales nulla, nec sagittis odio massa eget purus.</li>
                        <li>Sed tincidunt.</li>
                    </ul>
                    <a href="#" className="btn">Learn More</a>
                </div>
            </div>
        </div>
    );
}

export default FolioPanel;