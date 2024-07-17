import React from 'react'

export default async function Fetchingdata() {
    const res=await fetch("https://spaces/weumlpbo3lrc/environments/master/entries?access_token=bPT9N9qW5ZrpJnlUbXv00-DWUwIx6N73QSLAyE7kPTk")
  return (
    <div>fetchingdatF</div>
  )
}

