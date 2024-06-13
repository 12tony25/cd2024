var tipuesearch = {"pages": [{'title': 'About', 'text': '網頁: https://12tony25.github.io/cd2024/ \n 網誌: https://12tony25.github.io/cd2024/blog \n 簡報: https://12tony25.github.io/cd2024/reveal \n 倉儲: https://github.com/12tony25/cd2024.git \n', 'tags': '', 'url': 'About.html'}, {'title': 'cmsimde', 'text': "SMap  - SiteMap - 依照階次列出網站的所有頁面. \n EditA  - Edit All page - 將所有頁面放入編輯模式中, 主要用來處理頁面搬遷, 刪除或決定衝突頁面內容版本. \n Edit  - Edit page - 先選擇要編輯的單一頁面後, 再點選 Edit, 即可進入單一頁面的編輯模式. \n Config  - Configure Site - 編輯頁面標題與管理者密碼. \n Search  - 動態頁面內容的關鍵字搜尋. \n IUpload  - Image file Upload - 圖檔的上傳功能, 可以上傳 jpg, png 與 gif 檔案, 其中若在手機上傳圖檔, 系統會自動將圖片檔案縮小為 800x800 大小.. \n IList  - Image file List - 列出可以直接在頁面編輯模式中引用的圖片檔案. \n FUpload  - File Upload - 一般檔案的上傳功能, 目前可以上傳的檔案副檔名包括 'jpg', 'png', 'gif', '7z', 'pdf', 'zip', 'ttt', 'stl', 'txt', 'html', 'mp4' 等, 使用者可以自行修改. \n FList  - File List - 列出可以直接在頁面編輯模式中引用的上傳檔案. \n Logout  - 登出頁面編輯模式. \n Convert  - 將動態網站中位於 config/content.htm 檔案, 透過分頁設定轉為 content 目錄中的靜態網頁. \n acp  - git add, git commit 與 git push, 通常只有在 localhost 或自架主機上利用網頁表單協助將倉儲改版內容推向 Github 倉儲. \n SStatic  - Start Static Site - 利用 Python 啟動網站伺服功能, 可以讓使用者檢查轉檔後的靜態網站內容. \n RStatic  - Replit Static Site URL - 僅用於 Replit 模式, 當使用者按下 SStatic 後, 可以按下 RStatic 進入當下尚未推向 Github Pages 的靜態網站. \n 80  - 由 init.py 中 static_port 所決定的連結字串, 一般不使用 80, 只有在 Replit 中為了與動態網站共用 port, 才特別設為 80. \n \n", 'tags': '', 'url': 'cmsimde.html'}, {'title': 'Replit', 'text': 'https://replit.com \n 利用 init_replit 指令安裝所需 Python 模組 chmod u+x init_replit ./init_replit \n On Replit: \n .replit: python3 main.py \n chmod u+x cms init_replit \n ./init_replit \n for cmsimde_site (not needed): git submodule update --init --recursive \n for cmsimde: pip install flask flask_cors bs4 lxml pelican markdown gevent \n password generator:\xa0 https://mde.tw/cmsite/content/Brython.html?src=https://gist.githubusercontent.com/mdecycu/b92b16621dd0246c352cf13d6463b333/raw/0bfa669750aba3abe48554509bbd43d65b6e5c82/hashlib_password_generator.py \xa0 \n \n for IPv6 only Ubuntu: .ssh 目錄中的 config, 將 SSH session 名稱設為 github.com: Host github.com User git Hostname github.com ProxyCommand /usr/bin/ncat --proxy p4.cycu.org:3128 --proxy-type http %h %p for Replit: .ssh 目錄中的 config, 將 SSH session 名稱設為 github.com: Host github.com User git Hostname github.co #since Replit works for IPv4, therefore no ProxyCommand setting needed #ProxyCommand /usr/bin/ncat --proxy p4.cycu.org:3128 --proxy-type http %h %p \n \n \n', 'tags': '', 'url': 'Replit.html'}, {'title': 'Brython', 'text': 'https://en.wikipedia.org/wiki/Python_(programming_language) \n Examples: \n https://gist.github.com/mdecycu/d9082d678096bd58378d6afe2c7fa05d \n https://www.geeksforgeeks.org/python-programming-examples/ \n https://www.programiz.com/python-programming/examples \n https://www.freecodecamp.org/news/python-code-examples-sample-script-coding-tutorial-for-beginners/ \n Python Tutorial: \n https://docs.python.org/3/tutorial/ \n An informal introduction to Python \n Indentation (Python 採 4 個 Spaces 縮排, 以界定執行範圍) \n Variables ( Python Keywords ) \n Comments (# 單行註解, 三個單引號或三個雙引號標註多行註解) \n Numbers  (整數 int(), 浮點數 float()) \n Strings  (字串) \n print (Python 內建函式,  print()  函式) \n Python control flow tools \n for \n if \n range \n open \n read \n lists \n tuples \n dictionaries \n functions \n try ... except \n break \n pass \n classes \n 這個頁面 demo 如何在同一頁面下納入多個線上 Ace 編輯器與執行按鈕 ( practice_html.txt  動態頁面超文件). \n practice_html.txt  動態頁面超文件應該可以在啟動 Brython 時, 設定將 .py 檔案放入 downloads/py 目錄中引用. \n 亦即將所有對應的 html 也使用 Brython 產生, 然後寫為  class  後, 在範例導入時透過  instance  引用. \n <!-- 啟動 Brython -->\n<script>\nwindow.onload=function(){\nbrython({debug:1, pythonpath:[\'./../cmsimde/static/\',\'./../downloads/py/\']});\n}\n</script> \n 從 1 累加到 100: \n 1 add to 100 \n 將 iterable 與 iterator  相關說明 , 利用 Brython 與 Ace Editor 整理在這個頁面. \n  導入 brython 程式庫  \n \n \n \n \n  啟動 Brython  \n \n \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src1"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n \n \n \n  add 1 to 100 開始  \n \n \n  add 1 to 100 結束 \n  editor1 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor1 結束   ##########################################  \n 從 1 累加到 100 part2: \n 1 add to 100 cango_three_gears BSnake AI Tetris Rotating Block \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src2"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  add 1 to 100 part2 開始  \n \n \n  add 1 to 100 part2 結束 \n  editor2 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n <<<<<<< HEAD \n', 'tags': '', 'url': 'Brython.html'}, {'title': '翻譯.', 'text': 'https://drive.google.com/file/d/1Lbt5pvrByu2dFweOda84GZLcXS1PjxgV/view?usp=drive_link \n', 'tags': '', 'url': '翻譯..html'}, {'title': '影片連結.', 'text': 'cd2024 2b w4 如何上傳 LaTeX 範例檔案並利用 Actions 在線上編譯出 pdf 12 (1).mp4 https://drive.google.com/file/d/1sZrPHx13sINiFwkIQI15R9GvXPp4r5It/view?usp=drive_link \n cd2024 2b w4 以第六組為例, 利用 Codespaces 改版 11 (1).mp4 https://drive.google.com/file/d/1Cl8OQjroQYqbNHq9d_-SxpR7WLByFUxD/view?usp=drive_link \n', 'tags': '', 'url': '影片連結..html'}, {'title': '期中影片', 'text': 'https://drive.google.com/file/d/1hTZFKj8tgyO5NFEMI8-zZHVzwDXer-_T/view?usp=drive_link \n ======= \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n', 'tags': '', 'url': '期中影片.html'}, {'title': '翻譯論文', 'text': 'https://drive.google.com/file/d/1Lbt5pvrByu2dFweOda84GZLcXS1PjxgV/view?usp=drive_link \n \\documentclass[12pt,a4paper]{report} %紙張設定 \\usepackage{xeCJK}%中文字體模組 \\setCJKmainfont{TW-Kai} %設定中文字體 \\usepackage[]{graphicx} \\begin{document} \n \\includegraphics[width=12cm]{22/1.png} \\begin{center} Figure 49 Overview of the products after manufacturing \n 圖49 產品製造後概覽 \\end{center} This give us the opportunity to use ECOs for their actual purpose, stablish and control a change to the product item. The changes to be carried out were on the CAD file regarding the product item. As before we can start the ECO and fill in the description, then the files are uploaded, and the ECO (Figure 50) goes through necessary validation before been made effective.\\\\ 這使我們有機會將 ECO 用於其實際目的，建立和控制 更改為產品項。要執行的更改在 CAD 檔上，涉及 產品項。和以前一樣，我們可以啟動 ECO 並填寫描述，然後檔是 上傳，ECO （圖 50） 在進行之前經過必要的驗證 有效。\\\\  \\includegraphics[width=12cm]{22/2.png} \\begin{center}  Figure 50 Depiction of the validation of the ECO    圖 50 ECO 驗證說明 \\end{center} \n \\begin{center} The validation procedure basically is set to ask for validation of someone with proper access permissions or specific personnel. In this case, the master account was used to validate and make effective as can be seen from the log in the right side of the image. Once the change   驗證程式基本上是設置為要求對某人進行適當的驗證 存取權限或特定人員。在本例中，主帳戶用於驗證 並使其有效，從圖像右側的日誌中可以看出。一旦改變 \n \\newpage is applied you can see that the product item version has been iterated to version 2 as well as a new ECO has been added to the list of ECOs linked to the item (Figure 51). \n 應用後，您可以看到產品項版本已反覆運算到版本 2 以及 與該專案連結的 ECO 清單中添加了一個新的 ECO（圖 51）。 \n \\includegraphics[width=12cm]{22/3.png} \\end{center}\\\\ \\begin{center}  Figure 51 Depiction of changes provoked by the ECO to product item    圖 51 ECO 對產品專案引起的變化的描述    \\end{center} \\begin{center} That update is followed by another batch of prototypes, the cycle would continue until the prototypes produced satisfy the criteria stablished by the design team. In the case of this simulation it was assumed that one correction was representative enough of this process. This finalizes the development from idea to prototype.   該更新之後是另一批原型，該週期將持續到 生產的原型符合設計團隊制定的標準。在這種情況下 模擬 假設一個修正足以代表這個過程。這 完成從想法到原型的開發。 \\end{center}\\\\ \\begin{center} 5.4.2. Process Plan - Production Test Run - Production \n 5.4.2. 工藝計畫-生產試運行-生產  \\end{center} \\begin{center} Now that the prototype phase is complete the focus will shift to the process. As stablished before, it was decided to separate the prototype products from the final product item to isolate the product from the production process during the development. This way many aspects of development of the product could be evaluated in an ordered manner. Now that the process is been developed it seems reasonable to create the product items that will represent the final products since the product of a successful run of the process will be the production ready samples of it (Figure 52). \n 現在原型階段已經完成，重點將轉移到流程上。已確定 以前，決定將原型產品與最終產品專案分開進行隔離 產品從生產過程中的開發過程開始。這樣一來，很多方面 產品的開發可以有序地進行評估。現在，該過程 被開發出來，創建將代表最終的產品專案似乎是合理的 產品由於產品成功運行的過程將準備好生產 它的樣本（圖52）。 \\newpage \\includegraphics[width=12cm]{22/4.png} \\end{center} \\begin{center} Figure 52 Sectioned diagram regarding Process development \n 圖 52 工藝開發剖面圖\\\\ Other product items that created were the raw materials for the injection molding (which are plastic pellets that are fed into the machine to be melted and injected). All that was done in identical manner to when we create the prototype products with the exception that the Alpha case (Figure 53) now is marked as sellable and its sale costs are now relevant (Figure 54).   創造的其他產品專案是注塑成型的原材料（其中 是送入機器進行熔化和注射的塑膠顆粒）。所有這一切都完成了 以與我們創建原型產品時相同的方式，除了 Alpha 案例（圖 53）現在被標記為可售，其銷售成本現在相關（圖 54). \n \\includegraphics[width=12cm]{22/5.png} \\end{center}\\\\ \\begin{center} Figure 53 Render of how the final product should look like \n 圖 53 最終產品外觀的渲染圖 \\includegraphics[width=12cm]{22/6.png} \\end{center}\\\\ \\begin{center} Figure 54 Product Item of the Alpha Case \n 圖 54 Alpha 案例的產品項 \n Once the product items are taken care of, we need to go back to what aspect of the process will be tracked using Odoo in the context of this simulation. As it was hinted previously when talking about injection molding the key aspect of change regarding the process are the molds used by the machines to create the parts. For this simulation it was considered that the mold development will follow a very similar procedure of the development of the product, this should be more clear from the following diagram (Figure 55). \n 一旦產品專案得到處理，我們需要回到流程的哪個方面 將在此模擬的上下文中使用Odoo進行跟蹤。正如之前暗示的那樣，當 談到注塑成型，工藝變化的關鍵方面是模具 機器用來製造零件。對於這個模擬，認為模具 開發將遵循與產品開發非常相似的程式，這 從下圖（圖 55）中應該更清楚。 \\includegraphics[width=12cm]{22/7.png} \\end{center}\\\\ \\begin{center} Figure 55 Diagram regarding process development for mold \n 圖55 模具工藝開發示意圖  \\newpage \\end{center} \\begin{center} The production of a prototype mold by 3D printing follows the same standard procedure for prototyping used for the product. So far, the mold is considered a product like any other, this reveals another small weakness regarding Odoo ability to represent the totality of the process. The reader will notice that although the mold is been treated as a product (because it is been manufactured) it should in fact be considered a tool or piece of equipment as well. \n 通過3D列印生產原型模具遵循相同的標準程式 用於產品原型設計。到目前為止，模具與其他任何產品一樣被認為是一種產品， 這揭示了Odoo表示整體能力的另一個小弱點 過程。讀者會注意到，儘管模具被視為產品（因為 它被製造出來）實際上也應該被視為一種工具或設備。 \\end{center} \\begin{center} Although Odoo does makes this distinction between equipment and products, it has no integration regarding the situations where one is both. In addition, as explained before, there is no way of uploading CAD files to an equipment item or linking an equipment to a range of tools. I.e. Odoo does not consider a vertical drill with x number of drill bits to make different size holes. The closest it can do from the perspective of equipment/maintenance is consider the vertical drill a workstation and each drill size a separate equipment within the station with an assigned set up time. This is ok if you ignore that the drill bit is a product. \n 儘管Odoo確實在設備和產品之間進行了這種區分，但它沒有 關於兩者兼而有之的情況的整合。此外，如前所述，還有 無法將 CAD 檔上傳到設備專案或將設備連結到範圍 的工具。即 Odoo 不考慮使用具有 x 個鑽頭的立式鑽頭來製造 不同尺寸的孔。從設備/維護的角度來看，它能做的最接近的是 將立式鑽機視為一個工作站，每個鑽機尺寸都是一個單獨的設備。 具有指定設置時間的工作站。如果您忽略鑽頭是產品，則沒關係。 \\end{center} \\begin{center} All of this is reasonable from the perspective of an ERP system but not ideal from the perspective of PLM because it shows gaps in between items that should represent the same thing. In production from the manufacturing application what is set is the work center station not the equipment (see Figure 41). In the maintenance app there is no connection to the fact that the tool is a consumable product, you can consider a maintenance schedule and even make a useful life parameters but because it is an equipment you can’t have reserve tools like drill bits in inventory like consumables. \n \n 從ERP系統的角度來看，所有這些都是合理的，但從ERP系統的角度來看並不理想。 PLM 的視角，因為它顯示了應該代表相同的項目之間的差距 東西。在生產中，從製造應用程式開始，設置的是工作中心站 而不是設備（見圖 41）。在維護應用程式中，與事實沒有聯繫 該工具是消耗品，您可以考慮維護計畫，甚至 做一個有用的壽命參數，但因為它是設備，你不能有備用工具 就像庫存中的鑽頭一樣，就像消耗品一樣。 \\end{center} \\begin{center} The result is that it becomes very difficult to represent testing with a prototype mold. If you do as the software is designed for you need to create a separate ECO to apply every operation for each different iteration of the mold development to the necessary BOMs and make a test run (Figure 56). At this point, considering the maintenance aspect of the mold as a tool just does not make sense because it would entails filing in metadata in the maintenance App by hand for every prototype mold iteration all without causing any difference from the manufacturing perspective. The PROTO mold item ends up been used only for the sake of tracking material and holding files as the mold is improved. \n 結果是，用原型模具表示測試變得非常困難。如果 您可以按照軟體的設計進行操作，您需要創建一個單獨的 ECO 來應用每個 對模具開發的每次不同反覆運算進行操作，以達到必要的 BOM 和 進行測試運行（圖 56）。在這一點上，考慮模具的維護方面為 一個工具是沒有意義的，因為它需要在維護中歸檔中繼資料 手動應用程式用於每個原型模具反覆運算，而不會與 製造業視角。PROTO 模具項目最終僅用於 隨著模具的改進，跟蹤材料並保持檔。 \n \\includegraphics[width=12cm]{22/8.png} \\end{center}\\\\ \\begin{center} Figure 56 ECO example of update procedure of BOM \n 圖56 BOM更新程式的ECO示例 \\end{center} \\begin{center} Taking this in consideration, in simulation it will be produced one 3D printed mold for each part of the alpha case. Then ECOs for the prototype parts of the case will be created to be applied to the parts BOMs updating the operation from 3D printing to injection molding test run with prototype molds. \n 考慮到這一點，在模擬中，它將生產一個 3D 列印模具用於 Alpha 案例的每個部分。然後，將創建案例原型部件的 ECO 以 應用於零件 BOM，將操作從 3D 列印更新為注塑成型 使用原型模具進行試運行。 \\end{center} \\begin{center} At this point we could differentiate the product prototype from the test run prototype by making a new prototype product item, however considering our rapidly growing list of product items (Figure 57) it was concluded that it would be just better for depiction in this work to modify the previously produced product prototypes (made with 3D printing) and just \n 在這一點上，我們可以將產品原型與測試運行原型區分開來 然而，考慮到我們快速增長的清單，製作一個新的原型產品專案 產品專案（圖 57）得出的結論是，最好在此進行描述 努力修改以前生產的產品原型（用 3D 列印製成），然後 \\newpage use the same items. We can do this because those prototypes have already served their purpose. \n 只是 使用相同的項目。我們可以這樣做，因為這些原型已經為他們的 目的。 \\end{center}\\\\ \\begin{center} \\includegraphics[width=12cm]{22/9.png} \n Figure 57 Overview of product items at this stage of the simulation \n 圖 57 類比此階段的產品專案概覽 \\end{center} \\begin{center} After the mold have been created and the BOMs for the prototypes are updated to include the injection stations and the proper operations (specifying the use of the molds) the next step is to do a production test run of prototype. Again that is done by emitting the MO completing the generated WOs (see Figure 46 and Figure 47 of previous section). \n 創建模具後，原型的 BOM 將更新為 包括 注塑站和正確操作（指定模具的使用）下一步 就是做原型的生產試運行。同樣，這是通過發出 MO 完成來完成的 生成的 WO（參見上一節的圖 46 和圖 47）。 \\end{center} \\begin{center} The result of the production is used to check for dimension and fitting, if correction is needed the ECOs would be emitted again as seen in Figure 56, and a new iteration of production and testing would be carried out. This process would repeat until the product is satisfactory enough to justify the production of the CNC machined molds that would be used in mass production. \n 生產結果用於檢查尺寸和擬合度（如果校正是 需要再次排放 ECO，如圖 56 所示，並且 將進行生產和測試。此過程將重複，直到產品 令人滿意，足以證明將使用的 CNC 加工模具的生產是合理的 在批量生產中。 \\newpage \\end{center} \\begin{center} Since in this simulation it was chosen that the final mold (made of aluminum) would also be produced in house, this is the next step of development. Procedure is basically the same as before except that it is needed to create product items for both the raw material (aluminum block) and the CNC molds prior to their manufacturing. Creating BOMs and uploading relevant files \n 由於在此模擬中，選擇最終模具（由鋁製成）也將 在內部生產，這是下一步的發展。程式基本相同 和以前一樣，除了需要為原材料（鋁）創建產品專案 塊）和製造前的 CNC 模具。創建 BOM 表和上傳 相關檔。 \\end{center} \\begin{center} Finally, the actual production on the new molds can begin. To represent that a manufacturing order of 100 Alpha Cases were created. This marks the end of the main path of development from idea to production (Figure 58). \n 最後，可以開始新模具的實際生產。表示 創建了 100 個 Alpha 案例的製造訂單。這標誌著主路徑的結束 從構思到生產的發展（圖58）。 \n \\includegraphics[width=12cm]{22/10.png} \\end{center}\\\\ \\begin{center} Figure 58 Main path of development from idea to production \n 圖58 從構思到生產的主要發展路徑 \\end{center} 5.4.3. Process upgrade procedure \n 5.4.3. 進程升級過程 \\begin{center} The previous sections were about the procedure that would be necessary to use the Odoo software to track change during the main development of product. As such, most of what was described focused in the use of PLM and the standard procedure of creating and utilizing items like Products, BOMs, ECOs, MOs, WOs and Operations. This section will be different in the sense that now we have a production being carried out and the idea is to test Odoo in its capabilities of performing upgrades (Figure 59 and Figure 60). In other words, performance and feedback of information (and of course MES) becomes the main subject. \n 前面的部分是關於使用Odoo所需的程式 用於跟蹤產品主要開發過程中變化的軟體。因此，大部分是 重點介紹了PLM的使用以及創建和利用的標準程式 產品、物料清單、ECO、MO、WO 和運營等專案。此部分將有所不同 從某種意義上說，現在我們正在進行生產，我們的想法是測試Odoo。 其執行升級的能力（圖 59 和圖 60）。換言之， 資訊（當然還有MES）的性能和回饋成為主要主題。 \\newpage \\end{center}\\\\ \\begin{center} \n \\includegraphics[width=12cm]{22/11.png} \n Figure 59 Sectioned diagram regarding Process upgrade procedure \n 圖 59 進程升級過程剖面圖 \\end{center} \\begin{center} \\includegraphics[width=12cm]{22/12.png} \n Figure 60 Sectioned diagram regarding Process development \n 圖 60 工藝開發剖面圖 \\end{center} \\begin{center} Change is always enacted using the ECO functionality even in this case. To remind the reader the situation in which this change will be applied (Figure 61) is the product overview of the relevant product items. Every product item in that list (that is not a raw material) poses at least one BOM and two ECOs already applied to them in order to signify the initial state of every product item (Figure 62). The first ECO of every item affects the product and it holds the initial related files, the second is applied to the BOM of the product in order to hold files related to the initial state of the process as well as record the initial state of the BOM. Without these ECOs (Figure 62), when we ever applied an improvement, the initial state of the product files or BOMs would be lost.   即使在這種情況下，也始終使用 ECO 功能進行更改。提醒 讀者，應用此更改的情況（圖 61）是產品概述 相關產品專案。該清單中的每個產品專案（不是原材料）都擺出姿勢 至少一個 BOM 和兩個 ECO 已經應用於它們，以表示初始狀態 每個產品專案（圖 62）。每個專案的第一個 ECO 都會影響產品及其 保存初始相關檔，第二個應用於產品的BOM以保存 與過程的初始狀態相關的檔，以及記錄 BOM 的初始狀態。 如果沒有這些 ECO（圖 62），當我們應用改進時，初始狀態 產品檔或 BOM 將丟失。 \\end{center}\\\\ \\begin{center} \n \\includegraphics[width=12cm]{22/13.png} \n Figure 61 Relevant product items overview \n 圖61 相關產品項概覽 \\end{center}\\\\ \\begin{center} \n \\includegraphics[width=12cm]{22/14.png} \n Figure 62 Example of ECOs of a product item \n 圖62 某產品項的ECO示例 \\end{center} \\begin{center} This time around the production duration and the estimated duration of the process is something that need to be taken in consideration so we can perceive how that applied change on the process affect production. To this end a MO of 50 units of Alpha Case will be created with each operation being estimated to take 30 seconds (15s for parts B/C because there is the need for 2 of them). Meaning that in an ideal situation the total length would be 50 minutes (25 of injection production being done in parallel and 25 for final assembly). \n 這個時間大約是生產持續時間和過程的估計持續時間 需要考慮的事情，這樣我們才能感知到應用的變化 對工藝影響生產。為此，將創建一個 50 個單位的 Alpha Case 的 MO 每個操作估計需要 30 秒（部件 B/C 為 15 秒，因為有 需要其中的 2 個）。這意味著在理想情況下，總長度為 50 分鐘（25 分鐘並行進行注塑生產，25 分鐘用於最終組裝）。 \\end{center} \\begin{center} In this simulated manufacturing run it was chosen that the injection operations would take slightly more time to complete to be representative of a suboptimal performance. This is been done to see how Odoo reacts and informs in real time the situation in hand. \n 在這個類比製造運行中，選擇注射操作將 需要稍多一點的時間才能完成，以代表次優性能。這 這樣做是為了查看Odoo如何反應並即時通知手頭的情況。 \\newpage \\end{center} \\begin{center} The first phase of the production in the injection process that is carried out in parallel for parts A and B/C on the injection stations 1 and 2. The following (Figure 64) shows how in the beginning of the process the overview of the productions stations indicate with green circles. These circulars signaling in known as Andon and although it is not always considered part of MES it is commonly an integrated feature in many MES systems. After the production process have been carried out with a little delay the circle turned gray and overall efficiency has been marked red on the station tabs (Figure 64). \n 在注射過程中的第一階段生產，並行進行 注射站 1 和 2 上的 A 和 B/C 部分。下面（圖 64）顯示了如何在 流程開始時，生產站的概覽以綠色表示 圈。這些通告在被稱為 Andon 中，儘管它並不總是被考慮 作為MES的一部分，它通常是許多MES系統中的集成功能。生產後 過程進行得稍有延遲，圓圈變灰，整體效率高 在工作站標籤上標記為紅色（圖 64）。 \\end{center}\\\\ \\begin{center} \n \\includegraphics[width=12cm]{22/15.png} \n Figure 63 Workcenter overview 1 \n 圖63 工作中心概覽1 \\end{center}\\\\ \\begin{center} \n \\includegraphics[width=12cm]{22/16.png} \n Figure 64 Workcenter overview 2 \n 圖64 Workcenter概覽2 \\end{center} \\begin{center} The production was carried out twice before any improvement was applied. The first improvement to be carried out were on the production process on the operation and the raw materials used. More specifically, a new operation representative of an equipment upgrades on the injection machines and the replacement of the brand of plastic pellets use in the injection process (Figure 65). \n 在進行任何改進之前，生產進行了兩次。第一個 要進行的改進是對生產過程、操作和原始 使用的材料。更具體地說，是代表設備升級的新操作 在注塑機和塑膠顆粒的替代品牌上使用 注射過程（圖65）。 \\newpage \\end{center}\\\\ \\begin{center} \n \\includegraphics[width=12cm]{22/17.png} \n Figure 65 ECO applied to BOM \n 圖 65 應用於 BOM 的 ECO \\end{center} \\begin{center} These upgrades were applied to the BOMs of parts A and B of the Alpha case and production recommenced. After two other MOs producing 50 products each simulating an improvement to the process the following types of data were automatically made available by Odoo (Table 3): \n 這些升級應用於 Alpha 外殼的 A 和 B 部件的 BOM，並且 重新開始生產。在另外兩個 MO 生產 50 個產品後，每個 MO 類比 改進流程 自動提供以下類型的資料 通過Odoo（表3）： \\end{center}\\\\ \\begin{center} Table 3 Types of data output \n 表3 資料輸出類型 \\end{center} \n \\includegraphics[width=12cm]{22/18.png} \n \\begin{center} It should be commented that the data regarding MOs is unfortunately captured in a monthly basis as opposed to the other two categories that process data per order executed. This means that since this simulation is using a trial version of the software that lasts only 14 days the graphical representation of that data offers an unimpressive view of a single point or a single column. In the long run this is a great way to display performance over time but in the case of this simulation not so much (Figure 66). \n 應該評論的是，不幸的是，有關 MO 的資料被捕獲在 按月計算，而不是其他兩個類別，即處理每個執行的訂單的資料。 這意味著，由於此模擬使用的是僅持續 14 的軟體試用版 天 該資料的圖形表示提供了單個點的不起眼的視圖 或單列。從長遠來看，這是顯示性能隨時間推移的好方法，但 在這種類比的情況下，沒有那麼多（圖 66） \\end{center} \\end{document} \n >>>>>>> refs/remotes/origin/main \n', 'tags': '', 'url': '翻譯論文.html'}, {'title': '零件模擬', 'text': 'https://drive.google.com/file/d/1Zx8PwQygCF-Uv7o2DBM-ScKH_dPrtD4U/view?usp=drive_link \n \n', 'tags': '', 'url': '零件模擬.html'}, {'title': '足球門及籃框', 'text': '\n https://drive.google.com/file/d/1BqthgjumQfO5BwFpxkfeWsS559mqBP5D/view?usp=drive_link \n', 'tags': '', 'url': '足球門及籃框.html'}, {'title': 'w17', 'text': 'youtube \n https://studio.youtube.com/video/AekmvQU2qGU/edit \n 錄影 \n https://drive.google.com/file/d/1UfzLoF6kPxLIOjScCCy8VOW0gM5uOSbO/view?usp=drive_link \n https://drive.google.com/file/d/157Bs6N8wd7DUBSdu-99iRMuYhtfltajD/view?usp=drive_link \n https://drive.google.com/file/d/1jNgwXGT_3QXqZ0MrSkwtOUWTuAaq5jTE/view?usp= \n https://drive.google.com/file/d/1vHBr-fyeMNYqWDzN949UYhHjRlI5kdIM/view?usp=drive_link \n 圖檔 \n https://drive.google.com/file/d/1OEmTIbdsiwE5o1qWvAgMf6EIMcm5zWLX/view?usp=drive_link \n https://drive.google.com/file/d/1St_dI_VeRElJQDUDD-AYPSZdi4UkAcVs/view?usp=drive_link \n https://drive.google.com/file/d/1CcNIIfPHv1S4do3ti8_HEjUZkeYp9mmi/view?usp=drive_link \n https://drive.google.com/file/d/1TZE7pibhjjHM6hWZG-tqVCSbf47bBGcZ/view?usp=drive_link \n \n \n \n', 'tags': '', 'url': 'w17.html'}]};