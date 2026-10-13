/**
 * ============================================================================
 * 核心词库数据 (Master Vocabulary Bank)
 * ============================================================================
 * 包含 183 道精心整理的高频考点易混淆英文词汇，采用数据与视图分离架构。
 *
 * 字段规范 Schema 说明：
 * [
 *   {
 *     "num": 1,             // 题目唯一 ID (Number | String)
 *     "word": "tend",       // 考核英文单词
 *     "star": "★",          // 重点等级标识 (例如 "★ 高频错词")
 *     "batch": 1,           // 批次编号 (可选)
 *     "group": "Group 24",  // 分组考点 (可选)
 *     "options": [          // 选项数组 (包含正确项与真实易混淆项)
 *       {
 *         "letter": "A",    // 选项字母 (测试运行时会通过 Fisher-Yates 算法重排)
 *         "text": "打算，想要",
 *         "isCorrect": false,
 *         "source": "intend", // 该释义对应的混淆原词
 *         "explanation": "错误分析与词根辨析说明"
 *       }
 *     ],
 *     "root_note": "词根词缀联想助记笔记"
 *   }
 * ]
 */
const masterBank =
[
  {
    "num": 1,
    "word": "tend",
    "star": "★",
    "batch": 1,
    "options": [
      {
        "letter": "A",
        "text": "打算，想要",
        "isCorrect": false,
        "source": "intend",
        "explanation": "错误。表示“打算，想要”应该用 intend（in- 向内 -> 内心打算）。"
      },
      {
        "letter": "B",
        "text": "假装，冒充",
        "isCorrect": false,
        "source": "pretend",
        "explanation": "错误。表示“假装，冒充”应该用 pretend（pre- 在前 -> 在别人面前装出样子）。"
      },
      {
        "letter": "C",
        "text": "倾向于，往往会",
        "isCorrect": true,
        "source": "tend",
        "explanation": "正确。tend 意为“往往会，倾向于”（tend to do sth）。词根 -tend- 意为伸展。"
      },
      {
        "letter": "D",
        "text": "出席，照顾",
        "isCorrect": false,
        "source": "attend",
        "explanation": "错误。表示“出席，照顾”应该用 attend（ad- 去往 -> 去往现场/照料）。"
      }
    ]
  },
  {
    "num": 2,
    "word": "shift",
    "star": "★",
    "batch": 1,
    "options": [
      {
        "letter": "A",
        "text": "转移，改变；轮班",
        "isCorrect": true,
        "source": "shift",
        "explanation": "正确。shift 表示“转移，改变（精力）”，作名词还指“轮班（day/night shift）”。"
      },
      {
        "letter": "B",
        "text": "敏捷的，迅速的",
        "isCorrect": false,
        "source": "swift",
        "explanation": "错误。表示“敏捷的，迅速的”应该用 swift。"
      },
      {
        "letter": "C",
        "text": "漂流，漂泊",
        "isCorrect": false,
        "source": "drift",
        "explanation": "错误。表示“漂流，漂泊”应该用 drift。"
      },
      {
        "letter": "D",
        "text": "撕裂，裂开",
        "isCorrect": false,
        "source": "split",
        "explanation": "错误。表示“撕开，分裂”应该用 split。"
      }
    ]
  },
  {
    "num": 3,
    "word": "conduct",
    "star": "★",
    "batch": 1,
    "options": [
      {
        "letter": "A",
        "text": "扣除，减去",
        "isCorrect": false,
        "source": "deduct",
        "explanation": "错误。表示“扣除，减去”应该用 deduct。"
      },
      {
        "letter": "B",
        "text": "引导，实施；行为举止",
        "isCorrect": true,
        "source": "conduct",
        "explanation": "正确。conduct 表示“组织，实施”（conduct a survey）或“带领引导”；名词为“行为举止”。"
      },
      {
        "letter": "C",
        "text": "引诱，引起",
        "isCorrect": false,
        "source": "induce",
        "explanation": "错误。表示“引起，诱导”应该用 induce。"
      },
      {
        "letter": "D",
        "text": "生产，制造",
        "isCorrect": false,
        "source": "produce",
        "explanation": "错误。表示“生产，制造”应该用 produce。"
      }
    ]
  },
  {
    "num": 4,
    "word": "reveal",
    "star": "★",
    "batch": 1,
    "options": [
      {
        "letter": "A",
        "text": "缓解，减轻痛苦",
        "isCorrect": false,
        "source": "relieve",
        "explanation": "错误。表示“缓解，减轻”应该用 relieve。"
      },
      {
        "letter": "B",
        "text": "复苏，恢复生机",
        "isCorrect": false,
        "source": "revive",
        "explanation": "错误。表示“复苏，复活”应该用 revive。"
      },
      {
        "letter": "C",
        "text": "揭露，展现，显示",
        "isCorrect": true,
        "source": "reveal",
        "explanation": "正确。reveal 源自 re-（揭开）+ veil（面纱）-> 揭露真相，展现。"
      },
      {
        "letter": "D",
        "text": "竞争对手，匹敌",
        "isCorrect": false,
        "source": "rival",
        "explanation": "错误。表示“竞争对手”应该用 rival。"
      }
    ]
  },
  {
    "num": 5,
    "word": "consequence",
    "star": "★",
    "batch": 1,
    "options": [
      {
        "letter": "A",
        "text": "顺序，前后连续",
        "isCorrect": false,
        "source": "sequence",
        "explanation": "错误。表示“顺序，排列”应该用 sequence。"
      },
      {
        "letter": "B",
        "text": "发生频率，频繁",
        "isCorrect": false,
        "source": "frequency",
        "explanation": "错误。表示“频率”应该用 frequency。"
      },
      {
        "letter": "C",
        "text": "随后的，后来的",
        "isCorrect": false,
        "source": "subsequent",
        "explanation": "错误。表示“随后的”应该用 subsequent。"
      },
      {
        "letter": "D",
        "text": "后果，重要性",
        "isCorrect": true,
        "source": "consequence",
        "explanation": "正确。consequence 意为“后果，结果”（as a consequence of）；亦指“重要性”（of little consequence）。"
      }
    ]
  },
  {
    "num": 6,
    "word": "rare",
    "star": "★",
    "batch": 1,
    "options": [
      {
        "letter": "A",
        "text": "稀有的，罕见的",
        "isCorrect": true,
        "source": "rare",
        "explanation": "正确。rare 意为“稀有的，罕见的”，副词 rarely 意为“罕见地”。"
      },
      {
        "letter": "B",
        "text": "裸露的，仅仅的",
        "isCorrect": false,
        "source": "bare",
        "explanation": "错误。表示“赤裸的光秃的”应该用 bare。"
      },
      {
        "letter": "C",
        "text": "惊吓，恐慌",
        "isCorrect": false,
        "source": "scare",
        "explanation": "错误。表示“受惊恐吓”应该用 scare。"
      },
      {
        "letter": "D",
        "text": "意识到的，察觉的",
        "isCorrect": false,
        "source": "aware",
        "explanation": "错误。表示“意识到的”应该用 aware。"
      }
    ]
  },
  {
    "num": 7,
    "word": "workforce",
    "star": "★",
    "batch": 1,
    "options": [
      {
        "letter": "A",
        "text": "工作负担，工作量",
        "isCorrect": false,
        "source": "workload",
        "explanation": "错误。表示“工作负荷”应该用 workload。"
      },
      {
        "letter": "B",
        "text": "劳动力，职工总数",
        "isCorrect": true,
        "source": "workforce",
        "explanation": "正确。workforce 指“全体劳动力，职工总数”。"
      },
      {
        "letter": "C",
        "text": "工作场所，车间",
        "isCorrect": false,
        "source": "workplace",
        "explanation": "错误。表示“工作场所”应该用 workplace。"
      },
      {
        "letter": "D",
        "text": "身体锻炼，健身",
        "isCorrect": false,
        "source": "workout",
        "explanation": "错误。表示“锻炼”应该用 workout。"
      }
    ]
  },
  {
    "num": 8,
    "word": "device",
    "star": "★",
    "batch": 1,
    "options": [
      {
        "letter": "A",
        "text": "设计，构思，发明",
        "isCorrect": false,
        "source": "devise",
        "explanation": "错误。动词 devise 表示“设计构想”（注意 c/s 词性差异）。"
      },
      {
        "letter": "B",
        "text": "装置，设备，器械",
        "isCorrect": true,
        "source": "device",
        "explanation": "正确。device 是名词，意为“设备，装置，策略”。"
      },
      {
        "letter": "C",
        "text": "忠告，劝告，建议",
        "isCorrect": false,
        "source": "advice",
        "explanation": "错误。表示“建议”应该用 advice。"
      },
      {
        "letter": "D",
        "text": "消亡，倒闭，死亡",
        "isCorrect": false,
        "source": "demise",
        "explanation": "错误。表示“终止，死亡”应该用 demise。"
      }
    ]
  },
  {
    "num": 9,
    "word": "expense",
    "star": "★",
    "batch": 1,
    "options": [
      {
        "letter": "A",
        "text": "广袤，辽阔的区域",
        "isCorrect": false,
        "source": "expanse",
        "explanation": "错误。表示“辽阔区域”应该用 expanse。"
      },
      {
        "letter": "B",
        "text": "扩大，膨胀",
        "isCorrect": false,
        "source": "expand",
        "explanation": "错误。动词 expand 表示“扩大膨胀”。"
      },
      {
        "letter": "C",
        "text": "花费，开销，价钱",
        "isCorrect": true,
        "source": "expense",
        "explanation": "正确。expense 意为“费用，开销”，at the expense of（以...为代价）。"
      },
      {
        "letter": "D",
        "text": "期盼，预料",
        "isCorrect": false,
        "source": "expect",
        "explanation": "错误。表示“期待”应该用 expect。"
      }
    ]
  },
  {
    "num": 10,
    "word": "indicate",
    "star": "★★",
    "batch": 1,
    "options": [
      {
        "letter": "A",
        "text": "奉献，献身于",
        "isCorrect": false,
        "source": "dedicate",
        "explanation": "错误。表示“奉献”应该用 dedicate。"
      },
      {
        "letter": "B",
        "text": "口授，命令，决定",
        "isCorrect": false,
        "source": "dictate",
        "explanation": "错误。表示“独裁，口授命令”应该用 dictate。"
      },
      {
        "letter": "C",
        "text": "表明，指出，显示",
        "isCorrect": true,
        "source": "indicate",
        "explanation": "正确。indicate 意为“表明，暗示，指示”。"
      },
      {
        "letter": "D",
        "text": "纤细脆弱的，精美的",
        "isCorrect": false,
        "source": "delicate",
        "explanation": "错误。表示“脆弱娇嫩的”应该用 delicate。"
      }
    ]
  },
  {
    "num": 11,
    "word": "prospect",
    "star": "★★",
    "batch": 1,
    "options": [
      {
        "letter": "A",
        "text": "方面，朝向，外貌",
        "isCorrect": false,
        "source": "aspect",
        "explanation": "错误。表示“方面”应该用 aspect。"
      },
      {
        "letter": "B",
        "text": "前景，前途，期望",
        "isCorrect": true,
        "source": "prospect",
        "explanation": "正确。prospect（pro- 向前 + spect 看 -> 展望前景，前途）。"
      },
      {
        "letter": "C",
        "text": "尊敬，敬意；方面",
        "isCorrect": false,
        "source": "respect",
        "explanation": "错误。表示“尊敬”应该用 respect。"
      },
      {
        "letter": "D",
        "text": "怀疑，嫌疑人",
        "isCorrect": false,
        "source": "suspect",
        "explanation": "错误。表示“怀疑嫌犯”应该用 suspect。"
      }
    ]
  },
  {
    "num": 12,
    "word": "acquire",
    "star": "★",
    "batch": 1,
    "options": [
      {
        "letter": "A",
        "text": "获得，习得，购得",
        "isCorrect": true,
        "source": "acquire",
        "explanation": "正确。acquire 指“努力获得，学到技能知识，购得资产”。"
      },
      {
        "letter": "B",
        "text": "需要，要求",
        "isCorrect": false,
        "source": "require",
        "explanation": "错误。表示“需要要求”应该用 require。"
      },
      {
        "letter": "C",
        "text": "询问，打听",
        "isCorrect": false,
        "source": "inquire",
        "explanation": "错误。表示“打听询问”应该用 inquire。"
      },
      {
        "letter": "D",
        "text": "征服，攻克",
        "isCorrect": false,
        "source": "conquer",
        "explanation": "错误。表示“征服攻克”应该用 conquer。"
      }
    ]
  },
  {
    "num": 13,
    "word": "delay",
    "star": "★",
    "batch": 1,
    "options": [
      {
        "letter": "A",
        "text": "腐烂，衰败",
        "isCorrect": false,
        "source": "decay",
        "explanation": "错误。表示“腐烂衰变”应该用 decay。"
      },
      {
        "letter": "B",
        "text": "接力，转播",
        "isCorrect": false,
        "source": "relay",
        "explanation": "错误。表示“接力转播”应该用 relay。"
      },
      {
        "letter": "C",
        "text": "延误，耽搁，推迟",
        "isCorrect": true,
        "source": "delay",
        "explanation": "正确。delay 表示“延期，耽搁，推迟”。"
      },
      {
        "letter": "D",
        "text": "展示，陈列",
        "isCorrect": false,
        "source": "display",
        "explanation": "错误。表示“陈列展示”应该用 display。"
      }
    ]
  },
  {
    "num": 14,
    "word": "numerous",
    "star": "★",
    "batch": 1,
    "options": [
      {
        "letter": "A",
        "text": "数字的，算术的",
        "isCorrect": false,
        "source": "numerical",
        "explanation": "错误。表示“数字的”应该用 numerical。"
      },
      {
        "letter": "B",
        "text": "许多的，大量的",
        "isCorrect": true,
        "source": "numerous",
        "explanation": "正确。numerous 意为“极多的，许多的”（相当于 many）。"
      },
      {
        "letter": "C",
        "text": "幽默风趣的",
        "isCorrect": false,
        "source": "humorous",
        "explanation": "错误。表示“幽默风趣的”应该用 humorous。"
      },
      {
        "letter": "D",
        "text": "声名狼藉的",
        "isCorrect": false,
        "source": "notorious",
        "explanation": "错误。表示“臭名昭著的”应该用 notorious。"
      }
    ]
  },
  {
    "num": 15,
    "word": "release",
    "star": "★★★",
    "batch": 1,
    "options": [
      {
        "letter": "A",
        "text": "缓解，解除痛苦",
        "isCorrect": false,
        "source": "relieve",
        "explanation": "错误。表示“缓解疼痛”应该用 relieve。"
      },
      {
        "letter": "B",
        "text": "释放，发布，发行",
        "isCorrect": true,
        "source": "release",
        "explanation": "正确。release 意为“释放，公开发布，发行”。"
      },
      {
        "letter": "C",
        "text": "意识到，实现目标",
        "isCorrect": false,
        "source": "realize",
        "explanation": "错误。表示“意识到实现”应该用 realize。"
      },
      {
        "letter": "D",
        "text": "租约，出租",
        "isCorrect": false,
        "source": "lease",
        "explanation": "错误。表示“租凭合同”应该用 lease。"
      }
    ]
  },
  {
    "num": 16,
    "word": "request",
    "star": "★★★",
    "batch": 1,
    "options": [
      {
        "letter": "A",
        "text": "寻求，探求",
        "isCorrect": false,
        "source": "quest",
        "explanation": "错误。表示“长期探求”应该用 quest。"
      },
      {
        "letter": "B",
        "text": "盘问，审讯",
        "isCorrect": false,
        "source": "question",
        "explanation": "错误。表示“质问审讯”应该用 question。"
      },
      {
        "letter": "C",
        "text": "要求，请求",
        "isCorrect": true,
        "source": "request",
        "explanation": "正确。request 是较委婉礼貌的“请求，要求”。"
      },
      {
        "letter": "D",
        "text": "征服，占领",
        "isCorrect": false,
        "source": "conquer",
        "explanation": "错误。表示“征服占领”应该用 conquer。"
      }
    ]
  },
  {
    "num": 17,
    "word": "severe",
    "star": "★",
    "batch": 1,
    "options": [
      {
        "letter": "A",
        "text": "几个，数个",
        "isCorrect": false,
        "source": "several",
        "explanation": "错误。表示“几个”应该用 several。"
      },
      {
        "letter": "B",
        "text": "严重的，严厉的，剧烈的",
        "isCorrect": true,
        "source": "severe",
        "explanation": "正确。severe 意为“严厉的，严重的，剧烈的”。"
      },
      {
        "letter": "C",
        "text": "真诚的，真挚的",
        "isCorrect": false,
        "source": "sincere",
        "explanation": "错误。表示“真诚由衷的”应该用 sincere。"
      },
      {
        "letter": "D",
        "text": "切断，断绝",
        "isCorrect": false,
        "source": "sever",
        "explanation": "错误。动词 sever（无尾e）表示“切断，割裂”。"
      }
    ]
  },
  {
    "num": 18,
    "word": "alternative",
    "star": "★",
    "batch": 1,
    "options": [
      {
        "letter": "A",
        "text": "修改，改变",
        "isCorrect": false,
        "source": "alter",
        "explanation": "错误。动词 alter 表示“改变变更”。"
      },
      {
        "letter": "B",
        "text": "可供替代的选择，替代性的",
        "isCorrect": true,
        "source": "alternative",
        "explanation": "正确。alternative 意为“替代方案，备选项”。"
      },
      {
        "letter": "C",
        "text": "轮流的，交替的",
        "isCorrect": false,
        "source": "alternate",
        "explanation": "错误。alternate 表示“轮流交替的”。"
      },
      {
        "letter": "D",
        "text": "警觉的，戒备的",
        "isCorrect": false,
        "source": "alert",
        "explanation": "错误。表示“警惕戒备的”应该用 alert。"
      }
    ]
  },
  {
    "num": 19,
    "word": "elementary",
    "star": "★★★",
    "batch": 1,
    "options": [
      {
        "letter": "A",
        "text": "淘汰，清除，消除",
        "isCorrect": false,
        "source": "eliminate",
        "explanation": "错误。表示“清除淘汰”应该用 eliminate。"
      },
      {
        "letter": "B",
        "text": "基本的，初级的",
        "isCorrect": true,
        "source": "elementary",
        "explanation": "正确。elementary 意为“基础的，初级的”（如 elementary school）。"
      },
      {
        "letter": "C",
        "text": "赞赏的，免费赠送的",
        "isCorrect": false,
        "source": "complimentary",
        "explanation": "错误。表示“免费赠送的”应该用 complimentary。"
      },
      {
        "letter": "D",
        "text": "高雅优美的",
        "isCorrect": false,
        "source": "elegant",
        "explanation": "错误。表示“优雅的”应该用 elegant。"
      }
    ]
  },
  {
    "num": 20,
    "word": "accumulate",
    "star": "★",
    "batch": 1,
    "options": [
      {
        "letter": "A",
        "text": "准确无误的，精确的",
        "isCorrect": false,
        "source": "accurate",
        "explanation": "错误。表示“准确精确的”应该用 accurate。"
      },
      {
        "letter": "B",
        "text": "激励，刺激，激发",
        "isCorrect": false,
        "source": "stimulate",
        "explanation": "错误。表示“刺激激发”应该用 stimulate。"
      },
      {
        "letter": "C",
        "text": "积累，积聚",
        "isCorrect": true,
        "source": "accumulate",
        "explanation": "正确。accumulate 意为“积累财富/经验”。"
      },
      {
        "letter": "D",
        "text": "计算，推测",
        "isCorrect": false,
        "source": "calculate",
        "explanation": "错误。表示“计算”应该用 calculate。"
      }
    ]
  },
  {
    "num": 21,
    "word": "enormous",
    "star": "★",
    "batch": 1,
    "options": [
      {
        "letter": "A",
        "text": "巨大的，庞大的",
        "isCorrect": true,
        "source": "enormous",
        "explanation": "正确。enormous 意为“巨大的，庞大的”。"
      },
      {
        "letter": "B",
        "text": "匿名的，不知名的",
        "isCorrect": false,
        "source": "anonymous",
        "explanation": "错误。表示“匿名的”应该用 anonymous。"
      },
      {
        "letter": "C",
        "text": "异常的，反常的",
        "isCorrect": false,
        "source": "abnormal",
        "explanation": "错误。表示“反常的”应该用 abnormal。"
      },
      {
        "letter": "D",
        "text": "适度的，中等的",
        "isCorrect": false,
        "source": "moderate",
        "explanation": "错误。表示“温和适度的”应该用 moderate。"
      }
    ]
  },
  {
    "num": 22,
    "word": "stable",
    "star": "★",
    "batch": 1,
    "options": [
      {
        "letter": "A",
        "text": "主食，主要产品；订书钉",
        "isCorrect": false,
        "source": "staple",
        "explanation": "错误。表示“主食，主要商品”应该用 staple。"
      },
      {
        "letter": "B",
        "text": "跌跌撞撞，绊倒",
        "isCorrect": false,
        "source": "stumble",
        "explanation": "错误。表示“绊倒”应该用 stumble。"
      },
      {
        "letter": "C",
        "text": "稳定的，牢固的",
        "isCorrect": true,
        "source": "stable",
        "explanation": "正确。stable 意为“稳固的，稳定的”；名词指马厩。"
      },
      {
        "letter": "D",
        "text": "合适的，适宜的",
        "isCorrect": false,
        "source": "suitable",
        "explanation": "错误。表示“适宜的”应该用 suitable。"
      }
    ]
  },
  {
    "num": 23,
    "word": "extreme",
    "star": "★",
    "batch": 1,
    "options": [
      {
        "letter": "A",
        "text": "外部的，表面的",
        "isCorrect": false,
        "source": "external",
        "explanation": "错误。表示“外部的”应该用 external。"
      },
      {
        "letter": "B",
        "text": "极端的，极度的",
        "isCorrect": true,
        "source": "extreme",
        "explanation": "正确。extreme 意为“极端的，极度的”（extreme sports）。"
      },
      {
        "letter": "C",
        "text": "程度，限度，范围",
        "isCorrect": false,
        "source": "extent",
        "explanation": "错误。表示“范围限度”应该用 extent。"
      },
      {
        "letter": "D",
        "text": "额外的，附加的",
        "isCorrect": false,
        "source": "extra",
        "explanation": "错误。表示“额外的”应该用 extra。"
      }
    ]
  },
  {
    "num": 24,
    "word": "manufacture",
    "star": "★",
    "batch": 1,
    "options": [
      {
        "letter": "A",
        "text": "手动的；使用手册",
        "isCorrect": false,
        "source": "manual",
        "explanation": "错误。表示“手动的，手册”应该用 manual。"
      },
      {
        "letter": "B",
        "text": "大规模制造，生产",
        "isCorrect": true,
        "source": "manufacture",
        "explanation": "正确。manufacture 意为“工业化机械制造生产”。"
      },
      {
        "letter": "C",
        "text": "成熟的，完全成长的",
        "isCorrect": false,
        "source": "mature",
        "explanation": "错误。表示“成熟的”应该用 mature。"
      },
      {
        "letter": "D",
        "text": "破裂，骨折",
        "isCorrect": false,
        "source": "fracture",
        "explanation": "错误。表示“骨折断裂”应该用 fracture。"
      }
    ]
  },
  {
    "num": 25,
    "word": "meanwhile",
    "star": "★",
    "batch": 1,
    "options": [
      {
        "letter": "A",
        "text": "与此同时，在此期间",
        "isCorrect": true,
        "source": "meanwhile",
        "explanation": "正确。meanwhile 等同于 in the meantime（在此期间）。"
      },
      {
        "letter": "B",
        "text": "富有意义的",
        "isCorrect": false,
        "source": "meaningful",
        "explanation": "错误。表示“有意义的”应该用 meaningful。"
      },
      {
        "letter": "C",
        "text": "否则，要不然",
        "isCorrect": false,
        "source": "otherwise",
        "explanation": "错误。表示“否则”应该用 otherwise。"
      },
      {
        "letter": "D",
        "text": "不论如何，无论怎样",
        "isCorrect": false,
        "source": "anyway",
        "explanation": "错误。表示“无论如何”应该用 anyway。"
      }
    ]
  },
  {
    "num": 26,
    "word": "recruit",
    "star": "★",
    "batch": 1,
    "options": [
      {
        "letter": "A",
        "text": "援救，抢救",
        "isCorrect": false,
        "source": "rescue",
        "explanation": "错误。表示“营救”应该用 rescue。"
      },
      {
        "letter": "B",
        "text": "收据，接收",
        "isCorrect": false,
        "source": "receipt",
        "explanation": "错误。表示“发票收据”应该用 receipt。"
      },
      {
        "letter": "C",
        "text": "招聘，招收新成员",
        "isCorrect": true,
        "source": "recruit",
        "explanation": "正确。recruit 意为“招聘员工，招募新兵”。"
      },
      {
        "letter": "D",
        "text": "反映，反思",
        "isCorrect": false,
        "source": "reflect",
        "explanation": "错误。表示“反思映照”应该用 reflect。"
      }
    ]
  },
  {
    "num": 27,
    "word": "somewhat",
    "star": "★",
    "batch": 1,
    "options": [
      {
        "letter": "A",
        "text": "以某种方式，不知怎么地",
        "isCorrect": false,
        "source": "somehow",
        "explanation": "错误。表示“不知何故”应该用 somehow。"
      },
      {
        "letter": "B",
        "text": "稍微，有点儿",
        "isCorrect": true,
        "source": "somewhat",
        "explanation": "正确。somewhat 是副词，意为“稍微，有点儿”（相当于 a little）。"
      },
      {
        "letter": "C",
        "text": "在某处，到某处",
        "isCorrect": false,
        "source": "somewhere",
        "explanation": "错误。表示“在某处”应该用 somewhere。"
      },
      {
        "letter": "D",
        "text": "有时，间或",
        "isCorrect": false,
        "source": "sometimes",
        "explanation": "错误。表示“有时偶尔”应该用 sometimes。"
      }
    ]
  },
  {
    "num": 28,
    "word": "vast",
    "star": "★",
    "batch": 1,
    "options": [
      {
        "letter": "A",
        "text": "浪费，废料",
        "isCorrect": false,
        "source": "waste",
        "explanation": "错误。表示“浪费废料”应该用 waste。"
      },
      {
        "letter": "B",
        "text": "广阔的，浩瀚的，巨大的",
        "isCorrect": true,
        "source": "vast",
        "explanation": "正确。vast 意为“广阔的，浩瀚巨大的”（the vast majority 绝大多数）。"
      },
      {
        "letter": "C",
        "text": "投射，铸造；演职员表",
        "isCorrect": false,
        "source": "cast",
        "explanation": "错误。表示“投射铸造”应该用 cast。"
      },
      {
        "letter": "D",
        "text": "快速的；绝食，斋戒",
        "isCorrect": false,
        "source": "fast",
        "explanation": "错误。fast 表示快速的或禁食。"
      }
    ]
  },
  {
    "num": 29,
    "word": "bother",
    "star": "★",
    "batch": 1,
    "options": [
      {
        "letter": "A",
        "text": "国界，边界，边沿",
        "isCorrect": false,
        "source": "border",
        "explanation": "错误。表示“边界”应该用 border。"
      },
      {
        "letter": "B",
        "text": "更宽广的，辽阔的",
        "isCorrect": false,
        "source": "broader",
        "explanation": "错误。表示“更广的”应该用 broader。"
      },
      {
        "letter": "C",
        "text": "兄弟，手足",
        "isCorrect": false,
        "source": "brother",
        "explanation": "错误。表示“兄弟”应该用 brother。"
      },
      {
        "letter": "D",
        "text": "打扰，烦扰；费心",
        "isCorrect": true,
        "source": "bother",
        "explanation": "正确。bother 表示“打扰使烦心，费心做某事”。"
      }
    ]
  },
  {
    "num": 30,
    "word": "circumstance",
    "star": "★",
    "batch": 1,
    "options": [
      {
        "letter": "A",
        "text": "客观环境，情况，境遇",
        "isCorrect": true,
        "source": "circumstance",
        "explanation": "正确。circumstance（周围站立的条件 -> 境况，under no circumstances 绝不）。"
      },
      {
        "letter": "B",
        "text": "物质，实质核心",
        "isCorrect": false,
        "source": "substance",
        "explanation": "错误。表示“物质实质”应该用 substance。"
      },
      {
        "letter": "C",
        "text": "持续恒定的，经常的",
        "isCorrect": false,
        "source": "constant",
        "explanation": "错误。表示“持续恒定的”应该用 constant。"
      },
      {
        "letter": "D",
        "text": "后果，影响",
        "isCorrect": false,
        "source": "consequence",
        "explanation": "错误。表示“后果”应该用 consequence。"
      }
    ]
  },
  {
    "num": 31,
    "word": "derive",
    "star": "★",
    "batch": 1,
    "options": [
      {
        "letter": "A",
        "text": "剥夺，使丧失",
        "isCorrect": false,
        "source": "deprive",
        "explanation": "错误。表示“剥夺所有物”应该用 deprive（deprive sb of sth）。"
      },
      {
        "letter": "B",
        "text": "源自，源于；获得",
        "isCorrect": true,
        "source": "derive",
        "explanation": "正确。derive 表示“源于”（derive from），或“从中获取”（derive pleasure from）。"
      },
      {
        "letter": "C",
        "text": "驱使，驾驶",
        "isCorrect": false,
        "source": "drive",
        "explanation": "错误。表示“驾驶驱使”应该用 drive。"
      },
      {
        "letter": "D",
        "text": "到达，来临",
        "isCorrect": false,
        "source": "arrive",
        "explanation": "错误。表示“到达”应该用 arrive。"
      }
    ]
  },
  {
    "num": 32,
    "word": "grant",
    "star": "★",
    "batch": 1,
    "options": [
      {
        "letter": "A",
        "text": "宏伟的，盛大的",
        "isCorrect": false,
        "source": "grand",
        "explanation": "错误。表示“宏伟壮丽的”应该用 grand。"
      },
      {
        "letter": "B",
        "text": "授予，准予；拨款",
        "isCorrect": true,
        "source": "grant",
        "explanation": "正确。grant 意为“准予授予”，take it for granted（视作理所当然）。"
      },
      {
        "letter": "C",
        "text": "保证，担保",
        "isCorrect": false,
        "source": "guarantee",
        "explanation": "错误。表示“保证担保”应该用 guarantee。"
      },
      {
        "letter": "D",
        "text": "感激的，感谢的",
        "isCorrect": false,
        "source": "grateful",
        "explanation": "错误。表示“感激的”应该用 grateful。"
      }
    ]
  },
  {
    "num": 33,
    "word": "persuade",
    "star": "★",
    "batch": 1,
    "options": [
      {
        "letter": "A",
        "text": "追求，追逐，继续进行",
        "isCorrect": false,
        "source": "pursue",
        "explanation": "错误。表示“追求学业梦想”应该用 pursue。"
      },
      {
        "letter": "B",
        "text": "劝说，说服",
        "isCorrect": true,
        "source": "persuade",
        "explanation": "正确。persuade 意为“成功说服某人做某事”（persuade sb to do sth）。"
      },
      {
        "letter": "C",
        "text": "假设，假定，擅自",
        "isCorrect": false,
        "source": "presume",
        "explanation": "错误。表示“推定假定”应该用 presume。"
      },
      {
        "letter": "D",
        "text": "阻止，防范",
        "isCorrect": false,
        "source": "prevent",
        "explanation": "错误。表示“阻止防止”应该用 prevent。"
      }
    ]
  },
  {
    "num": 34,
    "word": "reform",
    "star": "★",
    "batch": 1,
    "options": [
      {
        "letter": "A",
        "text": "通知，通告",
        "isCorrect": false,
        "source": "inform",
        "explanation": "错误。表示“通知”应该用 inform。"
      },
      {
        "letter": "B",
        "text": "履行，执行，表演",
        "isCorrect": false,
        "source": "perform",
        "explanation": "错误。表示“履行表演”应该用 perform。"
      },
      {
        "letter": "C",
        "text": "遵守，顺应，符合",
        "isCorrect": false,
        "source": "conform",
        "explanation": "错误。表示“顺应标准”应该用 conform（conform to）。"
      },
      {
        "letter": "D",
        "text": "改进，改革，改造",
        "isCorrect": true,
        "source": "reform",
        "explanation": "正确。reform（re- 重新 + form 塑造形态 -> 改革，改良）。"
      }
    ]
  },
  {
    "num": 35,
    "word": "rival",
    "star": "★",
    "batch": 1,
    "options": [
      {
        "letter": "A",
        "text": "到达，来临",
        "isCorrect": false,
        "source": "arrival",
        "explanation": "错误。名词表示“抵达到来”应该用 arrival。"
      },
      {
        "letter": "B",
        "text": "显露，展示，泄露",
        "isCorrect": false,
        "source": "reveal",
        "explanation": "错误。动词表示“展现泄露”应该用 reveal。"
      },
      {
        "letter": "C",
        "text": "竞争对手；与...匹敌",
        "isCorrect": true,
        "source": "rival",
        "explanation": "正确。rival 意为“竞争对手”，作动词表示“与...匹敌”。"
      },
      {
        "letter": "D",
        "text": "复兴，苏醒，再流行",
        "isCorrect": false,
        "source": "revival",
        "explanation": "错误。名词表示“复兴”应该用 revival。"
      }
    ]
  },
  {
    "num": 36,
    "word": "arouse",
    "star": "★",
    "batch": 1,
    "options": [
      {
        "letter": "A",
        "text": "产生，出现，起源于",
        "isCorrect": false,
        "source": "arise",
        "explanation": "错误。arise（不及物）表示困难、纷争等“产生出现”（arise from）。"
      },
      {
        "letter": "B",
        "text": "激起，引起，唤醒",
        "isCorrect": true,
        "source": "arouse",
        "explanation": "正确。arouse（及物动词）意为“激起唤起（怀疑/兴趣等，arouse suspicion）”。"
      },
      {
        "letter": "C",
        "text": "上升，升起，上涨",
        "isCorrect": false,
        "source": "rise",
        "explanation": "错误。rise（不及物）表示自主“升起上涨”。"
      },
      {
        "letter": "D",
        "text": "提高，筹募，抚养",
        "isCorrect": false,
        "source": "raise",
        "explanation": "错误。raise（及物）表示“举起，筹款，抚养”。"
      }
    ]
  },
  {
    "num": 37,
    "word": "aspect",
    "star": "★",
    "batch": 1,
    "options": [
      {
        "letter": "A",
        "text": "视察，检查，审视",
        "isCorrect": false,
        "source": "inspect",
        "explanation": "错误。表示“检查视察”应该用 inspect。"
      },
      {
        "letter": "B",
        "text": "盼望，期待，预料",
        "isCorrect": false,
        "source": "expect",
        "explanation": "错误。表示“期待”应该用 expect。"
      },
      {
        "letter": "C",
        "text": "方面，朝向，外貌",
        "isCorrect": true,
        "source": "aspect",
        "explanation": "正确。aspect 意为“方面，朝向，容貌”（in every aspect）。"
      },
      {
        "letter": "D",
        "text": "尊敬，尊重",
        "isCorrect": false,
        "source": "respect",
        "explanation": "错误。表示“尊敬”应该用 respect。"
      }
    ]
  },
  {
    "num": 38,
    "word": "considerable",
    "star": "易混对",
    "batch": 1,
    "options": [
      {
        "letter": "A",
        "text": "体贴周到的，体谅人的",
        "isCorrect": false,
        "source": "considerate",
        "explanation": "错误。表示“体贴体谅的”应该用 considerate。"
      },
      {
        "letter": "B",
        "text": "相当多的，可观的，重大的",
        "isCorrect": true,
        "source": "considerable",
        "explanation": "正确。considerable 意为“相当大的，相当多的”（a considerable amount of）。"
      },
      {
        "letter": "C",
        "text": "一致的，始终如一的",
        "isCorrect": false,
        "source": "consistent",
        "explanation": "错误。表示“一致的”应该用 consistent。"
      },
      {
        "letter": "D",
        "text": "考虑到，就...而言",
        "isCorrect": false,
        "source": "considering",
        "explanation": "错误。表示“鉴于考虑到”应该用 considering。"
      }
    ]
  },
  {
    "num": 39,
    "word": "intimate",
    "star": "★",
    "batch": 2,
    "options": [
      {
        "letter": "A",
        "text": "模仿，仿效",
        "isCorrect": false,
        "source": "imitate",
        "explanation": "错误。表示“模仿仿造”应该用 imitate。"
      },
      {
        "letter": "B",
        "text": "恐吓，威胁",
        "isCorrect": false,
        "source": "intimidate",
        "explanation": "错误。表示“恐吓胁迫”应该用 intimidate。"
      },
      {
        "letter": "C",
        "text": "亲密的，密切的；暗示",
        "isCorrect": true,
        "source": "intimate",
        "explanation": "正确。intimate 表示“亲密的，隐私的”，作动词表示“暗示”。"
      },
      {
        "letter": "D",
        "text": "初始的，最初的",
        "isCorrect": false,
        "source": "initial",
        "explanation": "错误。表示“最初的”应该用 initial。"
      }
    ]
  },
  {
    "num": 40,
    "word": "luggage",
    "star": "★",
    "batch": 2,
    "options": [
      {
        "letter": "A",
        "text": "语言，话语",
        "isCorrect": false,
        "source": "language",
        "explanation": "错误。表示“语言”应该用 language。"
      },
      {
        "letter": "B",
        "text": "行李，皮箱",
        "isCorrect": true,
        "source": "luggage",
        "explanation": "正确。luggage 意为“行李”（不可数名词，同义词 baggage）。"
      },
      {
        "letter": "C",
        "text": "小屋，简陋住所",
        "isCorrect": false,
        "source": "lodge",
        "explanation": "错误。表示“乡间小屋，宿营”应该用 lodge。"
      },
      {
        "letter": "D",
        "text": "伐木，原木记录",
        "isCorrect": false,
        "source": "logging",
        "explanation": "错误。表示“伐木记录”应该用 logging / log。"
      }
    ]
  },
  {
    "num": 41,
    "word": "neutral",
    "star": "★",
    "batch": 2,
    "options": [
      {
        "letter": "A",
        "text": "自然的，天然的",
        "isCorrect": false,
        "source": "natural",
        "explanation": "错误。表示“自然的天然的”应该用 natural。"
      },
      {
        "letter": "B",
        "text": "相互的，彼此的",
        "isCorrect": false,
        "source": "mutual",
        "explanation": "错误。表示“相互的共有的”应该用 mutual。"
      },
      {
        "letter": "C",
        "text": "中立的，中性的",
        "isCorrect": true,
        "source": "neutral",
        "explanation": "正确。neutral 意为“中立不偏不倚的，中性的”（ne- 都不）。"
      },
      {
        "letter": "D",
        "text": "正常的，寻常的",
        "isCorrect": false,
        "source": "normal",
        "explanation": "错误。表示“标准的寻常的”应该用 normal。"
      }
    ]
  },
  {
    "num": 42,
    "word": "assure",
    "star": "★",
    "batch": 2,
    "options": [
      {
        "letter": "A",
        "text": "保证，使确信",
        "isCorrect": true,
        "source": "assure",
        "explanation": "正确。assure sb of sth（向某人保证，使某人放心）。"
      },
      {
        "letter": "B",
        "text": "确保，保证发生",
        "isCorrect": false,
        "source": "ensure",
        "explanation": "错误。ensure sth 指确保事情确定安全发生（不接sb）。"
      },
      {
        "letter": "C",
        "text": "给...上保险",
        "isCorrect": false,
        "source": "insure",
        "explanation": "错误。表示“购买商业保险”应该用 insure。"
      },
      {
        "letter": "D",
        "text": "承担，呈现",
        "isCorrect": false,
        "source": "assume",
        "explanation": "错误。表示“假定，承担”应该用 assume。"
      }
    ]
  },
  {
    "num": 43,
    "word": "bias",
    "star": "★",
    "batch": 2,
    "options": [
      {
        "letter": "A",
        "text": "基础，底部",
        "isCorrect": false,
        "source": "base",
        "explanation": "错误。表示“基础底部”应该用 base。"
      },
      {
        "letter": "B",
        "text": "偏见，偏心",
        "isCorrect": true,
        "source": "bias",
        "explanation": "正确。bias 意为“偏见偏心成见”（have a bias against/towards）。"
      },
      {
        "letter": "C",
        "text": "海湾，分隔间",
        "isCorrect": false,
        "source": "bay",
        "explanation": "错误。表示“海湾”应该用 bay。"
      },
      {
        "letter": "D",
        "text": "买，购买",
        "isCorrect": false,
        "source": "buy",
        "explanation": "错误。表示“购买”应该用 buy / purchase。"
      }
    ]
  },
  {
    "num": 44,
    "word": "notion",
    "star": "★",
    "batch": 2,
    "options": [
      {
        "letter": "A",
        "text": "国家，民族",
        "isCorrect": false,
        "source": "nation",
        "explanation": "错误。表示“国家民族”应该用 nation。"
      },
      {
        "letter": "B",
        "text": "运动，移动；提议",
        "isCorrect": false,
        "source": "motion",
        "explanation": "错误。表示“运动手势动作”应该用 motion。"
      },
      {
        "letter": "C",
        "text": "概念，观点，见解",
        "isCorrect": true,
        "source": "notion",
        "explanation": "正确。notion 意为“观念，见解，主张”。"
      },
      {
        "letter": "D",
        "text": "魔药，药水",
        "isCorrect": false,
        "source": "potion",
        "explanation": "错误。表示“药剂”应该用 potion。"
      }
    ]
  },
  {
    "num": 45,
    "word": "refine",
    "star": "★",
    "batch": 2,
    "options": [
      {
        "letter": "A",
        "text": "精炼，提纯；改进",
        "isCorrect": true,
        "source": "refine",
        "explanation": "正确。refine 意为“精炼提纯石油/糖，推敲润色文风”。"
      },
      {
        "letter": "B",
        "text": "限制，禁闭",
        "isCorrect": false,
        "source": "confine",
        "explanation": "错误。表示“限制监禁”应该用 confine。"
      },
      {
        "letter": "C",
        "text": "给...下定义",
        "isCorrect": false,
        "source": "define",
        "explanation": "错误。表示“明确定义”应该用 define。"
      },
      {
        "letter": "D",
        "text": "拒绝，衰退",
        "isCorrect": false,
        "source": "decline",
        "explanation": "错误。表示“婉拒衰退”应该用 decline。"
      }
    ]
  },
  {
    "num": 46,
    "word": "somehow",
    "star": "★",
    "batch": 2,
    "options": [
      {
        "letter": "A",
        "text": "稍微，有点儿",
        "isCorrect": false,
        "source": "somewhat",
        "explanation": "错误。表示“稍微有点”应该用 somewhat。"
      },
      {
        "letter": "B",
        "text": "以某种方式，不知怎么地",
        "isCorrect": true,
        "source": "somehow",
        "explanation": "正确。somehow 表示“不知何故，设法地”。"
      },
      {
        "letter": "C",
        "text": "在某个地方",
        "isCorrect": false,
        "source": "somewhere",
        "explanation": "错误。表示“在某处”应该用 somewhere。"
      },
      {
        "letter": "D",
        "text": "无论如何，不管怎样",
        "isCorrect": false,
        "source": "anyhow",
        "explanation": "错误。表示“不管怎样”应该用 anyhow / anyway。"
      }
    ]
  },
  {
    "num": 47,
    "word": "sophisticated",
    "star": "★",
    "batch": 2,
    "options": [
      {
        "letter": "A",
        "text": "老练的，精密的，先进的",
        "isCorrect": true,
        "source": "sophisticated",
        "explanation": "正确。sophisticated 指机器系统“精密高端的”，或人“老练圆滑有品位的”。"
      },
      {
        "letter": "B",
        "text": "令人窒息的",
        "isCorrect": false,
        "source": "suffocated",
        "explanation": "错误。表示“窒息的”应该用 suffocated。"
      },
      {
        "letter": "C",
        "text": "同情的，有共鸣的",
        "isCorrect": false,
        "source": "sympathetic",
        "explanation": "错误。表示“同情的”应该用 sympathetic。"
      },
      {
        "letter": "D",
        "text": "复杂的，纠缠不清的",
        "isCorrect": false,
        "source": "complicated",
        "explanation": "错误。complicated 强调结构混乱难解，sophisticated 强调工艺先进精细。"
      }
    ]
  },
  {
    "num": 48,
    "word": "steady",
    "star": "★",
    "batch": 2,
    "options": [
      {
        "letter": "A",
        "text": "准备好的",
        "isCorrect": false,
        "source": "ready",
        "explanation": "错误。表示“准备完毕的”应该用 ready。"
      },
      {
        "letter": "B",
        "text": "快速的，敏捷的",
        "isCorrect": false,
        "source": "speedy",
        "explanation": "错误。表示“迅速的”应该用 speedy。"
      },
      {
        "letter": "C",
        "text": "稳定的，稳固的，持续的",
        "isCorrect": true,
        "source": "steady",
        "explanation": "正确。steady 意为“平稳的，步调均匀的”（steady progress）。"
      },
      {
        "letter": "D",
        "text": "结实的，坚固的",
        "isCorrect": false,
        "source": "sturdy",
        "explanation": "错误。表示“结实强壮的”应该用 sturdy。"
      }
    ]
  },
  {
    "num": 49,
    "word": "instruct",
    "star": "★",
    "batch": 2,
    "options": [
      {
        "letter": "A",
        "text": "建设，建造",
        "isCorrect": false,
        "source": "construct",
        "explanation": "错误。表示“建造构成”应该用 construct。"
      },
      {
        "letter": "B",
        "text": "摧毁，破坏",
        "isCorrect": false,
        "source": "destruct",
        "explanation": "错误。表示“破坏摧毁”应该用 destroy / destruct。"
      },
      {
        "letter": "C",
        "text": "指示，指导，教授",
        "isCorrect": true,
        "source": "instruct",
        "explanation": "正确。instruct 意为“指示指令，指导讲授”。"
      },
      {
        "letter": "D",
        "text": "妨碍，阻碍",
        "isCorrect": false,
        "source": "obstruct",
        "explanation": "错误。表示“阻碍堵塞”应该用 obstruct。"
      }
    ]
  },
  {
    "num": 50,
    "word": "insult",
    "star": "★",
    "batch": 2,
    "options": [
      {
        "letter": "A",
        "text": "咨询，请教",
        "isCorrect": false,
        "source": "consult",
        "explanation": "错误。表示“咨询商量”应该用 consult。"
      },
      {
        "letter": "B",
        "text": "结果，后果",
        "isCorrect": false,
        "source": "result",
        "explanation": "错误。表示“结果”应该用 result。"
      },
      {
        "letter": "C",
        "text": "侮辱，凌辱",
        "isCorrect": true,
        "source": "insult",
        "explanation": "正确。insult 意为“侮辱冒犯”。"
      },
      {
        "letter": "D",
        "text": "孤立，隔绝",
        "isCorrect": false,
        "source": "isolate",
        "explanation": "错误。表示“孤立隔离”应该用 isolate。"
      }
    ]
  },
  {
    "num": 51,
    "word": "invisible",
    "star": "★",
    "batch": 2,
    "options": [
      {
        "letter": "A",
        "text": "战无不胜的，不可征服的",
        "isCorrect": false,
        "source": "invincible",
        "explanation": "错误。表示“不可战胜的”应该用 invincible。"
      },
      {
        "letter": "B",
        "text": "隐形的，看不见的",
        "isCorrect": true,
        "source": "invisible",
        "explanation": "正确。invisible 意为“隐形看不见的”（in- 否 + vis 看 + ible）。"
      },
      {
        "letter": "C",
        "text": "极有价值的，无价的",
        "isCorrect": false,
        "source": "invaluable",
        "explanation": "错误。表示“无价极珍贵的”应该用 invaluable。"
      },
      {
        "letter": "D",
        "text": "不可避免的",
        "isCorrect": false,
        "source": "inevitable",
        "explanation": "错误。表示“不可避免必然发生的”应该用 inevitable。"
      }
    ]
  },
  {
    "num": 52,
    "word": "tremendous",
    "star": "★",
    "batch": 2,
    "options": [
      {
        "letter": "A",
        "text": "颤抖的，发抖的",
        "isCorrect": false,
        "source": "trembling",
        "explanation": "错误。表示“发抖发颤的”应该用 trembling。"
      },
      {
        "letter": "B",
        "text": "巨大的，极大的；精彩的",
        "isCorrect": true,
        "source": "tremendous",
        "explanation": "正确。tremendous 意为“巨大的极大的”（tremendous progress），口语指极好的。"
      },
      {
        "letter": "C",
        "text": "繁重的，吃力的",
        "isCorrect": false,
        "source": "tedious",
        "explanation": "错误。表示“枯燥乏味的”应该用 tedious。"
      },
      {
        "letter": "D",
        "text": "暂时的，临时的",
        "isCorrect": false,
        "source": "temporary",
        "explanation": "错误。表示“临时的”应该用 temporary。"
      }
    ]
  },
  {
    "num": 53,
    "word": "vessel",
    "star": "★",
    "batch": 2,
    "options": [
      {
        "letter": "A",
        "text": "封臣，附属",
        "isCorrect": false,
        "source": "vassal",
        "explanation": "错误。表示“附庸附庸国”应该用 vassal。"
      },
      {
        "letter": "B",
        "text": "车辆，交通工具",
        "isCorrect": false,
        "source": "vehicle",
        "explanation": "错误。表示“陆地车辆”应该用 vehicle。"
      },
      {
        "letter": "C",
        "text": "容器，器皿；船只；血管",
        "isCorrect": true,
        "source": "vessel",
        "explanation": "正确。vessel 一词多义：船舰、脉管血管（blood vessel）、盛液体容器。"
      },
      {
        "letter": "D",
        "text": "背心，汗衫",
        "isCorrect": false,
        "source": "vest",
        "explanation": "错误。表示“背心马甲”应该用 vest。"
      }
    ]
  },
  {
    "num": 54,
    "word": "alert",
    "star": "★",
    "batch": 2,
    "options": [
      {
        "letter": "A",
        "text": "改变，更改",
        "isCorrect": false,
        "source": "alter",
        "explanation": "错误。表示“改动改变”应该用 alter。"
      },
      {
        "letter": "B",
        "text": "警觉的，戒备的；警报",
        "isCorrect": true,
        "source": "alert",
        "explanation": "正确。alert 意为“机警警觉的”（be alert to），名词指警报。"
      },
      {
        "letter": "C",
        "text": "过敏的",
        "isCorrect": false,
        "source": "allergic",
        "explanation": "错误。表示“过敏的”应该用 allergic。"
      },
      {
        "letter": "D",
        "text": "类似的，相同的",
        "isCorrect": false,
        "source": "alike",
        "explanation": "错误。表示“相像相同的”应该用 alike。"
      }
    ]
  },
  {
    "num": 55,
    "word": "branch",
    "star": "★",
    "batch": 2,
    "options": [
      {
        "letter": "A",
        "text": "品牌，商标",
        "isCorrect": false,
        "source": "brand",
        "explanation": "错误。表示“商业品牌”应该用 brand。"
      },
      {
        "letter": "B",
        "text": "一串，一束",
        "isCorrect": false,
        "source": "bunch",
        "explanation": "错误。表示“一束花/一串葡萄”应该用 bunch。"
      },
      {
        "letter": "C",
        "text": "树枝；分支机构，分店",
        "isCorrect": true,
        "source": "branch",
        "explanation": "正确。branch 意为“树枝”，引申为企业“分支公司、分行”。"
      },
      {
        "letter": "D",
        "text": "长凳，工作台",
        "isCorrect": false,
        "source": "bench",
        "explanation": "错误。表示“长椅长凳”应该用 bench。"
      }
    ]
  },
  {
    "num": 56,
    "word": "cue",
    "star": "★",
    "batch": 2,
    "options": [
      {
        "letter": "A",
        "text": "线索，迹象",
        "isCorrect": false,
        "source": "clue",
        "explanation": "错误。表示“破案线索”应该用 clue。"
      },
      {
        "letter": "B",
        "text": "队列，排队",
        "isCorrect": false,
        "source": "queue",
        "explanation": "错误。表示“排队队列”应该用 queue。"
      },
      {
        "letter": "C",
        "text": "治愈，治疗",
        "isCorrect": false,
        "source": "cure",
        "explanation": "错误。表示“治愈疾病”应该用 cure。"
      },
      {
        "letter": "D",
        "text": "提示，暗示；台词提示",
        "isCorrect": true,
        "source": "cue",
        "explanation": "正确。cue 原指演出“提示信号/台词提示”，引申为“暗示信号”。"
      }
    ]
  },
  {
    "num": 57,
    "word": "decent",
    "star": "★",
    "batch": 2,
    "options": [
      {
        "letter": "A",
        "text": "下降，下坡；血统",
        "isCorrect": false,
        "source": "descent",
        "explanation": "错误。表示“下降，血统渊源”应该用 descent。"
      },
      {
        "letter": "B",
        "text": "最近的，新近的",
        "isCorrect": false,
        "source": "recent",
        "explanation": "错误。表示“新近的”应该用 recent。"
      },
      {
        "letter": "C",
        "text": "体面的，正派的，相当好的",
        "isCorrect": true,
        "source": "decent",
        "explanation": "正确。decent 意为“像样体面的”（a decent salary/job），正派的。"
      },
      {
        "letter": "D",
        "text": "无辜的，清白的",
        "isCorrect": false,
        "source": "innocent",
        "explanation": "错误。表示“清白无辜的”应该用 innocent。"
      }
    ]
  },
  {
    "num": 58,
    "word": "pension",
    "star": "★",
    "batch": 2,
    "options": [
      {
        "letter": "A",
        "text": "紧张，张力",
        "isCorrect": false,
        "source": "tension",
        "explanation": "错误。表示“紧张局势张力”应该用 tension。"
      },
      {
        "letter": "B",
        "text": "养老金，退休金",
        "isCorrect": true,
        "source": "pension",
        "explanation": "正确。pension 指“养老金，退休金抚恤金”。"
      },
      {
        "letter": "C",
        "text": "激情，热爱",
        "isCorrect": false,
        "source": "passion",
        "explanation": "错误。表示“激情热情”应该用 passion。"
      },
      {
        "letter": "D",
        "text": "提及，说起",
        "isCorrect": false,
        "source": "mention",
        "explanation": "错误。表示“提到”应该用 mention。"
      }
    ]
  },
  {
    "num": 59,
    "word": "plague",
    "star": "★",
    "batch": 2,
    "options": [
      {
        "letter": "A",
        "text": "模糊不清的",
        "isCorrect": false,
        "source": "vague",
        "explanation": "错误。表示“含糊模糊的”应该用 vague。"
      },
      {
        "letter": "B",
        "text": "瘟疫，灾害；困扰折磨",
        "isCorrect": true,
        "source": "plague",
        "explanation": "正确。plague 意为“瘟疫祸患”，动词表示“长期困扰折磨”（be plagued by）。"
      },
      {
        "letter": "C",
        "text": "斑块，纪念牌匾",
        "isCorrect": false,
        "source": "plaque",
        "explanation": "错误。表示“牙斑铭牌”应该用 plaque。"
      },
      {
        "letter": "D",
        "text": "插头，插件",
        "isCorrect": false,
        "source": "plugin",
        "explanation": "错误。表示“插件”应该用 plugin。"
      }
    ]
  },
  {
    "num": 60,
    "word": "strain",
    "star": "★",
    "batch": 2,
    "options": [
      {
        "letter": "A",
        "text": "污渍，玷污",
        "isCorrect": false,
        "source": "stain",
        "explanation": "错误。表示“污点玷污”应该用 stain。"
      },
      {
        "letter": "B",
        "text": "拉紧，拉伤；压力，紧张",
        "isCorrect": true,
        "source": "strain",
        "explanation": "正确。strain 意为“拉伤绷紧（muscle strain）”，或精神巨大压力。"
      },
      {
        "letter": "C",
        "text": "限制，约束",
        "isCorrect": false,
        "source": "restrain",
        "explanation": "错误。表示“抑制约束”应该用 restrain。"
      },
      {
        "letter": "D",
        "text": "散步，漫步",
        "isCorrect": false,
        "source": "stroll",
        "explanation": "错误。表示“漫步闲逛”应该用 stroll。"
      }
    ]
  },
  {
    "num": 61,
    "word": "supervise",
    "star": "★",
    "batch": 2,
    "options": [
      {
        "letter": "A",
        "text": "使吃惊，惊讶",
        "isCorrect": false,
        "source": "surprise",
        "explanation": "错误。表示“使震惊惊讶”应该用 surprise。"
      },
      {
        "letter": "B",
        "text": "监督，管理，指导",
        "isCorrect": true,
        "source": "supervise",
        "explanation": "正确。supervise（super- 在上 + vis 看 -> 监督管理指导）。"
      },
      {
        "letter": "C",
        "text": "修改，温习",
        "isCorrect": false,
        "source": "revise",
        "explanation": "错误。表示“温习修改”应该用 revise。"
      },
      {
        "letter": "D",
        "text": "发明，设计构想",
        "isCorrect": false,
        "source": "devise",
        "explanation": "错误。表示“设计发明”应该用 devise。"
      }
    ]
  },
  {
    "num": 62,
    "word": "surplus",
    "star": "★",
    "batch": 2,
    "options": [
      {
        "letter": "A",
        "text": "表面，外表",
        "isCorrect": false,
        "source": "surface",
        "explanation": "错误。表示“物体表面”应该用 surface。"
      },
      {
        "letter": "B",
        "text": "过剩，盈余，顺差",
        "isCorrect": true,
        "source": "surplus",
        "explanation": "正确。surplus 意为“顺差盈余过剩”（反义词 deficit 赤字）。"
      },
      {
        "letter": "C",
        "text": "包围，环绕",
        "isCorrect": false,
        "source": "surround",
        "explanation": "错误。表示“包围环绕”应该用 surround。"
      },
      {
        "letter": "D",
        "text": "幸存，生还",
        "isCorrect": false,
        "source": "survive",
        "explanation": "错误。表示“幸存生还”应该用 survive。"
      }
    ]
  },
  {
    "num": 63,
    "word": "terminal",
    "star": "★",
    "batch": 2,
    "options": [
      {
        "letter": "A",
        "text": "永恒的，永久的",
        "isCorrect": false,
        "source": "eternal",
        "explanation": "错误。表示“永恒不灭的”应该用 eternal。"
      },
      {
        "letter": "B",
        "text": "末端的；晚期的；航站楼/终点站",
        "isCorrect": true,
        "source": "terminal",
        "explanation": "正确。terminal 指晚期绝症的，名词为机场航站楼/终点站。"
      },
      {
        "letter": "C",
        "text": "决定，测定",
        "isCorrect": false,
        "source": "determine",
        "explanation": "错误。表示“下定决心查明”应该用 determine。"
      },
      {
        "letter": "D",
        "text": "条约，学期，术语",
        "isCorrect": false,
        "source": "term",
        "explanation": "错误。表示学期/条款应该用 term。"
      }
    ]
  },
  {
    "num": 64,
    "word": "deliberate",
    "star": "高频",
    "batch": 2,
    "options": [
      {
        "letter": "A",
        "text": "绝望的，不顾一切的",
        "isCorrect": false,
        "source": "desperate",
        "explanation": "错误。表示“绝望拼命的”应该用 desperate。"
      },
      {
        "letter": "B",
        "text": "纤细精致的，易碎的",
        "isCorrect": false,
        "source": "delicate",
        "explanation": "错误。表示“精美娇嫩的”应该用 delicate。"
      },
      {
        "letter": "C",
        "text": "深思熟虑的；故意的",
        "isCorrect": true,
        "source": "deliberate",
        "explanation": "正确。deliberate 意为“深思熟虑的，蓄意故意的”。"
      },
      {
        "letter": "D",
        "text": "献身的，专注的",
        "isCorrect": false,
        "source": "dedicated",
        "explanation": "错误。表示“奉献专一的”应该用 dedicated。"
      }
    ]
  },
  {
    "num": 65,
    "word": "compel",
    "star": "高频",
    "batch": 2,
    "options": [
      {
        "letter": "A",
        "text": "强迫，逼迫",
        "isCorrect": true,
        "source": "compel",
        "explanation": "正确。compel 意为“强迫迫使某人做某事”（compel sb to do sth）。"
      },
      {
        "letter": "B",
        "text": "驱逐，开除",
        "isCorrect": false,
        "source": "expel",
        "explanation": "错误。表示“开除驱逐”应该用 expel。"
      },
      {
        "letter": "C",
        "text": "击退，抵制",
        "isCorrect": false,
        "source": "repel",
        "explanation": "错误。表示“击退排斥”应该用 repel。"
      },
      {
        "letter": "D",
        "text": "推进，推动",
        "isCorrect": false,
        "source": "propel",
        "explanation": "错误。表示“推动向前”应该用 propel。"
      }
    ]
  },
  {
    "num": 66,
    "word": "consent",
    "star": "高频",
    "batch": 2,
    "options": [
      {
        "letter": "A",
        "text": "内容，容量；满意的",
        "isCorrect": false,
        "source": "content",
        "explanation": "错误。content 表示内容或满意的。"
      },
      {
        "letter": "B",
        "text": "共识，一致意见",
        "isCorrect": false,
        "source": "consensus",
        "explanation": "错误。consensus 指集体广泛达成的一致共识。"
      },
      {
        "letter": "C",
        "text": "同意，赞同，准许",
        "isCorrect": true,
        "source": "consent",
        "explanation": "正确。consent 意为“同意赞同准许”（give consent to）。"
      },
      {
        "letter": "D",
        "text": "经常的，恒定的",
        "isCorrect": false,
        "source": "constant",
        "explanation": "错误。表示“恒定持续的”应该用 constant。"
      }
    ]
  },
  {
    "num": 67,
    "word": "vulnerable",
    "star": "高频",
    "batch": 2,
    "options": [
      {
        "letter": "A",
        "text": "贵重的，珍贵的",
        "isCorrect": false,
        "source": "valuable",
        "explanation": "错误。表示“有价值贵重的”应该用 valuable。"
      },
      {
        "letter": "B",
        "text": "易变的，变量",
        "isCorrect": false,
        "source": "variable",
        "explanation": "错误。表示“易变变量”应该用 variable。"
      },
      {
        "letter": "C",
        "text": "脆弱的，易受攻击或伤害的",
        "isCorrect": true,
        "source": "vulnerable",
        "explanation": "正确。vulnerable 意为“脆弱易受攻击伤害的”（vulnerable to）。"
      },
      {
        "letter": "D",
        "text": "自愿的，志愿的",
        "isCorrect": false,
        "source": "voluntary",
        "explanation": "错误。表示“自愿的”应该用 voluntary。"
      }
    ]
  },
  {
    "num": 68,
    "word": "abundant",
    "star": "高频",
    "batch": 2,
    "options": [
      {
        "letter": "A",
        "text": "抛弃，放弃",
        "isCorrect": false,
        "source": "abandon",
        "explanation": "错误。表示“抛弃”应该用 abandon。"
      },
      {
        "letter": "B",
        "text": "大量的，充足的，富裕的",
        "isCorrect": true,
        "source": "abundant",
        "explanation": "正确。abundant 意为“充裕大量的，盛产的”（be abundant in）。"
      },
      {
        "letter": "C",
        "text": "多余的，累赘的",
        "isCorrect": false,
        "source": "redundant",
        "explanation": "错误。表示“多余解雇的”应该用 redundant。"
      },
      {
        "letter": "D",
        "text": "不情愿的，勉强的",
        "isCorrect": false,
        "source": "reluctant",
        "explanation": "错误。表示“勉强不情愿的”应该用 reluctant。"
      }
    ]
  },
  {
    "num": 69,
    "word": "abolish",
    "star": "高频",
    "batch": 2,
    "options": [
      {
        "letter": "A",
        "text": "擦亮，修改润色",
        "isCorrect": false,
        "source": "polish",
        "explanation": "错误。表示“擦亮润色”应该用 polish。"
      },
      {
        "letter": "B",
        "text": "完成，达成",
        "isCorrect": false,
        "source": "accomplish",
        "explanation": "错误。表示“达成完成”应该用 accomplish。"
      },
      {
        "letter": "C",
        "text": "废除，废止（法律/制度）",
        "isCorrect": true,
        "source": "abolish",
        "explanation": "正确。abolish 专指“正式废除废止（法律制度/奴隶制）”。"
      },
      {
        "letter": "D",
        "text": "建立，设立",
        "isCorrect": false,
        "source": "establish",
        "explanation": "错误。表示“创立建立”应该用 establish。"
      }
    ]
  },
  {
    "num": 70,
    "word": "impose",
    "star": "高频",
    "batch": 2,
    "options": [
      {
        "letter": "A",
        "text": "暴露，揭发",
        "isCorrect": false,
        "source": "expose",
        "explanation": "错误。表示“暴露揭发”应该用 expose。"
      },
      {
        "letter": "B",
        "text": "强制推行，强加；课税",
        "isCorrect": true,
        "source": "impose",
        "explanation": "正确。impose 意为“强加于，强制实行”（impose taxes on）。"
      },
      {
        "letter": "C",
        "text": "反对，反抗",
        "isCorrect": false,
        "source": "oppose",
        "explanation": "错误。表示“反对”应该用 oppose。"
      },
      {
        "letter": "D",
        "text": "提议，求婚",
        "isCorrect": false,
        "source": "propose",
        "explanation": "错误。表示“提议建议”应该用 propose。"
      }
    ]
  },
  {
    "num": 71,
    "word": "distress",
    "star": "高频",
    "batch": 2,
    "options": [
      {
        "letter": "A",
        "text": "地区，行政区",
        "isCorrect": false,
        "source": "district",
        "explanation": "错误。表示“行政区”应该用 district。"
      },
      {
        "letter": "B",
        "text": "极大痛苦，忧伤，困境",
        "isCorrect": true,
        "source": "distress",
        "explanation": "正确。distress 意为“极大忧伤苦难危难”（in distress）。"
      },
      {
        "letter": "C",
        "text": "灾难，浩劫",
        "isCorrect": false,
        "source": "disaster",
        "explanation": "错误。表示“灾难”应该用 disaster。"
      },
      {
        "letter": "D",
        "text": "分心，分散注意力",
        "isCorrect": false,
        "source": "distract",
        "explanation": "错误。表示“使分心”应该用 distract。"
      }
    ]
  },
  {
    "num": 72,
    "word": "elevate",
    "star": "高频",
    "batch": 2,
    "options": [
      {
        "letter": "A",
        "text": "消除，排除",
        "isCorrect": false,
        "source": "eliminate",
        "explanation": "错误。表示“淘汰清除”应该用 eliminate。"
      },
      {
        "letter": "B",
        "text": "评价，评估",
        "isCorrect": false,
        "source": "evaluate",
        "explanation": "错误。表示“评估考量”应该用 evaluate。"
      },
      {
        "letter": "C",
        "text": "抬高，提升，晋升",
        "isCorrect": true,
        "source": "elevate",
        "explanation": "正确。elevate 意为“抬升，提升职位/情绪”（elevator 电梯）。"
      },
      {
        "letter": "D",
        "text": "精巧制作的，详尽阐述",
        "isCorrect": false,
        "source": "elaborate",
        "explanation": "错误。表示“精心制作详述”应该用 elaborate。"
      }
    ]
  },
  {
    "num": 73,
    "word": "equivalent",
    "star": "高频",
    "batch": 2,
    "options": [
      {
        "letter": "A",
        "text": "设备，器材",
        "isCorrect": false,
        "source": "equipment",
        "explanation": "错误。表示“装备器材”应该用 equipment。"
      },
      {
        "letter": "B",
        "text": "相等的，等价物，等同物",
        "isCorrect": true,
        "source": "equivalent",
        "explanation": "正确。equivalent 意为“等值的，等价物”（be equivalent to）。"
      },
      {
        "letter": "C",
        "text": "平等的，均等的",
        "isCorrect": false,
        "source": "equal",
        "explanation": "错误。equal 强调数量或地位平等，equivalent 强调价值等效。"
      },
      {
        "letter": "D",
        "text": "装备，配备齐全的",
        "isCorrect": false,
        "source": "equipped",
        "explanation": "错误。表示“装备有”应该用 equipped。"
      }
    ]
  },
  {
    "num": 74,
    "word": "strive",
    "star": "★",
    "batch": 3,
    "options": [
      {
        "letter": "A",
        "text": "罢工，打击",
        "isCorrect": false,
        "source": "strike",
        "explanation": "错误。表示“罢工，敲击，击打”应该用 strike。"
      },
      {
        "letter": "B",
        "text": "努力，奋斗，力求",
        "isCorrect": true,
        "source": "strive",
        "explanation": "正确。strive 意为“努力，奋斗，力争”（strive for / strive to do sth）。"
      },
      {
        "letter": "C",
        "text": "兴旺，繁荣昌盛",
        "isCorrect": false,
        "source": "thrive",
        "explanation": "错误。表示“繁荣兴旺”应该用 thrive。"
      },
      {
        "letter": "D",
        "text": "迈大步走，跨越",
        "isCorrect": false,
        "source": "stride",
        "explanation": "错误。表示“大步走，长足进展”应该用 stride。"
      }
    ]
  },
  {
    "num": 75,
    "word": "exceed",
    "star": "★",
    "batch": 3,
    "options": [
      {
        "letter": "A",
        "text": "成功，继承",
        "isCorrect": false,
        "source": "succeed",
        "explanation": "错误。表示“成功，继承”应该用 succeed。"
      },
      {
        "letter": "B",
        "text": "继续进行，前进",
        "isCorrect": false,
        "source": "proceed",
        "explanation": "错误。表示“继续开展前进”应该用 proceed。"
      },
      {
        "letter": "C",
        "text": "超过，超出（数量/限度）",
        "isCorrect": true,
        "source": "exceed",
        "explanation": "正确。exceed 意为“超出数量/限度”（exceedingly 极其）。"
      },
      {
        "letter": "D",
        "text": "后退，退缩",
        "isCorrect": false,
        "source": "recede",
        "explanation": "错误。表示“后退退去”应该用 recede。"
      }
    ]
  },
  {
    "num": 76,
    "word": "fatigue",
    "star": "高频",
    "batch": 3,
    "options": [
      {
        "letter": "A",
        "text": "饥荒，饥饿",
        "isCorrect": false,
        "source": "famine",
        "explanation": "错误。表示“饥荒”应该用 famine。"
      },
      {
        "letter": "B",
        "text": "身材，人物，数字",
        "isCorrect": false,
        "source": "figure",
        "explanation": "错误。表示“数字，体型”应该用 figure。"
      },
      {
        "letter": "C",
        "text": "疲劳，劳累",
        "isCorrect": true,
        "source": "fatigue",
        "explanation": "正确。fatigue 意为“精疲力竭，疲劳”（mental/physical fatigue）。"
      },
      {
        "letter": "D",
        "text": "失败，故障",
        "isCorrect": false,
        "source": "failure",
        "explanation": "错误。表示“失败故障”应该用 failure。"
      }
    ]
  },
  {
    "num": 77,
    "word": "gaze",
    "star": "高频",
    "batch": 3,
    "options": [
      {
        "letter": "A",
        "text": "放牧，吃草；擦伤",
        "isCorrect": false,
        "source": "graze",
        "explanation": "错误。表示“放牧吃草，轻微擦伤”应该用 graze。"
      },
      {
        "letter": "B",
        "text": "匆匆一瞥",
        "isCorrect": false,
        "source": "glance",
        "explanation": "错误。表示“快速看一眼”应该用 glance。"
      },
      {
        "letter": "C",
        "text": "怒目而视，耀眼光芒",
        "isCorrect": false,
        "source": "glare",
        "explanation": "错误。表示“愤怒注视，刺眼强光”应该用 glare。"
      },
      {
        "letter": "D",
        "text": "凝视，注视",
        "isCorrect": true,
        "source": "gaze",
        "explanation": "正确。gaze 表示“深情、入迷或长时间凝视注视”（gaze at the stars）。"
      }
    ]
  },
  {
    "num": 78,
    "word": "grave",
    "star": "高频",
    "batch": 3,
    "options": [
      {
        "letter": "A",
        "text": "优美，高雅",
        "isCorrect": false,
        "source": "grace",
        "explanation": "错误。表示“优雅风度”应该用 grace。"
      },
      {
        "letter": "B",
        "text": "严重的，庄重的；坟墓",
        "isCorrect": true,
        "source": "grave",
        "explanation": "正确。grave 形容词指“事态严重的，庄重的”；名词指“坟墓”。"
      },
      {
        "letter": "C",
        "text": "悲痛，伤心",
        "isCorrect": false,
        "source": "grief",
        "explanation": "错误。表示“极度悲伤”应该用 grief。"
      },
      {
        "letter": "D",
        "text": "勇敢的，无畏的",
        "isCorrect": false,
        "source": "brave",
        "explanation": "错误。表示“勇敢的”应该用 brave。"
      }
    ]
  },
  {
    "num": 79,
    "word": "hazard",
    "star": "高频",
    "batch": 3,
    "options": [
      {
        "letter": "A",
        "text": "随意的，杂乱无章的",
        "isCorrect": false,
        "source": "haphazard",
        "explanation": "错误。表示“偶然无计划的”应该用 haphazard。"
      },
      {
        "letter": "B",
        "text": "危险，危害，公害",
        "isCorrect": true,
        "source": "hazard",
        "explanation": "正确。hazard 意为“隐患，危险因素”（hazardous 有危害的）。"
      },
      {
        "letter": "C",
        "text": "艰难，困苦",
        "isCorrect": false,
        "source": "hardship",
        "explanation": "错误。表示“艰难困苦”应该用 hardship。"
      },
      {
        "letter": "D",
        "text": "暴风雪",
        "isCorrect": false,
        "source": "blizzard",
        "explanation": "错误。表示“暴风雪”应该用 blizzard。"
      }
    ]
  },
  {
    "num": 80,
    "word": "hostile",
    "star": "高频",
    "batch": 3,
    "options": [
      {
        "letter": "A",
        "text": "热情好客的",
        "isCorrect": false,
        "source": "hospitable",
        "explanation": "错误。表示“好客热情的”应该用 hospitable（反义词！）。"
      },
      {
        "letter": "B",
        "text": "敌意的，充满敌对的",
        "isCorrect": true,
        "source": "hostile",
        "explanation": "正确。hostile 意为“不友好的，充满敌意的”（hostile environment）。"
      },
      {
        "letter": "C",
        "text": "温顺的，驯服的",
        "isCorrect": false,
        "source": "docile",
        "explanation": "错误。表示“温顺的”应该用 docile。"
      },
      {
        "letter": "D",
        "text": "脆弱易碎的",
        "isCorrect": false,
        "source": "fragile",
        "explanation": "错误。表示“易碎的”应该用 fragile。"
      }
    ]
  },
  {
    "num": 81,
    "word": "inferior",
    "star": "高频",
    "batch": 3,
    "options": [
      {
        "letter": "A",
        "text": "更优秀的，上级的",
        "isCorrect": false,
        "source": "superior",
        "explanation": "错误。表示“更卓越的上级的”应该用 superior（反义词！）。"
      },
      {
        "letter": "B",
        "text": "较差的，次等的，下级的",
        "isCorrect": true,
        "source": "inferior",
        "explanation": "正确。inferior 表示“低劣的，次等的，下级的”（be inferior to）。"
      },
      {
        "letter": "C",
        "text": "内部的，室内的",
        "isCorrect": false,
        "source": "interior",
        "explanation": "错误。表示“内部室内”应该用 interior。"
      },
      {
        "letter": "D",
        "text": "外部的，外表的",
        "isCorrect": false,
        "source": "exterior",
        "explanation": "错误。表示“外部外表”应该用 exterior。"
      }
    ]
  },
  {
    "num": 82,
    "word": "instinct",
    "star": "高频",
    "batch": 3,
    "options": [
      {
        "letter": "A",
        "text": "明显的，截然不同的",
        "isCorrect": false,
        "source": "distinct",
        "explanation": "错误。表示“截然不同的清晰的”应该用 distinct。"
      },
      {
        "letter": "B",
        "text": "灭绝的，绝种的",
        "isCorrect": false,
        "source": "extinct",
        "explanation": "错误。表示“物种灭绝的”应该用 extinct。"
      },
      {
        "letter": "C",
        "text": "本能，天性，直觉",
        "isCorrect": true,
        "source": "instinct",
        "explanation": "正确。instinct 意为“天性，直觉本能”（instinctive 本能的）。"
      },
      {
        "letter": "D",
        "text": "指示，教授指导",
        "isCorrect": false,
        "source": "instruct",
        "explanation": "错误。表示“指导讲授”应该用 instruct。"
      }
    ]
  },
  {
    "num": 83,
    "word": "intensive",
    "star": "高频",
    "batch": 3,
    "options": [
      {
        "letter": "A",
        "text": "广泛的，广阔的",
        "isCorrect": false,
        "source": "extensive",
        "explanation": "错误。表示“广泛泛读的”应该用 extensive。"
      },
      {
        "letter": "B",
        "text": "集中的，密集的，加强的",
        "isCorrect": true,
        "source": "intensive",
        "explanation": "正确。intensive 意为“强化的，集中的，密集的”（intensive training 精读强化）。"
      },
      {
        "letter": "C",
        "text": "昂贵的，昂贵的花销",
        "isCorrect": false,
        "source": "expensive",
        "explanation": "错误。表示“昂贵的”应该用 expensive。"
      },
      {
        "letter": "D",
        "text": "热情的，强烈的",
        "isCorrect": false,
        "source": "intense",
        "explanation": "错误。intense 指情感剧烈，intensive 指高度集中密集。"
      }
    ]
  },
  {
    "num": 84,
    "word": "mankind",
    "star": "高频",
    "batch": 3,
    "options": [
      {
        "letter": "A",
        "text": "仁慈友善的",
        "isCorrect": false,
        "source": "kindly",
        "explanation": "错误。表示“和蔼友善的”应该用 kindly。"
      },
      {
        "letter": "B",
        "text": "人类，人类全体",
        "isCorrect": true,
        "source": "mankind",
        "explanation": "正确。mankind 集合名词，指“整个人类总称”。"
      },
      {
        "letter": "C",
        "text": "大陆，本土",
        "isCorrect": false,
        "source": "mainland",
        "explanation": "错误。表示“本土大陆”应该用 mainland。"
      },
      {
        "letter": "D",
        "text": "态度，礼貌",
        "isCorrect": false,
        "source": "manner",
        "explanation": "错误。表示“方式举止礼貌”应该用 manners / manner。"
      }
    ]
  },
  {
    "num": 85,
    "word": "miracle",
    "star": "高频",
    "batch": 3,
    "options": [
      {
        "letter": "A",
        "text": "镜子，映像",
        "isCorrect": false,
        "source": "mirror",
        "explanation": "错误。表示“镜子”应该用 mirror。"
      },
      {
        "letter": "B",
        "text": "奇迹，不可思议的事",
        "isCorrect": true,
        "source": "miracle",
        "explanation": "正确。miracle 意为“奇迹，令人赞叹的事物”。"
      },
      {
        "letter": "C",
        "text": "海市蜃楼，幻想",
        "isCorrect": false,
        "source": "mirage",
        "explanation": "错误。表示“蜃景幻象”应该用 mirage。"
      },
      {
        "letter": "D",
        "text": "悲惨痛苦的",
        "isCorrect": false,
        "source": "miserable",
        "explanation": "错误。表示“悲惨痛苦的”应该用 miserable。"
      }
    ]
  },
  {
    "num": 86,
    "word": "namely",
    "star": "高频",
    "batch": 3,
    "options": [
      {
        "letter": "A",
        "text": "也就是说，换言之，即",
        "isCorrect": true,
        "source": "namely",
        "explanation": "正确。namely 是副词，意为“也就是说，即”（用于列举具体说明）。"
      },
      {
        "letter": "B",
        "text": "主要地，基本上",
        "isCorrect": false,
        "source": "mainly",
        "explanation": "错误。表示“主要地”应该用 mainly。"
      },
      {
        "letter": "C",
        "text": "名义上的，象征性的",
        "isCorrect": false,
        "source": "nominal",
        "explanation": "错误。表示“名义上的”应该用 nominal。"
      },
      {
        "letter": "D",
        "text": "无名的，不知名的",
        "isCorrect": false,
        "source": "nameless",
        "explanation": "错误。表示“无名的”应该用 nameless。"
      }
    ]
  },
  {
    "num": 87,
    "word": "obey",
    "star": "高频",
    "batch": 3,
    "options": [
      {
        "letter": "A",
        "text": "不服从，违抗",
        "isCorrect": false,
        "source": "disobey",
        "explanation": "错误。disobey 是反义词。"
      },
      {
        "letter": "B",
        "text": "服从，听从，顺从",
        "isCorrect": true,
        "source": "obey",
        "explanation": "正确。obey 意为“顺从，遵守法律/指令”（obey the law）。"
      },
      {
        "letter": "C",
        "text": "反对，提出异议",
        "isCorrect": false,
        "source": "object",
        "explanation": "错误。表示“反对”应该用 object（object to）。"
      },
      {
        "letter": "D",
        "text": "被遗忘的",
        "isCorrect": false,
        "source": "oblivious",
        "explanation": "错误。表示“未察觉不在意的”应该用 oblivious。"
      }
    ]
  },
  {
    "num": 88,
    "word": "occupy",
    "star": "高频",
    "batch": 3,
    "options": [
      {
        "letter": "A",
        "text": "发生，出现",
        "isCorrect": false,
        "source": "occur",
        "explanation": "错误。表示“发生”应该用 occur。"
      },
      {
        "letter": "B",
        "text": "占用，占领；使忙碌",
        "isCorrect": true,
        "source": "occupy",
        "explanation": "正确。occupy 意为“占用时间/空间，使忙碌（be occupied with）”。"
      },
      {
        "letter": "C",
        "text": "预先占用，使全神贯注",
        "isCorrect": false,
        "source": "preoccupy",
        "explanation": "错误。表示“使心事重重”应该用 preoccupy。"
      },
      {
        "letter": "D",
        "text": "偶尔的，特殊场合",
        "isCorrect": false,
        "source": "occasional",
        "explanation": "错误。表示“偶然偶有的”应该用 occasional。"
      }
    ]
  },
  {
    "num": 89,
    "word": "pledge",
    "star": "高频",
    "batch": 3,
    "options": [
      {
        "letter": "A",
        "text": "树篱，对冲规避",
        "isCorrect": false,
        "source": "hedge",
        "explanation": "错误。表示“树篱，规避对冲”应该用 hedge。"
      },
      {
        "letter": "B",
        "text": "徽章，证章",
        "isCorrect": false,
        "source": "badge",
        "explanation": "错误。表示“徽章”应该用 badge。"
      },
      {
        "letter": "C",
        "text": "誓言，保证；抵押",
        "isCorrect": true,
        "source": "pledge",
        "explanation": "正确。pledge 意为“庄严誓言，许诺保证”（pledge to do sth）。"
      },
      {
        "letter": "D",
        "text": "边缘，棱角",
        "isCorrect": false,
        "source": "edge",
        "explanation": "错误。表示“边缘”应该用 edge。"
      }
    ]
  },
  {
    "num": 90,
    "word": "postpone",
    "star": "高频",
    "batch": 3,
    "options": [
      {
        "letter": "A",
        "text": "提议，求婚",
        "isCorrect": false,
        "source": "propose",
        "explanation": "错误。表示“提议”应该用 propose。"
      },
      {
        "letter": "B",
        "text": "推迟，延期",
        "isCorrect": true,
        "source": "postpone",
        "explanation": "正确。postpone（post- 往后 + pone 放 -> 延期推迟，put off / delay）。"
      },
      {
        "letter": "C",
        "text": "反对，反抗",
        "isCorrect": false,
        "source": "oppose",
        "explanation": "错误。表示“反对抗拒”应该用 oppose。"
      },
      {
        "letter": "D",
        "text": "组成，撰写作曲",
        "isCorrect": false,
        "source": "compose",
        "explanation": "错误。表示“组成创作”应该用 compose。"
      }
    ]
  },
  {
    "num": 91,
    "word": "prescribe",
    "star": "高频",
    "batch": 3,
    "options": [
      {
        "letter": "A",
        "text": "订购，订阅；同意",
        "isCorrect": false,
        "source": "subscribe",
        "explanation": "错误。表示“订阅，同意”应该用 subscribe。"
      },
      {
        "letter": "B",
        "text": "描写，叙述",
        "isCorrect": false,
        "source": "describe",
        "explanation": "错误。表示“描写叙述”应该用 describe。"
      },
      {
        "letter": "C",
        "text": "规定，指示；开药方",
        "isCorrect": true,
        "source": "prescribe",
        "explanation": "正确。prescribe 意为“规定指示；医生开处方药”（prescription 处方）。"
      },
      {
        "letter": "D",
        "text": "雕刻，题写",
        "isCorrect": false,
        "source": "inscribe",
        "explanation": "错误。表示“刻写铭文”应该用 inscribe。"
      }
    ]
  },
  {
    "num": 92,
    "word": "prevail",
    "star": "高频",
    "batch": 3,
    "options": [
      {
        "letter": "A",
        "text": "防止，阻止",
        "isCorrect": false,
        "source": "prevent",
        "explanation": "错误。表示“防止阻止”应该用 prevent。"
      },
      {
        "letter": "B",
        "text": "战胜，获胜；普遍盛行",
        "isCorrect": true,
        "source": "prevail",
        "explanation": "正确。prevail 意为“战胜击败（prevail over）”，或风俗“普遍盛行”。"
      },
      {
        "letter": "C",
        "text": "提供，供给",
        "isCorrect": false,
        "source": "provide",
        "explanation": "错误。表示“提供供给”应该用 provide。"
      },
      {
        "letter": "D",
        "text": "预习，预览",
        "isCorrect": false,
        "source": "preview",
        "explanation": "错误。表示“预览试演”应该用 preview。"
      }
    ]
  },
  {
    "num": 93,
    "word": "proceed",
    "star": "高频",
    "batch": 3,
    "options": [
      {
        "letter": "A",
        "text": "在...之前，先于",
        "isCorrect": false,
        "source": "precede",
        "explanation": "错误。表示“在次序/时间上领先”应该用 precede。"
      },
      {
        "letter": "B",
        "text": "继续进行，开展；前进",
        "isCorrect": true,
        "source": "proceed",
        "explanation": "正确。proceed（pro- 向前 + ceed 走 -> 继续进行，proceed with）。"
      },
      {
        "letter": "C",
        "text": "超过，超出",
        "isCorrect": false,
        "source": "exceed",
        "explanation": "错误。表示“超出数量”应该用 exceed。"
      },
      {
        "letter": "D",
        "text": "宣告，宣称",
        "isCorrect": false,
        "source": "proclaim",
        "explanation": "错误。表示“宣告正式声明”应该用 proclaim。"
      }
    ]
  },
  {
    "num": 94,
    "word": "prohibit",
    "star": "高频",
    "batch": 3,
    "options": [
      {
        "letter": "A",
        "text": "展出，展览",
        "isCorrect": false,
        "source": "exhibit",
        "explanation": "错误。表示“展览陈列”应该用 exhibit。"
      },
      {
        "letter": "B",
        "text": "抑制，阻止发展",
        "isCorrect": false,
        "source": "inhibit",
        "explanation": "错误。表示“抑制阻碍”应该用 inhibit。"
      },
      {
        "letter": "C",
        "text": "明确禁止，阻止（法令和条例）",
        "isCorrect": true,
        "source": "prohibit",
        "explanation": "正确。prohibit 专指“法律、规章明文禁止”（prohibit from）。"
      },
      {
        "letter": "D",
        "text": "栖息地，自然环境",
        "isCorrect": false,
        "source": "habitat",
        "explanation": "错误。表示“栖息地”应该用 habitat。"
      }
    ]
  },
  {
    "num": 95,
    "word": "scarce",
    "star": "高频",
    "batch": 3,
    "options": [
      {
        "letter": "A",
        "text": "惊吓，使害怕",
        "isCorrect": false,
        "source": "scare",
        "explanation": "错误。表示“受惊害怕”应该用 scare。"
      },
      {
        "letter": "B",
        "text": "神圣的，宗教庄严的",
        "isCorrect": false,
        "source": "sacred",
        "explanation": "错误。表示“神圣的”应该用 sacred。"
      },
      {
        "letter": "C",
        "text": "缺乏的，罕见的，不足的",
        "isCorrect": true,
        "source": "scarce",
        "explanation": "正确。scarce 意为“紧缺匮乏短缺的”（scarce resources）。"
      },
      {
        "letter": "D",
        "text": "鱼鳞，天平刻度",
        "isCorrect": false,
        "source": "scale",
        "explanation": "错误。表示“规模天平刻度”应该用 scale。"
      }
    ]
  },
  {
    "num": 96,
    "word": "sincere",
    "star": "高频",
    "batch": 3,
    "options": [
      {
        "letter": "A",
        "text": "剧烈的，严厉严重的",
        "isCorrect": false,
        "source": "severe",
        "explanation": "错误。表示“严厉严重剧烈的”应该用 severe。"
      },
      {
        "letter": "B",
        "text": "若干的，各自的",
        "isCorrect": false,
        "source": "several",
        "explanation": "错误。表示“几个”应该用 several。"
      },
      {
        "letter": "C",
        "text": "真诚的，由衷诚挚的",
        "isCorrect": true,
        "source": "sincere",
        "explanation": "正确。sincere 意为“真诚诚挚由衷的”（sincere thanks；Yours sincerely）。"
      },
      {
        "letter": "D",
        "text": "安详宁静的",
        "isCorrect": false,
        "source": "serene",
        "explanation": "错误。表示“安详祥和的”应该用 serene。"
      }
    ]
  },
  {
    "num": 97,
    "word": "soar",
    "star": "高频",
    "batch": 3,
    "options": [
      {
        "letter": "A",
        "text": "酸痛的，溃疡疼痛",
        "isCorrect": false,
        "source": "sore",
        "explanation": "错误。表示“肌肉酸痛，喉咙痛”应该用 sore（sore throat）。"
      },
      {
        "letter": "B",
        "text": "猛增，暴涨；高飞翱翔",
        "isCorrect": true,
        "source": "soar",
        "explanation": "正确。soar 意为“物价/利润急剧暴涨，气温猛增，展翅高飞”。"
      },
      {
        "letter": "C",
        "text": "发酸的，变质酸味的",
        "isCorrect": false,
        "source": "sour",
        "explanation": "错误。表示“酸味的”应该用 sour。"
      },
      {
        "letter": "D",
        "text": "咆哮，怒吼",
        "isCorrect": false,
        "source": "roar",
        "explanation": "错误。表示“狮子咆哮怒吼”应该用 roar。"
      }
    ]
  },
  {
    "num": 98,
    "word": "sorrow",
    "star": "高频",
    "batch": 3,
    "options": [
      {
        "letter": "A",
        "text": "借贷，借入",
        "isCorrect": false,
        "source": "borrow",
        "explanation": "错误。表示“借入”应该用 borrow。"
      },
      {
        "letter": "B",
        "text": "悲痛，哀伤，伤心事",
        "isCorrect": true,
        "source": "sorrow",
        "explanation": "正确。sorrow 意为“极度悲伤，伤心事”（joy and sorrow 悲喜交加）。"
      },
      {
        "letter": "C",
        "text": "狭窄的，窄小的",
        "isCorrect": false,
        "source": "narrow",
        "explanation": "错误。表示“狭窄的”应该用 narrow。"
      },
      {
        "letter": "D",
        "text": "麻雀",
        "isCorrect": false,
        "source": "sparrow",
        "explanation": "错误。表示“麻雀”应该用 sparrow。"
      }
    ]
  },
  {
    "num": 99,
    "word": "stake",
    "star": "高频",
    "batch": 3,
    "options": [
      {
        "letter": "A",
        "text": "牛排，厚肉片",
        "isCorrect": false,
        "source": "steak",
        "explanation": "错误。表示“牛排肉排”应该用 steak。"
      },
      {
        "letter": "B",
        "text": "赌注，利害关系；桩子",
        "isCorrect": true,
        "source": "stake",
        "explanation": "正确。stake 意为“赌注，重大利害关系”（at stake 利害攸关/处于危险中）。"
      },
      {
        "letter": "C",
        "text": "蛇",
        "isCorrect": false,
        "source": "snake",
        "explanation": "错误。表示“蛇”应该用 snake。"
      },
      {
        "letter": "D",
        "text": "打击，罢工",
        "isCorrect": false,
        "source": "strike",
        "explanation": "错误。表示“罢工击打”应该用 strike。"
      }
    ]
  },
  {
    "num": 100,
    "word": "stale",
    "star": "高频",
    "batch": 3,
    "options": [
      {
        "letter": "A",
        "text": "牢固稳定的",
        "isCorrect": false,
        "source": "stable",
        "explanation": "错误。表示“稳固稳定的”应该用 stable。"
      },
      {
        "letter": "B",
        "text": "偷窃过去的",
        "isCorrect": false,
        "source": "stole",
        "explanation": "错误。steal 的过去式。"
      },
      {
        "letter": "C",
        "text": "不新鲜的，变质的；陈腐的",
        "isCorrect": true,
        "source": "stale",
        "explanation": "正确。stale 指食品“风干变硬不新鲜的”，或言论/笑话“陈腐陈词滥调的”。"
      },
      {
        "letter": "D",
        "text": "规模天平",
        "isCorrect": false,
        "source": "scale",
        "explanation": "错误。表示“规模天平刻度”应该用 scale。"
      }
    ]
  },
  {
    "num": 101,
    "word": "substitute",
    "star": "★",
    "batch": 4,
    "group": "Group 24",
    "options": [
      {
        "letter": "A",
        "text": "构成，组成",
        "isCorrect": false,
        "source": "constitute",
        "explanation": "错误。“构成，组成”实际源自英文单词 constitute。"
      },
      {
        "letter": "B",
        "text": "代理，替换，替代品",
        "isCorrect": true,
        "source": "substitute",
        "explanation": "正确。substitute 意为“代理，替换，替代品”。substitute（sub- 在下 + stit- 站立 -> 替补站位 -> 代替，替换，替代品；substitute A for B 用A替代B）。"
      },
      {
        "letter": "C",
        "text": "设立，创立；研究所",
        "isCorrect": false,
        "source": "institute",
        "explanation": "错误。“设立，创立；研究所”实际源自英文单词 institute。"
      },
      {
        "letter": "D",
        "text": "迷信的",
        "isCorrect": false,
        "source": "superstitious",
        "explanation": "错误。“迷信的”实际源自英文单词 superstitious。"
      }
    ],
    "root_note": "substitute（sub- 在下 + stit- 站立 -> 替补站位 -> 代替，替换，替代品；substitute A for B 用A替代B）。"
  },
  {
    "num": 102,
    "word": "superficial",
    "star": "★",
    "batch": 4,
    "group": "Group 24",
    "options": [
      {
        "letter": "A",
        "text": "肤浅的，表面上的",
        "isCorrect": true,
        "source": "superficial",
        "explanation": "正确。superficial 意为“肤浅的，表面上的”。superficial（super- 在上面 + fic 脸/表面 -> 只停留在表面 -> 肤浅的，草率的）。"
      },
      {
        "letter": "B",
        "text": "高级的，更优秀的",
        "isCorrect": false,
        "source": "superior",
        "explanation": "错误。“高级的，更优秀的”实际源自英文单词 superior。"
      },
      {
        "letter": "C",
        "text": "人造的，虚假的",
        "isCorrect": false,
        "source": "artificial",
        "explanation": "错误。“人造的，虚假的”实际源自英文单词 artificial。"
      },
      {
        "letter": "D",
        "text": "有益的，有利的",
        "isCorrect": false,
        "source": "beneficial",
        "explanation": "错误。“有益的，有利的”实际源自英文单词 beneficial。"
      }
    ],
    "root_note": "superficial（super- 在上面 + fic 脸/表面 -> 只停留在表面 -> 肤浅的，草率的）。"
  },
  {
    "num": 103,
    "word": "suspicion",
    "star": "★",
    "batch": 4,
    "group": "Group 24",
    "options": [
      {
        "letter": "A",
        "text": "暂停，中止；暂缓",
        "isCorrect": false,
        "source": "suspension",
        "explanation": "错误。“暂停，中止；暂缓”实际源自英文单词 suspension。"
      },
      {
        "letter": "B",
        "text": "怀疑，嫌疑",
        "isCorrect": true,
        "source": "suspicion",
        "explanation": "正确。suspicion 意为“怀疑，嫌疑”。suspicion 是 suspect 的名词，意为“怀疑，涉嫌”（under suspicion 受到怀疑）。"
      },
      {
        "letter": "C",
        "text": "监督，监管",
        "isCorrect": false,
        "source": "supervision",
        "explanation": "错误。“监督，监管”实际源自英文单词 supervision。"
      },
      {
        "letter": "D",
        "text": "顺从，投降",
        "isCorrect": false,
        "source": "submission",
        "explanation": "错误。“顺从，投降”实际源自英文单词 submission。"
      }
    ],
    "root_note": "suspicion 是 suspect 的名词，意为“怀疑，涉嫌”（under suspicion 受到怀疑）。"
  },
  {
    "num": 104,
    "word": "sway",
    "star": "★",
    "batch": 4,
    "group": "Group 24",
    "options": [
      {
        "letter": "A",
        "text": "发誓，起誓",
        "isCorrect": false,
        "source": "swear",
        "explanation": "错误。“发誓，起誓”实际源自英文单词 swear。"
      },
      {
        "letter": "B",
        "text": "摇摆，摇动；影响支配",
        "isCorrect": true,
        "source": "sway",
        "explanation": "正确。sway 意为“摇摆，摇动；影响支配”。sway 意为“摇晃，摇摆”，引申为“左右动摇，影响某人立场”。"
      },
      {
        "letter": "C",
        "text": "吞下，咽下",
        "isCorrect": false,
        "source": "swallow",
        "explanation": "错误。“吞下，咽下”实际源自英文单词 swallow。"
      },
      {
        "letter": "D",
        "text": "打扫，席卷",
        "isCorrect": false,
        "source": "sweep",
        "explanation": "错误。“打扫，席卷”实际源自英文单词 sweep。"
      }
    ],
    "root_note": "sway 意为“摇晃，摇摆”，引申为“左右动摇，影响某人立场”。"
  },
  {
    "num": 105,
    "word": "tangible",
    "star": "★",
    "batch": 4,
    "group": "Group 24",
    "options": [
      {
        "letter": "A",
        "text": "可怕的，严重的",
        "isCorrect": false,
        "source": "terrible",
        "explanation": "错误。“可怕的，严重的”实际源自英文单词 terrible。"
      },
      {
        "letter": "B",
        "text": "可触摸的，有形的，切实的",
        "isCorrect": true,
        "source": "tangible",
        "explanation": "正确。tangible 意为“可触摸的，有形的，切实的”。tangible（tang- 接触/触碰 -> 能摸得着的 -> 有形的，切实的证据/利益，tangible benefits）。"
      },
      {
        "letter": "C",
        "text": "易碎的，脆弱的",
        "isCorrect": false,
        "source": "fragile",
        "explanation": "错误。“易碎的，脆弱的”实际源自英文单词 fragile。"
      },
      {
        "letter": "D",
        "text": "可行的，行得通的",
        "isCorrect": false,
        "source": "feasible",
        "explanation": "错误。“可行的，行得通的”实际源自英文单词 feasible。"
      }
    ],
    "root_note": "tangible（tang- 接触/触碰 -> 能摸得着的 -> 有形的，切实的证据/利益，tangible benefits）。"
  },
  {
    "num": 106,
    "word": "terror",
    "star": "★",
    "batch": 4,
    "group": "Group 24",
    "options": [
      {
        "letter": "A",
        "text": "错误，差错",
        "isCorrect": false,
        "source": "error",
        "explanation": "错误。“错误，差错”实际源自英文单词 error。"
      },
      {
        "letter": "B",
        "text": "恐惧，惊恐；恐怖活动",
        "isCorrect": true,
        "source": "terror",
        "explanation": "正确。terror 意为“恐惧，惊恐；恐怖活动”。terror 意为“极度恐惧，恐怖”（terrorism 恐怖主义）。"
      },
      {
        "letter": "C",
        "text": "领土，版图",
        "isCorrect": false,
        "source": "territory",
        "explanation": "错误。“领土，版图”实际源自英文单词 territory。"
      },
      {
        "letter": "D",
        "text": "镜子，映像",
        "isCorrect": false,
        "source": "mirror",
        "explanation": "错误。“镜子，映像”实际源自英文单词 mirror。"
      }
    ],
    "root_note": "terror 意为“极度恐惧，恐怖”（terrorism 恐怖主义）。"
  },
  {
    "num": 107,
    "word": "thereby",
    "star": "★",
    "batch": 4,
    "group": "Group 24",
    "options": [
      {
        "letter": "A",
        "text": "因此，从而",
        "isCorrect": true,
        "source": "thereby",
        "explanation": "正确。thereby 意为“因此，从而”。thereby 是副词，意为“从而，借此，因此”，后常接 doing 状语。"
      },
      {
        "letter": "B",
        "text": "无论如何，反正",
        "isCorrect": false,
        "source": "anyway",
        "explanation": "错误。“无论如何，反正”实际源自英文单词 anyway。"
      },
      {
        "letter": "C",
        "text": "在此期间",
        "isCorrect": false,
        "source": "meanwhile",
        "explanation": "错误。“在此期间”实际源自英文单词 meanwhile。"
      },
      {
        "letter": "D",
        "text": "否则，要不然",
        "isCorrect": false,
        "source": "otherwise",
        "explanation": "错误。“否则，要不然”实际源自英文单词 otherwise。"
      }
    ],
    "root_note": "thereby 是副词，意为“从而，借此，因此”，后常接 doing 状语。"
  },
  {
    "num": 108,
    "word": "thread",
    "star": "★",
    "batch": 4,
    "group": "Group 24",
    "options": [
      {
        "letter": "A",
        "text": "威胁，恐吓",
        "isCorrect": false,
        "source": "threat",
        "explanation": "错误。“威胁，恐吓”实际源自英文单词 threat。"
      },
      {
        "letter": "B",
        "text": "线，细丝；思绪，脉络",
        "isCorrect": true,
        "source": "thread",
        "explanation": "正确。thread 意为“线，细丝；思绪，脉络”。thread 意为“棉线，线索，思路脉络”（lose the thread of thought 失去思路）。"
      },
      {
        "letter": "C",
        "text": "踏，践踏",
        "isCorrect": false,
        "source": "tread",
        "explanation": "错误。“踏，践踏”实际源自英文单词 tread。"
      },
      {
        "letter": "D",
        "text": "咽喉，喉咙",
        "isCorrect": false,
        "source": "throat",
        "explanation": "错误。“咽喉，喉咙”实际源自英文单词 throat。"
      }
    ],
    "root_note": "thread 意为“棉线，线索，思路脉络”（lose the thread of thought 失去思路）。"
  },
  {
    "num": 109,
    "word": "tide",
    "star": "★",
    "batch": 4,
    "group": "Group 24",
    "options": [
      {
        "letter": "A",
        "text": "整洁的，整齐的",
        "isCorrect": false,
        "source": "tidy",
        "explanation": "错误。“整洁的，整齐的”实际源自英文单词 tidy。"
      },
      {
        "letter": "B",
        "text": "潮汐，潮流，潮水",
        "isCorrect": true,
        "source": "tide",
        "explanation": "正确。tide 意为“潮汐，潮流，潮水”。tide 意为“潮水，潮流”，短语 tide over 帮助渡过难关。"
      },
      {
        "letter": "C",
        "text": "紧的，紧绷的",
        "isCorrect": false,
        "source": "tight",
        "explanation": "错误。“紧的，紧绷的”实际源自英文单词 tight。"
      },
      {
        "letter": "D",
        "text": "领带，联系",
        "isCorrect": false,
        "source": "tie",
        "explanation": "错误。“领带，联系”实际源自英文单词 tie。"
      }
    ],
    "root_note": "tide 意为“潮水，潮流”，短语 tide over 帮助渡过难关。"
  },
  {
    "num": 110,
    "word": "tin",
    "star": "★",
    "batch": 4,
    "group": "Group 24",
    "options": [
      {
        "letter": "A",
        "text": "微小的，极小的",
        "isCorrect": false,
        "source": "tiny",
        "explanation": "错误。“微小的，极小的”实际源自英文单词 tiny。"
      },
      {
        "letter": "B",
        "text": "瘦的，薄的",
        "isCorrect": false,
        "source": "thin",
        "explanation": "错误。“瘦的，薄的”实际源自英文单词 thin。"
      },
      {
        "letter": "C",
        "text": "锡；铁罐，罐头",
        "isCorrect": true,
        "source": "tin",
        "explanation": "正确。tin 意为“锡；铁罐，罐头”。tin 意为“金属锡，马口铁罐头”（a tin of beans）。"
      },
      {
        "letter": "D",
        "text": "针，大头针",
        "isCorrect": false,
        "source": "pin",
        "explanation": "错误。“针，大头针”实际源自英文单词 pin。"
      }
    ],
    "root_note": "tin 意为“金属锡，马口铁罐头”（a tin of beans）。"
  },
  {
    "num": 111,
    "word": "toll",
    "star": "★",
    "batch": 4,
    "group": "Group 24",
    "options": [
      {
        "letter": "A",
        "text": "高的，修长的",
        "isCorrect": false,
        "source": "tall",
        "explanation": "错误。“高的，修长的”实际源自英文单词 tall。"
      },
      {
        "letter": "B",
        "text": "通行费；伤亡人数，代价",
        "isCorrect": true,
        "source": "toll",
        "explanation": "正确。toll 意为“通行费；伤亡人数，代价”。toll 指公路桥梁“通行费”，也指事故灾难的“伤亡代价”（death toll 死亡人数）。"
      },
      {
        "letter": "C",
        "text": "工具，用具",
        "isCorrect": false,
        "source": "tool",
        "explanation": "错误。“工具，用具”实际源自英文单词 tool。"
      },
      {
        "letter": "D",
        "text": "辛劳，苦工",
        "isCorrect": false,
        "source": "toil",
        "explanation": "错误。“辛劳，苦工”实际源自英文单词 toil。"
      }
    ],
    "root_note": "toll 指公路桥梁“通行费”，也指事故灾难的“伤亡代价”（death toll 死亡人数）。"
  },
  {
    "num": 112,
    "word": "transmit",
    "star": "★",
    "batch": 4,
    "group": "Group 24",
    "options": [
      {
        "letter": "A",
        "text": "发射，发射出",
        "isCorrect": false,
        "source": "emit",
        "explanation": "错误。“发射，发射出”实际源自英文单词 emit。"
      },
      {
        "letter": "B",
        "text": "传送，传播，传递（信号/疾病）",
        "isCorrect": true,
        "source": "transmit",
        "explanation": "正确。transmit 意为“传送，传播，传递（信号/疾病）”。transmit（trans- 跨越 + mit 传送 -> 跨越传送 -> 传送无线电信号、传播疾病）。"
      },
      {
        "letter": "C",
        "text": "允许，准许；许可证",
        "isCorrect": false,
        "source": "permit",
        "explanation": "错误。“允许，准许；许可证”实际源自英文单词 permit。"
      },
      {
        "letter": "D",
        "text": "提交，服从",
        "isCorrect": false,
        "source": "submit",
        "explanation": "错误。“提交，服从”实际源自英文单词 submit。"
      }
    ],
    "root_note": "transmit（trans- 跨越 + mit 传送 -> 跨越传送 -> 传送无线电信号、传播疾病）。"
  },
  {
    "num": 113,
    "word": "trigger",
    "star": "★",
    "batch": 4,
    "group": "Group 24",
    "options": [
      {
        "letter": "A",
        "text": "拖曳，拉拉扯扯",
        "isCorrect": false,
        "source": "drag",
        "explanation": "错误。“拖曳，拉拉扯扯”实际源自英文单词 drag。"
      },
      {
        "letter": "B",
        "text": "老虎",
        "isCorrect": false,
        "source": "tiger",
        "explanation": "错误。“老虎”实际源自英文单词 tiger。"
      },
      {
        "letter": "C",
        "text": "扳机；引发，导致",
        "isCorrect": true,
        "source": "trigger",
        "explanation": "正确。trigger 意为“扳机；引发，导致”。trigger 原指“枪械扳机”，引申为动词“触发，引起，导致连锁反应”（trigger a crisis）。"
      },
      {
        "letter": "D",
        "text": "瞄准，针对",
        "isCorrect": false,
        "source": "target",
        "explanation": "错误。“瞄准，针对”实际源自英文单词 target。"
      }
    ],
    "root_note": "trigger 原指“枪械扳机”，引申为动词“触发，引起，导致连锁反应”（trigger a crisis）。"
  },
  {
    "num": 114,
    "word": "tune",
    "star": "★",
    "batch": 4,
    "group": "Group 24",
    "options": [
      {
        "letter": "A",
        "text": "声调，语气",
        "isCorrect": false,
        "source": "tone",
        "explanation": "错误。“声调，语气”实际源自英文单词 tone。"
      },
      {
        "letter": "B",
        "text": "曲调，曲子；调谐调音",
        "isCorrect": true,
        "source": "tune",
        "explanation": "正确。tune 意为“曲调，曲子；调谐调音”。tune 意为“旋律曲调”（in tune 合拍），作动词指“调音，调台”（tune in 调谐收听）。"
      },
      {
        "letter": "C",
        "text": "时间，时期",
        "isCorrect": false,
        "source": "time",
        "explanation": "错误。“时间，时期”实际源自英文单词 time。"
      },
      {
        "letter": "D",
        "text": "巨大的",
        "isCorrect": false,
        "source": "huge",
        "explanation": "错误。“巨大的”实际源自英文单词 huge。"
      }
    ],
    "root_note": "tune 意为“旋律曲调”（in tune 合拍），作动词指“调音，调台”（tune in 调谐收听）。"
  },
  {
    "num": 115,
    "word": "utility",
    "star": "★",
    "batch": 4,
    "group": "Group 24",
    "options": [
      {
        "letter": "A",
        "text": "利用，使用",
        "isCorrect": false,
        "source": "utilize",
        "explanation": "错误。“利用，使用”实际源自英文单词 utilize。"
      },
      {
        "letter": "B",
        "text": "实用，功用；公共事业",
        "isCorrect": true,
        "source": "utility",
        "explanation": "正确。utility 意为“实用，功用；公共事业”。utility 意为“实用性，效用”；常作复数 utilities 指“水暖电气等公用事业服务”。"
      },
      {
        "letter": "C",
        "text": "能力，才能",
        "isCorrect": false,
        "source": "ability",
        "explanation": "错误。“能力，才能”实际源自英文单词 ability。"
      },
      {
        "letter": "D",
        "text": "稳定性",
        "isCorrect": false,
        "source": "stability",
        "explanation": "错误。“稳定性”实际源自英文单词 stability。"
      }
    ],
    "root_note": "utility 意为“实用性，效用”；常作复数 utilities 指“水暖电气等公用事业服务”。"
  },
  {
    "num": 116,
    "word": "utilize",
    "star": "★",
    "batch": 4,
    "group": "Group 24",
    "options": [
      {
        "letter": "A",
        "text": "实用性，公共设施",
        "isCorrect": false,
        "source": "utility",
        "explanation": "错误。“实用性，公共设施”实际源自英文单词 utility。"
      },
      {
        "letter": "B",
        "text": "利用，使用",
        "isCorrect": true,
        "source": "utilize",
        "explanation": "正确。utilize 意为“利用，使用”。utilize（util- 实用 -> 善加利用，使产生实际效用，utilize resources）。"
      },
      {
        "letter": "C",
        "text": "联合，结合",
        "isCorrect": false,
        "source": "unite",
        "explanation": "错误。“联合，结合”实际源自英文单词 unite。"
      },
      {
        "letter": "D",
        "text": "实现，意识到",
        "isCorrect": false,
        "source": "realize",
        "explanation": "错误。“实现，意识到”实际源自英文单词 realize。"
      }
    ],
    "root_note": "utilize（util- 实用 -> 善加利用，使产生实际效用，utilize resources）。"
  },
  {
    "num": 117,
    "word": "valid",
    "star": "★",
    "batch": 4,
    "group": "Group 24",
    "options": [
      {
        "letter": "A",
        "text": "有价值的，贵重的",
        "isCorrect": false,
        "source": "valuable",
        "explanation": "错误。“有价值的，贵重的”实际源自英文单词 valuable。"
      },
      {
        "letter": "B",
        "text": "合法的，有效的，有根据的",
        "isCorrect": true,
        "source": "valid",
        "explanation": "正确。valid 意为“合法的，有效的，有根据的”。valid 意为“在有效期内的（valid passport）；论据充分符合逻辑的（valid argument）”。"
      },
      {
        "letter": "C",
        "text": "模糊的，不明确的",
        "isCorrect": false,
        "source": "vague",
        "explanation": "错误。“模糊的，不明确的”实际源自英文单词 vague。"
      },
      {
        "letter": "D",
        "text": "不同的，各种各样的",
        "isCorrect": false,
        "source": "various",
        "explanation": "错误。“不同的，各种各样的”实际源自英文单词 various。"
      }
    ],
    "root_note": "valid 意为“在有效期内的（valid passport）；论据充分符合逻辑的（valid argument）”。"
  },
  {
    "num": 118,
    "word": "vanish",
    "star": "★",
    "batch": 4,
    "group": "Group 24",
    "options": [
      {
        "letter": "A",
        "text": "放逐，流放",
        "isCorrect": false,
        "source": "banish",
        "explanation": "错误。“放逐，流放”实际源自英文单词 banish。"
      },
      {
        "letter": "B",
        "text": "突然消失，消散",
        "isCorrect": true,
        "source": "vanish",
        "explanation": "正确。vanish 意为“突然消失，消散”。vanish 意为“突然不见，凭空消失”（vanish into thin air 烟消云散）。"
      },
      {
        "letter": "C",
        "text": "上光漆，清漆",
        "isCorrect": false,
        "source": "varnish",
        "explanation": "错误。“上光漆，清漆”实际源自英文单词 varnish。"
      },
      {
        "letter": "D",
        "text": "减少，缩小",
        "isCorrect": false,
        "source": "diminish",
        "explanation": "错误。“减少，缩小”实际源自英文单词 diminish。"
      }
    ],
    "root_note": "vanish 意为“突然不见，凭空消失”（vanish into thin air 烟消云散）。"
  },
  {
    "num": 119,
    "word": "versus",
    "star": "★",
    "batch": 4,
    "group": "Group 24",
    "options": [
      {
        "letter": "A",
        "text": "诗篇，诗节",
        "isCorrect": false,
        "source": "verse",
        "explanation": "错误。“诗篇，诗节”实际源自英文单词 verse。"
      },
      {
        "letter": "B",
        "text": "版本，译本",
        "isCorrect": false,
        "source": "version",
        "explanation": "错误。“版本，译本”实际源自英文单词 version。"
      },
      {
        "letter": "C",
        "text": "与...相对，对（诉讼/竞赛）",
        "isCorrect": true,
        "source": "versus",
        "explanation": "正确。versus 意为“与...相对，对（诉讼/竞赛）”。versus 缩写为 vs.，表示“对决，与...相对（如 team A vs. team B）”。"
      },
      {
        "letter": "D",
        "text": "倒转的，颠倒的",
        "isCorrect": false,
        "source": "reverse",
        "explanation": "错误。“倒转的，颠倒的”实际源自英文单词 reverse。"
      }
    ],
    "root_note": "versus 缩写为 vs.，表示“对决，与...相对（如 team A vs. team B）”。"
  },
  {
    "num": 120,
    "word": "veteran",
    "star": "★",
    "batch": 4,
    "group": "Group 24",
    "options": [
      {
        "letter": "A",
        "text": "素食主义者",
        "isCorrect": false,
        "source": "vegetarian",
        "explanation": "错误。“素食主义者”实际源自英文单词 vegetarian。"
      },
      {
        "letter": "B",
        "text": "老兵；经验丰富的老手",
        "isCorrect": true,
        "source": "veteran",
        "explanation": "正确。veteran 意为“老兵；经验丰富的老手”。veteran 意为“退伍军人，老兵；某行业阅历极深的老手”。"
      },
      {
        "letter": "C",
        "text": "兽医",
        "isCorrect": false,
        "source": "veterinarian",
        "explanation": "错误。“兽医”实际源自英文单词 veterinarian。"
      },
      {
        "letter": "D",
        "text": "车辆，载具",
        "isCorrect": false,
        "source": "vehicle",
        "explanation": "错误。“车辆，载具”实际源自英文单词 vehicle。"
      }
    ],
    "root_note": "veteran 意为“退伍军人，老兵；某行业阅历极深的老手”。"
  },
  {
    "num": 121,
    "word": "victim",
    "star": "★",
    "batch": 4,
    "group": "Group 24",
    "options": [
      {
        "letter": "A",
        "text": "胜利，成功",
        "isCorrect": false,
        "source": "victory",
        "explanation": "错误。“胜利，成功”实际源自英文单词 victory。"
      },
      {
        "letter": "B",
        "text": "受害者，牺牲品",
        "isCorrect": true,
        "source": "victim",
        "explanation": "正确。victim 意为“受害者，牺牲品”。victim 意为“犯罪/灾难/事故的受害者，受骗上当的人”（fall victim to）。"
      },
      {
        "letter": "C",
        "text": "恶习，恶行",
        "isCorrect": false,
        "source": "vice",
        "explanation": "错误。“恶习，恶行”实际源自英文单词 vice。"
      },
      {
        "letter": "D",
        "text": "可见的",
        "isCorrect": false,
        "source": "visible",
        "explanation": "错误。“可见的”实际源自英文单词 visible。"
      }
    ],
    "root_note": "victim 意为“犯罪/灾难/事故的受害者，受骗上当的人”（fall victim to）。"
  },
  {
    "num": 122,
    "word": "warehouse",
    "star": "★",
    "batch": 4,
    "group": "Group 24",
    "options": [
      {
        "letter": "A",
        "text": "五金硬件",
        "isCorrect": false,
        "source": "hardware",
        "explanation": "错误。“五金硬件”实际源自英文单词 hardware。"
      },
      {
        "letter": "B",
        "text": "农舍，农庄",
        "isCorrect": false,
        "source": "farmhouse",
        "explanation": "错误。“农舍，农庄”实际源自英文单词 farmhouse。"
      },
      {
        "letter": "C",
        "text": "仓库，货栈",
        "isCorrect": true,
        "source": "warehouse",
        "explanation": "正确。warehouse 意为“仓库，货栈”。warehouse 意为“大型仓储库房，货栈”（ware 货物 + house 房屋）。"
      },
      {
        "letter": "D",
        "text": "温室，花房",
        "isCorrect": false,
        "source": "greenhouse",
        "explanation": "错误。“温室，花房”实际源自英文单词 greenhouse。"
      }
    ],
    "root_note": "warehouse 意为“大型仓储库房，货栈”（ware 货物 + house 房屋）。"
  },
  {
    "num": 123,
    "word": "weird",
    "star": "★",
    "batch": 4,
    "group": "Group 24",
    "options": [
      {
        "letter": "A",
        "text": "疲倦的，厌烦的",
        "isCorrect": false,
        "source": "weary",
        "explanation": "错误。“疲倦的，厌烦的”实际源自英文单词 weary。"
      },
      {
        "letter": "B",
        "text": "奇怪的，古怪离奇的",
        "isCorrect": true,
        "source": "weird",
        "explanation": "正确。weird 意为“奇怪的，古怪离奇的”。weird 意为“怪异离奇的，非同寻常的”（a weird dream/experience）。"
      },
      {
        "letter": "C",
        "text": "线，金属丝",
        "isCorrect": false,
        "source": "wire",
        "explanation": "错误。“线，金属丝”实际源自英文单词 wire。"
      },
      {
        "letter": "D",
        "text": "宽阔的，广大的",
        "isCorrect": false,
        "source": "wide",
        "explanation": "错误。“宽阔的，广大的”实际源自英文单词 wide。"
      }
    ],
    "root_note": "weird 意为“怪异离奇的，非同寻常的”（a weird dream/experience）。"
  },
  {
    "num": 124,
    "word": "wreck",
    "star": "★",
    "batch": 4,
    "group": "Group 24",
    "options": [
      {
        "letter": "A",
        "text": "残骸，失事；破坏摧毁",
        "isCorrect": true,
        "source": "wreck",
        "explanation": "正确。wreck 意为“残骸，失事；破坏摧毁”。wreck 意为“车祸/沉船残骸”，动词表示“严重毁坏（wreck one's career/life）”。"
      },
      {
        "letter": "B",
        "text": "报复，惩罚",
        "isCorrect": false,
        "source": "wreak",
        "explanation": "错误。“报复，惩罚”实际源自英文单词 wreak。"
      },
      {
        "letter": "C",
        "text": "包裹，缠绕",
        "isCorrect": false,
        "source": "wrap",
        "explanation": "错误。“包裹，缠绕”实际源自英文单词 wrap。"
      },
      {
        "letter": "D",
        "text": "腕关节，手腕",
        "isCorrect": false,
        "source": "wrist",
        "explanation": "错误。“腕关节，手腕”实际源自英文单词 wrist。"
      }
    ],
    "root_note": "wreck 意为“车祸/沉船残骸”，动词表示“严重毁坏（wreck one's career/life）”。"
  },
  {
    "num": 125,
    "word": "zone",
    "star": "★",
    "batch": 4,
    "group": "Group 24",
    "options": [
      {
        "letter": "A",
        "text": "地区，区域，地带",
        "isCorrect": true,
        "source": "zone",
        "explanation": "正确。zone 意为“地区，区域，地带”。zone 意为“特定功能区域，时区”（time zone；comfort zone 舒适区）。"
      },
      {
        "letter": "B",
        "text": "骨头",
        "isCorrect": false,
        "source": "bone",
        "explanation": "错误。“骨头”实际源自英文单词 bone。"
      },
      {
        "letter": "C",
        "text": "音调，语气",
        "isCorrect": false,
        "source": "tone",
        "explanation": "错误。“音调，语气”实际源自英文单词 tone。"
      },
      {
        "letter": "D",
        "text": "石头",
        "isCorrect": false,
        "source": "stone",
        "explanation": "错误。“石头”实际源自英文单词 stone。"
      }
    ],
    "root_note": "zone 意为“特定功能区域，时区”（time zone；comfort zone 舒适区）。"
  },
  {
    "num": 126,
    "word": "aboard",
    "star": "★",
    "batch": 4,
    "group": "Group 24",
    "options": [
      {
        "letter": "A",
        "text": "到国外，在海外",
        "isCorrect": false,
        "source": "abroad",
        "explanation": "错误。“到国外，在海外”实际源自英文单词 abroad。"
      },
      {
        "letter": "B",
        "text": "在船（车/飞机）上，上船",
        "isCorrect": true,
        "source": "aboard",
        "explanation": "正确。aboard 意为“在船（车/飞机）上，上船”。aboard 意为“在交通工具内部，登机/上船”（Welcome aboard 欢迎乘搭）。"
      },
      {
        "letter": "C",
        "text": "宽阔的，广阔的",
        "isCorrect": false,
        "source": "broad",
        "explanation": "错误。“宽阔的，广阔的”实际源自英文单词 broad。"
      },
      {
        "letter": "D",
        "text": "木板，甲板；董事会",
        "isCorrect": false,
        "source": "board",
        "explanation": "错误。“木板，甲板；董事会”实际源自英文单词 board。"
      }
    ],
    "root_note": "aboard 意为“在交通工具内部，登机/上船”（Welcome aboard 欢迎乘搭）。"
  },
  {
    "num": 127,
    "word": "accustom",
    "star": "★",
    "batch": 4,
    "group": "Group 24",
    "options": [
      {
        "letter": "A",
        "text": "风俗，习惯；海关",
        "isCorrect": false,
        "source": "custom",
        "explanation": "错误。“风俗，习惯；海关”实际源自英文单词 custom。"
      },
      {
        "letter": "B",
        "text": "使习惯于，适应",
        "isCorrect": true,
        "source": "accustom",
        "explanation": "正确。accustom 意为“使习惯于，适应”。accustom 意为“使适应，使习惯”（be accustomed to doing sth 习惯于做某事）。"
      },
      {
        "letter": "C",
        "text": "指责，控告",
        "isCorrect": false,
        "source": "accuse",
        "explanation": "错误。“指责，控告”实际源自英文单词 accuse。"
      },
      {
        "letter": "D",
        "text": "积累，聚积",
        "isCorrect": false,
        "source": "accumulate",
        "explanation": "错误。“积累，聚积”实际源自英文单词 accumulate。"
      }
    ],
    "root_note": "accustom 意为“使适应，使习惯”（be accustomed to doing sth 习惯于做某事）。"
  },
  {
    "num": 128,
    "word": "amid",
    "star": "★",
    "batch": 4,
    "group": "Group 24",
    "options": [
      {
        "letter": "A",
        "text": "目的，瞄准",
        "isCorrect": false,
        "source": "aim",
        "explanation": "错误。“目的，瞄准”实际源自英文单词 aim。"
      },
      {
        "letter": "B",
        "text": "在...中间，在...气氛中",
        "isCorrect": true,
        "source": "amid",
        "explanation": "正确。amid 意为“在...中间，在...气氛中”。amid 介词，意为“在...之中，在...伴随下”（amid cheers 在欢呼声中）。"
      },
      {
        "letter": "C",
        "text": "承认，准许进入",
        "isCorrect": false,
        "source": "admit",
        "explanation": "错误。“承认，准许进入”实际源自英文单词 admit。"
      },
      {
        "letter": "D",
        "text": "狂热的，狂热分子的",
        "isCorrect": false,
        "source": "avid",
        "explanation": "错误。“狂热的，狂热分子的”实际源自英文单词 avid。"
      }
    ],
    "root_note": "amid 介词，意为“在...之中，在...伴随下”（amid cheers 在欢呼声中）。"
  },
  {
    "num": 129,
    "word": "ankle",
    "star": "★",
    "batch": 4,
    "group": "Group 24",
    "options": [
      {
        "letter": "A",
        "text": "叔叔，伯伯",
        "isCorrect": false,
        "source": "uncle",
        "explanation": "错误。“叔叔，伯伯”实际源自英文单词 uncle。"
      },
      {
        "letter": "B",
        "text": "脚踝，踝关节",
        "isCorrect": true,
        "source": "ankle",
        "explanation": "正确。ankle 意为“脚踝，踝关节”。ankle 意为“脚踝”（twist one's ankle 扭伤脚踝）。"
      },
      {
        "letter": "C",
        "text": "角度，角",
        "isCorrect": false,
        "source": "angle",
        "explanation": "错误。“角度，角”实际源自英文单词 angle。"
      },
      {
        "letter": "D",
        "text": "天使",
        "isCorrect": false,
        "source": "angel",
        "explanation": "错误。“天使”实际源自英文单词 angel。"
      }
    ],
    "root_note": "ankle 意为“脚踝”（twist one's ankle 扭伤脚踝）。"
  },
  {
    "num": 130,
    "word": "applaud",
    "star": "★",
    "batch": 5,
    "group": "Group 25",
    "options": [
      {
        "letter": "A",
        "text": "申请，应用",
        "isCorrect": false,
        "source": "apply",
        "explanation": "错误。“申请，应用”实际源自英文单词 apply。"
      },
      {
        "letter": "B",
        "text": "鼓掌欢迎，赞赏",
        "isCorrect": true,
        "source": "applaud",
        "explanation": "正确。applaud 意为“鼓掌欢迎，赞赏”。applaud 意为“拍手喝彩，称赞表扬”（applause 名词掌声）。"
      },
      {
        "letter": "C",
        "text": "鼓掌（口语）",
        "isCorrect": false,
        "source": "clap",
        "explanation": "错误。“鼓掌（口语）”实际源自英文单词 clap。"
      },
      {
        "letter": "D",
        "text": "呼吁，上诉",
        "isCorrect": false,
        "source": "appeal",
        "explanation": "错误。“呼吁，上诉”实际源自英文单词 appeal。"
      }
    ],
    "root_note": "applaud 意为“拍手喝彩，称赞表扬”（applause 名词掌声）。"
  },
  {
    "num": 131,
    "word": "attorney",
    "star": "★",
    "batch": 5,
    "group": "Group 25",
    "options": [
      {
        "letter": "A",
        "text": "旅行，行程",
        "isCorrect": false,
        "source": "journey",
        "explanation": "错误。“旅行，行程”实际源自英文单词 journey。"
      },
      {
        "letter": "B",
        "text": "律师，法律代理人",
        "isCorrect": true,
        "source": "attorney",
        "explanation": "正确。attorney 意为“律师，法律代理人”。attorney 指“代理律师，出庭辩护人”（attorney at law 执业律师）。"
      },
      {
        "letter": "C",
        "text": "当局，权威",
        "isCorrect": false,
        "source": "authority",
        "explanation": "错误。“当局，权威”实际源自英文单词 authority。"
      },
      {
        "letter": "D",
        "text": "秋天",
        "isCorrect": false,
        "source": "autumn",
        "explanation": "错误。“秋天”实际源自英文单词 autumn。"
      }
    ],
    "root_note": "attorney 指“代理律师，出庭辩护人”（attorney at law 执业律师）。"
  },
  {
    "num": 132,
    "word": "audio",
    "star": "★",
    "batch": 5,
    "group": "Group 25",
    "options": [
      {
        "letter": "A",
        "text": "视频的，电视的",
        "isCorrect": false,
        "source": "video",
        "explanation": "错误。“视频的，电视的”实际源自英文单词 video。"
      },
      {
        "letter": "B",
        "text": "音频的，声音的，听觉的",
        "isCorrect": true,
        "source": "audio",
        "explanation": "正确。audio 意为“音频的，声音的，听觉的”。audio 意为“声音录制的，音频的”（audio-visual 视听的）。"
      },
      {
        "letter": "C",
        "text": "观众，听众",
        "isCorrect": false,
        "source": "audience",
        "explanation": "错误。“观众，听众”实际源自英文单词 audience。"
      },
      {
        "letter": "D",
        "text": "收音机，无线电",
        "isCorrect": false,
        "source": "radio",
        "explanation": "错误。“收音机，无线电”实际源自英文单词 radio。"
      }
    ],
    "root_note": "audio 意为“声音录制的，音频的”（audio-visual 视听的）。"
  },
  {
    "num": 133,
    "word": "aviation",
    "star": "★",
    "batch": 5,
    "group": "Group 25",
    "options": [
      {
        "letter": "A",
        "text": "通航，导航",
        "isCorrect": false,
        "source": "navigation",
        "explanation": "错误。“通航，导航”实际源自英文单词 navigation。"
      },
      {
        "letter": "B",
        "text": "航空，航空制造业，飞行",
        "isCorrect": true,
        "source": "aviation",
        "explanation": "正确。aviation 意为“航空，航空制造业，飞行”。aviation（avi- 鸟/飞行 -> 航空业，民用航空 civil aviation）。"
      },
      {
        "letter": "C",
        "text": "变化，变异",
        "isCorrect": false,
        "source": "variation",
        "explanation": "错误。“变化，变异”实际源自英文单词 variation。"
      },
      {
        "letter": "D",
        "text": "入侵，侵略",
        "isCorrect": false,
        "source": "invasion",
        "explanation": "错误。“入侵，侵略”实际源自英文单词 invasion。"
      }
    ],
    "root_note": "aviation（avi- 鸟/飞行 -> 航空业，民用航空 civil aviation）。"
  },
  {
    "num": 134,
    "word": "badge",
    "star": "★",
    "batch": 5,
    "group": "Group 25",
    "options": [
      {
        "letter": "A",
        "text": "桥梁",
        "isCorrect": false,
        "source": "bridge",
        "explanation": "错误。“桥梁”实际源自英文单词 bridge。"
      },
      {
        "letter": "B",
        "text": "徽章，证章，标记",
        "isCorrect": true,
        "source": "badge",
        "explanation": "正确。badge 意为“徽章，证章，标记”。badge 意为“佩戴的胸章，徽章，代表身份的标志”。"
      },
      {
        "letter": "C",
        "text": "树篱，对冲",
        "isCorrect": false,
        "source": "hedge",
        "explanation": "错误。“树篱，对冲”实际源自英文单词 hedge。"
      },
      {
        "letter": "D",
        "text": "行李，皮包",
        "isCorrect": false,
        "source": "baggage",
        "explanation": "错误。“行李，皮包”实际源自英文单词 baggage。"
      }
    ],
    "root_note": "badge 意为“佩戴的胸章，徽章，代表身份的标志”。"
  },
  {
    "num": 135,
    "word": "bang",
    "star": "★",
    "batch": 5,
    "group": "Group 25",
    "options": [
      {
        "letter": "A",
        "text": "银行，河岸",
        "isCorrect": false,
        "source": "bank",
        "explanation": "错误。“银行，河岸”实际源自英文单词 bank。"
      },
      {
        "letter": "B",
        "text": "猛击，重击；砰的巨响",
        "isCorrect": true,
        "source": "bang",
        "explanation": "正确。bang 意为“猛击，重击；砰的巨响”。bang 拟声词，表示“猛撞，关门巨响，爆炸声”（bang on the door 砰砰敲门）。"
      },
      {
        "letter": "C",
        "text": "帮派，团伙",
        "isCorrect": false,
        "source": "gang",
        "explanation": "错误。“帮派，团伙”实际源自英文单词 gang。"
      },
      {
        "letter": "D",
        "text": "乐队，条带",
        "isCorrect": false,
        "source": "band",
        "explanation": "错误。“乐队，条带”实际源自英文单词 band。"
      }
    ],
    "root_note": "bang 拟声词，表示“猛撞，关门巨响，爆炸声”（bang on the door 砰砰敲门）。"
  },
  {
    "num": 136,
    "word": "behalf",
    "star": "★",
    "batch": 5,
    "group": "Group 25",
    "options": [
      {
        "letter": "A",
        "text": "一半",
        "isCorrect": false,
        "source": "half",
        "explanation": "错误。“一半”实际源自英文单词 half。"
      },
      {
        "letter": "B",
        "text": "代表某人，为了...的利益",
        "isCorrect": true,
        "source": "behalf",
        "explanation": "正确。behalf 意为“代表某人，为了...的利益”。behalf 构成固定短语 on behalf of sb / in behalf of（代表某人，为了某人的利益）。"
      },
      {
        "letter": "C",
        "text": "行为，举止",
        "isCorrect": false,
        "source": "behavior",
        "explanation": "错误。“行为，举止”实际源自英文单词 behavior。"
      },
      {
        "letter": "D",
        "text": "相信，信仰",
        "isCorrect": false,
        "source": "belief",
        "explanation": "错误。“相信，信仰”实际源自英文单词 belief。"
      }
    ],
    "root_note": "behalf 构成固定短语 on behalf of sb / in behalf of（代表某人，为了某人的利益）。"
  },
  {
    "num": 137,
    "word": "belt",
    "star": "★",
    "batch": 5,
    "group": "Group 25",
    "options": [
      {
        "letter": "A",
        "text": "铃铛，钟",
        "isCorrect": false,
        "source": "bell",
        "explanation": "错误。“铃铛，钟”实际源自英文单词 bell。"
      },
      {
        "letter": "B",
        "text": "皮带，腰带；地带，区域",
        "isCorrect": true,
        "source": "belt",
        "explanation": "正确。belt 意为“皮带，腰带；地带，区域”。belt 意为“腰带，安全带（seat belt）”，地理上表示“气候带，产业带”。"
      },
      {
        "letter": "C",
        "text": "床，河床",
        "isCorrect": false,
        "source": "bed",
        "explanation": "错误。“床，河床”实际源自英文单词 bed。"
      },
      {
        "letter": "D",
        "text": "打赌，赌注",
        "isCorrect": false,
        "source": "bet",
        "explanation": "错误。“打赌，赌注”实际源自英文单词 bet。"
      }
    ],
    "root_note": "belt 意为“腰带，安全带（seat belt）”，地理上表示“气候带，产业带”。"
  },
  {
    "num": 138,
    "word": "beverage",
    "star": "★",
    "batch": 5,
    "group": "Group 25",
    "options": [
      {
        "letter": "A",
        "text": "杠杆，撬动",
        "isCorrect": false,
        "source": "leverage",
        "explanation": "错误。“杠杆，撬动”实际源自英文单词 leverage。"
      },
      {
        "letter": "B",
        "text": "饮料",
        "isCorrect": true,
        "source": "beverage",
        "explanation": "正确。beverage 意为“饮料”。beverage 正式用词，泛指“各类饮料（咖啡、茶、果汁、苏打等）”。"
      },
      {
        "letter": "C",
        "text": "平均数，平均的",
        "isCorrect": false,
        "source": "average",
        "explanation": "错误。“平均数，平均的”实际源自英文单词 average。"
      },
      {
        "letter": "D",
        "text": "行李，包裹",
        "isCorrect": false,
        "source": "baggage",
        "explanation": "错误。“行李，包裹”实际源自英文单词 baggage。"
      }
    ],
    "root_note": "beverage 正式用词，泛指“各类饮料（咖啡、茶、果汁、苏打等）”。"
  },
  {
    "num": 139,
    "word": "bounce",
    "star": "★",
    "batch": 5,
    "group": "Group 25",
    "options": [
      {
        "letter": "A",
        "text": "弹跳，反弹；使弹起",
        "isCorrect": true,
        "source": "bounce",
        "explanation": "正确。bounce 意为“弹跳，反弹；使弹起”。bounce 表示“球弹起，光线反弹，支票退票（bounced check）”。"
      },
      {
        "letter": "B",
        "text": "结合，跳跃",
        "isCorrect": false,
        "source": "bound",
        "explanation": "错误。“结合，跳跃”实际源自英文单词 bound。"
      },
      {
        "letter": "C",
        "text": "骨头",
        "isCorrect": false,
        "source": "bone",
        "explanation": "错误。“骨头”实际源自英文单词 bone。"
      },
      {
        "letter": "D",
        "text": "捆绑，束缚",
        "isCorrect": false,
        "source": "bind",
        "explanation": "错误。“捆绑，束缚”实际源自英文单词 bind。"
      }
    ],
    "root_note": "bounce 表示“球弹起，光线反弹，支票退票（bounced check）”。"
  },
  {
    "num": 140,
    "word": "brutal",
    "star": "★",
    "batch": 5,
    "group": "Group 25",
    "options": [
      {
        "letter": "A",
        "text": "微风，轻风",
        "isCorrect": false,
        "source": "breeze",
        "explanation": "错误。“微风，轻风”实际源自英文单词 breeze。"
      },
      {
        "letter": "B",
        "text": "残暴的，野蛮的，严酷的",
        "isCorrect": true,
        "source": "brutal",
        "explanation": "正确。brutal 意为“残暴的，野蛮的，严酷的”。brutal 意为“残忍凶残的，不留情面的”（a brutal murder/winter）。"
      },
      {
        "letter": "C",
        "text": "致命的，致死的",
        "isCorrect": false,
        "source": "fatal",
        "explanation": "错误。“致命的，致死的”实际源自英文单词 fatal。"
      },
      {
        "letter": "D",
        "text": "总的，总计的",
        "isCorrect": false,
        "source": "total",
        "explanation": "错误。“总的，总计的”实际源自英文单词 total。"
      }
    ],
    "root_note": "brutal 意为“残忍凶残的，不留情面的”（a brutal murder/winter）。"
  },
  {
    "num": 141,
    "word": "bucket",
    "star": "★",
    "batch": 5,
    "group": "Group 25",
    "options": [
      {
        "letter": "A",
        "text": "预算，开支",
        "isCorrect": false,
        "source": "budget",
        "explanation": "错误。“预算，开支”实际源自英文单词 budget。"
      },
      {
        "letter": "B",
        "text": "水桶，铁桶",
        "isCorrect": true,
        "source": "bucket",
        "explanation": "正确。bucket 意为“水桶，铁桶”。bucket 意为“提桶，水桶”（kick the bucket 口语去世；bucket list 愿望清单）。"
      },
      {
        "letter": "C",
        "text": "小册子",
        "isCorrect": false,
        "source": "booklet",
        "explanation": "错误。“小册子”实际源自英文单词 booklet。"
      },
      {
        "letter": "D",
        "text": "小篮子",
        "isCorrect": false,
        "source": "basket",
        "explanation": "错误。“小篮子”实际源自英文单词 basket。"
      }
    ],
    "root_note": "bucket 意为“提桶，水桶”（kick the bucket 口语去世；bucket list 愿望清单）。"
  },
  {
    "num": 142,
    "word": "bud",
    "star": "★",
    "batch": 5,
    "group": "Group 25",
    "options": [
      {
        "letter": "A",
        "text": "错误的，不好的",
        "isCorrect": false,
        "source": "bad",
        "explanation": "错误。“错误的，不好的”实际源自英文单词 bad。"
      },
      {
        "letter": "B",
        "text": "芽，花蕾，萌芽",
        "isCorrect": true,
        "source": "bud",
        "explanation": "正确。bud 意为“芽，花蕾，萌芽”。bud 意为“植物的苞芽，花蕾”；引申为“萌芽初期的”（in the bud 防患于未然）。"
      },
      {
        "letter": "C",
        "text": "床位，苗床",
        "isCorrect": false,
        "source": "bed",
        "explanation": "错误。“床位，苗床”实际源自英文单词 bed。"
      },
      {
        "letter": "D",
        "text": "昆虫，漏洞",
        "isCorrect": false,
        "source": "bug",
        "explanation": "错误。“昆虫，漏洞”实际源自英文单词 bug。"
      }
    ],
    "root_note": "bud 意为“植物的苞芽，花蕾”；引申为“萌芽初期的”（in the bud 防患于未然）。"
  },
  {
    "num": 143,
    "word": "bulb",
    "star": "★",
    "batch": 5,
    "group": "Group 25",
    "options": [
      {
        "letter": "A",
        "text": "公牛",
        "isCorrect": false,
        "source": "bull",
        "explanation": "错误。“公牛”实际源自英文单词 bull。"
      },
      {
        "letter": "B",
        "text": "电灯泡；植物鳞茎",
        "isCorrect": true,
        "source": "bulb",
        "explanation": "正确。bulb 意为“电灯泡；植物鳞茎”。bulb 指“白炽灯泡（light bulb）”，植物学上指“洋葱百合等地下鳞茎”。"
      },
      {
        "letter": "C",
        "text": "膨胀，体积",
        "isCorrect": false,
        "source": "bulk",
        "explanation": "错误。“膨胀，体积”实际源自英文单词 bulk。"
      },
      {
        "letter": "D",
        "text": "大块，厚块",
        "isCorrect": false,
        "source": "block",
        "explanation": "错误。“大块，厚块”实际源自英文单词 block。"
      }
    ],
    "root_note": "bulb 指“白炽灯泡（light bulb）”，植物学上指“洋葱百合等地下鳞茎”。"
  },
  {
    "num": 144,
    "word": "bulk",
    "star": "★",
    "batch": 5,
    "group": "Group 25",
    "options": [
      {
        "letter": "A",
        "text": "咆哮，吠叫",
        "isCorrect": false,
        "source": "bark",
        "explanation": "错误。“咆哮，吠叫”实际源自英文单词 bark。"
      },
      {
        "letter": "B",
        "text": "体积，容积；大批，大部分",
        "isCorrect": true,
        "source": "bulk",
        "explanation": "正确。bulk 意为“体积，容积；大批，大部分”。bulk 意为“庞大体积”，以及“大宗大批”（buy in bulk 批量购买；the bulk of 大多数）。"
      },
      {
        "letter": "C",
        "text": "电灯泡",
        "isCorrect": false,
        "source": "bulb",
        "explanation": "错误。“电灯泡”实际源自英文单词 bulb。"
      },
      {
        "letter": "D",
        "text": "预订，书本",
        "isCorrect": false,
        "source": "book",
        "explanation": "错误。“预订，书本”实际源自英文单词 book。"
      }
    ],
    "root_note": "bulk 意为“庞大体积”，以及“大宗大批”（buy in bulk 批量购买；the bulk of 大多数）。"
  },
  {
    "num": 145,
    "word": "bulletin",
    "star": "★",
    "batch": 5,
    "group": "Group 25",
    "options": [
      {
        "letter": "A",
        "text": "子弹，弹丸",
        "isCorrect": false,
        "source": "bullet",
        "explanation": "错误。“子弹，弹丸”实际源自英文单词 bullet。"
      },
      {
        "letter": "B",
        "text": "简报，新闻快报，公告",
        "isCorrect": true,
        "source": "bulletin",
        "explanation": "正确。bulletin 意为“简报，新闻快报，公告”。bulletin 意为“正式公告，新闻快讯，学报”（bulletin board 布告栏）。"
      },
      {
        "letter": "C",
        "text": "欺凌弱小者",
        "isCorrect": false,
        "source": "bully",
        "explanation": "错误。“欺凌弱小者”实际源自英文单词 bully。"
      },
      {
        "letter": "D",
        "text": "按钮，纽扣",
        "isCorrect": false,
        "source": "button",
        "explanation": "错误。“按钮，纽扣”实际源自英文单词 button。"
      }
    ],
    "root_note": "bulletin 意为“正式公告，新闻快讯，学报”（bulletin board 布告栏）。"
  },
  {
    "num": 146,
    "word": "bump",
    "star": "★",
    "batch": 5,
    "group": "Group 25",
    "options": [
      {
        "letter": "A",
        "text": "炸弹，轰炸",
        "isCorrect": false,
        "source": "bomb",
        "explanation": "错误。“炸弹，轰炸”实际源自英文单词 bomb。"
      },
      {
        "letter": "B",
        "text": "碰，撞；隆起肿块",
        "isCorrect": true,
        "source": "bump",
        "explanation": "正确。bump 意为“碰，撞；隆起肿块”。bump 意为“撞上碰撞”（bump into sb 偶遇某人），名言“磕碰隆起的肿块”。"
      },
      {
        "letter": "C",
        "text": "笨蛋，流浪汉",
        "isCorrect": false,
        "source": "bum",
        "explanation": "错误。“笨蛋，流浪汉”实际源自英文单词 bum。"
      },
      {
        "letter": "D",
        "text": "营地，度假营",
        "isCorrect": false,
        "source": "camp",
        "explanation": "错误。“营地，度假营”实际源自英文单词 camp。"
      }
    ],
    "root_note": "bump 意为“撞上碰撞”（bump into sb 偶遇某人），名言“磕碰隆起的肿块”。"
  },
  {
    "num": 147,
    "word": "bundle",
    "star": "★",
    "batch": 5,
    "group": "Group 25",
    "options": [
      {
        "letter": "A",
        "text": "水桶，提桶",
        "isCorrect": false,
        "source": "bucket",
        "explanation": "错误。“水桶，提桶”实际源自英文单词 bucket。"
      },
      {
        "letter": "B",
        "text": "一捆，一束，大包；捆绑销售",
        "isCorrect": true,
        "source": "bundle",
        "explanation": "正确。bundle 意为“一捆，一束，大包；捆绑销售”。bundle 意为“捆、束、包”（bundle software 捆绑销售软件）。"
      },
      {
        "letter": "C",
        "text": "蜡烛",
        "isCorrect": false,
        "source": "candle",
        "explanation": "错误。“蜡烛”实际源自英文单词 candle。"
      },
      {
        "letter": "D",
        "text": "手柄，处理",
        "isCorrect": false,
        "source": "handle",
        "explanation": "错误。“手柄，处理”实际源自英文单词 handle。"
      }
    ],
    "root_note": "bundle 意为“捆、束、包”（bundle software 捆绑销售软件）。"
  },
  {
    "num": 148,
    "word": "burst",
    "star": "★",
    "batch": 5,
    "group": "Group 25",
    "options": [
      {
        "letter": "A",
        "text": "使爆炸，爆裂；突然爆发",
        "isCorrect": true,
        "source": "burst",
        "explanation": "正确。burst 意为“使爆炸，爆裂；突然爆发”。burst 意为“气球充气爆裂，水管爆裂”，burst into tears 突然号啕大哭。"
      },
      {
        "letter": "B",
        "text": "燃烧，着火",
        "isCorrect": false,
        "source": "burn",
        "explanation": "错误。“燃烧，着火”实际源自英文单词 burn。"
      },
      {
        "letter": "C",
        "text": "掩埋，埋葬",
        "isCorrect": false,
        "source": "bury",
        "explanation": "错误。“掩埋，埋葬”实际源自英文单词 bury。"
      },
      {
        "letter": "D",
        "text": "急促奔跑，冲刺",
        "isCorrect": false,
        "source": "rush",
        "explanation": "错误。“急促奔跑，冲刺”实际源自英文单词 rush。"
      }
    ],
    "root_note": "burst 意为“气球充气爆裂，水管爆裂”，burst into tears 突然号啕大哭。"
  },
  {
    "num": 149,
    "word": "carriage",
    "star": "★",
    "batch": 5,
    "group": "Group 25",
    "options": [
      {
        "letter": "A",
        "text": "勇气，胆量",
        "isCorrect": false,
        "source": "courage",
        "explanation": "错误。“勇气，胆量”实际源自英文单词 courage。"
      },
      {
        "letter": "B",
        "text": "四轮马车；火车客车厢",
        "isCorrect": true,
        "source": "carriage",
        "explanation": "正确。carriage 意为“四轮马车；火车客车厢”。carriage 指“旧式载客马车”或英式英语中列车的“客车车厢”。"
      },
      {
        "letter": "C",
        "text": "承载工具，载体",
        "isCorrect": false,
        "source": "carrier",
        "explanation": "错误。“承载工具，载体”实际源自英文单词 carrier。"
      },
      {
        "letter": "D",
        "text": "结婚，婚姻",
        "isCorrect": false,
        "source": "marriage",
        "explanation": "错误。“结婚，婚姻”实际源自英文单词 marriage。"
      }
    ],
    "root_note": "carriage 指“旧式载客马车”或英式英语中列车的“客车车厢”。"
  },
  {
    "num": 150,
    "word": "cast",
    "star": "★",
    "batch": 5,
    "group": "Group 25",
    "options": [
      {
        "letter": "A",
        "text": "花费，代价",
        "isCorrect": false,
        "source": "cost",
        "explanation": "错误。“花费，代价”实际源自英文单词 cost。"
      },
      {
        "letter": "B",
        "text": "投掷，抛射；选派角色，演员表",
        "isCorrect": true,
        "source": "cast",
        "explanation": "正确。cast 意为“投掷，抛射；选派角色，演员表”。cast 意为“投掷视线/阴影/选票”，作名词指“全体演职员，剧组阵容”。"
      },
      {
        "letter": "C",
        "text": "城堡，宫殿",
        "isCorrect": false,
        "source": "castle",
        "explanation": "错误。“城堡，宫殿”实际源自英文单词 castle。"
      },
      {
        "letter": "D",
        "text": "过去的，过去的时光",
        "isCorrect": false,
        "source": "past",
        "explanation": "错误。“过去的，过去的时光”实际源自英文单词 past。"
      }
    ],
    "root_note": "cast 意为“投掷视线/阴影/选票”，作名词指“全体演职员，剧组阵容”。"
  },
  {
    "num": 151,
    "word": "catalog",
    "star": "★",
    "batch": 5,
    "group": "Group 25",
    "options": [
      {
        "letter": "A",
        "text": "对话，对白",
        "isCorrect": false,
        "source": "dialog",
        "explanation": "错误。“对话，对白”实际源自英文单词 dialog。"
      },
      {
        "letter": "B",
        "text": "目录，产品名册；编入目录",
        "isCorrect": true,
        "source": "catalog",
        "explanation": "正确。catalog 意为“目录，产品名册；编入目录”。catalog 意为“商品目录，图书编目索引”（mail-order catalog 邮购目录）。"
      },
      {
        "letter": "C",
        "text": "类比，同功",
        "isCorrect": false,
        "source": "analogy",
        "explanation": "错误。“类比，同功”实际源自英文单词 analogy。"
      },
      {
        "letter": "D",
        "text": "道歉，致歉",
        "isCorrect": false,
        "source": "apology",
        "explanation": "错误。“道歉，致歉”实际源自英文单词 apology。"
      }
    ],
    "root_note": "catalog 意为“商品目录，图书编目索引”（mail-order catalog 邮购目录）。"
  },
  {
    "num": 152,
    "word": "cater",
    "star": "★",
    "batch": 5,
    "group": "Group 25",
    "options": [
      {
        "letter": "A",
        "text": "关心，在乎",
        "isCorrect": false,
        "source": "care",
        "explanation": "错误。“关心，在乎”实际源自英文单词 care。"
      },
      {
        "letter": "B",
        "text": "提供餐饮；迎合，满足需要",
        "isCorrect": true,
        "source": "cater",
        "explanation": "正确。cater 意为“提供餐饮；迎合，满足需要”。cater 意为“承办宴席酒席”，搭配 cater to sb's needs 指“迎合满足某人需求”。"
      },
      {
        "letter": "C",
        "text": "火山口，深坑",
        "isCorrect": false,
        "source": "crater",
        "explanation": "错误。“火山口，深坑”实际源自英文单词 crater。"
      },
      {
        "letter": "D",
        "text": "横冲直撞，疾驰",
        "isCorrect": false,
        "source": "career",
        "explanation": "错误。“横冲直撞，疾驰”实际源自英文单词 career。"
      }
    ],
    "root_note": "cater 意为“承办宴席酒席”，搭配 cater to sb's needs 指“迎合满足某人需求”。"
  },
  {
    "num": 153,
    "word": "commodity",
    "star": "★",
    "batch": 5,
    "group": "Group 25",
    "options": [
      {
        "letter": "A",
        "text": "社区，共同体",
        "isCorrect": false,
        "source": "community",
        "explanation": "错误。“社区，共同体”实际源自英文单词 community。"
      },
      {
        "letter": "B",
        "text": "商品，货物，大宗物资",
        "isCorrect": true,
        "source": "commodity",
        "explanation": "正确。commodity 意为“商品，货物，大宗物资”。commodity 意为“大宗商品，农矿初级产品”（commodity prices 大宗商品价格）。"
      },
      {
        "letter": "C",
        "text": "便利，舒适",
        "isCorrect": false,
        "source": "comfort",
        "explanation": "错误。“便利，舒适”实际源自英文单词 comfort。"
      },
      {
        "letter": "D",
        "text": "委员会",
        "isCorrect": false,
        "source": "committee",
        "explanation": "错误。“委员会”实际源自英文单词 committee。"
      }
    ],
    "root_note": "commodity 意为“大宗商品，农矿初级产品”（commodity prices 大宗商品价格）。"
  },
  {
    "num": 154,
    "word": "compact",
    "star": "★",
    "batch": 5,
    "group": "Group 25",
    "options": [
      {
        "letter": "A",
        "text": "冲击，撞击；影响",
        "isCorrect": false,
        "source": "impact",
        "explanation": "错误。“冲击，撞击；影响”实际源自英文单词 impact。"
      },
      {
        "letter": "B",
        "text": "紧凑的，小型的；紧密压实的",
        "isCorrect": true,
        "source": "compact",
        "explanation": "正确。compact 意为“紧凑的，小型的；紧密压实的”。compact 意为“结构小巧紧凑的”（compact car/camera），动词指压实凝结。"
      },
      {
        "letter": "C",
        "text": "接触，联系",
        "isCorrect": false,
        "source": "contact",
        "explanation": "错误。“接触，联系”实际源自英文单词 contact。"
      },
      {
        "letter": "D",
        "text": "合同，契约",
        "isCorrect": false,
        "source": "contract",
        "explanation": "错误。“合同，契约”实际源自英文单词 contract。"
      }
    ],
    "root_note": "compact 意为“结构小巧紧凑的”（compact car/camera），动词指压实凝结。"
  },
  {
    "num": 155,
    "word": "compatible",
    "star": "★",
    "batch": 5,
    "group": "Group 25",
    "options": [
      {
        "letter": "A",
        "text": "有竞争力的",
        "isCorrect": false,
        "source": "competitive",
        "explanation": "错误。“有竞争力的”实际源自英文单词 competitive。"
      },
      {
        "letter": "B",
        "text": "兼容的，能共存的，合得来的",
        "isCorrect": true,
        "source": "compatible",
        "explanation": "正确。compatible 意为“兼容的，能共存的，合得来的”。compatible（com- 一起 + pat 感受 -> 心意相通 -> 设备兼容的，夫妻合得来的，be compatible with）。"
      },
      {
        "letter": "C",
        "text": "可比的，类似的",
        "isCorrect": false,
        "source": "comparable",
        "explanation": "错误。“可比的，类似的”实际源自英文单词 comparable。"
      },
      {
        "letter": "D",
        "text": "有同情心的",
        "isCorrect": false,
        "source": "compassionate",
        "explanation": "错误。“有同情心的”实际源自英文单词 compassionate。"
      }
    ],
    "root_note": "compatible（com- 一起 + pat 感受 -> 心意相通 -> 设备兼容的，夫妻合得来的，be compatible with）。"
  },
  {
    "num": 156,
    "word": "compromise",
    "star": "★",
    "batch": 6,
    "group": "Group 26",
    "options": [
      {
        "letter": "A",
        "text": "答应，承诺",
        "isCorrect": false,
        "source": "promise",
        "explanation": "错误。“答应，承诺”实际源自英文单词 promise。"
      },
      {
        "letter": "B",
        "text": "妥协，折中；危及损害",
        "isCorrect": true,
        "source": "compromise",
        "explanation": "正确。compromise 意为“妥协，折中；危及损害”。compromise（com- 共同 + promise 承诺 -> 各自退一步做出许诺 -> 妥协折中；亦指危及安全名誉）。"
      },
      {
        "letter": "C",
        "text": "由...组成",
        "isCorrect": false,
        "source": "comprise",
        "explanation": "错误。“由...组成”实际源自英文单词 comprise。"
      },
      {
        "letter": "D",
        "text": "赞美，表扬",
        "isCorrect": false,
        "source": "praise",
        "explanation": "错误。“赞美，表扬”实际源自英文单词 praise。"
      }
    ],
    "root_note": "compromise（com- 共同 + promise 承诺 -> 各自退一步做出许诺 -> 妥协折中；亦指危及安全名誉）。"
  },
  {
    "num": 157,
    "word": "conservative",
    "star": "★",
    "batch": 6,
    "group": "Group 26",
    "options": [
      {
        "letter": "A",
        "text": "保护环境的",
        "isCorrect": false,
        "source": "conservationist",
        "explanation": "错误。“保护环境的”实际源自英文单词 conservationist。"
      },
      {
        "letter": "B",
        "text": "保守的，守旧的；保守党人",
        "isCorrect": true,
        "source": "conservative",
        "explanation": "正确。conservative 意为“保守的，守旧的；保守党人”。conservative（conserve 保存保持 -> 维持现状不喜激进变动 -> 保守的，谨慎稳妥的估计）。"
      },
      {
        "letter": "C",
        "text": "保留的，预订的",
        "isCorrect": false,
        "source": "reserved",
        "explanation": "错误。“保留的，预订的”实际源自英文单词 reserved。"
      },
      {
        "letter": "D",
        "text": "值得保护的",
        "isCorrect": false,
        "source": "preservable",
        "explanation": "错误。“值得保护的”实际源自英文单词 preservable。"
      }
    ],
    "root_note": "conservative（conserve 保存保持 -> 维持现状不喜激进变动 -> 保守的，谨慎稳妥的估计）。"
  },
  {
    "num": 158,
    "word": "consist",
    "star": "★",
    "batch": 6,
    "group": "Group 26",
    "options": [
      {
        "letter": "A",
        "text": "坚持，固执要求",
        "isCorrect": false,
        "source": "insist",
        "explanation": "错误。“坚持，固执要求”实际源自英文单词 insist。"
      },
      {
        "letter": "B",
        "text": "由...组成，在于",
        "isCorrect": true,
        "source": "consist",
        "explanation": "正确。consist 意为“由...组成，在于”。consist 常见两大高频搭配：consist of（由...组成，无被动），consist in（在于，存在于）。"
      },
      {
        "letter": "C",
        "text": "抵制，反抗",
        "isCorrect": false,
        "source": "resist",
        "explanation": "错误。“抵制，反抗”实际源自英文单词 resist。"
      },
      {
        "letter": "D",
        "text": "协助，援助",
        "isCorrect": false,
        "source": "assist",
        "explanation": "错误。“协助，援助”实际源自英文单词 assist。"
      }
    ],
    "root_note": "consist 常见两大高频搭配：consist of（由...组成，无被动），consist in（在于，存在于）。"
  },
  {
    "num": 159,
    "word": "contend",
    "star": "★",
    "batch": 6,
    "group": "Group 26",
    "options": [
      {
        "letter": "A",
        "text": "满意的，满足的；内容",
        "isCorrect": false,
        "source": "content",
        "explanation": "错误。“满意的，满足的；内容”实际源自英文单词 content。"
      },
      {
        "letter": "B",
        "text": "主张，声称；竞争争夺",
        "isCorrect": true,
        "source": "contend",
        "explanation": "正确。contend 意为“主张，声称；竞争争夺”。contend 意为“坚决主张断言（contend that...）”，或“与对手争夺竞争（contend for）”。"
      },
      {
        "letter": "C",
        "text": "打算，意图",
        "isCorrect": false,
        "source": "intend",
        "explanation": "错误。“打算，意图”实际源自英文单词 intend。"
      },
      {
        "letter": "D",
        "text": "假装，伪装",
        "isCorrect": false,
        "source": "pretend",
        "explanation": "错误。“假装，伪装”实际源自英文单词 pretend。"
      }
    ],
    "root_note": "contend 意为“坚决主张断言（contend that...）”，或“与对手争夺竞争（contend for）”。"
  },
  {
    "num": 160,
    "word": "convert",
    "star": "★",
    "batch": 6,
    "group": "Group 26",
    "options": [
      {
        "letter": "A",
        "text": "转换，转变；改变信仰",
        "isCorrect": true,
        "source": "convert",
        "explanation": "正确。convert 意为“转换，转变；改变信仰”。convert（con- 强化 + vert 转 -> 彻底转变形态/功能/信仰，convert into）。"
      },
      {
        "letter": "B",
        "text": "倒转的，颠倒的",
        "isCorrect": false,
        "source": "reverse",
        "explanation": "错误。“倒转的，颠倒的”实际源自英文单词 reverse。"
      },
      {
        "letter": "C",
        "text": "转移，改道",
        "isCorrect": false,
        "source": "divert",
        "explanation": "错误。“转移，改道”实际源自英文单词 divert。"
      },
      {
        "letter": "D",
        "text": "恢复，归还",
        "isCorrect": false,
        "source": "revert",
        "explanation": "错误。“恢复，归还”实际源自英文单词 revert。"
      }
    ],
    "root_note": "convert（con- 强化 + vert 转 -> 彻底转变形态/功能/信仰，convert into）。"
  },
  {
    "num": 161,
    "word": "coordinate",
    "star": "★",
    "batch": 6,
    "group": "Group 26",
    "options": [
      {
        "letter": "A",
        "text": "公司，法人的",
        "isCorrect": false,
        "source": "corporate",
        "explanation": "错误。“公司，法人的”实际源自英文单词 corporate。"
      },
      {
        "letter": "B",
        "text": "协调，统筹；坐标",
        "isCorrect": true,
        "source": "coordinate",
        "explanation": "正确。coordinate 意为“协调，统筹；坐标”。coordinate（co- 共同 + ordin 顺序次序 -> 协调各方步调使其有序 -> 统筹协调配合）。"
      },
      {
        "letter": "C",
        "text": "合作，协同",
        "isCorrect": false,
        "source": "cooperate",
        "explanation": "错误。“合作，协同”实际源自英文单词 cooperate。"
      },
      {
        "letter": "D",
        "text": "下级的，次要的",
        "isCorrect": false,
        "source": "subordinate",
        "explanation": "错误。“下级的，次要的”实际源自英文单词 subordinate。"
      }
    ],
    "root_note": "coordinate（co- 共同 + ordin 顺序次序 -> 协调各方步调使其有序 -> 统筹协调配合）。"
  },
  {
    "num": 162,
    "word": "corps",
    "star": "★",
    "batch": 6,
    "group": "Group 26",
    "options": [
      {
        "letter": "A",
        "text": "尸体，死尸",
        "isCorrect": false,
        "source": "corpse",
        "explanation": "错误。“尸体，死尸”实际源自英文单词 corpse。"
      },
      {
        "letter": "B",
        "text": "兵团，特种部队；专业团体",
        "isCorrect": true,
        "source": "corps",
        "explanation": "正确。corps 意为“兵团，特种部队；专业团体”。corpse 专指死人尸体，而 corps 指“特种兵团部队（Marine Corps 海军陆战队）”。"
      },
      {
        "letter": "C",
        "text": "农作物，庄稼",
        "isCorrect": false,
        "source": "crops",
        "explanation": "错误。“农作物，庄稼”实际源自英文单词 crops。"
      },
      {
        "letter": "D",
        "text": "核心，中心",
        "isCorrect": false,
        "source": "core",
        "explanation": "错误。“核心，中心”实际源自英文单词 core。"
      }
    ],
    "root_note": "corpse 专指死人尸体，而 corps 指“特种兵团部队（Marine Corps 海军陆战队）”。"
  },
  {
    "num": 163,
    "word": "counterpart",
    "star": "★",
    "batch": 6,
    "group": "Group 26",
    "options": [
      {
        "letter": "A",
        "text": "柜台，筹码",
        "isCorrect": false,
        "source": "counter",
        "explanation": "错误。“柜台，筹码”实际源自英文单词 counter。"
      },
      {
        "letter": "B",
        "text": "职能相当的人，对应物",
        "isCorrect": true,
        "source": "counterpart",
        "explanation": "正确。counterpart 意为“职能相当的人，对应物”。counterpart 指“在另一组织中职位功能相当的对应人员或对等事物”。"
      },
      {
        "letter": "C",
        "text": "对手，竞争者",
        "isCorrect": false,
        "source": "competitor",
        "explanation": "错误。“对手，竞争者”实际源自英文单词 competitor。"
      },
      {
        "letter": "D",
        "text": "一部分，零件",
        "isCorrect": false,
        "source": "part",
        "explanation": "错误。“一部分，零件”实际源自英文单词 part。"
      }
    ],
    "root_note": "counterpart 指“在另一组织中职位功能相当的对应人员或对等事物”。"
  },
  {
    "num": 164,
    "word": "cruise",
    "star": "★",
    "batch": 6,
    "group": "Group 26",
    "options": [
      {
        "letter": "A",
        "text": "诅咒，咒骂",
        "isCorrect": false,
        "source": "curse",
        "explanation": "错误。“诅咒，咒骂”实际源自英文单词 curse。"
      },
      {
        "letter": "B",
        "text": "乘船游览，巡游；巡航",
        "isCorrect": true,
        "source": "cruise",
        "explanation": "正确。cruise 意为“乘船游览，巡游；巡航”。cruise 指“乘游轮度假航游，飞机汽车平稳巡航行驶（cruise ship 豪华游轮）”。"
      },
      {
        "letter": "C",
        "text": "压碎，碾碎",
        "isCorrect": false,
        "source": "crush",
        "explanation": "错误。“压碎，碾碎”实际源自英文单词 crush。"
      },
      {
        "letter": "D",
        "text": "线索，迹象",
        "isCorrect": false,
        "source": "clue",
        "explanation": "错误。“线索，迹象”实际源自英文单词 clue。"
      }
    ],
    "root_note": "cruise 指“乘游轮度假航游，飞机汽车平稳巡航行驶（cruise ship 豪华游轮）”。"
  },
  {
    "num": 165,
    "word": "curb",
    "star": "★",
    "batch": 6,
    "group": "Group 26",
    "options": [
      {
        "letter": "A",
        "text": "弯曲，曲度",
        "isCorrect": false,
        "source": "curve",
        "explanation": "错误。“弯曲，曲度”实际源自英文单词 curve。"
      },
      {
        "letter": "B",
        "text": "控制，抑制，约束；路缘",
        "isCorrect": true,
        "source": "curb",
        "explanation": "正确。curb 意为“控制，抑制，约束；路缘”。curb 引申为“抑制通胀/欲望/增长（curb inflation）”；名词指路边镶边石。"
      },
      {
        "letter": "C",
        "text": "治疗，治愈",
        "isCorrect": false,
        "source": "cure",
        "explanation": "错误。“治疗，治愈”实际源自英文单词 cure。"
      },
      {
        "letter": "D",
        "text": "打扰，妨碍",
        "isCorrect": false,
        "source": "disturb",
        "explanation": "错误。“打扰，妨碍”实际源自英文单词 disturb。"
      }
    ],
    "root_note": "curb 引申为“抑制通胀/欲望/增长（curb inflation）”；名词指路边镶边石。"
  },
  {
    "num": 166,
    "word": "curse",
    "star": "★",
    "batch": 6,
    "group": "Group 26",
    "options": [
      {
        "letter": "A",
        "text": "课程，教程；路线",
        "isCorrect": false,
        "source": "course",
        "explanation": "错误。“课程，教程；路线”实际源自英文单词 course。"
      },
      {
        "letter": "B",
        "text": "诅咒，咒骂，遭殃",
        "isCorrect": true,
        "source": "curse",
        "explanation": "正确。curse 意为“诅咒，咒骂，遭殃”。curse 意为“诅咒降临，口出恶言咒骂”（a blessing or a curse 幸事还是祸端）。"
      },
      {
        "letter": "C",
        "text": "粗糙的，粗劣的",
        "isCorrect": false,
        "source": "coarse",
        "explanation": "错误。“粗糙的，粗劣的”实际源自英文单词 coarse。"
      },
      {
        "letter": "D",
        "text": "造成，导致",
        "isCorrect": false,
        "source": "cause",
        "explanation": "错误。“造成，导致”实际源自英文单词 cause。"
      }
    ],
    "root_note": "curse 意为“诅咒降临，口出恶言咒骂”（a blessing or a curse 幸事还是祸端）。"
  },
  {
    "num": 167,
    "word": "decay",
    "star": "★",
    "batch": 6,
    "group": "Group 26",
    "options": [
      {
        "letter": "A",
        "text": "推迟，耽搁",
        "isCorrect": false,
        "source": "delay",
        "explanation": "错误。“推迟，耽搁”实际源自英文单词 delay。"
      },
      {
        "letter": "B",
        "text": "腐烂，衰败，蛀蚀",
        "isCorrect": true,
        "source": "decay",
        "explanation": "正确。decay 意为“腐烂，衰败，蛀蚀”。decay 意为“有机物腐败，牙齿蛀蚀（tooth decay），帝国衰亡”。"
      },
      {
        "letter": "C",
        "text": "十年，十载",
        "isCorrect": false,
        "source": "decade",
        "explanation": "错误。“十年，十载”实际源自英文单词 decade。"
      },
      {
        "letter": "D",
        "text": "欺骗，诈骗",
        "isCorrect": false,
        "source": "deceive",
        "explanation": "错误。“欺骗，诈骗”实际源自英文单词 deceive。"
      }
    ],
    "root_note": "decay 意为“有机物腐败，牙齿蛀蚀（tooth decay），帝国衰亡”。"
  },
  {
    "num": 168,
    "word": "deem",
    "star": "★",
    "batch": 6,
    "group": "Group 26",
    "options": [
      {
        "letter": "A",
        "text": "昏暗的，微弱的",
        "isCorrect": false,
        "source": "dim",
        "explanation": "错误。“昏暗的，微弱的”实际源自英文单词 dim。"
      },
      {
        "letter": "B",
        "text": "认为，相信，视为",
        "isCorrect": true,
        "source": "deem",
        "explanation": "正确。deem 意为“认为，相信，视为”。deem 是正式用词，意为“判定，视作，认为”（deem sth necessary/appropriate）。"
      },
      {
        "letter": "C",
        "text": "注定的，厄运的",
        "isCorrect": false,
        "source": "doomed",
        "explanation": "错误。“注定的，厄运的”实际源自英文单词 doomed。"
      },
      {
        "letter": "D",
        "text": "做梦，梦想",
        "isCorrect": false,
        "source": "dream",
        "explanation": "错误。“做梦，梦想”实际源自英文单词 dream。"
      }
    ],
    "root_note": "deem 是正式用词，意为“判定，视作，认为”（deem sth necessary/appropriate）。"
  },
  {
    "num": 169,
    "word": "deputy",
    "star": "★",
    "batch": 6,
    "group": "Group 26",
    "options": [
      {
        "letter": "A",
        "text": "代表，副职，代理人",
        "isCorrect": true,
        "source": "deputy",
        "explanation": "正确。deputy 意为“代表，副职，代理人”。deputy 意为“副局长/副总等副手（deputy director）”，或指议会代表。"
      },
      {
        "letter": "B",
        "text": "责任，税收",
        "isCorrect": false,
        "source": "duty",
        "explanation": "错误。“责任，税收”实际源自英文单词 duty。"
      },
      {
        "letter": "C",
        "text": "代表团，代表群体",
        "isCorrect": false,
        "source": "delegation",
        "explanation": "错误。“代表团，代表群体”实际源自英文单词 delegation。"
      },
      {
        "letter": "D",
        "text": "深处的，深邃的",
        "isCorrect": false,
        "source": "depth",
        "explanation": "错误。“深处的，深邃的”实际源自英文单词 depth。"
      }
    ],
    "root_note": "deputy 意为“副局长/副总等副手（deputy director）”，或指议会代表。"
  },
  {
    "num": 170,
    "word": "devil",
    "star": "★",
    "batch": 6,
    "group": "Group 26",
    "options": [
      {
        "letter": "A",
        "text": "设备，装置",
        "isCorrect": false,
        "source": "device",
        "explanation": "错误。“设备，装置”实际源自英文单词 device。"
      },
      {
        "letter": "B",
        "text": "魔鬼，恶魔",
        "isCorrect": true,
        "source": "devil",
        "explanation": "正确。devil 意为“魔鬼，恶魔”。devil 意为“魔鬼撒旦，恶棍”，daredevil 蛮勇大胆的人。"
      },
      {
        "letter": "C",
        "text": "发展，开发",
        "isCorrect": false,
        "source": "develop",
        "explanation": "错误。“发展，开发”实际源自英文单词 develop。"
      },
      {
        "letter": "D",
        "text": "交付，发表",
        "isCorrect": false,
        "source": "deliver",
        "explanation": "错误。“交付，发表”实际源自英文单词 deliver。"
      }
    ],
    "root_note": "devil 意为“魔鬼撒旦，恶棍”，daredevil 蛮勇大胆的人。"
  },
  {
    "num": 171,
    "word": "discharge",
    "star": "★",
    "batch": 6,
    "group": "Group 26",
    "options": [
      {
        "letter": "A",
        "text": "索价，充电；指控",
        "isCorrect": false,
        "source": "charge",
        "explanation": "错误。“索价，充电；指控”实际源自英文单词 charge。"
      },
      {
        "letter": "B",
        "text": "排放，解雇，释放；出院",
        "isCorrect": true,
        "source": "discharge",
        "explanation": "正确。discharge 意为“排放，解雇，释放；出院”。discharge 意为“排出烟气液体，解雇职员，准许病人出院，释放犯人”。"
      },
      {
        "letter": "C",
        "text": "使不高兴，使失望",
        "isCorrect": false,
        "source": "discourage",
        "explanation": "错误。“使不高兴，使失望”实际源自英文单词 discourage。"
      },
      {
        "letter": "D",
        "text": "发现，发掘",
        "isCorrect": false,
        "source": "discover",
        "explanation": "错误。“发现，发掘”实际源自英文单词 discover。"
      }
    ],
    "root_note": "discharge 意为“排出烟气液体，解雇职员，准许病人出院，释放犯人”。"
  },
  {
    "num": 172,
    "word": "disguise",
    "star": "★",
    "batch": 6,
    "group": "Group 26",
    "options": [
      {
        "letter": "A",
        "text": "伪装，假扮；掩蔽",
        "isCorrect": true,
        "source": "disguise",
        "explanation": "正确。disguise 意为“伪装，假扮；掩蔽”。disguise 意为“乔装打扮，掩饰真实情感/面目”（in disguise 伪装潜行）。"
      },
      {
        "letter": "B",
        "text": "厌恶，恶心",
        "isCorrect": false,
        "source": "disgust",
        "explanation": "错误。“厌恶，恶心”实际源自英文单词 disgust。"
      },
      {
        "letter": "C",
        "text": "探讨，辩驳",
        "isCorrect": false,
        "source": "discuss",
        "explanation": "错误。“探讨，辩驳”实际源自英文单词 discuss。"
      },
      {
        "letter": "D",
        "text": "忽视，不理睬",
        "isCorrect": false,
        "source": "disregard",
        "explanation": "错误。“忽视，不理睬”实际源自英文单词 disregard。"
      }
    ],
    "root_note": "disguise 意为“乔装打扮，掩饰真实情感/面目”（in disguise 伪装潜行）。"
  },
  {
    "num": 173,
    "word": "disrupt",
    "star": "★",
    "batch": 6,
    "group": "Group 26",
    "options": [
      {
        "letter": "A",
        "text": "火山爆发，喷出",
        "isCorrect": false,
        "source": "erupt",
        "explanation": "错误。“火山爆发，喷出”实际源自英文单词 erupt。"
      },
      {
        "letter": "B",
        "text": "打乱，扰乱；使中断",
        "isCorrect": true,
        "source": "disrupt",
        "explanation": "正确。disrupt 意为“打乱，扰乱；使中断”。disrupt（dis- 分开 + rupt 撕裂 -> 扰乱列车运营/打乱正常秩序陷入瘫痪）。"
      },
      {
        "letter": "C",
        "text": "突然打断，插嘴",
        "isCorrect": false,
        "source": "interrupt",
        "explanation": "错误。“突然打断，插嘴”实际源自英文单词 interrupt。"
      },
      {
        "letter": "D",
        "text": "腐败的，堕落的",
        "isCorrect": false,
        "source": "corrupt",
        "explanation": "错误。“腐败的，堕落的”实际源自英文单词 corrupt。"
      }
    ],
    "root_note": "disrupt（dis- 分开 + rupt 撕裂 -> 扰乱列车运营/打乱正常秩序陷入瘫痪）。"
  },
  {
    "num": 174,
    "word": "dormitory",
    "star": "★",
    "batch": 6,
    "group": "Group 26",
    "options": [
      {
        "letter": "A",
        "text": "领土，领地",
        "isCorrect": false,
        "source": "territory",
        "explanation": "错误。“领土，领地”实际源自英文单词 territory。"
      },
      {
        "letter": "B",
        "text": "学生集体宿舍",
        "isCorrect": true,
        "source": "dormitory",
        "explanation": "正确。dormitory 意为“学生集体宿舍”。dormitory 缩写为 dorm，指大学等机构的“集体学生宿舍”。"
      },
      {
        "letter": "C",
        "text": "领土主导支配",
        "isCorrect": false,
        "source": "domination",
        "explanation": "错误。“领土主导支配”实际源自英文单词 domination。"
      },
      {
        "letter": "D",
        "text": "工厂，制造厂",
        "isCorrect": false,
        "source": "factory",
        "explanation": "错误。“工厂，制造厂”实际源自英文单词 factory。"
      }
    ],
    "root_note": "dormitory 缩写为 dorm，指大学等机构的“集体学生宿舍”。"
  },
  {
    "num": 175,
    "word": "dump",
    "star": "★",
    "batch": 6,
    "group": "Group 26",
    "options": [
      {
        "letter": "A",
        "text": "潮湿的，阴湿的",
        "isCorrect": false,
        "source": "damp",
        "explanation": "错误。“潮湿的，阴湿的”实际源自英文单词 damp。"
      },
      {
        "letter": "B",
        "text": "倾倒垃圾，丢弃；倾销",
        "isCorrect": true,
        "source": "dump",
        "explanation": "正确。dump 意为“倾倒垃圾，丢弃；倾销”。dump 意为“倾倒乱倒垃圾废料，甩掉对象，以低价海外倾销商品”。"
      },
      {
        "letter": "C",
        "text": "哑的，无声的",
        "isCorrect": false,
        "source": "dumb",
        "explanation": "错误。“哑的，无声的”实际源自英文单词 dumb。"
      },
      {
        "letter": "D",
        "text": "隆起肿块，碰撞",
        "isCorrect": false,
        "source": "bump",
        "explanation": "错误。“隆起肿块，碰撞”实际源自英文单词 bump。"
      }
    ],
    "root_note": "dump 意为“倾倒乱倒垃圾废料，甩掉对象，以低价海外倾销商品”。"
  },
  {
    "num": 176,
    "word": "endanger",
    "star": "★",
    "batch": 6,
    "group": "Group 26",
    "options": [
      {
        "letter": "A",
        "text": "鼓励，激励",
        "isCorrect": false,
        "source": "encourage",
        "explanation": "错误。“鼓励，激励”实际源自英文单词 encourage。"
      },
      {
        "letter": "B",
        "text": "使面临危险，危及",
        "isCorrect": true,
        "source": "endanger",
        "explanation": "正确。endanger 意为“使面临危险，危及”。endanger（en- 使 + danger 危险 -> 置于危险境地，endangered species 濒危物种）。"
      },
      {
        "letter": "C",
        "text": "遭遇，碰见",
        "isCorrect": false,
        "source": "encounter",
        "explanation": "错误。“遭遇，碰见”实际源自英文单词 encounter。"
      },
      {
        "letter": "D",
        "text": "参与，从事",
        "isCorrect": false,
        "source": "engage",
        "explanation": "错误。“参与，从事”实际源自英文单词 engage。"
      }
    ],
    "root_note": "endanger（en- 使 + danger 危险 -> 置于危险境地，endangered species 濒危物种）。"
  },
  {
    "num": 177,
    "word": "enterprise",
    "star": "★",
    "batch": 6,
    "group": "Group 26",
    "options": [
      {
        "letter": "A",
        "text": "娱乐，招待",
        "isCorrect": false,
        "source": "entertainment",
        "explanation": "错误。“娱乐，招待”实际源自英文单词 entertainment。"
      },
      {
        "letter": "B",
        "text": "公司企业；进取心事业心",
        "isCorrect": true,
        "source": "enterprise",
        "explanation": "正确。enterprise 意为“公司企业；进取心事业心”。enterprise 意为“企事业单位，大型企业”，亦指个人的“开拓进取精神”。"
      },
      {
        "letter": "C",
        "text": "演戏，表演",
        "isCorrect": false,
        "source": "performance",
        "explanation": "错误。“演戏，表演”实际源自英文单词 performance。"
      },
      {
        "letter": "D",
        "text": "练习，锻炼",
        "isCorrect": false,
        "source": "exercise",
        "explanation": "错误。“练习，锻炼”实际源自英文单词 exercise。"
      }
    ],
    "root_note": "enterprise 意为“企事业单位，大型企业”，亦指个人的“开拓进取精神”。"
  },
  {
    "num": 178,
    "word": "exaggerate",
    "star": "★",
    "batch": 6,
    "group": "Group 26",
    "options": [
      {
        "letter": "A",
        "text": "加重，使恶化",
        "isCorrect": false,
        "source": "aggravate",
        "explanation": "错误。“加重，使恶化”实际源自英文单词 aggravate。"
      },
      {
        "letter": "B",
        "text": "夸大，夸张吹嘘",
        "isCorrect": true,
        "source": "exaggerate",
        "explanation": "正确。exaggerate 意为“夸大，夸张吹嘘”。exaggerate 意为“夸大其词，吹嘘言过其实”。"
      },
      {
        "letter": "C",
        "text": "加速，催进",
        "isCorrect": false,
        "source": "accelerate",
        "explanation": "错误。“加速，催进”实际源自英文单词 accelerate。"
      },
      {
        "letter": "D",
        "text": "精巧制作，详述",
        "isCorrect": false,
        "source": "elaborate",
        "explanation": "错误。“精巧制作，详述”实际源自英文单词 elaborate。"
      }
    ],
    "root_note": "exaggerate 意为“夸大其词，吹嘘言过其实”。"
  },
  {
    "num": 179,
    "word": "excursion",
    "star": "★",
    "batch": 6,
    "group": "Group 26",
    "options": [
      {
        "letter": "A",
        "text": "借口，理由",
        "isCorrect": false,
        "source": "excuse",
        "explanation": "错误。“借口，理由”实际源自英文单词 excuse。"
      },
      {
        "letter": "B",
        "text": "短途旅行，远足游览",
        "isCorrect": true,
        "source": "excursion",
        "explanation": "正确。excursion 意为“短途旅行，远足游览”。excursion（ex- 往外 + curs 跑 -> 外出走走 -> 远足，短途集体旅行）。"
      },
      {
        "letter": "C",
        "text": "排除，排除在外",
        "isCorrect": false,
        "source": "exclusion",
        "explanation": "错误。“排除，排除在外”实际源自英文单词 exclusion。"
      },
      {
        "letter": "D",
        "text": "演习，体能锻炼",
        "isCorrect": false,
        "source": "exercise",
        "explanation": "错误。“演习，体能锻炼”实际源自英文单词 exercise。"
      }
    ],
    "root_note": "excursion（ex- 往外 + curs 跑 -> 外出走走 -> 远足，短途集体旅行）。"
  },
  {
    "num": 180,
    "word": "exile",
    "star": "★",
    "batch": 6,
    "group": "Group 26",
    "options": [
      {
        "letter": "A",
        "text": "出口，退出",
        "isCorrect": false,
        "source": "exit",
        "explanation": "错误。“出口，退出”实际源自英文单词 exit。"
      },
      {
        "letter": "B",
        "text": "流放，流亡海外；流亡者",
        "isCorrect": true,
        "source": "exile",
        "explanation": "正确。exile 意为“流放，流亡海外；流亡者”。exile 意为“政治流放，流亡国外”（live in exile 流亡生活中）。"
      },
      {
        "letter": "C",
        "text": "精英，卓越人士",
        "isCorrect": false,
        "source": "elite",
        "explanation": "错误。“精英，卓越人士”实际源自英文单词 elite。"
      },
      {
        "letter": "D",
        "text": "存在的，生存的",
        "isCorrect": false,
        "source": "exist",
        "explanation": "错误。“存在的，生存的”实际源自英文单词 exist。"
      }
    ],
    "root_note": "exile 意为“政治流放，流亡国外”（live in exile 流亡生活中）。"
  },
  {
    "num": 181,
    "word": "explode",
    "star": "★",
    "batch": 6,
    "group": "Group 26",
    "options": [
      {
        "letter": "A",
        "text": "勘探，探索",
        "isCorrect": false,
        "source": "explore",
        "explanation": "错误。“勘探，探索”实际源自英文单词 explore。"
      },
      {
        "letter": "B",
        "text": "爆炸，爆发出；激增",
        "isCorrect": true,
        "source": "explode",
        "explanation": "正确。explode 意为“爆炸，爆发出；激增”。explode 意为“炸弹炸开，人口/怒火激增爆发”（explosion 名词爆炸）。"
      },
      {
        "letter": "C",
        "text": "剥削，利用开拓",
        "isCorrect": false,
        "source": "exploit",
        "explanation": "错误。“剥削，利用开拓”实际源自英文单词 exploit。"
      },
      {
        "letter": "D",
        "text": "暴露，揭发",
        "isCorrect": false,
        "source": "expose",
        "explanation": "错误。“暴露，揭发”实际源自英文单词 expose。"
      }
    ],
    "root_note": "explode 意为“炸弹炸开，人口/怒火激增爆发”（explosion 名词爆炸）。"
  },
  {
    "num": 182,
    "word": "fierce",
    "star": "★",
    "batch": 6,
    "group": "Group 26",
    "options": [
      {
        "letter": "A",
        "text": "力量，强迫",
        "isCorrect": false,
        "source": "force",
        "explanation": "错误。“力量，强迫”实际源自英文单词 force。"
      },
      {
        "letter": "B",
        "text": "凶猛的，残暴猛烈的",
        "isCorrect": true,
        "source": "fierce",
        "explanation": "正确。fierce 意为“凶猛的，残暴猛烈的”。fierce 意为“凶悍残暴的（野兽），激烈猛烈的（竞争/风暴，fierce competition）”。"
      },
      {
        "letter": "C",
        "text": "刺穿，穿透",
        "isCorrect": false,
        "source": "pierce",
        "explanation": "错误。“刺穿，穿透”实际源自英文单词 pierce。"
      },
      {
        "letter": "D",
        "text": "纤弱的，精美的",
        "isCorrect": false,
        "source": "delicate",
        "explanation": "错误。“纤弱的，精美的”实际源自英文单词 delicate。"
      }
    ],
    "root_note": "fierce 意为“凶悍残暴的（野兽），激烈猛烈的（竞争/风暴，fierce competition）”。"
  },
  {
    "num": 183,
    "word": "flock",
    "star": "★",
    "batch": 6,
    "group": "Group 26",
    "options": [
      {
        "letter": "A",
        "text": "闭锁，锁头",
        "isCorrect": false,
        "source": "lock",
        "explanation": "错误。“闭锁，锁头”实际源自英文单词 lock。"
      },
      {
        "letter": "B",
        "text": "羊群，鸟群；蜂拥而至",
        "isCorrect": true,
        "source": "flock",
        "explanation": "正确。flock 意为“羊群，鸟群；蜂拥而至”。flock 指鸟群、羊群（birds of a feather flock together 物以类聚）；动词指“成群涌向”。"
      },
      {
        "letter": "C",
        "text": "洪水，溢出",
        "isCorrect": false,
        "source": "flood",
        "explanation": "错误。“洪水，溢出”实际源自英文单词 flood。"
      },
      {
        "letter": "D",
        "text": "街区，阻碍",
        "isCorrect": false,
        "source": "block",
        "explanation": "错误。“街区，阻碍”实际源自英文单词 block。"
      }
    ],
    "root_note": "flock 指鸟群、羊群（birds of a feather flock together 物以类聚）；动词指“成群涌向”。"
  }
];
