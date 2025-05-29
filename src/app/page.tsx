'use client';

import { useState } from 'react';
import sampleHeadingData from '../sample-data';

interface HeadingItem {
  tag: string;
  text: string;
}

export default function Home() {
  const [urls, setUrls] = useState<string[]>(Array(5).fill(''));
  const [activeUrls, setActiveUrls] = useState<string[]>([]);
  const [copyStatus, setCopyStatus] = useState<Record<string, boolean>>({});

  // URLの入力を処理する関数
  const handleUrlChange = (index: number, value: string) => {
    const newUrls = [...urls];
    newUrls[index] = value;
    setUrls(newUrls);
  };

  // 見出し抽出処理を実行する関数
  const extractHeadings = () => {
    // 空でないURLのみを抽出
    const filteredUrls = urls.filter(url => url.trim() !== '');
    setActiveUrls(filteredUrls);
  };

  // 記事全体の見出しをクリップボードにコピーする関数
  const copyAllHeadings = async (url: string) => {
    const headings = getHeadingsForUrl(url);
    if (headings.length === 0) return;

    // 全見出しをテキスト形式に変換
    const headingsText = headings
      .map(heading => `${heading.tag} ${heading.text}`)
      .join('\n');

    try {
      // 主要なクリップボードAPI
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(headingsText);
        setCopyStatus({ ...copyStatus, [url]: true });
        
        // 3秒後にコピー状態をリセット
        setTimeout(() => {
          setCopyStatus({ ...copyStatus, [url]: false });
        }, 3000);
        return;
      }
      
      // フォールバック: textarea + execCommand
      const textarea = document.createElement('textarea');
      textarea.value = headingsText;
      textarea.style.position = 'fixed';
      document.body.appendChild(textarea);
      textarea.focus();
      textarea.select();
      
      const successful = document.execCommand('copy');
      document.body.removeChild(textarea);
      
      if (successful) {
        setCopyStatus({ ...copyStatus, [url]: true });
        setTimeout(() => {
          setCopyStatus({ ...copyStatus, [url]: false });
        }, 3000);
      } else {
        alert('手動でコピーしてください');
      }
    } catch (err) {
      console.error('コピーに失敗しました:', err);
      alert('手動でコピーしてください');
    }
  };

  // 見出しデータを取得する関数（実際のアプリではAPIリクエストになるが、ここではサンプルデータを使用）
  const getHeadingsForUrl = (url: string): HeadingItem[] => {
    // サンプルデータから該当するURLのデータを返す
    // 実際のアプリでは、ここでAPIリクエストを行うが、要件により静的データを使用
    return sampleHeadingData[url as keyof typeof sampleHeadingData] || [];
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <header className="mb-8 text-center">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">見出しタグ抽出ツール</h1>
        <p className="text-gray-600">URLを入力して、ウェブページの見出しタグ（H1〜H6）を抽出します</p>
      </header>

      <main className="max-w-4xl mx-auto">
        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4 text-gray-700">URLを入力</h2>
          
          <div className="space-y-3">
            {urls.map((url, index) => (
              <div key={index} className="flex flex-col sm:flex-row gap-2">
                <input
                  type="text"
                  value={url}
                  onChange={(e) => handleUrlChange(index, e.target.value)}
                  placeholder={`URL ${index + 1} を入力`}
                  className="flex-1 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            ))}
          </div>
          
          <button
            onClick={extractHeadings}
            className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded transition-colors"
          >
            見出しを抽出
          </button>
        </section>

        {activeUrls.length > 0 && (
          <section className="space-y-8">
            {activeUrls.map((url, urlIndex) => {
              const headings = getHeadingsForUrl(url);
              return (
                <div key={urlIndex} className="bg-white rounded-lg shadow-md p-6">
                  <div className="flex justify-between items-center mb-3 pb-2 border-b">
                    <h2 className="text-lg font-semibold text-gray-800">
                      {url}
                    </h2>
                    {headings.length > 0 && (
                      <button
                        onClick={() => copyAllHeadings(url)}
                        className={`px-4 py-2 rounded transition-colors ${
                          copyStatus[url]
                            ? 'bg-green-500 text-white'
                            : 'bg-blue-600 hover:bg-blue-700 text-white'
                        }`}
                      >
                        {copyStatus[url] ? 'コピーしました' : '全見出しをコピー'}
                      </button>
                    )}
                  </div>
                  
                  <div className="space-y-4">
                    {headings.length > 0 ? (
                      headings.map((heading, headingIndex) => (
                        <div 
                          key={`${urlIndex}-${headingIndex}`} 
                          className="p-3 bg-gray-50 rounded border-l-4 border-blue-500 hover:bg-gray-100 transition-colors"
                        >
                          <div>
                            <span className="font-mono text-sm text-blue-600 mr-2">{`<${heading.tag}>`}</span>
                            <span className="text-gray-800">{heading.text}</span>
                          </div>
                        </div>
                      ))
                    ) : (
                      <p className="text-gray-500 italic">見出しが見つかりませんでした</p>
                    )}
                  </div>
                </div>
              );
            })}
          </section>
        )}
      </main>

      <footer className="mt-12 text-center text-gray-500 text-sm">
        <p>© 2025 見出しタグ抽出ツール - Vercel上で動作</p>
      </footer>
    </div>
  );
}
