    "plugin:vue/vue3-recommended",
    "@vue/eslint-config-typescript/recommended",
# エンジン再起動シーケンス図

```mermaid
flowchart LR
  349670>"アプリ起動中"] --> 675170["Vuex.RESTART_ENGINES"]
  style 349670 fill:#bbbbff,stroke:#0000ff
  675170 --> 929642>"アプリ起動中"]
  style 929642 fill:#ffbbbb,stroke:#ff0000
  subgraph 675170["Vuex.RESTART_ENGINES"]
    408243["各エンジン"] --> 927120["Vuex.GET_ONLY_ENGINE_INFOS"]
    927120 --> 512074["Vuex.POST_ENGINE_START"]
    subgraph 408243["各エンジン"]
      262932["SET_ENGINE_STATE(state=STARTING)"] --- 595264["back.RESTART_ENGINE"]
      595264 --- 920995["engine.restartEngine"]
    end
    subgraph 512074["Vuex.POST_ENGINE_START"]
      623200["Vuex.GET_ALT_PORT_INFOS"] --> 225947["各エンジン"]
      subgraph 225947["各エンジン"]
        489573{" "} -->|"state==STARTING"| 445649["Vuex.START_WAITING_ENGINE"]
        445649 --> 722638["Vuex.FETCH_AND_SET_ENGINE_MANIFEST"]
        722638 --> 520207["Vuex.FETCH_AND_SET_ENGINE_SUPPORTED_DEVICES"]
        520207 --> 526075["Vuex.LOAD_CHARACTER"]
        526075 --> 752392["Vuex.LOAD_DEFAULT_STYLE_IDS"]
        489573 -->|"else"| 752392
        752392 --> 738989["Vuex.CREATE_ALL_DEFAULT_PRESET"]
      end
    end
  end
```
# 終了シーケンス図

```mermaid
flowchart
  node_1>"アプリ実行中"] -->|"アプリを再起動"| node_3["back.RESTART_APP"]
  style node_1 fill:#ffbbbb,stroke:#ff0000
  node_3 --> node_4(["willRestart=true"])
  node_1 -.->|"MacのCmd+Q"| subgraph_2["app.before_quit"]
  node_21{{"winがclose済みか"}} -.->|"NO"| subgraph_1["win.close"]
  node_1 -->|"アプリ起動直後のVVPPインストール後の再起動"| 132024(["willRestart=true"])
  132024 --> 512010["app.quit"]
  512010 -.-> subgraph_2
  438128["win.close"] -.-> subgraph_1
  node_1 -.->|"ウィンドウを閉じる"| subgraph_1
  node_4 --> 438128
  442878["event.preventDefault"] --> 571782["Vuex.CHECK_EDITED_AND_NOT_WAVE"]
  node_9["event.preventDefault"] --> 571782
  node_15["app.quit"] -.-> subgraph_2
  a{{"willQuit"}} -.-> subgraph_2
  node_8["win.destroy"] -.-> subgraph_1
  701221{{"willRestart"}} -->|"false"| node_21
  node_21 -.->|"YES"| node_23>"アプリ終了"]
  style node_23 fill:#bbbbff,stroke:#0000ff
  subgraph 571782["Vuex.CHECK_EDITED_AND_NOT_WAVE"]
    node_5["back.CLOSE_WINDOW"] --> node_7(["willQuit=true"])
    node_7 --> node_8
    453066{" "} -->|"キャンセル"| node_6>"アプリ実行中に戻る"]
    453066 --> node_5
  end
  subgraph subgraph_2["app.before_quit"]
    c["willQuit"] -->|"false"| node_9
    node_13["event.preventDefault"] --> node_14["全エンジンkill待機"]
    node_19(["willRestart=false, willQuit=false"]) --> node_20>"back.start"]
    node_12["engine.killEngineAll"] --> 889691{{"numLivingEngineProcess"}}
    889691 -->|"&gt;0"| 701221
    701221 -->|"true"| node_17["event.preventDefault"]
    c -->|"true"| node_12
    889691 -->|"0"| 916552{{"hasMarkedEngineDirs"}}
    916552 -->|"false"| 701221
    916552 -->|"true"| node_13
    node_17 --> node_19
    node_14 --> node_18["vvpp.handleMarkedEngineDirs"]
    node_18 --> node_15
  end
  subgraph subgraph_1["win.close"]
    a -->|"false"| 442878
  end
```
# 起動シーケンス図

```mermaid
flowchart
  174170["back.installVvppEngineWithWarning"] --> 786961["back.installVvppEngine"]
  786961 --> 409576{{"再起動するか"}}
  409576 -->|"する"| 173803>"アプリ起動直後のVVPPインストール後の再起動へ"]
  764022["（画面読み込み）"] --> 698565["App.vue"]
  764022 --> 332024["EditorHome.vue"]
  389651["back.start"] --> 733212["back.createWindow"]
  733212 -.-> 764022
  448821>"アプリ停止中"] -.-> 430173["app.ready"]
  style 448821 fill:#ffbbbb,stroke:#ff0000
  430173 -->|"ある"| 174170
  409576 -->|"しない"| 389651
  430173 -->|"ない"| 389651
  698565 -.-> 704891>"アプリ実行中"]
  style 704891 fill:#bbbbff,stroke:#0000ff
  332024 -.-> 704891
  subgraph 332024["EditorHome.vue"]
    709863["Vuex.GET_ENGINE_INFOS"] --> 773040["Vuex.POST_ENGINE_START"]
    subgraph 773040["Vuex.POST_ENGINE_START"]
      970396["get ALT_PORT_INFOS"] --> 467527["各エンジン"]
      subgraph 467527["各エンジン"]
        592206["Vuex.START_WAITING_ENGINE"] --> 799767["Vuex.FETCH_AND_SET_ENGINE_MANIFEST"]
      end
    end
    subgraph 709863["Vuex.GET_ENGINE_INFOS"]
      807081["back.get ENGINE_INFOS"] --> 423649["Vuex.set engineInfos"]
      423649 --> 623418["Vuex.set engineIds"]
    end
  end
  subgraph 389651["back.start"]
    250263["store.get engineSettings"] --> 222321["store.set engineSettings"]
    870482["store.get registeredEngineDirs"] --> 250263
    222321 --> 967432["engine.runEngineAll"]
    656570["engine.fetchEngineInfos"] --> 870482
    110954["engine.initializeEngineInfosAndAltPortInfo"] --> 656570
    subgraph 656570["engine.fetchEngineInfos"]
      267019["engine.fetchAdditionalEngineInfos"]
    end
  end
  subgraph 430173["app.ready"]
    546251{{"VVPPファイルがあるか"}}
  end
  subgraph 698565["App.vue"]
    646647["Vuex.INIT_VUEX"] --> 632374["back.ON_VUEX_READY"]
    subgraph 632374["back.ON_VUEX_READY"]
      225701["win.show"]
    end
  end
  subgraph 733212["back.createWindow"]
    613440["win.loadURL"]
  end
```

## シーケンス図

- [起動シーケンス図](res/起動シーケンス図.md)
- [終了シーケンス図](res/終了シーケンス図.md)
- [エンジン再起動シーケンス図](res/エンジン再起動シーケンス図.md)

[Mermaid Flow](https://www.mermaidflow.app/)を用いて書いています。mermaid のコードをサイトに貼り付ければ再編集も可能です。記述ルールは以下参照。

```mermaid
flowchart LR
  817736>"シーケンスの開始"] --> 584587["関数"]
  style 817736 fill:#ffbbbb,stroke:#ff0000
  584587 --> 965553(["状態変数の変更"])
  965553 --> 945949{{"分岐"}}
  945949 -->|"条件１"| 366994["能動的な処理は単線\n（関数の実行など）"]
  945949 -->|"条件２"| 871294["受動的な処理は点線\n（イベント発生など）"]
  366994 --> 617606["大きい関数（subgraph）"]
  871294 -.->|"発生条件"| 617606
  617606 --> 314405>"なんらかの状態"]
  617606 --> 230853>"シーケンスの終了"]
  style 230853 fill:#bbbbff,stroke:#0000ff
  subgraph 617606["大きい関数（subgraph）"]
    776462["処理開始"] --> 992786["処理終了"]
  end
```

処理の prefix 一覧

- back: background.ts の関数
- app: app のイベント
- win: win のイベント
- engine: EngineManager のメソッド
- store: electron-store のメソッド
- Vuex: Vuex の関数