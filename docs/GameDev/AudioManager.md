---
id: audiomanager
title: 音频管理器
type: GameDev
---
此组件为管理所有音频，控制音频播放与音量的组件

## 使用方法

在 `AudioManger`中，我们提供了三种控制，控制**播放的音频**，控制**音频的停止**，与**控制音频的音量**

| 函数                                      | 简介                   |
| ----------------------------------------- | ---------------------- |
| `PlayBGM(string name, bool loop)`       | 控制BGM的播放与循环    |
| `PlayVoice(string name, bool loop)`     | 控制Voice的播放与循环  |
| `PlayEffect(string name, bool loop)`    | 控制Effect的播放与循环 |
| `SetVolume(string Group, float volume)` | 控制各个属性的音量     |
| `BGMSource`                             | 直接控制BGM的Source    |
| `EffectSource`                          | 直接控制Effect的Source |
| `VoiceSource`                           | 直接控制Voice的Source  |

### 控制播放的音频

`AudioManger.Instance.PlayBGM("title",true);`

其中，`PlayBGM`为分类

我们暂时先提供了三种类别的音频控制： `PlayBGM`，`PlayVoice`，`PlayEffect`

这三个函数共有以下参数

| 参数 | 简介                               | 值属性 | 可用值             |
| ---- | ---------------------------------- | ------ | ------------------ |
| name | 从管理器中寻找与之相对应名称的音频 | string | 依靠脚本           |
| loop | 是否循环播放                       | bool   | `false`/`true` |

### 控制音频的音量

`AudioManger.Instance.SetVolume(MainVolume, 20f);`

其中，`BGM`为分类

我们提供了以下参数

| 参数   | 简介       | 值属性 | 可用值                                                             |
| ------ | ---------- | ------ | ------------------------------------------------------------------ |
| Group  | 控制指定组 | string | `MainVolume`/`BGMVolume`/`VoiceVolume`/`SoundEffectVolume` |
| volume | 音量调整   | float  | 任何float(理论)                                                    |
