/*
 * MIT License
 *
 * Copyright (c) 2022 Alibaba Cloud
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

export default class URLUtils {
  // 获取 URL 参数
  getQueryString(name) {
    const regExpMatchArray = window.location.search.substr(1).match(new RegExp(`(^|&)${name}=([^&]*)(&|$)`));
    return regExpMatchArray != null ? unescape(decodeURI(regExpMatchArray[2])) : null;
  }

  // 修改 URL 参数
  changeURLArg(url, arg, argVal) {
    const pattern = `${arg}=([^&]*)`;
    const replaceText = `${arg}=${argVal}`;
    if (url.match(pattern)) {
      let tmp = `/(${arg}=)([^&]*)/gi`;
      tmp = url.replace(eval(tmp), replaceText);
      return encodeURI(tmp);
    } else if (url.match("[?]")) {
      return encodeURI(`${url}&${replaceText}`);
    } else {
      return encodeURI(`${url}?${replaceText}`);
    }
  }
}
