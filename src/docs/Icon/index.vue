<template>
  <div>
    <header-info></header-info>
    <api id="api"></api>
    <ul class="icon_lists clearfix">

      <li>
        <i class="vcuicon vcuicon-search1"></i>
        <div class="name">search1</div>
        <div class="fontclass">.vcuicon-search1</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-search2"></i>
        <div class="name">search2</div>
        <div class="fontclass">.vcuicon-search2</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-loading vcuicon-spin"></i>
        <div class="name">loading</div>
        <div class="fontclass">.vcuicon-loading</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-check-circle"></i>
        <div class="name">check-circle</div>
        <div class="fontclass">.vcuicon-check-circle</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-CI"></i>
        <div class="name">CI</div>
        <div class="fontclass">.vcuicon-CI</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-Dollar"></i>
        <div class="name">Dollar</div>
        <div class="fontclass">.vcuicon-Dollar</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-compass"></i>
        <div class="name">compass</div>
        <div class="fontclass">.vcuicon-compass</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-close-circle"></i>
        <div class="name">close-circle</div>
        <div class="fontclass">.vcuicon-close-circle</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-frown"></i>
        <div class="name">frown</div>
        <div class="fontclass">.vcuicon-frown</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-info-circle"></i>
        <div class="name">info-circle</div>
        <div class="fontclass">.vcuicon-info-circle</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-left-circle"></i>
        <div class="name">left-circle</div>
        <div class="fontclass">.vcuicon-left-circle</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-down-circle"></i>
        <div class="name">down-circle</div>
        <div class="fontclass">.vcuicon-down-circle</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-EURO"></i>
        <div class="name">EURO</div>
        <div class="fontclass">.vcuicon-EURO</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-copyright"></i>
        <div class="name">copyright</div>
        <div class="fontclass">.vcuicon-copyright</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-minus-circle"></i>
        <div class="name">minus-circle</div>
        <div class="fontclass">.vcuicon-minus-circle</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-meh"></i>
        <div class="name">meh</div>
        <div class="fontclass">.vcuicon-meh</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-plus-circle"></i>
        <div class="name">plus-circle</div>
        <div class="fontclass">.vcuicon-plus-circle</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-play-circle"></i>
        <div class="name">play-circle</div>
        <div class="fontclass">.vcuicon-play-circle</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-question-circle"></i>
        <div class="name">question-circle</div>
        <div class="fontclass">.vcuicon-question-circle</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-Pound"></i>
        <div class="name">Pound</div>
        <div class="fontclass">.vcuicon-Pound</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-right-circle"></i>
        <div class="name">right-circle</div>
        <div class="fontclass">.vcuicon-right-circle</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-smile"></i>
        <div class="name">smile</div>
        <div class="fontclass">.vcuicon-smile</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-trademark"></i>
        <div class="name">trademark</div>
        <div class="fontclass">.vcuicon-trademark</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-time-circle"></i>
        <div class="name">time-circle</div>
        <div class="fontclass">.vcuicon-time-circle</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-timeout"></i>
        <div class="name">time out</div>
        <div class="fontclass">.vcuicon-timeout</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-earth"></i>
        <div class="name">earth</div>
        <div class="fontclass">.vcuicon-earth</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-YUAN"></i>
        <div class="name">YUAN</div>
        <div class="fontclass">.vcuicon-YUAN</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-up-circle"></i>
        <div class="name">up-circle</div>
        <div class="fontclass">.vcuicon-up-circle</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-warning-circle"></i>
        <div class="name">warning-circle</div>
        <div class="fontclass">.vcuicon-warning-circle</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-sync"></i>
        <div class="name">sync</div>
        <div class="fontclass">.vcuicon-sync</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-transaction"></i>
        <div class="name">transaction</div>
        <div class="fontclass">.vcuicon-transaction</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-undo"></i>
        <div class="name">undo</div>
        <div class="fontclass">.vcuicon-undo</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-redo"></i>
        <div class="name">redo</div>
        <div class="fontclass">.vcuicon-redo</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-reload"></i>
        <div class="name">reload</div>
        <div class="fontclass">.vcuicon-reload</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-reloadtime"></i>
        <div class="name">reload time</div>
        <div class="fontclass">.vcuicon-reloadtime</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-message"></i>
        <div class="name">message</div>
        <div class="fontclass">.vcuicon-message</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-dashboard"></i>
        <div class="name">dashboard</div>
        <div class="fontclass">.vcuicon-dashboard</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-issuesclose"></i>
        <div class="name">issues close</div>
        <div class="fontclass">.vcuicon-issuesclose</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-poweroff"></i>
        <div class="name">poweroff</div>
        <div class="fontclass">.vcuicon-poweroff</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-logout"></i>
        <div class="name">logout</div>
        <div class="fontclass">.vcuicon-logout</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-login"></i>
        <div class="name">login</div>
        <div class="fontclass">.vcuicon-login</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-piechart"></i>
        <div class="name">pie chart</div>
        <div class="fontclass">.vcuicon-piechart</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-setting"></i>
        <div class="name">setting</div>
        <div class="fontclass">.vcuicon-setting</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-eye"></i>
        <div class="name">eye</div>
        <div class="fontclass">.vcuicon-eye</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-location"></i>
        <div class="name">location</div>
        <div class="fontclass">.vcuicon-location</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-edit-square"></i>
        <div class="name">edit-square</div>
        <div class="fontclass">.vcuicon-edit-square</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-export"></i>
        <div class="name">export</div>
        <div class="fontclass">.vcuicon-export</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-save"></i>
        <div class="name">save</div>
        <div class="fontclass">.vcuicon-save</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-Import"></i>
        <div class="name">Import</div>
        <div class="fontclass">.vcuicon-Import</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-appstore"></i>
        <div class="name">app store</div>
        <div class="fontclass">.vcuicon-appstore</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-close-square"></i>
        <div class="name">close-square</div>
        <div class="fontclass">.vcuicon-close-square</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-down-square"></i>
        <div class="name">down-square</div>
        <div class="fontclass">.vcuicon-down-square</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-layout"></i>
        <div class="name">layout</div>
        <div class="fontclass">.vcuicon-layout</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-left-square"></i>
        <div class="name">left-square</div>
        <div class="fontclass">.vcuicon-left-square</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-play-square"></i>
        <div class="name">play-square</div>
        <div class="fontclass">.vcuicon-play-square</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-control"></i>
        <div class="name">control</div>
        <div class="fontclass">.vcuicon-control</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-codelibrary"></i>
        <div class="name">code library</div>
        <div class="fontclass">.vcuicon-codelibrary</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-detail"></i>
        <div class="name">detail</div>
        <div class="fontclass">.vcuicon-detail</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-minus-square"></i>
        <div class="name">minus-square</div>
        <div class="fontclass">.vcuicon-minus-square</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-plus-square"></i>
        <div class="name">plus-square</div>
        <div class="fontclass">.vcuicon-plus-square</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-right-square"></i>
        <div class="name">right-square</div>
        <div class="fontclass">.vcuicon-right-square</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-project"></i>
        <div class="name">project</div>
        <div class="fontclass">.vcuicon-project</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-wallet"></i>
        <div class="name">wallet</div>
        <div class="fontclass">.vcuicon-wallet</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-up-square"></i>
        <div class="name">up-square</div>
        <div class="fontclass">.vcuicon-up-square</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-calculator"></i>
        <div class="name">calculator</div>
        <div class="fontclass">.vcuicon-calculator</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-interation"></i>
        <div class="name">interation</div>
        <div class="fontclass">.vcuicon-interation</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-check-square"></i>
        <div class="name">check-square</div>
        <div class="fontclass">.vcuicon-check-square</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-border"></i>
        <div class="name">border</div>
        <div class="fontclass">.vcuicon-border</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-border-outer"></i>
        <div class="name">border-outer</div>
        <div class="fontclass">.vcuicon-border-outer</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-border-top"></i>
        <div class="name">border-top</div>
        <div class="fontclass">.vcuicon-border-top</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-border-bottom"></i>
        <div class="name">border-bottom</div>
        <div class="fontclass">.vcuicon-border-bottom</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-border-left"></i>
        <div class="name">border-left</div>
        <div class="fontclass">.vcuicon-border-left</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-border-right"></i>
        <div class="name">border-right</div>
        <div class="fontclass">.vcuicon-border-right</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-border-inner"></i>
        <div class="name">border-inner</div>
        <div class="fontclass">.vcuicon-border-inner</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-border-verticle"></i>
        <div class="name">border-verticle</div>
        <div class="fontclass">.vcuicon-border-verticle</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-border-horizontal"></i>
        <div class="name">border-horizontal</div>
        <div class="fontclass">.vcuicon-border-horizontal</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-radius-bottomleft"></i>
        <div class="name">radius-bottomleft</div>
        <div class="fontclass">.vcuicon-radius-bottomleft</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-radius-bottomright"></i>
        <div class="name">radius-bottomright</div>
        <div class="fontclass">.vcuicon-radius-bottomright</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-radius-upleft"></i>
        <div class="name">radius-upleft</div>
        <div class="fontclass">.vcuicon-radius-upleft</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-radius-upright"></i>
        <div class="name">radius-upright</div>
        <div class="fontclass">.vcuicon-radius-upright</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-radius-setting"></i>
        <div class="name">radius-setting</div>
        <div class="fontclass">.vcuicon-radius-setting</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-adduser"></i>
        <div class="name">add user</div>
        <div class="fontclass">.vcuicon-adduser</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-deleteteam"></i>
        <div class="name">delete team</div>
        <div class="fontclass">.vcuicon-deleteteam</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-deleteuser"></i>
        <div class="name">delete user</div>
        <div class="fontclass">.vcuicon-deleteuser</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-addteam"></i>
        <div class="name">addteam</div>
        <div class="fontclass">.vcuicon-addteam</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-user"></i>
        <div class="name">user</div>
        <div class="fontclass">.vcuicon-user</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-team"></i>
        <div class="name">team</div>
        <div class="fontclass">.vcuicon-team</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-areachart"></i>
        <div class="name">area chart</div>
        <div class="fontclass">.vcuicon-areachart</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-linechart"></i>
        <div class="name">line chart</div>
        <div class="fontclass">.vcuicon-linechart</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-barchart"></i>
        <div class="name">bar chart</div>
        <div class="fontclass">.vcuicon-barchart</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-pointmap"></i>
        <div class="name">point map</div>
        <div class="fontclass">.vcuicon-pointmap</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-container"></i>
        <div class="name">container</div>
        <div class="fontclass">.vcuicon-container</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-database"></i>
        <div class="name">database</div>
        <div class="fontclass">.vcuicon-database</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-sever"></i>
        <div class="name">sever</div>
        <div class="fontclass">.vcuicon-sever</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-mobile"></i>
        <div class="name">mobile</div>
        <div class="fontclass">.vcuicon-mobile</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-tablet"></i>
        <div class="name">tablet</div>
        <div class="fontclass">.vcuicon-tablet</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-redenvelope"></i>
        <div class="name">red envelope</div>
        <div class="fontclass">.vcuicon-redenvelope</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-book"></i>
        <div class="name">book</div>
        <div class="fontclass">.vcuicon-book</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-filedone"></i>
        <div class="name">file done</div>
        <div class="fontclass">.vcuicon-filedone</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-reconciliation"></i>
        <div class="name">reconciliation</div>
        <div class="fontclass">.vcuicon-reconciliation</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-file-exception"></i>
        <div class="name">file -exception</div>
        <div class="fontclass">.vcuicon-file-exception</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-filesync"></i>
        <div class="name">file sync</div>
        <div class="fontclass">.vcuicon-filesync</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-filesearch"></i>
        <div class="name">file search</div>
        <div class="fontclass">.vcuicon-filesearch</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-solution"></i>
        <div class="name">solution</div>
        <div class="fontclass">.vcuicon-solution</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-fileprotect"></i>
        <div class="name">file protect</div>
        <div class="fontclass">.vcuicon-fileprotect</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-file-add"></i>
        <div class="name">file-add</div>
        <div class="fontclass">.vcuicon-file-add</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-file-excel"></i>
        <div class="name">file-excel</div>
        <div class="fontclass">.vcuicon-file-excel</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-file-exclamation"></i>
        <div class="name">file-exclamation</div>
        <div class="fontclass">.vcuicon-file-exclamation</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-file-pdf"></i>
        <div class="name">file-pdf</div>
        <div class="fontclass">.vcuicon-file-pdf</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-file-image"></i>
        <div class="name">file-image</div>
        <div class="fontclass">.vcuicon-file-image</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-file-markdown"></i>
        <div class="name">file-markdown</div>
        <div class="fontclass">.vcuicon-file-markdown</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-file-unknown"></i>
        <div class="name">file-unknown</div>
        <div class="fontclass">.vcuicon-file-unknown</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-file-ppt"></i>
        <div class="name">file-ppt</div>
        <div class="fontclass">.vcuicon-file-ppt</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-file-word"></i>
        <div class="name">file-word</div>
        <div class="fontclass">.vcuicon-file-word</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-file"></i>
        <div class="name">file</div>
        <div class="fontclass">.vcuicon-file</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-file-zip"></i>
        <div class="name">file-zip</div>
        <div class="fontclass">.vcuicon-file-zip</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-file-text"></i>
        <div class="name">file-text</div>
        <div class="fontclass">.vcuicon-file-text</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-file-copy"></i>
        <div class="name">file-copy</div>
        <div class="fontclass">.vcuicon-file-copy</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-snippets"></i>
        <div class="name">snippets</div>
        <div class="fontclass">.vcuicon-snippets</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-audit"></i>
        <div class="name">audit</div>
        <div class="fontclass">.vcuicon-audit</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-diff"></i>
        <div class="name">diff</div>
        <div class="fontclass">.vcuicon-diff</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-Batchfolding"></i>
        <div class="name">Batch folding</div>
        <div class="fontclass">.vcuicon-Batchfolding</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-securityscan"></i>
        <div class="name">security scan</div>
        <div class="fontclass">.vcuicon-securityscan</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-propertysafety"></i>
        <div class="name">property safety</div>
        <div class="fontclass">.vcuicon-propertysafety</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-safetycertificate"></i>
        <div class="name">safety certificate</div>
        <div class="fontclass">.vcuicon-safetycertificate</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-insurance"></i>
        <div class="name">insurance </div>
        <div class="fontclass">.vcuicon-insurance</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-alert"></i>
        <div class="name">alert</div>
        <div class="fontclass">.vcuicon-alert</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-delete"></i>
        <div class="name">delete</div>
        <div class="fontclass">.vcuicon-delete</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-hourglass"></i>
        <div class="name">hourglass</div>
        <div class="fontclass">.vcuicon-hourglass</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-bulb"></i>
        <div class="name">bulb</div>
        <div class="fontclass">.vcuicon-bulb</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-experiment"></i>
        <div class="name">experiment</div>
        <div class="fontclass">.vcuicon-experiment</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-bell"></i>
        <div class="name">bell</div>
        <div class="fontclass">.vcuicon-bell</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-trophy"></i>
        <div class="name">trophy</div>
        <div class="fontclass">.vcuicon-trophy</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-rest"></i>
        <div class="name">rest</div>
        <div class="fontclass">.vcuicon-rest</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-USB"></i>
        <div class="name">USB</div>
        <div class="fontclass">.vcuicon-USB</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-skin"></i>
        <div class="name">skin</div>
        <div class="fontclass">.vcuicon-skin</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-home"></i>
        <div class="name">home</div>
        <div class="fontclass">.vcuicon-home</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-bank"></i>
        <div class="name">bank</div>
        <div class="fontclass">.vcuicon-bank</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-filter"></i>
        <div class="name">filter</div>
        <div class="fontclass">.vcuicon-filter</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-funnelplot"></i>
        <div class="name">funnel plot</div>
        <div class="fontclass">.vcuicon-funnelplot</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-like"></i>
        <div class="name">like</div>
        <div class="fontclass">.vcuicon-like</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-unlike"></i>
        <div class="name">unlike</div>
        <div class="fontclass">.vcuicon-unlike</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-unlock"></i>
        <div class="name">unlock</div>
        <div class="fontclass">.vcuicon-unlock</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-lock"></i>
        <div class="name">lock</div>
        <div class="fontclass">.vcuicon-lock</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-customerservice"></i>
        <div class="name">customerservice</div>
        <div class="fontclass">.vcuicon-customerservice</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-flag"></i>
        <div class="name">flag</div>
        <div class="fontclass">.vcuicon-flag</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-moneycollect"></i>
        <div class="name">money collect</div>
        <div class="fontclass">.vcuicon-moneycollect</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-medicinebox"></i>
        <div class="name">medicinebox</div>
        <div class="fontclass">.vcuicon-medicinebox</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-shop"></i>
        <div class="name">shop</div>
        <div class="fontclass">.vcuicon-shop</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-rocket"></i>
        <div class="name">rocket</div>
        <div class="fontclass">.vcuicon-rocket</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-shopping"></i>
        <div class="name">shopping</div>
        <div class="fontclass">.vcuicon-shopping</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-folder"></i>
        <div class="name">folder</div>
        <div class="fontclass">.vcuicon-folder</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-folder-open"></i>
        <div class="name">folder-open</div>
        <div class="fontclass">.vcuicon-folder-open</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-folder-add"></i>
        <div class="name">folder-add</div>
        <div class="fontclass">.vcuicon-folder-add</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-deploymentunit"></i>
        <div class="name">deployment unit</div>
        <div class="fontclass">.vcuicon-deploymentunit</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-accountbook"></i>
        <div class="name">account book</div>
        <div class="fontclass">.vcuicon-accountbook</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-contacts"></i>
        <div class="name">contacts</div>
        <div class="fontclass">.vcuicon-contacts</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-carryout"></i>
        <div class="name">carry out</div>
        <div class="fontclass">.vcuicon-carryout</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-calendar-check"></i>
        <div class="name">calendar-check</div>
        <div class="fontclass">.vcuicon-calendar-check</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-calendar"></i>
        <div class="name">calendar</div>
        <div class="fontclass">.vcuicon-calendar</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-scan"></i>
        <div class="name">scan</div>
        <div class="fontclass">.vcuicon-scan</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-select"></i>
        <div class="name">select</div>
        <div class="fontclass">.vcuicon-select</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-boxplot"></i>
        <div class="name">box plot</div>
        <div class="fontclass">.vcuicon-boxplot</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-build"></i>
        <div class="name">build</div>
        <div class="fontclass">.vcuicon-build</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-sliders"></i>
        <div class="name">sliders</div>
        <div class="fontclass">.vcuicon-sliders</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-laptop"></i>
        <div class="name">laptop</div>
        <div class="fontclass">.vcuicon-laptop</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-barcode"></i>
        <div class="name">barcode</div>
        <div class="fontclass">.vcuicon-barcode</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-camera"></i>
        <div class="name">camera</div>
        <div class="fontclass">.vcuicon-camera</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-cluster"></i>
        <div class="name">cluster</div>
        <div class="fontclass">.vcuicon-cluster</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-gateway"></i>
        <div class="name">gateway</div>
        <div class="fontclass">.vcuicon-gateway</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-car"></i>
        <div class="name">car</div>
        <div class="fontclass">.vcuicon-car</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-printer"></i>
        <div class="name">printer</div>
        <div class="fontclass">.vcuicon-printer</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-read"></i>
        <div class="name">read</div>
        <div class="fontclass">.vcuicon-read</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-cloud-server"></i>
        <div class="name">cloud-server</div>
        <div class="fontclass">.vcuicon-cloud-server</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-cloud-upload"></i>
        <div class="name">cloud-upload</div>
        <div class="fontclass">.vcuicon-cloud-upload</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-cloud"></i>
        <div class="name">cloud</div>
        <div class="fontclass">.vcuicon-cloud</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-cloud-download"></i>
        <div class="name">cloud-download</div>
        <div class="fontclass">.vcuicon-cloud-download</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-cloud-sync"></i>
        <div class="name">cloud-sync</div>
        <div class="fontclass">.vcuicon-cloud-sync</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-video"></i>
        <div class="name">video</div>
        <div class="fontclass">.vcuicon-video</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-notification"></i>
        <div class="name">notification</div>
        <div class="fontclass">.vcuicon-notification</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-sound"></i>
        <div class="name">sound</div>
        <div class="fontclass">.vcuicon-sound</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-radarchart"></i>
        <div class="name">radar chart</div>
        <div class="fontclass">.vcuicon-radarchart</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-qrcode"></i>
        <div class="name">qrcode</div>
        <div class="fontclass">.vcuicon-qrcode</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-fund"></i>
        <div class="name">fund</div>
        <div class="fontclass">.vcuicon-fund</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-image"></i>
        <div class="name">image</div>
        <div class="fontclass">.vcuicon-image</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-mail"></i>
        <div class="name">mail</div>
        <div class="fontclass">.vcuicon-mail</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-table"></i>
        <div class="name">table</div>
        <div class="fontclass">.vcuicon-table</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-idcard"></i>
        <div class="name">id card</div>
        <div class="fontclass">.vcuicon-idcard</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-creditcard"></i>
        <div class="name">credit card</div>
        <div class="fontclass">.vcuicon-creditcard</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-heart"></i>
        <div class="name">heart</div>
        <div class="fontclass">.vcuicon-heart</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-block"></i>
        <div class="name">block</div>
        <div class="fontclass">.vcuicon-block</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-error"></i>
        <div class="name">error</div>
        <div class="fontclass">.vcuicon-error</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-star"></i>
        <div class="name">star</div>
        <div class="fontclass">.vcuicon-star</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-gold"></i>
        <div class="name">gold</div>
        <div class="fontclass">.vcuicon-gold</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-heatmap"></i>
        <div class="name">heat map</div>
        <div class="fontclass">.vcuicon-heatmap</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-wifi"></i>
        <div class="name">wifi</div>
        <div class="fontclass">.vcuicon-wifi</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-attachment"></i>
        <div class="name">attachment</div>
        <div class="fontclass">.vcuicon-attachment</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-edit"></i>
        <div class="name">edit</div>
        <div class="fontclass">.vcuicon-edit</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-key"></i>
        <div class="name">key</div>
        <div class="fontclass">.vcuicon-key</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-api"></i>
        <div class="name">api</div>
        <div class="fontclass">.vcuicon-api</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-disconnect"></i>
        <div class="name">disconnect</div>
        <div class="fontclass">.vcuicon-disconnect</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-highlight"></i>
        <div class="name">highlight</div>
        <div class="fontclass">.vcuicon-highlight</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-monitor"></i>
        <div class="name">monitor</div>
        <div class="fontclass">.vcuicon-monitor</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-link"></i>
        <div class="name">link</div>
        <div class="fontclass">.vcuicon-link</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-man"></i>
        <div class="name">man</div>
        <div class="fontclass">.vcuicon-man</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-percentage"></i>
        <div class="name">percentage</div>
        <div class="fontclass">.vcuicon-percentage</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-search"></i>
        <div class="name">search</div>
        <div class="fontclass">.vcuicon-search</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-pushpin"></i>
        <div class="name">pushpin</div>
        <div class="fontclass">.vcuicon-pushpin</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-phone"></i>
        <div class="name">phone</div>
        <div class="fontclass">.vcuicon-phone</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-shake"></i>
        <div class="name">shake</div>
        <div class="fontclass">.vcuicon-shake</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-tag"></i>
        <div class="name">tag</div>
        <div class="fontclass">.vcuicon-tag</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-wrench"></i>
        <div class="name">wrench</div>
        <div class="fontclass">.vcuicon-wrench</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-woman"></i>
        <div class="name">woman</div>
        <div class="fontclass">.vcuicon-woman</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-tags"></i>
        <div class="name">tags</div>
        <div class="fontclass">.vcuicon-tags</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-scissor"></i>
        <div class="name">scissor</div>
        <div class="fontclass">.vcuicon-scissor</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-mr"></i>
        <div class="name">mr</div>
        <div class="fontclass">.vcuicon-mr</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-share"></i>
        <div class="name">share</div>
        <div class="fontclass">.vcuicon-share</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-branches"></i>
        <div class="name">branches</div>
        <div class="fontclass">.vcuicon-branches</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-fork"></i>
        <div class="name">fork</div>
        <div class="fontclass">.vcuicon-fork</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-shrink"></i>
        <div class="name">shrink</div>
        <div class="fontclass">.vcuicon-shrink</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-arrawsalt"></i>
        <div class="name">arrawsalt</div>
        <div class="fontclass">.vcuicon-arrawsalt</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-verticalright"></i>
        <div class="name">vertical right</div>
        <div class="fontclass">.vcuicon-verticalright</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-verticalleft"></i>
        <div class="name">vertical left</div>
        <div class="fontclass">.vcuicon-verticalleft</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-right"></i>
        <div class="name">right</div>
        <div class="fontclass">.vcuicon-right</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-left"></i>
        <div class="name">left</div>
        <div class="fontclass">.vcuicon-left</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-up"></i>
        <div class="name">up</div>
        <div class="fontclass">.vcuicon-up</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-down"></i>
        <div class="name">down</div>
        <div class="fontclass">.vcuicon-down</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-fullscreen"></i>
        <div class="name">fullscreen</div>
        <div class="fontclass">.vcuicon-fullscreen</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-fullscreen-exit"></i>
        <div class="name">fullscreen-exit</div>
        <div class="fontclass">.vcuicon-fullscreen-exit</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-doubleleft"></i>
        <div class="name">doubleleft</div>
        <div class="fontclass">.vcuicon-doubleleft</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-doubleright"></i>
        <div class="name">double right</div>
        <div class="fontclass">.vcuicon-doubleright</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-arrowright"></i>
        <div class="name">arrowright</div>
        <div class="fontclass">.vcuicon-arrowright</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-arrowup"></i>
        <div class="name">arrowup</div>
        <div class="fontclass">.vcuicon-arrowup</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-arrowleft"></i>
        <div class="name">arrowleft</div>
        <div class="fontclass">.vcuicon-arrowleft</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-arrowdown"></i>
        <div class="name">arrowdown</div>
        <div class="fontclass">.vcuicon-arrowdown</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-upload"></i>
        <div class="name">upload</div>
        <div class="fontclass">.vcuicon-upload</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-colum-height"></i>
        <div class="name">colum-height</div>
        <div class="fontclass">.vcuicon-colum-height</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-vertical-align-botto"></i>
        <div class="name">vertical-align-botto</div>
        <div class="fontclass">.vcuicon-vertical-align-botto</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-vertical-align-middl"></i>
        <div class="name">vertical-align-middl</div>
        <div class="fontclass">.vcuicon-vertical-align-middl</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-totop"></i>
        <div class="name">totop</div>
        <div class="fontclass">.vcuicon-totop</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-vertical-align-top"></i>
        <div class="name">vertical-align-top</div>
        <div class="fontclass">.vcuicon-vertical-align-top</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-download"></i>
        <div class="name">download</div>
        <div class="fontclass">.vcuicon-download</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-sort-descending"></i>
        <div class="name">sort-descending</div>
        <div class="fontclass">.vcuicon-sort-descending</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-sort-ascending"></i>
        <div class="name">sort-ascending</div>
        <div class="fontclass">.vcuicon-sort-ascending</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-fall"></i>
        <div class="name">fall</div>
        <div class="fontclass">.vcuicon-fall</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-swap"></i>
        <div class="name">swap</div>
        <div class="fontclass">.vcuicon-swap</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-stock"></i>
        <div class="name">stock</div>
        <div class="fontclass">.vcuicon-stock</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-rise"></i>
        <div class="name">rise</div>
        <div class="fontclass">.vcuicon-rise</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-indent"></i>
        <div class="name">indent</div>
        <div class="fontclass">.vcuicon-indent</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-outdent"></i>
        <div class="name">outdent</div>
        <div class="fontclass">.vcuicon-outdent</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-menu"></i>
        <div class="name">menu</div>
        <div class="fontclass">.vcuicon-menu</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-unorderedlist"></i>
        <div class="name">unordered list</div>
        <div class="fontclass">.vcuicon-unorderedlist</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-orderedlist"></i>
        <div class="name">ordered list</div>
        <div class="fontclass">.vcuicon-orderedlist</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-align-right"></i>
        <div class="name">align-right</div>
        <div class="fontclass">.vcuicon-align-right</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-align-center"></i>
        <div class="name">align-center</div>
        <div class="fontclass">.vcuicon-align-center</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-align-left"></i>
        <div class="name">align-left</div>
        <div class="fontclass">.vcuicon-align-left</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-pic-center"></i>
        <div class="name">pic-center</div>
        <div class="fontclass">.vcuicon-pic-center</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-pic-right"></i>
        <div class="name">pic-right</div>
        <div class="fontclass">.vcuicon-pic-right</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-pic-left"></i>
        <div class="name">pic-left</div>
        <div class="fontclass">.vcuicon-pic-left</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-bold"></i>
        <div class="name">bold</div>
        <div class="fontclass">.vcuicon-bold</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-font-colors"></i>
        <div class="name">font-colors</div>
        <div class="fontclass">.vcuicon-font-colors</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-exclaimination"></i>
        <div class="name">exclaimination</div>
        <div class="fontclass">.vcuicon-exclaimination</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-font-size"></i>
        <div class="name">font-size</div>
        <div class="fontclass">.vcuicon-font-size</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-infomation"></i>
        <div class="name">infomation</div>
        <div class="fontclass">.vcuicon-infomation</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-line-height"></i>
        <div class="name">line-height</div>
        <div class="fontclass">.vcuicon-line-height</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-strikethrough"></i>
        <div class="name">strikethrough</div>
        <div class="fontclass">.vcuicon-strikethrough</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-underline"></i>
        <div class="name">underline</div>
        <div class="fontclass">.vcuicon-underline</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-number"></i>
        <div class="name">number</div>
        <div class="fontclass">.vcuicon-number</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-italic"></i>
        <div class="name">italic</div>
        <div class="fontclass">.vcuicon-italic</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-code"></i>
        <div class="name">code</div>
        <div class="fontclass">.vcuicon-code</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-column-width"></i>
        <div class="name">column-width</div>
        <div class="fontclass">.vcuicon-column-width</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-check"></i>
        <div class="name">check</div>
        <div class="fontclass">.vcuicon-check</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-ellipsis"></i>
        <div class="name">ellipsis</div>
        <div class="fontclass">.vcuicon-ellipsis</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-dash"></i>
        <div class="name">dash</div>
        <div class="fontclass">.vcuicon-dash</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-close"></i>
        <div class="name">close</div>
        <div class="fontclass">.vcuicon-close</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-enter"></i>
        <div class="name">enter</div>
        <div class="fontclass">.vcuicon-enter</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-line"></i>
        <div class="name">line</div>
        <div class="fontclass">.vcuicon-line</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-minus"></i>
        <div class="name">minus</div>
        <div class="fontclass">.vcuicon-minus</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-question"></i>
        <div class="name">question</div>
        <div class="fontclass">.vcuicon-question</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-plus"></i>
        <div class="name">plus</div>
        <div class="fontclass">.vcuicon-plus</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-rollback"></i>
        <div class="name">rollback</div>
        <div class="fontclass">.vcuicon-rollback</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-small-dash"></i>
        <div class="name">small-dash</div>
        <div class="fontclass">.vcuicon-small-dash</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-pause"></i>
        <div class="name">pause</div>
        <div class="fontclass">.vcuicon-pause</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-bg-colors"></i>
        <div class="name">bg-colors</div>
        <div class="fontclass">.vcuicon-bg-colors</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-crown"></i>
        <div class="name">crown</div>
        <div class="fontclass">.vcuicon-crown</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-drag"></i>
        <div class="name">drag</div>
        <div class="fontclass">.vcuicon-drag</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-desktop"></i>
        <div class="name">desktop</div>
        <div class="fontclass">.vcuicon-desktop</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-gift"></i>
        <div class="name">gift</div>
        <div class="fontclass">.vcuicon-gift</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-stop"></i>
        <div class="name">stop</div>
        <div class="fontclass">.vcuicon-stop</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-fire"></i>
        <div class="name">fire</div>
        <div class="fontclass">.vcuicon-fire</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-thunderbolt"></i>
        <div class="name">thunderbolt</div>
        <div class="fontclass">.vcuicon-thunderbolt</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-check-circle-fill"></i>
        <div class="name">check-circle-fill</div>
        <div class="fontclass">.vcuicon-check-circle-fill</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-left-circle-fill"></i>
        <div class="name">left-circle-fill</div>
        <div class="fontclass">.vcuicon-left-circle-fill</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-down-circle-fill"></i>
        <div class="name">down-circle-fill</div>
        <div class="fontclass">.vcuicon-down-circle-fill</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-minus-circle-fill"></i>
        <div class="name">minus-circle-fill</div>
        <div class="fontclass">.vcuicon-minus-circle-fill</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-close-circle-fill"></i>
        <div class="name">close-circle-fill</div>
        <div class="fontclass">.vcuicon-close-circle-fill</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-info-circle-fill"></i>
        <div class="name">info-circle-fill</div>
        <div class="fontclass">.vcuicon-info-circle-fill</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-up-circle-fill"></i>
        <div class="name">up-circle-fill</div>
        <div class="fontclass">.vcuicon-up-circle-fill</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-right-circle-fill"></i>
        <div class="name">right-circle-fill</div>
        <div class="fontclass">.vcuicon-right-circle-fill</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-plus-circle-fill"></i>
        <div class="name">plus-circle-fill</div>
        <div class="fontclass">.vcuicon-plus-circle-fill</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-question-circle-fill"></i>
        <div class="name">question-circle-fill</div>
        <div class="fontclass">.vcuicon-question-circle-fill</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-EURO-circle-fill"></i>
        <div class="name">EURO-circle-fill</div>
        <div class="fontclass">.vcuicon-EURO-circle-fill</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-frown-fill"></i>
        <div class="name">frown-fill</div>
        <div class="fontclass">.vcuicon-frown-fill</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-copyright-circle-fil"></i>
        <div class="name">copyright-circle-fil</div>
        <div class="fontclass">.vcuicon-copyright-circle-fil</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-CI-circle-fill"></i>
        <div class="name">CI-circle-fill</div>
        <div class="fontclass">.vcuicon-CI-circle-fill</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-compass-fill"></i>
        <div class="name">compass-fill</div>
        <div class="fontclass">.vcuicon-compass-fill</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-Dollar-circle-fill"></i>
        <div class="name">Dollar-circle-fill</div>
        <div class="fontclass">.vcuicon-Dollar-circle-fill</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-poweroff-circle-fill"></i>
        <div class="name">poweroff-circle-fill</div>
        <div class="fontclass">.vcuicon-poweroff-circle-fill</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-meh-fill"></i>
        <div class="name">meh-fill</div>
        <div class="fontclass">.vcuicon-meh-fill</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-play-circle-fill"></i>
        <div class="name">play-circle-fill</div>
        <div class="fontclass">.vcuicon-play-circle-fill</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-Pound-circle-fill"></i>
        <div class="name">Pound-circle-fill</div>
        <div class="fontclass">.vcuicon-Pound-circle-fill</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-smile-fill"></i>
        <div class="name">smile-fill</div>
        <div class="fontclass">.vcuicon-smile-fill</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-stop-fill"></i>
        <div class="name">stop-fill</div>
        <div class="fontclass">.vcuicon-stop-fill</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-warning-circle-fill"></i>
        <div class="name">warning-circle-fill</div>
        <div class="fontclass">.vcuicon-warning-circle-fill</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-time-circle-fill"></i>
        <div class="name">time-circle-fill</div>
        <div class="fontclass">.vcuicon-time-circle-fill</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-trademark-circle-fil"></i>
        <div class="name">trademark-circle-fil</div>
        <div class="fontclass">.vcuicon-trademark-circle-fil</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-YUAN-circle-fill"></i>
        <div class="name">YUAN-circle-fill</div>
        <div class="fontclass">.vcuicon-YUAN-circle-fill</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-heart-fill"></i>
        <div class="name">heart-fill</div>
        <div class="fontclass">.vcuicon-heart-fill</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-piechart-circle-fil"></i>
        <div class="name">pie chart-circle-fil</div>
        <div class="fontclass">.vcuicon-piechart-circle-fil</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-dashboard-fill"></i>
        <div class="name">dashboard-fill</div>
        <div class="fontclass">.vcuicon-dashboard-fill</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-message-fill"></i>
        <div class="name">message-fill</div>
        <div class="fontclass">.vcuicon-message-fill</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-check-square-fill"></i>
        <div class="name">check-square-fill</div>
        <div class="fontclass">.vcuicon-check-square-fill</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-down-square-fill"></i>
        <div class="name">down-square-fill</div>
        <div class="fontclass">.vcuicon-down-square-fill</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-minus-square-fill"></i>
        <div class="name">minus-square-fill</div>
        <div class="fontclass">.vcuicon-minus-square-fill</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-close-square-fill"></i>
        <div class="name">close-square-fill</div>
        <div class="fontclass">.vcuicon-close-square-fill</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-codelibrary-fill"></i>
        <div class="name">code library-fill</div>
        <div class="fontclass">.vcuicon-codelibrary-fill</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-left-square-fill"></i>
        <div class="name">left-square-fill</div>
        <div class="fontclass">.vcuicon-left-square-fill</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-play-square-fill"></i>
        <div class="name">play-square-fill</div>
        <div class="fontclass">.vcuicon-play-square-fill</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-up-square-fill"></i>
        <div class="name">up-square-fill</div>
        <div class="fontclass">.vcuicon-up-square-fill</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-right-square-fill"></i>
        <div class="name">right-square-fill</div>
        <div class="fontclass">.vcuicon-right-square-fill</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-plus-square-fill"></i>
        <div class="name">plus-square-fill</div>
        <div class="fontclass">.vcuicon-plus-square-fill</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-accountbook-fill"></i>
        <div class="name">account book-fill</div>
        <div class="fontclass">.vcuicon-accountbook-fill</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-carryout-fill"></i>
        <div class="name">carry out-fill</div>
        <div class="fontclass">.vcuicon-carryout-fill</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-calendar-fill"></i>
        <div class="name">calendar-fill</div>
        <div class="fontclass">.vcuicon-calendar-fill</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-calculator-fill"></i>
        <div class="name">calculator-fill</div>
        <div class="fontclass">.vcuicon-calculator-fill</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-interation-fill"></i>
        <div class="name">interation-fill</div>
        <div class="fontclass">.vcuicon-interation-fill</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-project-fill"></i>
        <div class="name">project-fill</div>
        <div class="fontclass">.vcuicon-project-fill</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-detail-fill"></i>
        <div class="name">detail-fill</div>
        <div class="fontclass">.vcuicon-detail-fill</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-save-fill"></i>
        <div class="name">save-fill</div>
        <div class="fontclass">.vcuicon-save-fill</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-wallet-fill"></i>
        <div class="name">wallet-fill</div>
        <div class="fontclass">.vcuicon-wallet-fill</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-control-fill"></i>
        <div class="name">control-fill</div>
        <div class="fontclass">.vcuicon-control-fill</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-layout-fill"></i>
        <div class="name">layout-fill</div>
        <div class="fontclass">.vcuicon-layout-fill</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-appstore-fill"></i>
        <div class="name">app store-fill</div>
        <div class="fontclass">.vcuicon-appstore-fill</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-mobile-fill"></i>
        <div class="name">mobile-fill</div>
        <div class="fontclass">.vcuicon-mobile-fill</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-tablet-fill"></i>
        <div class="name">tablet-fill</div>
        <div class="fontclass">.vcuicon-tablet-fill</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-book-fill"></i>
        <div class="name">book-fill</div>
        <div class="fontclass">.vcuicon-book-fill</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-redenvelope-fill"></i>
        <div class="name">red envelope-fill</div>
        <div class="fontclass">.vcuicon-redenvelope-fill</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-safetycertificate-f"></i>
        <div class="name">safety certificate-f</div>
        <div class="fontclass">.vcuicon-safetycertificate-f</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-propertysafety-fill"></i>
        <div class="name">property safety-fill</div>
        <div class="fontclass">.vcuicon-propertysafety-fill</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-insurance-fill"></i>
        <div class="name">insurance-fill</div>
        <div class="fontclass">.vcuicon-insurance-fill</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-securityscan-fill"></i>
        <div class="name">security scan-fill</div>
        <div class="fontclass">.vcuicon-securityscan-fill</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-file-exclamation-fil"></i>
        <div class="name">file-exclamation-fil</div>
        <div class="fontclass">.vcuicon-file-exclamation-fil</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-file-add-fill"></i>
        <div class="name">file-add-fill</div>
        <div class="fontclass">.vcuicon-file-add-fill</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-file-fill"></i>
        <div class="name">file-fill</div>
        <div class="fontclass">.vcuicon-file-fill</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-file-excel-fill"></i>
        <div class="name">file-excel-fill</div>
        <div class="fontclass">.vcuicon-file-excel-fill</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-file-markdown-fill"></i>
        <div class="name">file-markdown-fill</div>
        <div class="fontclass">.vcuicon-file-markdown-fill</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-file-text-fill"></i>
        <div class="name">file-text-fill</div>
        <div class="fontclass">.vcuicon-file-text-fill</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-file-ppt-fill"></i>
        <div class="name">file-ppt-fill</div>
        <div class="fontclass">.vcuicon-file-ppt-fill</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-file-unknown-fill"></i>
        <div class="name">file-unknown-fill</div>
        <div class="fontclass">.vcuicon-file-unknown-fill</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-file-word-fill"></i>
        <div class="name">file-word-fill</div>
        <div class="fontclass">.vcuicon-file-word-fill</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-file-zip-fill"></i>
        <div class="name">file-zip-fill</div>
        <div class="fontclass">.vcuicon-file-zip-fill</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-file-pdf-fill"></i>
        <div class="name">file-pdf-fill</div>
        <div class="fontclass">.vcuicon-file-pdf-fill</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-file-image-fill"></i>
        <div class="name">file-image-fill</div>
        <div class="fontclass">.vcuicon-file-image-fill</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-diff-fill"></i>
        <div class="name">diff-fill</div>
        <div class="fontclass">.vcuicon-diff-fill</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-file-copy-fill"></i>
        <div class="name">file-copy-fill</div>
        <div class="fontclass">.vcuicon-file-copy-fill</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-snippets-fill"></i>
        <div class="name">snippets-fill</div>
        <div class="fontclass">.vcuicon-snippets-fill</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-batchfolding-fill"></i>
        <div class="name">batch folding-fill</div>
        <div class="fontclass">.vcuicon-batchfolding-fill</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-reconciliation-fill"></i>
        <div class="name">reconciliation-fill</div>
        <div class="fontclass">.vcuicon-reconciliation-fill</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-folder-add-fill"></i>
        <div class="name">folder-add-fill</div>
        <div class="fontclass">.vcuicon-folder-add-fill</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-folder-fill"></i>
        <div class="name">folder-fill</div>
        <div class="fontclass">.vcuicon-folder-fill</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-folder-open-fill"></i>
        <div class="name">folder-open-fill</div>
        <div class="fontclass">.vcuicon-folder-open-fill</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-database-fill"></i>
        <div class="name">database-fill</div>
        <div class="fontclass">.vcuicon-database-fill</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-container-fill"></i>
        <div class="name">container-fill</div>
        <div class="fontclass">.vcuicon-container-fill</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-sever-fill"></i>
        <div class="name">sever-fill</div>
        <div class="fontclass">.vcuicon-sever-fill</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-calendar-check-fill"></i>
        <div class="name">calendar-check-fill</div>
        <div class="fontclass">.vcuicon-calendar-check-fill</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-image-fill"></i>
        <div class="name">image-fill</div>
        <div class="fontclass">.vcuicon-image-fill</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-idcard-fill"></i>
        <div class="name">id card-fill</div>
        <div class="fontclass">.vcuicon-idcard-fill</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-creditcard-fill"></i>
        <div class="name">credit card-fill</div>
        <div class="fontclass">.vcuicon-creditcard-fill</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-fund-fill"></i>
        <div class="name">fund-fill</div>
        <div class="fontclass">.vcuicon-fund-fill</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-read-fill"></i>
        <div class="name">read-fill</div>
        <div class="fontclass">.vcuicon-read-fill</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-contacts-fill"></i>
        <div class="name">contacts-fill</div>
        <div class="fontclass">.vcuicon-contacts-fill</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-delete-fill"></i>
        <div class="name">delete-fill</div>
        <div class="fontclass">.vcuicon-delete-fill</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-notification-fill"></i>
        <div class="name">notification-fill</div>
        <div class="fontclass">.vcuicon-notification-fill</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-flag-fill"></i>
        <div class="name">flag-fill</div>
        <div class="fontclass">.vcuicon-flag-fill</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-moneycollect-fill"></i>
        <div class="name">money collect-fill</div>
        <div class="fontclass">.vcuicon-moneycollect-fill</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-medicinebox-fill"></i>
        <div class="name">medicine box-fill</div>
        <div class="fontclass">.vcuicon-medicinebox-fill</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-rest-fill"></i>
        <div class="name">rest-fill</div>
        <div class="fontclass">.vcuicon-rest-fill</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-shopping-fill"></i>
        <div class="name">shopping-fill</div>
        <div class="fontclass">.vcuicon-shopping-fill</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-skin-fill"></i>
        <div class="name">skin-fill</div>
        <div class="fontclass">.vcuicon-skin-fill</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-video-fill"></i>
        <div class="name">video-fill</div>
        <div class="fontclass">.vcuicon-video-fill</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-sound-fill"></i>
        <div class="name">sound-fill</div>
        <div class="fontclass">.vcuicon-sound-fill</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-bulb-fill"></i>
        <div class="name">bulb-fill</div>
        <div class="fontclass">.vcuicon-bulb-fill</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-bell-fill"></i>
        <div class="name">bell-fill</div>
        <div class="fontclass">.vcuicon-bell-fill</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-filter-fill"></i>
        <div class="name">filter-fill</div>
        <div class="fontclass">.vcuicon-filter-fill</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-fire-fill"></i>
        <div class="name">fire-fill</div>
        <div class="fontclass">.vcuicon-fire-fill</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-funnelplot-fill"></i>
        <div class="name">funnel plot-fill</div>
        <div class="fontclass">.vcuicon-funnelplot-fill</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-gift-fill"></i>
        <div class="name">gift-fill</div>
        <div class="fontclass">.vcuicon-gift-fill</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-hourglass-fill"></i>
        <div class="name">hourglass-fill</div>
        <div class="fontclass">.vcuicon-hourglass-fill</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-home-fill"></i>
        <div class="name">home-fill</div>
        <div class="fontclass">.vcuicon-home-fill</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-trophy-fill"></i>
        <div class="name">trophy-fill</div>
        <div class="fontclass">.vcuicon-trophy-fill</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-location-fill"></i>
        <div class="name">location-fill</div>
        <div class="fontclass">.vcuicon-location-fill</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-cloud-fill"></i>
        <div class="name">cloud-fill</div>
        <div class="fontclass">.vcuicon-cloud-fill</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-customerservice-fill"></i>
        <div class="name">customerservice-fill</div>
        <div class="fontclass">.vcuicon-customerservice-fill</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-experiment-fill"></i>
        <div class="name">experiment-fill</div>
        <div class="fontclass">.vcuicon-experiment-fill</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-eye-fill"></i>
        <div class="name">eye-fill</div>
        <div class="fontclass">.vcuicon-eye-fill</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-like-fill"></i>
        <div class="name">like-fill</div>
        <div class="fontclass">.vcuicon-like-fill</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-lock-fill"></i>
        <div class="name">lock-fill</div>
        <div class="fontclass">.vcuicon-lock-fill</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-unlike-fill"></i>
        <div class="name">unlike-fill</div>
        <div class="fontclass">.vcuicon-unlike-fill</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-star-fill"></i>
        <div class="name">star-fill</div>
        <div class="fontclass">.vcuicon-star-fill</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-unlock-fill"></i>
        <div class="name">unlock-fill</div>
        <div class="fontclass">.vcuicon-unlock-fill</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-alert-fill"></i>
        <div class="name">alert-fill</div>
        <div class="fontclass">.vcuicon-alert-fill</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-api-fill"></i>
        <div class="name">api-fill</div>
        <div class="fontclass">.vcuicon-api-fill</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-highlight-fill"></i>
        <div class="name">highlight-fill</div>
        <div class="fontclass">.vcuicon-highlight-fill</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-phone-fill"></i>
        <div class="name">phone-fill</div>
        <div class="fontclass">.vcuicon-phone-fill</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-edit-fill"></i>
        <div class="name">edit-fill</div>
        <div class="fontclass">.vcuicon-edit-fill</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-pushpin-fill"></i>
        <div class="name">pushpin-fill</div>
        <div class="fontclass">.vcuicon-pushpin-fill</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-rocket-fill"></i>
        <div class="name">rocket-fill</div>
        <div class="fontclass">.vcuicon-rocket-fill</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-thunderbolt-fill"></i>
        <div class="name">thunderbolt-fill</div>
        <div class="fontclass">.vcuicon-thunderbolt-fill</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-tag-fill"></i>
        <div class="name">tag-fill</div>
        <div class="fontclass">.vcuicon-tag-fill</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-wrench-fill"></i>
        <div class="name">wrench-fill</div>
        <div class="fontclass">.vcuicon-wrench-fill</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-tags-fill"></i>
        <div class="name">tags-fill</div>
        <div class="fontclass">.vcuicon-tags-fill</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-bank-fill"></i>
        <div class="name">bank-fill</div>
        <div class="fontclass">.vcuicon-bank-fill</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-camerv-fill"></i>
        <div class="name">camerv-fill</div>
        <div class="fontclass">.vcuicon-camerv-fill</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-error-fill"></i>
        <div class="name">error-fill</div>
        <div class="fontclass">.vcuicon-error-fill</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-crown-fill"></i>
        <div class="name">crown-fill</div>
        <div class="fontclass">.vcuicon-crown-fill</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-mail-fill"></i>
        <div class="name">mail-fill</div>
        <div class="fontclass">.vcuicon-mail-fill</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-car-fill"></i>
        <div class="name">car-fill</div>
        <div class="fontclass">.vcuicon-car-fill</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-printer-fill"></i>
        <div class="name">printer-fill</div>
        <div class="fontclass">.vcuicon-printer-fill</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-shop-fill"></i>
        <div class="name">shop-fill</div>
        <div class="fontclass">.vcuicon-shop-fill</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-setting-fill"></i>
        <div class="name">setting-fill</div>
        <div class="fontclass">.vcuicon-setting-fill</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-USB-fill"></i>
        <div class="name">USB-fill</div>
        <div class="fontclass">.vcuicon-USB-fill</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-golden-fill"></i>
        <div class="name">golden-fill</div>
        <div class="fontclass">.vcuicon-golden-fill</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-build-fill"></i>
        <div class="name">build-fill</div>
        <div class="fontclass">.vcuicon-build-fill</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-boxplot-fill"></i>
        <div class="name">box plot-fill</div>
        <div class="fontclass">.vcuicon-boxplot-fill</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-sliders-fill"></i>
        <div class="name">sliders-fill</div>
        <div class="fontclass">.vcuicon-sliders-fill</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-alibaba"></i>
        <div class="name">alibaba</div>
        <div class="fontclass">.vcuicon-alibaba</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-alibabacloud"></i>
        <div class="name">alibabacloud</div>
        <div class="fontclass">.vcuicon-alibabacloud</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-antdesign"></i>
        <div class="name">ant design</div>
        <div class="fontclass">.vcuicon-antdesign</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-ant-cloud"></i>
        <div class="name">ant-cloud</div>
        <div class="fontclass">.vcuicon-ant-cloud</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-behance"></i>
        <div class="name">behance</div>
        <div class="fontclass">.vcuicon-behance</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-googleplus"></i>
        <div class="name">google plus</div>
        <div class="fontclass">.vcuicon-googleplus</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-medium"></i>
        <div class="name">medium</div>
        <div class="fontclass">.vcuicon-medium</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-google"></i>
        <div class="name">google</div>
        <div class="fontclass">.vcuicon-google</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-IE"></i>
        <div class="name">IE</div>
        <div class="fontclass">.vcuicon-IE</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-amazon"></i>
        <div class="name">amazon</div>
        <div class="fontclass">.vcuicon-amazon</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-slack"></i>
        <div class="name">slack</div>
        <div class="fontclass">.vcuicon-slack</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-alipay"></i>
        <div class="name">alipay</div>
        <div class="fontclass">.vcuicon-alipay</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-taobao"></i>
        <div class="name">taobao</div>
        <div class="fontclass">.vcuicon-taobao</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-zhihu"></i>
        <div class="name">zhihu</div>
        <div class="fontclass">.vcuicon-zhihu</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-HTML"></i>
        <div class="name">HTML5</div>
        <div class="fontclass">.vcuicon-HTML</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-linkedin"></i>
        <div class="name">linkedin</div>
        <div class="fontclass">.vcuicon-linkedin</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-yahoo"></i>
        <div class="name">yahoo</div>
        <div class="fontclass">.vcuicon-yahoo</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-facebook"></i>
        <div class="name">facebook</div>
        <div class="fontclass">.vcuicon-facebook</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-skype"></i>
        <div class="name">skype</div>
        <div class="fontclass">.vcuicon-skype</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-CodeSandbox"></i>
        <div class="name">CodeSandbox</div>
        <div class="fontclass">.vcuicon-CodeSandbox</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-chrome"></i>
        <div class="name">chrome</div>
        <div class="fontclass">.vcuicon-chrome</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-codepen"></i>
        <div class="name">codepen</div>
        <div class="fontclass">.vcuicon-codepen</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-aliwangwang"></i>
        <div class="name">aliwangwang</div>
        <div class="fontclass">.vcuicon-aliwangwang</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-apple"></i>
        <div class="name">apple</div>
        <div class="fontclass">.vcuicon-apple</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-android"></i>
        <div class="name">android</div>
        <div class="fontclass">.vcuicon-android</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-sketch"></i>
        <div class="name">sketch</div>
        <div class="fontclass">.vcuicon-sketch</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-Gitlab"></i>
        <div class="name">Gitlab</div>
        <div class="fontclass">.vcuicon-Gitlab</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-dribbble"></i>
        <div class="name">dribbble</div>
        <div class="fontclass">.vcuicon-dribbble</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-instagram"></i>
        <div class="name">instagram</div>
        <div class="fontclass">.vcuicon-instagram</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-reddit"></i>
        <div class="name">reddit</div>
        <div class="fontclass">.vcuicon-reddit</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-windows"></i>
        <div class="name">windows</div>
        <div class="fontclass">.vcuicon-windows</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-yuque"></i>
        <div class="name">yuque</div>
        <div class="fontclass">.vcuicon-yuque</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-Youtube"></i>
        <div class="name">Youtube</div>
        <div class="fontclass">.vcuicon-Youtube</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-Gitlab-fill"></i>
        <div class="name">Gitlab-fill</div>
        <div class="fontclass">.vcuicon-Gitlab-fill</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-dropbox"></i>
        <div class="name">dropbox</div>
        <div class="fontclass">.vcuicon-dropbox</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-dingtalk"></i>
        <div class="name">dingtalk</div>
        <div class="fontclass">.vcuicon-dingtalk</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-android-fill"></i>
        <div class="name">android-fill</div>
        <div class="fontclass">.vcuicon-android-fill</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-apple-fill"></i>
        <div class="name">apple-fill</div>
        <div class="fontclass">.vcuicon-apple-fill</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-HTML-fill"></i>
        <div class="name">HTML5-fill</div>
        <div class="fontclass">.vcuicon-HTML-fill</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-windows-fill"></i>
        <div class="name">windows-fill</div>
        <div class="fontclass">.vcuicon-windows-fill</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-QQ"></i>
        <div class="name">QQ</div>
        <div class="fontclass">.vcuicon-QQ</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-twitter"></i>
        <div class="name">twitter</div>
        <div class="fontclass">.vcuicon-twitter</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-skype-fill"></i>
        <div class="name">skype-fill</div>
        <div class="fontclass">.vcuicon-skype-fill</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-weibo"></i>
        <div class="name">weibo</div>
        <div class="fontclass">.vcuicon-weibo</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-yuque-fill"></i>
        <div class="name">yuque-fill</div>
        <div class="fontclass">.vcuicon-yuque-fill</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-Youtube-fill"></i>
        <div class="name">Youtube-fill</div>
        <div class="fontclass">.vcuicon-Youtube-fill</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-yahoo-fill"></i>
        <div class="name">yahoo-fill</div>
        <div class="fontclass">.vcuicon-yahoo-fill</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-wechat-fill"></i>
        <div class="name">wechat-fill</div>
        <div class="fontclass">.vcuicon-wechat-fill</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-chrome-fill"></i>
        <div class="name">chrome-fill</div>
        <div class="fontclass">.vcuicon-chrome-fill</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-alipay-circle-fill"></i>
        <div class="name">alipay-circle-fill</div>
        <div class="fontclass">.vcuicon-alipay-circle-fill</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-aliwangwang-fill"></i>
        <div class="name">aliwangwang-fill</div>
        <div class="fontclass">.vcuicon-aliwangwang-fill</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-behance-circle-fill"></i>
        <div class="name">behance-circle-fill</div>
        <div class="fontclass">.vcuicon-behance-circle-fill</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-amazon-circle-fill"></i>
        <div class="name">amazon-circle-fill</div>
        <div class="fontclass">.vcuicon-amazon-circle-fill</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-codepen-circle-fill"></i>
        <div class="name">codepen-circle-fill</div>
        <div class="fontclass">.vcuicon-codepen-circle-fill</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-CodeSandbox-circle-f"></i>
        <div class="name">CodeSandbox-circle-f</div>
        <div class="fontclass">.vcuicon-CodeSandbox-circle-f</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-dropbox-circle-fill"></i>
        <div class="name">dropbox-circle-fill</div>
        <div class="fontclass">.vcuicon-dropbox-circle-fill</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-github-fill"></i>
        <div class="name">github-fill</div>
        <div class="fontclass">.vcuicon-github-fill</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-dribbble-circle-fill"></i>
        <div class="name">dribbble-circle-fill</div>
        <div class="fontclass">.vcuicon-dribbble-circle-fill</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-googleplus-circle-f"></i>
        <div class="name">google plus-circle-f</div>
        <div class="fontclass">.vcuicon-googleplus-circle-f</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-medium-circle-fill"></i>
        <div class="name">medium-circle-fill</div>
        <div class="fontclass">.vcuicon-medium-circle-fill</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-QQ-circle-fill"></i>
        <div class="name">QQ-circle-fill</div>
        <div class="fontclass">.vcuicon-QQ-circle-fill</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-IE-circle-fill"></i>
        <div class="name">IE-circle-fill</div>
        <div class="fontclass">.vcuicon-IE-circle-fill</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-google-circle-fill"></i>
        <div class="name">google-circle-fill</div>
        <div class="fontclass">.vcuicon-google-circle-fill</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-dingtalk-circle-fill"></i>
        <div class="name">dingtalk-circle-fill</div>
        <div class="fontclass">.vcuicon-dingtalk-circle-fill</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-sketch-circle-fill"></i>
        <div class="name">sketch-circle-fill</div>
        <div class="fontclass">.vcuicon-sketch-circle-fill</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-slack-circle-fill"></i>
        <div class="name">slack-circle-fill</div>
        <div class="fontclass">.vcuicon-slack-circle-fill</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-twitter-circle-fill"></i>
        <div class="name">twitter-circle-fill</div>
        <div class="fontclass">.vcuicon-twitter-circle-fill</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-taobao-circle-fill"></i>
        <div class="name">taobao-circle-fill</div>
        <div class="fontclass">.vcuicon-taobao-circle-fill</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-weibo-circle-fill"></i>
        <div class="name">weibo-circle-fill</div>
        <div class="fontclass">.vcuicon-weibo-circle-fill</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-zhihu-circle-fill"></i>
        <div class="name">zhihu-circle-fill</div>
        <div class="fontclass">.vcuicon-zhihu-circle-fill</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-reddit-circle-fill"></i>
        <div class="name">reddit-circle-fill</div>
        <div class="fontclass">.vcuicon-reddit-circle-fill</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-alipay-square-fill"></i>
        <div class="name">alipay-square-fill</div>
        <div class="fontclass">.vcuicon-alipay-square-fill</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-dingtalk-square-fill"></i>
        <div class="name">dingtalk-square-fill</div>
        <div class="fontclass">.vcuicon-dingtalk-square-fill</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-CodeSandbox-square-f"></i>
        <div class="name">CodeSandbox-square-f</div>
        <div class="fontclass">.vcuicon-CodeSandbox-square-f</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-behance-square-fill"></i>
        <div class="name">behance-square-fill</div>
        <div class="fontclass">.vcuicon-behance-square-fill</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-amazon-square-fill"></i>
        <div class="name">amazon-square-fill</div>
        <div class="fontclass">.vcuicon-amazon-square-fill</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-codepen-square-fill"></i>
        <div class="name">codepen-square-fill</div>
        <div class="fontclass">.vcuicon-codepen-square-fill</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-dribbble-square-fill"></i>
        <div class="name">dribbble-square-fill</div>
        <div class="fontclass">.vcuicon-dribbble-square-fill</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-dropbox-square-fill"></i>
        <div class="name">dropbox-square-fill</div>
        <div class="fontclass">.vcuicon-dropbox-square-fill</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-facebook-fill"></i>
        <div class="name">facebook-fill</div>
        <div class="fontclass">.vcuicon-facebook-fill</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-googleplus-square-f"></i>
        <div class="name">google plus-square-f</div>
        <div class="fontclass">.vcuicon-googleplus-square-f</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-google-square-fill"></i>
        <div class="name">google-square-fill</div>
        <div class="fontclass">.vcuicon-google-square-fill</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-instagram-fill"></i>
        <div class="name">instagram-fill</div>
        <div class="fontclass">.vcuicon-instagram-fill</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-IE-square-fill"></i>
        <div class="name">IE-square-fill</div>
        <div class="fontclass">.vcuicon-IE-square-fill</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-medium-square-fill"></i>
        <div class="name">medium-square-fill</div>
        <div class="fontclass">.vcuicon-medium-square-fill</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-linkedin-fill"></i>
        <div class="name">linkedin-fill</div>
        <div class="fontclass">.vcuicon-linkedin-fill</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-QQ-square-fill"></i>
        <div class="name">QQ-square-fill</div>
        <div class="fontclass">.vcuicon-QQ-square-fill</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-reddit-square-fill"></i>
        <div class="name">reddit-square-fill</div>
        <div class="fontclass">.vcuicon-reddit-square-fill</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-twitter-square-fill"></i>
        <div class="name">twitter-square-fill</div>
        <div class="fontclass">.vcuicon-twitter-square-fill</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-sketch-square-fill"></i>
        <div class="name">sketch-square-fill</div>
        <div class="fontclass">.vcuicon-sketch-square-fill</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-slack-square-fill"></i>
        <div class="name">slack-square-fill</div>
        <div class="fontclass">.vcuicon-slack-square-fill</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-taobao-square-fill"></i>
        <div class="name">taobao-square-fill</div>
        <div class="fontclass">.vcuicon-taobao-square-fill</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-weibo-square-fill"></i>
        <div class="name">weibo-square-fill</div>
        <div class="fontclass">.vcuicon-weibo-square-fill</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-zhihu-square-fill"></i>
        <div class="name">zhihu-square-fill</div>
        <div class="fontclass">.vcuicon-zhihu-square-fill</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-zoomout"></i>
        <div class="name">zoom out</div>
        <div class="fontclass">.vcuicon-zoomout</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-apartment"></i>
        <div class="name">apartment</div>
        <div class="fontclass">.vcuicon-apartment</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-audio"></i>
        <div class="name">audio</div>
        <div class="fontclass">.vcuicon-audio</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-audio-fill"></i>
        <div class="name">audio-fill</div>
        <div class="fontclass">.vcuicon-audio-fill</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-robot"></i>
        <div class="name">robot</div>
        <div class="fontclass">.vcuicon-robot</div>
      </li>

      <li>
        <i class="vcuicon vcuicon-zoomin"></i>
        <div class="name">zoom in</div>
        <div class="fontclass">.vcuicon-zoomin</div>
      </li>

    </ul>

  </div>
</template>
<script>
import headerInfo from './header-info.md';
import api from './api.md';
export default {
  components: {
    headerInfo,
    api
  },
  data() {
    return {
    }
  },
  methods: {
  },
}
</script>
<style>
.icon_lists {
  width: 90% !important;
}

.icon_lists li {
  float: left;
  width: 100px;
  height: 180px;
  text-align: center;
  list-style: none !important;
}
.icon_lists .vcuicon {
  font-size: 42px;
  line-height: 100px;
  margin: 10px 0;
  color: #333;
  -webkit-transition: font-size 0.25s ease-out 0s;
  -moz-transition: font-size 0.25s ease-out 0s;
  transition: font-size 0.25s ease-out 0s;
}
.icon_lists .vcuicon:hover {
  font-size: 100px;
}
</style>


