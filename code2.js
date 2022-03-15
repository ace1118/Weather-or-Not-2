gdjs.IntroCode = {};
gdjs.IntroCode.GDSAES_95balitaObjects1= [];
gdjs.IntroCode.GDSAES_95balitaObjects2= [];
gdjs.IntroCode.GDSAES_95balitaObjects3= [];
gdjs.IntroCode.GDplay_95pauseObjects1= [];
gdjs.IntroCode.GDplay_95pauseObjects2= [];
gdjs.IntroCode.GDplay_95pauseObjects3= [];
gdjs.IntroCode.GDforwardObjects1= [];
gdjs.IntroCode.GDforwardObjects2= [];
gdjs.IntroCode.GDforwardObjects3= [];
gdjs.IntroCode.GDbackwardObjects1= [];
gdjs.IntroCode.GDbackwardObjects2= [];
gdjs.IntroCode.GDbackwardObjects3= [];

gdjs.IntroCode.conditionTrue_0 = {val:false};
gdjs.IntroCode.condition0IsTrue_0 = {val:false};
gdjs.IntroCode.condition1IsTrue_0 = {val:false};
gdjs.IntroCode.condition2IsTrue_0 = {val:false};
gdjs.IntroCode.conditionTrue_1 = {val:false};
gdjs.IntroCode.condition0IsTrue_1 = {val:false};
gdjs.IntroCode.condition1IsTrue_1 = {val:false};
gdjs.IntroCode.condition2IsTrue_1 = {val:false};


gdjs.IntroCode.mapOfGDgdjs_46IntroCode_46GDplay_9595pauseObjects1Objects = Hashtable.newFrom({"play_pause": gdjs.IntroCode.GDplay_95pauseObjects1});gdjs.IntroCode.eventsList0 = function(runtimeScene) {

{


gdjs.IntroCode.condition0IsTrue_0.val = false;
{
{gdjs.IntroCode.conditionTrue_1 = gdjs.IntroCode.condition0IsTrue_0;
gdjs.IntroCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(58831300);
}
}if (gdjs.IntroCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(1).add(1);
}}

}


};gdjs.IntroCode.mapOfGDgdjs_46IntroCode_46GDplay_9595pauseObjects1Objects = Hashtable.newFrom({"play_pause": gdjs.IntroCode.GDplay_95pauseObjects1});gdjs.IntroCode.mapOfGDgdjs_46IntroCode_46GDplay_9595pauseObjects1Objects = Hashtable.newFrom({"play_pause": gdjs.IntroCode.GDplay_95pauseObjects1});gdjs.IntroCode.mapOfGDgdjs_46IntroCode_46GDforwardObjects2Objects = Hashtable.newFrom({"forward": gdjs.IntroCode.GDforwardObjects2});gdjs.IntroCode.eventsList1 = function(runtimeScene) {

{


gdjs.IntroCode.condition0IsTrue_0.val = false;
{
gdjs.IntroCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.IntroCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("SAES_balita"), gdjs.IntroCode.GDSAES_95balitaObjects2);
{for(var i = 0, len = gdjs.IntroCode.GDSAES_95balitaObjects2.length ;i < len;++i) {
    gdjs.IntroCode.GDSAES_95balitaObjects2[i].setCurrentTime((gdjs.IntroCode.GDSAES_95balitaObjects2[i].getCurrentTime()) + 10);
}
}}

}


};gdjs.IntroCode.mapOfGDgdjs_46IntroCode_46GDforwardObjects2Objects = Hashtable.newFrom({"forward": gdjs.IntroCode.GDforwardObjects2});gdjs.IntroCode.mapOfGDgdjs_46IntroCode_46GDbackwardObjects2Objects = Hashtable.newFrom({"backward": gdjs.IntroCode.GDbackwardObjects2});gdjs.IntroCode.eventsList2 = function(runtimeScene) {

{


gdjs.IntroCode.condition0IsTrue_0.val = false;
{
gdjs.IntroCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.IntroCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("SAES_balita"), gdjs.IntroCode.GDSAES_95balitaObjects2);
{for(var i = 0, len = gdjs.IntroCode.GDSAES_95balitaObjects2.length ;i < len;++i) {
    gdjs.IntroCode.GDSAES_95balitaObjects2[i].setCurrentTime((gdjs.IntroCode.GDSAES_95balitaObjects2[i].getCurrentTime()) - 10);
}
}}

}


};gdjs.IntroCode.mapOfGDgdjs_46IntroCode_46GDbackwardObjects1Objects = Hashtable.newFrom({"backward": gdjs.IntroCode.GDbackwardObjects1});gdjs.IntroCode.eventsList3 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("forward"), gdjs.IntroCode.GDforwardObjects2);

gdjs.IntroCode.condition0IsTrue_0.val = false;
{
gdjs.IntroCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.IntroCode.mapOfGDgdjs_46IntroCode_46GDforwardObjects2Objects, runtimeScene, true, false);
}if (gdjs.IntroCode.condition0IsTrue_0.val) {
/* Reuse gdjs.IntroCode.GDforwardObjects2 */
{for(var i = 0, len = gdjs.IntroCode.GDforwardObjects2.length ;i < len;++i) {
    gdjs.IntroCode.GDforwardObjects2[i].setOpacity(255);
}
}
{ //Subevents
gdjs.IntroCode.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("forward"), gdjs.IntroCode.GDforwardObjects2);

gdjs.IntroCode.condition0IsTrue_0.val = false;
{
gdjs.IntroCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.IntroCode.mapOfGDgdjs_46IntroCode_46GDforwardObjects2Objects, runtimeScene, true, true);
}if (gdjs.IntroCode.condition0IsTrue_0.val) {
/* Reuse gdjs.IntroCode.GDforwardObjects2 */
{for(var i = 0, len = gdjs.IntroCode.GDforwardObjects2.length ;i < len;++i) {
    gdjs.IntroCode.GDforwardObjects2[i].setOpacity(50);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("backward"), gdjs.IntroCode.GDbackwardObjects2);

gdjs.IntroCode.condition0IsTrue_0.val = false;
{
gdjs.IntroCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.IntroCode.mapOfGDgdjs_46IntroCode_46GDbackwardObjects2Objects, runtimeScene, true, false);
}if (gdjs.IntroCode.condition0IsTrue_0.val) {
/* Reuse gdjs.IntroCode.GDbackwardObjects2 */
{for(var i = 0, len = gdjs.IntroCode.GDbackwardObjects2.length ;i < len;++i) {
    gdjs.IntroCode.GDbackwardObjects2[i].setOpacity(255);
}
}
{ //Subevents
gdjs.IntroCode.eventsList2(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("backward"), gdjs.IntroCode.GDbackwardObjects1);

gdjs.IntroCode.condition0IsTrue_0.val = false;
{
gdjs.IntroCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.IntroCode.mapOfGDgdjs_46IntroCode_46GDbackwardObjects1Objects, runtimeScene, true, true);
}if (gdjs.IntroCode.condition0IsTrue_0.val) {
/* Reuse gdjs.IntroCode.GDbackwardObjects1 */
{for(var i = 0, len = gdjs.IntroCode.GDbackwardObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDbackwardObjects1[i].setOpacity(50);
}
}}

}


};gdjs.IntroCode.eventsList4 = function(runtimeScene) {

{


gdjs.IntroCode.condition0IsTrue_0.val = false;
{
gdjs.IntroCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.IntroCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("SAES_balita"), gdjs.IntroCode.GDSAES_95balitaObjects1);
{for(var i = 0, len = gdjs.IntroCode.GDSAES_95balitaObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDSAES_95balitaObjects1[i].play();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("SAES_balita"), gdjs.IntroCode.GDSAES_95balitaObjects1);

gdjs.IntroCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.IntroCode.GDSAES_95balitaObjects1.length;i<l;++i) {
    if ( gdjs.IntroCode.GDSAES_95balitaObjects1[i].isEnded() ) {
        gdjs.IntroCode.condition0IsTrue_0.val = true;
        gdjs.IntroCode.GDSAES_95balitaObjects1[k] = gdjs.IntroCode.GDSAES_95balitaObjects1[i];
        ++k;
    }
}
gdjs.IntroCode.GDSAES_95balitaObjects1.length = k;}if (gdjs.IntroCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Gameplay", false);
}}

}


{


gdjs.IntroCode.condition0IsTrue_0.val = false;
{
gdjs.IntroCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.IntroCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("SAES_balita"), gdjs.IntroCode.GDSAES_95balitaObjects1);
{for(var i = 0, len = gdjs.IntroCode.GDSAES_95balitaObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDSAES_95balitaObjects1[i].play();
}
}}

}


{


gdjs.IntroCode.condition0IsTrue_0.val = false;
{
gdjs.IntroCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.IntroCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("SAES_balita"), gdjs.IntroCode.GDSAES_95balitaObjects1);
{for(var i = 0, len = gdjs.IntroCode.GDSAES_95balitaObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDSAES_95balitaObjects1[i].pause();
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("play_pause"), gdjs.IntroCode.GDplay_95pauseObjects1);

gdjs.IntroCode.condition0IsTrue_0.val = false;
gdjs.IntroCode.condition1IsTrue_0.val = false;
{
gdjs.IntroCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.IntroCode.mapOfGDgdjs_46IntroCode_46GDplay_9595pauseObjects1Objects, runtimeScene, true, false);
}if ( gdjs.IntroCode.condition0IsTrue_0.val ) {
{
gdjs.IntroCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.IntroCode.condition1IsTrue_0.val) {

{ //Subevents
gdjs.IntroCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


gdjs.IntroCode.condition0IsTrue_0.val = false;
{
gdjs.IntroCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) == 1;
}if (gdjs.IntroCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(2);
}}

}


{


gdjs.IntroCode.condition0IsTrue_0.val = false;
{
gdjs.IntroCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) == 2;
}if (gdjs.IntroCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("play_pause"), gdjs.IntroCode.GDplay_95pauseObjects1);
{for(var i = 0, len = gdjs.IntroCode.GDplay_95pauseObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDplay_95pauseObjects1[i].setAnimationName("play");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("play_pause"), gdjs.IntroCode.GDplay_95pauseObjects1);

gdjs.IntroCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.IntroCode.GDplay_95pauseObjects1.length;i<l;++i) {
    if ( gdjs.IntroCode.GDplay_95pauseObjects1[i].isCurrentAnimationName("play") ) {
        gdjs.IntroCode.condition0IsTrue_0.val = true;
        gdjs.IntroCode.GDplay_95pauseObjects1[k] = gdjs.IntroCode.GDplay_95pauseObjects1[i];
        ++k;
    }
}
gdjs.IntroCode.GDplay_95pauseObjects1.length = k;}if (gdjs.IntroCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("SAES_balita"), gdjs.IntroCode.GDSAES_95balitaObjects1);
{for(var i = 0, len = gdjs.IntroCode.GDSAES_95balitaObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDSAES_95balitaObjects1[i].pause();
}
}}

}


{


gdjs.IntroCode.condition0IsTrue_0.val = false;
{
gdjs.IntroCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) == 3;
}if (gdjs.IntroCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(0);
}}

}


{


gdjs.IntroCode.condition0IsTrue_0.val = false;
{
gdjs.IntroCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) == 0;
}if (gdjs.IntroCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("play_pause"), gdjs.IntroCode.GDplay_95pauseObjects1);
{for(var i = 0, len = gdjs.IntroCode.GDplay_95pauseObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDplay_95pauseObjects1[i].setAnimationName("pause");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("play_pause"), gdjs.IntroCode.GDplay_95pauseObjects1);

gdjs.IntroCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.IntroCode.GDplay_95pauseObjects1.length;i<l;++i) {
    if ( gdjs.IntroCode.GDplay_95pauseObjects1[i].isCurrentAnimationName("pause") ) {
        gdjs.IntroCode.condition0IsTrue_0.val = true;
        gdjs.IntroCode.GDplay_95pauseObjects1[k] = gdjs.IntroCode.GDplay_95pauseObjects1[i];
        ++k;
    }
}
gdjs.IntroCode.GDplay_95pauseObjects1.length = k;}if (gdjs.IntroCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("SAES_balita"), gdjs.IntroCode.GDSAES_95balitaObjects1);
{for(var i = 0, len = gdjs.IntroCode.GDSAES_95balitaObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDSAES_95balitaObjects1[i].play();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("play_pause"), gdjs.IntroCode.GDplay_95pauseObjects1);

gdjs.IntroCode.condition0IsTrue_0.val = false;
{
gdjs.IntroCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.IntroCode.mapOfGDgdjs_46IntroCode_46GDplay_9595pauseObjects1Objects, runtimeScene, true, false);
}if (gdjs.IntroCode.condition0IsTrue_0.val) {
/* Reuse gdjs.IntroCode.GDplay_95pauseObjects1 */
{for(var i = 0, len = gdjs.IntroCode.GDplay_95pauseObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDplay_95pauseObjects1[i].setOpacity(255);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("play_pause"), gdjs.IntroCode.GDplay_95pauseObjects1);

gdjs.IntroCode.condition0IsTrue_0.val = false;
{
gdjs.IntroCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.IntroCode.mapOfGDgdjs_46IntroCode_46GDplay_9595pauseObjects1Objects, runtimeScene, true, true);
}if (gdjs.IntroCode.condition0IsTrue_0.val) {
/* Reuse gdjs.IntroCode.GDplay_95pauseObjects1 */
{for(var i = 0, len = gdjs.IntroCode.GDplay_95pauseObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDplay_95pauseObjects1[i].setOpacity(100);
}
}}

}


{


gdjs.IntroCode.eventsList3(runtimeScene);
}


{


{
}

}


};

gdjs.IntroCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.IntroCode.GDSAES_95balitaObjects1.length = 0;
gdjs.IntroCode.GDSAES_95balitaObjects2.length = 0;
gdjs.IntroCode.GDSAES_95balitaObjects3.length = 0;
gdjs.IntroCode.GDplay_95pauseObjects1.length = 0;
gdjs.IntroCode.GDplay_95pauseObjects2.length = 0;
gdjs.IntroCode.GDplay_95pauseObjects3.length = 0;
gdjs.IntroCode.GDforwardObjects1.length = 0;
gdjs.IntroCode.GDforwardObjects2.length = 0;
gdjs.IntroCode.GDforwardObjects3.length = 0;
gdjs.IntroCode.GDbackwardObjects1.length = 0;
gdjs.IntroCode.GDbackwardObjects2.length = 0;
gdjs.IntroCode.GDbackwardObjects3.length = 0;

gdjs.IntroCode.eventsList4(runtimeScene);
return;

}

gdjs['IntroCode'] = gdjs.IntroCode;
