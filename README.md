****Kolayik microfront library**** (version **1.0.21**)


### Definitions:

-   Kolayik application: Parent application that your application will load inside.

-   WebApp: Your external application that will load inside Kolayik application applications menu.

### Execution process:

1.  User goes to the applications page and selects the webApp icon.

2.  Loading cover appears and WebApp loads in iFrame with:
    > *yourdomain/?token={token}*

3.  When your WebApp is ready you should call [*ready function*](#ready-function) to hide the loading cover.

4.  Control of the page is assigned to the WebApp. The WebApp can receive services from the app if needed, you can see a list of  services with the relevant explanations [*here*](#ready-function).

### Basic requirements for using services:

-   Install [*kolay-microfront*](https://www.npmjs.com/package/kolay-microfront) npm module.

  ```
  npm install --save kolay-microfront@latest --save
  ```

-   There is no dependency to a third party library or framework for using kolay-microfront library.

### Connect from the WebApp to the Kolayik application:

These are the methods that are implemented in the Kolayik application and Will be available after adding the [*kolay-microfront*](https://www.npmjs.com/package/kolay-microfront) library and WebApp can call it as needed.



Ready function:
---------------

After WebApp is ready, you should call Ready function to hide the loading cover.

| Function name | Ready                                                                                 |
|---------------|---------------------------------------------------------------------------------------|
| input         | { hideHeader: boolean }<br><br>* if you want to hide default header you can send true |
| response      | void                                                                                  |



getFreshToken:
--------------

kolayik application sends you a token by url but you can get it with
getFreshToken too, also if the token is expired you can get a new token.

| Function name | getFreshToken                                                           |
|---------------|-------------------------------------------------------------------------|
| input         | callBackFunction:Function<br><br>*you should input a call back function |
| response      | Call back function input will be flat token string                      |


getInitData:
------------

You can get initialize-data like user data.

| Function name | getInitData                                                             |
|---------------|-------------------------------------------------------------------------|
| input         | callBackFunction:Function<br><br>*you should input a call back function |
| response      | Call back function input will be init data Object                       |



showModal:
----------

You can show modal or confirm modal.

  | Function name | showModal                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|---------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| input         | callBackFunction:Function<br><br>*you should input a call back function                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| response      | data: modalModel, callBack:Function<br>Modal model: <br>header?: {<br>    showHeader?: boolean;<br>    title?: string;<br>    iconClass?: string;<br>    iconColor?: string;<br>    showBorder?: boolean;<br>  };<br>  footer?: {<br>    showFooter?: boolean;<br>    buttons?: {<br>      text?: string;<br>      class?: string;<br>      clickValue?: any;<br>    }[];<br>    desc?: {<br>      label?: string;<br>      value?: string;<br>    };<br>    showBorder?: boolean;<br>  };<br>  body?: any;<br>  modalType?: "small" \| "medium" \| "large" \| "xlarge";<br>  hidePreviousModals?: boolean;<br><br>*you should input a call back function if you want to get clicked button value |


showToastMessage:
-----------------

You can show success and error toast messages.

| Function name | showToastMessage                                                                    |
|---------------|-------------------------------------------------------------------------------------|
| input         | {<br>    type:’success’\|’error’, <br>    title:string, <br>    message:string<br>} |
| response      | void                                                                                |



goToUrl:
--------

You open a new page.

 | Function name | goToUrl                                            |
|---------------|----------------------------------------------------|
| input         | {<br>  url: string,<br> openInNewTab: boolean<br>} |
| response      | void                                               |



startLoading:
-------------

You can show a full loading cover on WebApp.

| Function name | startLoading |
|---------------|--------------|
| input         | No input     |
| response      | void         |

stopLoading:
------------

You can hide the loading cover on WebApp.

| Function name | stopLoading  |
|---------------|--------------|
| input         | No input     |
| response      | void         |



exitApplication:
----------------

You can exit WebApp and send the user to the applications page.

| Function name | exitApplication|
|---------------|----------------|
| input         | No input       |
| response      | void           |



subscribeNavigation:
--------------------

You subscribe browser navigation buttons (previous and forward).

| Function name | subscribeNavigation                                                 |
|---------------|---------------------------------------------------------------------|
| input         | callBackFunction:Function<br>*you should input a call back function |
| response      | Call back function input will be flat url                           |


toggleMenu:
--------------------

You can toggle the left sidebar.

| Function name | toggleMenu |
|---------------|------------|
| input         | No input   |
| response      | void       |


changeWindowTitle:
--------------------

You can change the browser title.

| Function name | changeWindowTitle |
|---------------|-------------------|
| input         | title:string      |
| response      | void              |
