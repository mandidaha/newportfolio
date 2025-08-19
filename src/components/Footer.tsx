
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <div className="mb-6">
            <h3 className="text-2xl font-bold mb-2">Mandira Dahanayake</h3>
            <p className="text-gray-400">UI/UX Designer | Web & App Creator | Frontend Developer | QA Engineer</p>
          </div>
          
          <div className="border-t border-gray-700 pt-6">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Mandira Dahanayake. All rights reserved.
            </p>
            <p className="text-gray-500 text-xs mt-2">
              Crafted with passion and attention to detail
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
