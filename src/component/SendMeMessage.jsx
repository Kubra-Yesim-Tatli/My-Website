import React from 'react';

const SendMeMessage = () => {
  return (
    <section className="bg-[#F9F9F9] py-16">
      <div className="max-w-4xl mx-auto text-center text-[#4731D3]">
        
        <h2 className="text-4xl font-bold mb-4">Send me a message!</h2>

        
        <p className="text-lg mb-8 text-[#120B39]">
          Got a question or proposal, or just want to say hello? Go ahead.
        </p>

       
        <div className="text-xl mb-8">
          <a href="mailto:kmt@gmail.com" className="text-[#4731D3] underline">
            kmt@gmail.com
          </a>
        </div>

        
        <div className="flex justify-center space-x-6">
          <a
            href="https://twitter.com/yourusername"
            className="text-[#4731D3] hover:text-[#1DA1F2] transition-colors"
          >
            Twitter
          </a>
          <a
            href="https://www.linkedin.com/in/yourusername"
             className="text-[#4731D3] hover:text-[#0077B5] transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/yourusername"
             className="text-[#4731D3] hover:text-[#333] transition-colors"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default SendMeMessage;
