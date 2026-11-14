#!/usr/bin/env python3
"""
Automated Verification Suite for Jovilyn Arbolante Portfolio & GitHub Assets
"""

import os
import re
import json
import urllib.request
import threading
import http.server
import socketserver

ROOT_DIR = "/Users/jovsarbolante/.gemini/antigravity/scratch/jovilyn-portfolio"

def run_tests():
    print("=" * 60)
    print("RUNNING JOVILYN ARBOLANTE PORTFOLIO VERIFICATION SUITE")
    print("=" * 60)

    results = []

    # 1. Check Data Profile JSON
    profile_path = os.path.join(ROOT_DIR, "data", "profile.json")
    if os.path.exists(profile_path):
        with open(profile_path, "r", encoding="utf-8") as f:
            try:
                data = json.load(f)
                name = data["basics"]["name"]
                assert name == "Jovilyn Arbolante"
                assert len(data["portfolioCases"]) == 4
                results.append(("Data Integrity: data/profile.json valid JSON & complete", True))
            except Exception as e:
                results.append((f"Data Integrity: data/profile.json error: {e}", False))
    else:
        results.append(("Data Integrity: data/profile.json exists", False))

    # 2. Check GitHub Bio Character Count Limit (<= 160 chars)
    bio_path = os.path.join(ROOT_DIR, "github", "PROFILE_BIO.txt")
    if os.path.exists(bio_path):
        with open(bio_path, "r", encoding="utf-8") as f:
            bio_text = f.read().strip()
            bio_len = len(bio_text)
            passed = bio_len <= 160
            results.append((f"GitHub Bio: Character count {bio_len}/160", passed))
    else:
        results.append(("GitHub Bio file exists", False))

    # 3. Check GitHub Repo Descriptions Limit (<= 350 chars each)
    repo_desc_path = os.path.join(ROOT_DIR, "github", "REPO_DESCRIPTIONS.md")
    if os.path.exists(repo_desc_path):
        with open(repo_desc_path, "r", encoding="utf-8") as f:
            content = f.read()
            # Match backticked descriptions
            descriptions = re.findall(r'`([^`\n]{20,})`', content)
            all_valid = True
            for desc in descriptions:
                if len(desc) > 350:
                    all_valid = False
            results.append((f"GitHub Repo Descriptions: All {len(descriptions)} items within 350 char limit", all_valid))
    else:
        results.append(("GitHub Repo Descriptions file exists", False))

    # 4. Check HTML Semantic Landmarks & Accessibility
    for html_file in ["index.html", "resume.html"]:
        file_path = os.path.join(ROOT_DIR, html_file)
        if not os.path.exists(file_path):
            results.append((f"HTML Structure: {html_file} exists", False))
            continue
        with open(file_path, "r", encoding="utf-8") as f:
            html = f.read()
            has_skip = 'class="skip-link"' in html
            has_main = '<main' in html and '</main>' in html
            has_nav = '<nav' in html and '</nav>' in html
            has_header = '<header' in html and '</header>' in html
            has_footer = '<footer' in html and '</footer>' in html
            all_landmarks = has_skip and has_main and has_nav and has_header and has_footer
            results.append((f"Accessibility: {html_file} has semantic landmarks (skip, header, nav, main, footer)", all_landmarks))

            # Privacy Check: Verify private phone is NOT published
            has_private_phone = "0945-426-1069" in html
            results.append((f"Privacy: {html_file} correctly omits private phone number", not has_private_phone))

    # 5. Check CSS WCAG Focus Rings & Contrast Tokens
    css_path = os.path.join(ROOT_DIR, "css", "style.css")
    if os.path.exists(css_path):
        with open(css_path, "r", encoding="utf-8") as f:
            css = f.read()
            has_focus_visible = ":focus-visible" in css
            has_reduced_motion = "prefers-reduced-motion" in css
            has_print_styles = "@media print" in css
            results.append(("CSS Accessibility: Visible focus styles (:focus-visible)", has_focus_visible))
            results.append(("CSS Accessibility: prefers-reduced-motion handled", has_reduced_motion))
            results.append(("CSS Utility: Print stylesheet for resume export", has_print_styles))

    # 6. Test Local HTTP Server & Response Status 200
    os.chdir(ROOT_DIR)
    PORT = 8123
    Handler = http.server.SimpleHTTPRequestHandler
    
    server_error = None
    try:
        httpd = socketserver.TCPServer(("", PORT), Handler)
        server_thread = threading.Thread(target=httpd.serve_forever)
        server_thread.daemon = True
        server_thread.start()

        # Test index.html
        req_index = urllib.request.urlopen(f"http://localhost:{PORT}/index.html")
        code_index = req_index.getcode()
        results.append((f"HTTP Server: /index.html served with HTTP {code_index}", code_index == 200))

        # Test resume.html
        req_resume = urllib.request.urlopen(f"http://localhost:{PORT}/resume.html")
        code_resume = req_resume.getcode()
        results.append((f"HTTP Server: /resume.html served with HTTP {code_resume}", code_resume == 200))

        # Test css/style.css
        req_css = urllib.request.urlopen(f"http://localhost:{PORT}/css/style.css")
        code_css = req_css.getcode()
        results.append((f"HTTP Server: /css/style.css served with HTTP {code_css}", code_css == 200))

        # Test js/app.js
        req_js = urllib.request.urlopen(f"http://localhost:{PORT}/js/app.js")
        code_js = req_js.getcode()
        results.append((f"HTTP Server: /js/app.js served with HTTP {code_js}", code_js == 200))

        httpd.shutdown()
        httpd.server_close()
    except Exception as e:
        results.append((f"HTTP Server Verification: Error: {e}", False))

    print("\nVERIFICATION RESULTS:")
    all_passed = True
    for test_name, passed in results:
        status = "PASSED" if passed else "FAILED"
        print(f"[{status}] {test_name}")
        if not passed:
            all_passed = False

    print("=" * 60)
    print(f"OVERALL STATUS: {'ALL TESTS PASSED' if all_passed else 'SOME TESTS FAILED'}")
    print("=" * 60)
    return all_passed

if __name__ == "__main__":
    success = run_tests()
    exit(0 if success else 1)
