import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import color from '../../../rsc/theme/color';
import {
  AccountSettings,
  AccountType,
  BlogDetail,
  BlogList,
  CommunityList,
  CreatePost,
  ExerciseList,
  ExerciseSummary,
  FavouriteRecipes,
  FeedBack,
  GetHelp,
  MyGoal,
  MyPosts,
  MyProfile,
  NotificationsList,
  PrivacyPolicy,
  RecipesList,
  SavedPost,
  SettingsMenu,
  TransformationList,
  VideoList,
} from '../app';

import Home from '../app/home';

import {
  Gender,
  GetStarted,
  HowOldAreYou,
  LetsGo,
  Login,
  OnBoarding,
  PhoneVerification,
  SignUp,
  YourHeight,
  YourInterest,
  YourWeight,
} from '../auth';

export default function Root() {
  return (
    <>
      <SafeAreaView style={{flex: 1, backgroundColor: color.white}}>
        {/* <OnBoarding /> */}
        {/* <GetStarted /> */}
        {/* <Login /> */}
        {/* <SignUp /> */}
        {/* <PhoneVerification /> */}
        {/* <Gender /> */}
        {/* <HowOldAreYou /> */}
        {/* <YourWeight /> */}
        {/* <YourHeight /> */}
        {/* <YourInterest /> */}
        {/* <LetsGo /> */}
        {/* <Home /> */}
        {/* <BlogList /> */}
        {/* <BlogDetail /> */}
        {/* <SettingsMenu /> */}
        {/* <PrivacyPolicy /> */}
        {/* <GetHelp /> */}
        {/* <AccountSettings /> */}
        {/* <AccountType /> */}
        {/* <VideoList /> */}
        {/* <TransformationList /> */}
        {/* <FeedBack /> */}
        {/* <NotificationsList /> */}
        {/* <ExerciseList /> */}
        {/* <ExerciseSummary /> */}
        {/* <MyGoal /> */}
        {/* <MyProfile /> */}

        {/* <CommunityList /> */}
        {/* <SavedPost /> */}
        {/* <MyPosts /> */}
        {/* <CreatePost /> */}

        {/* <RecipesList /> */}
        <FavouriteRecipes />
      </SafeAreaView>
    </>
  );
}