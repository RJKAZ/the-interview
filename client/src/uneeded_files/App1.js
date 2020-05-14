// Dependencies
import React, { Component } from "react";
import Sound from "react-sound";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import Fullscreen from "react-full-screen";
import WheelReact from "wheel-react";
// API
import story from "../story/story";
import choices from "../story/choices";
// Components
import TitleScreen from "../components/TitleScreen";

import ChoiceMenu from "../components/ChoiceMenu";
import RenderFrame from "../components/RenderFrame";
import MenuButtons from "../components/MenuButtons";


// CSS
import "./styles/config.css";
import "./styles/container.css";

import "./styles/choicesoverlay.css";
import "./styles/effects.css";
import "./styles/menubuttons.css";

import "./styles/sprites.css";
import "./styles/textbox.css";
import "./styles/titlescreen.css";
import "./styles/transitions.css";

const INITIAL_STATE = {
  bgmVolume: 80,
  soundEffectVolume: 90,
  voiceVolume: 100,
  font: "Trebuchet MS",
  isFull: false,
  choicesStore: {},
  index: 0,
  stateHistory: [],
  choicesHistory: [],
  choicesIndexHistory: [],
  indexHistory: [],
  choicesExist: false,

  titleScreenShown: true,
  frameIsRendering: false,
  textBoxShown: true,
  isSkipping: false
};

class App extends Component {
  constructor() {
    super();
    this.setFrame = this.setFrame.bind(this);
    this.state = INITIAL_STATE;

    WheelReact.config({
      down: () => {
        if (
         
          !this.state.choicesExist &&
          !this.state.titleScreenShown 
          
        ); 
      }
    });
  }

  componentDidMount() {
    window.addEventListener("beforeunload", e => (e.returnValue = "Unsaved changes will be lost."));
  }

  setFrameFromChoice(choice, routeBegins) {
    for (let i = 0; i < story.length; i++) {
      if (routeBegins === story[i].routeBegins) {
        this.setFrame(i);
      }
    }

    let choicesStore = { ...this.state.choicesStore };
    choicesStore[choice]++ || (choicesStore[choice] = 1);
    this.setState({ choicesStore });
  }

  setNextFrame() {
    const currentIndex = this.state.index;
    const jumpToBecauseStore = story[currentIndex].jumpToBecauseStore;
    if (story[currentIndex].jumpToBecauseStore) {
      for (let i = 0; i < story.length; i++) {
        if (story[i].receiveJumpBecauseStore) {
          if (
            jumpToBecauseStore === story[i].receiveJumpBecauseStore[0] &&
            this.state.choicesStore[jumpToBecauseStore] === story[i].receiveJumpBecauseStore[1]
          ) {
            this.setFrame(i);
            return;
          }
        }
      }
    }
    if (story[currentIndex].jumpTo) {
      if (story[currentIndex].jumpTo === "title-screen") {
        this.setState(INITIAL_STATE);
        return;
      }
      for (let i = 0; i < story.length; i++) {
        if (story[currentIndex].jumpTo === story[i].receiveJump) {
          this.setFrame(i);
          return;
        }
      }
    }
    if (
      !this.state.choicesExist &&
      !this.state.titleScreenShown 
    ) {
      this.setFrame(currentIndex + 1);
    }
  }

  setFrame(index) {
    // Makes sure the index is within the story array
    if (index >= story.length) {
      index = story.length - 1;
    } else if (index <= -1) {
      index = 0;
    }
    // Updates story with new index
    this.setState({
      index: index,
      bg: story[index].bg,
      bgm: story[index].bgm,
      choicesExist: story[index].choicesExist,
      soundEffect: story[index].soundEffect,
      speaker: story[index].speaker,
      sprite: story[index].sprite,
      spriteEffect: story[index].spriteEffect,
      spriteTransition: story[index].spriteTransition,
      spriteLeft: story[index].spriteLeft,
      spriteLeftEffect: story[index].spriteLeftEffect,
      spriteLeftTransition: story[index].spriteLeftTransition,
      spriteRight: story[index].spriteRight,
      spriteRightEffect: story[index].spriteRightEffect,
      spriteRightTransition: story[index].spriteRightTransition,
      text: story[index].text,
      bgTransition: story[index].bgTransition,
      voice: story[index].voice
    });
  }

  renderFrame() {
    return (
      <RenderFrame
        font={this.state.font}
        setNextFrame={this.setNextFrame.bind(this)}
        bg={this.state.bg}
        sprite={this.state.sprite}
        spriteEffect={this.state.spriteEffect}
        spriteTransition={this.state.spriteTransition}
        spriteLeft={this.state.spriteLeft}
        spriteLeftEffect={this.state.spriteLeftEffect}
        spriteLeftTransition={this.state.spriteLeftTransition}
        spriteRight={this.state.spriteRight}
        spriteRightEffect={this.state.spriteRightEffect}
        spriteRightTransition={this.state.spriteRightTransition}
        speaker={this.state.speaker}
        text={this.state.text}
        textBoxShown={this.state.textBoxShown}
        bgTransition={this.state.bgTransition}
      />
    );
  }

  setChoice(choicesIndex) {
    // Makes sure the index is within the Choices array
    if (choicesIndex >= choices.length) {
      choicesIndex = choices.length - 1;
    } else if (choicesIndex <= -1) {
      choicesIndex = 0;
    }

    this.setState({
      choicesIndex: choicesIndex,
      choiceOptions: choices[choicesIndex].choices
    });
  }

  handleChoiceSelected(event) {
    this.stopSkip();
    this.setFrameFromChoice(event.currentTarget.name, event.currentTarget.alt);
    let nextIndex = 0;
    if (event.currentTarget.id) {
      this.setState({ choicesStore: {} });
    }
    if (event.currentTarget.placeholder) {
      nextIndex = parseInt(event.currentTarget.placeholder, 10);
    } else {
      nextIndex = this.state.choicesIndex + 1;
    }
    this.setChoice(nextIndex);
  }

  renderChoiceMenu() {
    return (
      <ChoiceMenu choiceOptions={this.state.choiceOptions} onChoiceSelected={this.handleChoiceSelected.bind(this)} />
    );
  }


  toggleTextBox() {
    this.setState(prevState => ({
      textBoxShown: !prevState.textBoxShown
    }));
  }


  startSkip() {
    const intervalTime = prompt("How many milliseconds per frame would you like?", "75");
    if (intervalTime > 0) {
      this.setState({
        isSkipping: true
      });
      this.textSkipper = setInterval(this.setNextFrame.bind(this), intervalTime);
    }
  }

  stopSkip() {
    clearInterval(this.textSkipper);
    this.setState({
      isSkipping: false
    });
  }


  beginStory() {
    this.stopSkip();
    this.setState({
      titleScreenShown: false,
      frameIsRendering: true
    });
    this.setFrame(0);
    this.setState({
      choicesIndex: 0,
      choiceOptions: choices[0].choices
    });
  }

  titleScreen() {
    return <TitleScreen beginStory={this.beginStory.bind(this)} toggleLoadMenu={this.toggleLoadMenu.bind(this)} />;
  }

  configMenu() {
    return (
      <ConfigMenu
        changeFont={newFont => this.setState({ font: newFont.label })}
        font={this.state.font}
        bgmVolume={this.state.bgmVolume}
        soundEffectVolume={this.state.soundEffectVolume}
        voiceVolume={this.state.voiceVolume}
        bgmVolumeChange={value => this.setState({ bgmVolume: value })}
        soundEffectVolumeChange={value => this.setState({ soundEffectVolume: value })}
        voiceVolumeChange={value => this.setState({ voiceVolume: value })}
        
      />
    );
  }


  renderMenuButtons() {
    return (
      <MenuButtons
        menuButtonsShown={this.state.menuButtonsShown}
        setNextFrame={this.setNextFrame.bind(this)}
        toggleTextBox={this.toggleTextBox.bind(this)}
        toggleFullscreen={() => this.setState({ isFull: true })}
        textBoxShown={this.state.textBoxShown}
        startSkip={this.startSkip.bind(this)}
        stopSkip={this.stopSkip.bind(this)}
        isSkipping={this.state.isSkipping}
      />
    );
  }



  componentDidUpdate(prevProps, prevState) {
    if (prevState.index < this.state.index) {
      this.setState({
        choicesHistory: [...this.state.choicesHistory, prevState.choicesStore],
        choicesIndexHistory: [...this.state.choicesIndexHistory, prevState.choicesIndex],
        indexHistory: [...this.state.indexHistory, prevState.index]
      });
    }
  }

  playBGM() {
    return <Sound url={this.state.bgm} volume={this.state.bgmVolume} playStatus={Sound.status.PLAYING} loop={true} />;
  }
  playSoundEffect() {
    return (
      <Sound url={this.state.soundEffect} volume={this.state.soundEffectVolume} playStatus={Sound.status.PLAYING} />
    );
  }
  playVoice() {
    return <Sound url={this.state.voice} volume={this.state.voiceVolume} playStatus={Sound.status.PLAYING} />;
  }

  render() {
    let zoomMultiplier = 0;
    if (window.innerWidth * 1 / window.innerHeight <= 1280 * 1 / 720) {
      zoomMultiplier = window.innerWidth * 1 / 1280;
    } else {
      zoomMultiplier = window.innerHeight * 1 / 720;
    }

    return (
      <div {...WheelReact.events} style={this.state.isFull ? { zoom: zoomMultiplier } : null}>
        <Fullscreen enabled={this.state.isFull} onChange={isFull => this.setState({ isFull })}>
          <ReactCSSTransitionGroup
            className="container"
            component="div"
            transitionName="menu"
            transitionEnterTimeout={400}
            transitionLeaveTimeout={400}
          >
            {this.state.titleScreenShown ? this.titleScreen() : null}
            {this.state.frameIsRendering ? this.renderFrame() : null}
            {/* GUI menu buttons */}
            {this.state.frameIsRendering ? this.renderFrame() : null}
            {this.state.choicesExist ? this.renderChoiceMenu() : null}
          </ReactCSSTransitionGroup>
        </Fullscreen>
        {!this.state.titleScreenShown ? this.renderMenuButtons() : null}
        {this.state.bgm ? this.playBGM() : null}
        {this.state.soundEffect ? this.playSoundEffect() : null}
        {this.state.voice ? this.playVoice() : null}
      </div>
    );
  }
}

export default App;
