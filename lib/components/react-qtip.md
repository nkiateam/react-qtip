### HTML, Text and Ajax:
```js
const $ = require('jquery');
const ajaxContent = (event, api) => {
    $.ajax({
        url: 'http://qtip2.com/demos/data/owl', // Use href attribute as URL
    })
        .then((content) => {
            // Set the tooltip content upon successful retrieval
            api.set('content.text', content);
        }, (xhr, status, error) => {
            // Upon failure... set the tooltip content to error
            api.set('content.text', `${status}: ${error}`);
        });
    return 'Loading...'; // Set some initial text
};
<div id="content">
    <div className="category group">
        <div className="section">
            <h2>HTML, Text and Ajax</h2>
                <div className="examples">
                    <ul className="blocks">
                        <li>
                            <QTooltip text="Simple textual content">
                                Simple Text
                            </QTooltip>
                        </li>
                        <li>
                            <QTooltip text="Complex <b>inline</b> <i>HTML</i> in your <u>config</u>!">
                                inline HTML
                            </QTooltip>
                        </li>
                        <li>
                            <QTooltip
                                text="Closing your tooltips just got easier with a handy new <i>style-able</i> button!"
                                button
                                hideEvent="click"
                            >
                                Close buttons
                            </QTooltip>
                        </li>
                        <li>
                            <QTooltip
                                title="Your original title here!"
                                text="Separate content and title text makes extending existing tooltips a breeze."
                            >
                                Add a title
                            </QTooltip>
                        </li>
                        <li>
                            <QTooltip
                                text="I'll follow your mouse around, with a tiny offset to keep myself out the way of your clicks!"
                                target="mouse"
                                x={5}
                                y={5}
                            >
                                <span>Anchor the tooltip to the mouse</span>
                            </QTooltip>
                        </li>
                        <li>
                            <QTooltip text={ajaxContent}>
                                <span>AJAX HTML</span>
                            </QTooltip>
                        </li>
                        <li>
                            <QTooltip text="<iframe src='http://html5rocks.com' />" hideFixed>
                                Embedded &lt;iframe&gt;
                            </QTooltip>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
```

### Positioning
```js
<div id="content">
    <div className="category group">
         <div className="section">
            <h2>Positioning</h2>

            <div className="examples">
                <a href="http://qtip2.com/demos">Refer qTip Demo</a>
            </div>
        </div>
    </div>
</div>        
```
### Show and Hide properties
```js
<div id="content">
    <div className="category group">
    <h2>Show and Hide properties</h2>
        <div className="examples">
            <ul className="blocks">
                <li>
                    <QTooltip
                        text="I can only be shown and hidden by clicking my target element"
                        showEvent="click"
                        hideEvent="click"
                    >
                        <a href="#">Click (and click again!)</a>
                    </QTooltip>
                </li>
                <li>
                    <QTooltip
                        text="Click elsewhere on the page to hide me!"
                        showEvent="click"
                        hideEvent="unfocus"
                    >
                        <span>Hide when clicking elsewhere</span>
                    </QTooltip>
                </li>
                <li>
                    <QTooltip
                        text="You can interact with my contents by mousing onto me. Click my <a href='http://google.com'>link!</a>"
                        hideFixed
                        hideDelay={300}
                    >
                        <span>Stay visible when mousing onto tooltip</span>
                    </QTooltip>
                </li>
                <li>
                    <QTooltip
                        text="I have a longer show delay of 500 milliseconds and a hide delay of 2 seconds"
                        showDelay={500}
                        hideDelay={2000}
                    >
                        <span>Custom hide and show delays</span>
                    </QTooltip>
                </li>
                <li>
                    <QTooltip text="The show.solo property lets me hide other tooltips when I open." showSolo>
                        <span>Hide others when opening</span>
                    </QTooltip>
                </li>
                <li>
                    <QTooltip
                        text="If you don't interact with me or my target for <b>3 seconds</b>, I'll automatically hide"
                        hideEvent={false}
                        hideInactive={3000}
                    >
                        <span>Hide when inactive</span>
                    </QTooltip>
                </li>
                <li>
                    <QTooltip
                        text="Open at the mouse position, and hide if you move more than 30px from that point."
                        target="mouse"
                        mouse={false}
                        hideDistance={30}
                    >
                        <span>Hide after a variable mouse distance</span>
                    </QTooltip>
                </li>
            </ul>
        </div>
    </div>
</div>    
```
### Show and Hide effect
```js
const $ = require('jquery');
<div id="content">
    <div className="category group">
         <h2>Show and Hide effect</h2>
         <div className="examples">
             <ul className="blocks">
                 <li>
                     <QTooltip
                         text="sliding"
                         showEffect={function () { $(this).slideDown(); }}
                         hideEffect={function () { $(this).slideUp(); }}
                     >
                         <span>Sliding in</span>
                     </QTooltip>
                 </li>
                 <li>
                     <QTooltip
                         text="Fade in/Slide out"
                         showEffect={function () { $(this).fadeTo(500, 1); }}
                         hideEffect={function () { $(this).slideUp(); }}
                     >
                         <span>Fade in, slide out</span>
                     </QTooltip>
                 </li>
             </ul>
         </div>
    </div>
</div>
```